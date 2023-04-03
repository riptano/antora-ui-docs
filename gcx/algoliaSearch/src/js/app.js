const searchClient = algoliasearch('2ELPRZR9UC', '56e6c1f58016436436c0083463b09c1c');
// Get query param from URL
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');

var indicesArr = []
var algIndex=""
// Get category param from URL, if it's not defined, then use crawler_docs.datastax.com as default
const category = urlParams.get('category');
if (category == null || category == "all") {
    algIndex="crawler_docs.datastax.com"
} else {
    algIndex=category
}

const search = instantsearch({
  indexName: algIndex,
  searchClient,
});


search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: "Search on DataStax Docs",
    autofocus: true,
    text: "Search for products",
    cssClasses:{
        submit: "ais-search-box--magnifier"
    }
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
        item(hit){
            return `
                <div class="hit">
                <div class="hit-content">
                  <div>
                    <div class="hit-name"><a href="${hit.url}" target="_blank">${hit.title}</a></div>
                    <div class="hit-description">
                        ${separateWord(hit._snippetResult.text.value)}
                    </div>
                  </div>
                </div>
                </div>
            `
        }
    },
    transformItems(items) {
        return items.filter(function(item){
            return item.title!="" && item.text!="";
        })
    }
  }),

  instantsearch.widgets.stats({
    container: '#stats',
    templates: {
      text: `
        <span class="ais-Stats-text">
          {{#hasNoResults}}No results{{/hasNoResults}}
          {{#hasOneResult}}1 result{{/hasOneResult}}
          {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} results{{/hasManyResults}}
          found
        </span>
      `,
    },
  }),


  instantsearch.widgets.pagination({
    container: '#pagination',
    
  }),

  instantsearch.widgets.configure({
    hitsPerPage: 10,
    enablePersonalization: true,
    attributesToSnippet: ['text:45'],
    snippetEllipsisText: '…',
    query: query || ""
  }),

  
  
]);

// Create a function that adds a space after every "." or ":", also, separate a word that contains a capital letter after the initial letter if its not an acronym
function separateWord(text) {
  var newText = text.replace(/([.:])/g, '$1 ');
  newText = newText.replace(/([a-z])([A-Z])/g, '$1 $2');
  return newText;
}


function updateIndex() {
  // Get the #categories radio input that is checked, then append the value to the url as a query parameter, also append the query parameter if it exists
  var selectedCategory = document.querySelector('#categories ul li label input[type="radio"]:checked');
  var category = selectedCategory.value;
  var url = window.location.href.split('?')[0] + '?category=' + category;
  // Check ir the .ais-SearchBox-input has a value, if so, append it to the url as a query parameter
  var query_ = document.querySelector('.ais-SearchBox-input').value;
  if (query_) {
    url += '&query=' + query_;
  }

  // Update the url
  window.history.pushState({}, '', url);

  location.reload();
  
}

// Check if the url has a query parameter called category, if so, set the proper radio input to checked
var urlParams_ = new URLSearchParams(window.location.search);
var category_ = urlParams_.get('category');
if (category_ && category_ != 'all') {
  document.querySelector('#categories ul li label input[value="' + category + '"]').checked = true;
}


// Add a click listener to the radio inputs that updates the index
document.querySelectorAll('#categories ul li label input[type="radio"]').forEach(function(radio) {
  radio.addEventListener('click', function() {
    updateIndex();
  });
});

// Add a click listener to #closeFilters that hides the #categories div
document.getElementById('closeFilter').addEventListener('click', function() {
  document.querySelector('.left-panel').classList.add('hidden');
});

// Add a click listener to #openFilters that shows the #categories div
document.getElementById('openFilter').addEventListener('click', function() {
  document.querySelector('.left-panel').classList.remove('hidden');
});


// Add a click listener to the button with id="clearFilters" that clears the selected filters from the search
document.getElementById('clearFilters').addEventListener('click', function() {
  // Clear the url of the query parameters
  var url = window.location.href.split('?')[0];
  window.history.pushState({}, '', url);

  // Store the query value
  var query_ = document.querySelector('.ais-SearchBox-input').value;

  if(query_){
    url += '?query=' + query_;
    window.history.pushState({}, '', url);
  }

  // Clear the radio inputs
  document.querySelector('#categories ul li label input[type="radio"]:checked').checked = false;

  // Reload the page
  location.reload();
});

search.start();

// Add a keyup listener to the search box that updates the URL with the query and category parameters, but dont reload the page
document.querySelector('.ais-SearchBox-input').addEventListener('keyup', function() {
  // Get the value of the search box
  var query_ = document.querySelector('.ais-SearchBox-input').value;

  // Get the #categories radio input that is checked, then append the value to the url as a query parameter, also append the query parameter if it exists
  var selectedCategory = document.querySelector('#categories ul li label input[type="radio"]:checked');
  var category = selectedCategory==null?"all":selectedCategory.value 
  var url = window.location.href.split('?')[0] + '?category=' + category;
  // Check ir the .ais-SearchBox-input has a value, if so, append it to the url as a query parameter
  if (query_) {
    url += '&query=' + query_;
  }

  // Update the url
  window.history.pushState({}, '', url);
});