/*Dark theme verification*/
var theme = window.localStorage.getItem('theme')
window.addEventListener('DOMContentLoaded', (event) => {
  var path = window.location.pathname
  var page = path.split('/').pop()
  var name = page.replace('.html', '')
  console.log(name)
  const sidebar = document.querySelector('.sidebar')
  const col = document.getElementById('collapse')
  var checkbox = document.getElementById('switch')
  var root = document.getElementsByTagName('html')[0]
  if (theme) {
    root.classList.add('dark-mode')
    checkbox.checked = true
  } else {
    checkbox.checked = false
  }

  if (name === 'landing') {
    col.checked = true
    sidebar.classList.add('small-container')
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
  if (event.target.checked) {
    sidebar.classList.add('small-container')
  } else {
    sidebar.classList.remove('small-container')
  }
})
