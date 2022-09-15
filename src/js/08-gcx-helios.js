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
