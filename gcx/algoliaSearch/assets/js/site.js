!function(){"use strict";var e,o,r,s=/^sect(\d)$/,i=document.querySelector(".nav-container"),a=document.querySelector(".nav-toggle"),c=i.querySelector(".nav"),l=(a.addEventListener("click",function(e){if(a.classList.contains("is-active"))return u(e);v(e);var e=document.documentElement,t=(e.classList.add("is-clipped--nav"),a.classList.add("is-active"),i.classList.add("is-active"),c.getBoundingClientRect()),n=window.innerHeight-Math.round(t.top);Math.round(t.height)!==n&&(c.style.height=n+"px");e.addEventListener("click",u)}),i.addEventListener("click",v),i.querySelector("[data-panel=menu]"));function t(){var e,t,n=window.location.hash;if(n&&(n.indexOf("%")&&(n=decodeURIComponent(n)),!(e=l.querySelector('.nav-link[href="'+n+'"]')))){n=document.getElementById(n.slice(1));if(n)for(var i=n,a=document.querySelector("article.doc");(i=i.parentNode)&&i!==a;){var c=i.id;if((c=c||(c=s.test(i.className))&&(i.firstElementChild||{}).id)&&(e=l.querySelector('.nav-link[href="#'+c+'"]')))break}}if(e)t=e.parentNode;else{if(!r)return;e=(t=r).querySelector(".nav-link")}t!==o&&(h(l,".nav-item.is-active").forEach(function(e){e.classList.remove("is-active","is-current-path","is-current-page")}),t.classList.add("is-current-page"),d(o=t),p(l,e))}function d(e){for(var t,n=e.parentNode;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}function n(){var e,t,n,i;this.classList.toggle("is-active")&&(e=parseFloat(window.getComputedStyle(this).marginTop),t=this.getBoundingClientRect(),n=l.getBoundingClientRect(),0<(i=(t.bottom-n.top-n.height+e).toFixed()))&&(l.scrollTop+=Math.min((t.top-n.top-e).toFixed(),i))}function u(e){v(e);e=document.documentElement;e.classList.remove("is-clipped--nav"),a.classList.remove("is-active"),i.classList.remove("is-active"),e.removeEventListener("click",u)}function v(e){e.stopPropagation()}function p(e,t){var n=e.getBoundingClientRect(),i=n.height,a=window.getComputedStyle(c);"sticky"===a.position&&(i-=n.top-parseFloat(a.top)),e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-i)+t.offsetTop)}function h(e,t){return[].slice.call(e.querySelectorAll(t))}l&&(e=i.querySelector("[data-panel=explore]"),o=l.querySelector(".is-current-page"),(r=o)?(d(o),p(l,o.querySelector(".nav-link"))):l.scrollTop=0,h(l,".nav-item-toggle").forEach(function(e){var t=e.parentElement,e=(e.addEventListener("click",n.bind(t)),function(e,t){e=e.nextElementSibling;return(!e||!t||e[e.matches?"matches":"msMatchesSelector"](t))&&e}(e,".nav-text"));e&&(e.style.cursor="pointer",e.addEventListener("click",n.bind(t)))}),e&&e.querySelector(".context").addEventListener("click",function(){h(c,"[data-panel]").forEach(function(e){e.classList.toggle("is-active")})}),l.addEventListener("mousedown",function(e){1<e.detail&&e.preventDefault()}),l.querySelector('.nav-link[href^="#"]'))&&(window.location.hash&&t(),window.addEventListener("hashchange",t))}();
!function(){"use strict";var e=document.querySelector("aside.toc.sidebar");if(e){if(document.querySelector("body.-toc"))return e.parentNode.removeChild(e);var t=parseInt(e.dataset.levels||2,10);if(!(t<0)){for(var o="article.doc",d=document.querySelector(o),n=[],i=0;i<=t;i++){var r=[o];if(i){for(var c=1;c<=i;c++)r.push((2===c?".sectionbody>":"")+".sect"+c);r.push("h"+(i+1)+"[id]")}else r.push("h1[id].sect0");n.push(r.join(">"))}m=n.join(","),f=d.parentNode;var a,s=[].slice.call((f||document).querySelectorAll(m));if(!s.length)return e.parentNode.removeChild(e);var l={},u=s.reduce(function(e,t){var o=document.createElement("a"),n=(o.textContent=t.textContent,l[o.href="#"+t.id]=o,document.createElement("li"));return n.dataset.level=parseInt(t.nodeName.slice(1),10)-1,n.appendChild(o),e.appendChild(n),e},document.createElement("ul")),f=e.querySelector(".toc-menu"),m=(f||((f=document.createElement("div")).className="toc-menu"),document.createElement("h3")),e=(m.textContent=e.dataset.title||"Contents",f.appendChild(m),f.appendChild(u),!document.getElementById("toc")&&d.querySelector("h1.page ~ :not(.is-before-toc)"));e&&((m=document.createElement("aside")).className="toc embedded",m.appendChild(f.cloneNode(!0)),e.parentNode.insertBefore(m,e)),window.addEventListener("load",function(){p(),window.addEventListener("scroll",p)})}}function p(){var n,i,t,e=window.pageYOffset,o=1.15*h(document.documentElement,"fontSize"),r=d.offsetTop;e&&window.innerHeight+e+2>=document.documentElement.scrollHeight?(a=Array.isArray(a)?a:Array(a||0),n=[],i=s.length-1,s.forEach(function(e,t){var o="#"+e.id;t===i||e.getBoundingClientRect().top+h(e,"paddingTop")>r?(n.push(o),a.indexOf(o)<0&&l[o].classList.add("is-active")):~a.indexOf(o)&&l[a.shift()].classList.remove("is-active")}),u.scrollTop=u.scrollHeight-u.offsetHeight,a=1<n.length?n:n[0]):(Array.isArray(a)&&(a.forEach(function(e){l[e].classList.remove("is-active")}),a=void 0),s.some(function(e){if(e.getBoundingClientRect().top+h(e,"paddingTop")-o>r)return!0;t="#"+e.id}),t?t!==a&&(a&&l[a].classList.remove("is-active"),(e=l[t]).classList.add("is-active"),u.scrollHeight>u.offsetHeight&&(u.scrollTop=Math.max(0,e.offsetTop+e.offsetHeight-u.offsetHeight)),a=t):a&&(l[a].classList.remove("is-active"),a=void 0))}function h(e,t){return parseFloat(window.getComputedStyle(e)[t])}}();
!function(){"use strict";function o(e){return e&&(~e.indexOf("%")?decodeURIComponent(e):e).slice(1)}function i(e){if(e){if(e.altKey||e.ctrlKey)return;window.location.hash="#"+this.id,e.preventDefault()}e=document.getElementById("#"+this.id);e&&e.scrollIntoView({block:"start",behavior:"smooth"})}window.addEventListener("load",function e(t){var n;(n=o(window.location.hash))&&(n=document.getElementById(n))&&(i.bind(n)(),setTimeout(i.bind(n),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t;(t=o(e.hash))&&(t=document.getElementById(t))&&e.addEventListener("click",i.bind(t))})}();
!function(){"use strict";var t,e=document.querySelector(".page-versions .version-menu-toggle");e&&(t=document.querySelector(".page-versions"),e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")}))}();
!function(){"use strict";var t=document.querySelector(".navbar-burger");t&&t.addEventListener("click",function(t){t.stopPropagation(),document.documentElement.classList.toggle("is-clipped--navbar"),this.classList.toggle("is-active");t=document.getElementById(this.dataset.target);{var e;t.classList.toggle("is-active")&&(t.style.maxHeight="",e=window.innerHeight-Math.round(t.getBoundingClientRect().top),parseInt(window.getComputedStyle(t).maxHeight,10)!==e)&&(t.style.maxHeight=e+"px")}}.bind(t))}();
!function(){"use strict";var o=/^\$ (\S[^\\\n]*(\\\n(?!\$ )[^\\\n]*)*)(?=\n|$)/gm,s=/( ) *\\\n *|\\\n( ?) */g,l=/ +$/gm,e=(document.getElementById("site-script")||{dataset:{}}).dataset,d=null==e.uiRootPath?".":e.uiRootPath,r=e.svgAs,p=window.navigator.clipboard;[].slice.call(document.querySelectorAll(".doc pre.highlight, .doc .literalblock pre")).forEach(function(e){var t,n,a,c;if(e.classList.contains("highlight"))(i=(t=e.querySelector("code")).dataset.lang)&&"console"!==i&&((a=document.createElement("span")).className="source-lang",a.appendChild(document.createTextNode(i)));else{if(!e.innerText.startsWith("$ "))return;var i=e.parentNode.parentNode;i.classList.remove("literalblock"),i.classList.add("listingblock"),e.classList.add("highlightjs","highlight"),(t=document.createElement("code")).className="language-console hljs",t.dataset.lang="console",t.appendChild(e.firstChild),e.appendChild(t)}(i=document.createElement("div")).className="source-toolbox",a&&i.appendChild(a),p&&((n=document.createElement("button")).className="copy-button",n.setAttribute("title","Copy to clipboard"),"svg"===r?((a=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("class","copy-icon"),(c=document.createElementNS("http://www.w3.org/2000/svg","use")).setAttribute("href",d+"/img/octicons-16.svg#icon-clippy"),a.appendChild(c),n.appendChild(a)):((c=document.createElement("img")).src=d+"/img/octicons-16.svg#view-clippy",c.alt="copy icon",c.className="copy-icon",n.appendChild(c)),(a=document.createElement("span")).className="copy-toast",a.appendChild(document.createTextNode("Copied!")),n.appendChild(a),i.appendChild(n)),e.parentNode.appendChild(i),n&&n.addEventListener("click",function(e){var t=e.innerText.replace(l,"");"console"===e.dataset.lang&&t.startsWith("$ ")&&(t=function(e){var t,n=[];for(;t=o.exec(e);)n.push(t[1].replace(s,"$1$2"));return n.join(" && ")}(t));window.navigator.clipboard.writeText(t).then(function(){this.classList.add("clicked"),this.offsetHeight,this.classList.remove("clicked")}.bind(this),function(){})}.bind(n,t))})}();
;(function () {
  'use strict'

  var hash = window.location.hash
  find('.tabset').forEach(function (tabset) {
    var active
    var tabs = tabset.querySelector('.tabs')
    if (tabs) {
      var first
      find('li', tabs).forEach(function (tab, idx) {
        var id = (tab.querySelector('a[id]') || tab).id
        if (!id) return
        var pane = getPane(id, tabset)
        if (!idx) first = { tab: tab, pane: pane }
        if (!active && hash === '#' + id && (active = true)) {
          tab.classList.add('is-active')
          if (pane) pane.classList.add('is-active')
        } else if (!idx) {
          tab.classList.remove('is-active')
          if (pane) pane.classList.remove('is-active')
        }
        tab.addEventListener('click', activateTab.bind({ tabset: tabset, tab: tab, pane: pane }))
      })
      if (!active && first) {
        first.tab.classList.add('is-active')
        if (first.pane) first.pane.classList.add('is-active')
      }
    }
    tabset.classList.remove('is-loading')
  })

  function activateTab (e) {
    var tab = this.tab
    var pane = this.pane
    find('.tabs li, .tab-pane', this.tabset).forEach(function (it) {
      it === tab || it === pane ? it.classList.add('is-active') : it.classList.remove('is-active')
    })
    e.preventDefault()
  }

  function find (selector, from) {
    return Array.prototype.slice.call((from || document).querySelectorAll(selector))
  }

  function getPane (id, tabset) {
    return find('.tab-pane', tabset).find(function (it) {
      return it.getAttribute('aria-labelledby') === id
    })
  }
})()

;
(function () {
  'use strict'

  var CMD_RX = /^\$ (\S[^\\\n]*(\\\n(?!\$ )[^\\\n]*)*)(?=\n|$)/gm
  var LINE_CONTINUATION_RX = /( ) *\\\n *|\\\n( ?) */g
  var TRAILING_SPACE_RX = / +$/gm
    //var config = (document.getElementById('site-script') || { dataset: {} }).dataset

    ;
  [].slice.call(document.querySelectorAll('.doc pre.highlight, .doc .literalblock pre')).forEach(function (pre) {
    var code, language, lang, copy, toast, toolbox
    if (pre.classList.contains('highlight')) {
      code = pre.querySelector('code')
      if ((language = code.dataset.lang) && language !== 'console') {
        ;
        (lang = document.createElement('span')).className = 'source-lang'
        lang.appendChild(document.createTextNode(language))
      }
    } else if (pre.innerText.startsWith('$ ')) {
      var block = pre.parentNode.parentNode
      block.classList.remove('literalblock')
      block.classList.add('listingblock')
      pre.classList.add('highlightjs', 'highlight');
      (code = document.createElement('code')).className = 'language-console hljs'
      code.dataset.lang = 'console'
      code.appendChild(pre.firstChild)
      pre.appendChild(code)
    } else {
      return
    };
    (toolbox = document.createElement('div')).className = 'source-toolbox'
    if (lang) toolbox.appendChild(lang)
    if (window.navigator.clipboard) {
      ;
      (copy = document.createElement('button')).className = 'copy-button'
      copy.setAttribute('title', 'Copy to clipboard')
      var img = document.createElement('div')
      img.className = 'copy-icon'
      copy.appendChild(img);
      (toast = document.createElement('span')).className = 'copy-toast'
      toast.appendChild(document.createTextNode('Copied!'))
      copy.appendChild(toast)
      toolbox.appendChild(copy)
    }
    pre.appendChild(toolbox)
    if (copy) img.addEventListener('click', writeToClipboard.bind(copy, code))
  })

  function extractCommands (text) {
    var cmds = []
    var m
    while ((m = CMD_RX.exec(text))) cmds.push(m[1].replace(LINE_CONTINUATION_RX, '$1$2'))
    return cmds.join(' && ')
  }

  function writeToClipboard (code) {
    var text = code.innerText.replace(TRAILING_SPACE_RX, '')
    if (code.dataset.lang === 'console' && text.startsWith('$ ')) text = extractCommands(text)
    window.navigator.clipboard.writeText(text).then(
      function () {
        this.classList.add('clicked')
        this.offsetHeight // eslint-disable-line no-unused-expressions
        this.classList.remove('clicked')
      }.bind(this),
      function () {}
    )
  }
})()

/*Dark theme verification*/

function isMobile () {
  // eslint-disable-next-line no-undef
  if (sessionStorage.desktop) return false
  // eslint-disable-next-line no-undef
  else if (localStorage.mobile) return true
  // eslint-disable-next-line max-len
  var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile']
  for (var i in mobile) { if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true }
  return false
}

window.addEventListener('DOMContentLoaded', (event) => {
  var theme = window.localStorage.getItem('theme')

  var path = window.location.pathname
  var page = path.split('/').pop()
  var name = page.replace('.html', '')
  console.log(name)
  const sidebar = document.querySelector('.sidebar')
  const col = document.getElementById('collapse')
  var checkbox = document.getElementById('switch')
  if (theme) {
    checkbox.checked = true
  } else {
    checkbox.checked = false
  }

  if (name === 'landing' && !isMobile()) {
    col.checked = true
    sidebar.classList.add('small-container')
  }

  var elements = document.body.getElementsByTagName('pre')
  for (var i = 0; i < elements.length; i++) {
    for (const child of elements[i].children) {
      if (child.tagName === 'CODE') {
        elements[i].classList.add('has-code')
      }
    }
  }

  document.addEventListener('click', function (event) {
    //No es un clic en el sidebar
    //if (!event.target.matches('li[data-depth="1"]') && !event.target.matches('.switch')) return;
    /*    if (event.target.closest('li.nav-item.toggler')) {
                      console.log(event.target)
                      event.target.closest('li.nav-item.toggler').classList.toggle('is-active')
                    }
                    /*if ((event.target.matches('span.nav-text') ||
                                event.target.matches('button.nav-item-toggle')) &&
                            (event.target.offsetParent.matches('li[data-depth="1"]') ||
                                event.target.offsetParent.matches('li[data-depth="0"]'))) {
                            event.target.offsetParent.classList.toggle('is-active');
                        }
                        if (event.target.matches('li[data-depth="1"]') ||
                            event.target.matches('li[data-depth="0"]')) {
                            event.target.classList.toggle('is-active');
                        }*/
    if (event.target.matches('.switch')) {
      var root = document.getElementsByTagName('html')[0]
      if (event.target.checked) {
        window.localStorage.setItem('theme', 'dark')
        root.classList.add('dark-mode')
      } else {
        window.localStorage.removeItem('theme')
        root.classList.remove('dark-mode')
      }
    }
  }, false)
})

document.querySelector('#collapse').addEventListener('click', function (event) {
  const sidebar = document.querySelector('.sidebar')
  if (!isMobile()) {
    if (event.target.checked) {
      sidebar.classList.add('small-container')
    } else {
      sidebar.classList.remove('small-container')
    }
  }
})

document.querySelectorAll(`li.nav-item.toggler[data-depth="1"]>.nav-item-toggle,
li.nav-item.toggler[data-depth="2"]>.nav-item-toggle,
li.nav-item.toggler[data-depth="3"]>.nav-item-toggle,
li.nav-item.toggler[data-depth="4"]>.nav-item-toggle`).forEach(function (btn) {
  btn.addEventListener('mouseover', (event) => {
    var theme = document.querySelector('html').classList.contains('dark-mode')
    if (theme) {
      btn.previousElementSibling.style.backgroundColor = 'var(--color-purple-secondary-dark)'
    } else {
      btn.previousElementSibling.style.backgroundColor = 'var(--color-purple-secondary-light)'
      btn.previousElementSibling.style.color = 'var(--color-interface-night-900)'
    }
  })
  btn.addEventListener('mouseout', (event) => {
    btn.previousElementSibling.style.backgroundColor = ''
    btn.previousElementSibling.style.color = ''
  })
})


document.querySelector(".nav-controls button#expand").addEventListener("click", function (event) {
  document.querySelectorAll("li.nav-item.toggler").forEach(function (item) {
    item.classList.add("is-active");
  })
})

document.querySelector(".nav-controls button#collapse").addEventListener("click", function (event) {
  document.querySelectorAll("li.nav-item.toggler").forEach(function (item) {
    item.classList.remove("is-active");
  })
})

