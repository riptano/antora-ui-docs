;
(function () {
  'use strict'

  /*Dark theme verification*/
  var theme = window.localStorage.getItem('theme')
  window.addEventListener('DOMContentLoaded', (event) => {
    var checkbox = document.getElementById('switch')
    var root = document.getElementsByTagName('html')[0]
    if (theme) {
      root.classList.add('dark-mode')
      checkbox.checked = true
    } else {
      checkbox.checked = false
    }

    document.addEventListener('click', function (event) {
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

      if (event.target.matches('.collapse')) {
        const sidebar = document.querySelector('.sidebar')
        if (event.target.checked) {
          sidebar.classList.add('small-container')
        } else {
          sidebar.classList.remove('small-container')
        }
      }
    }, false)
  })
})()

document.querySelector('.nav-item.toggler').addEventListener('click', function (event) {
  if (!event.target.matches('li[data-depth="1"]') && !event.target.matches('.switch')) return
  if (event.target.matches('li[data-depth="1"]')) { event.target.classList.toggle('is-active') }
})

document.querySelector('#collapse').addEventListener('click', function (event) {
  const sidebar = document.querySelector('.sidebar')
  if (event.target.checked) {
    sidebar.classList.add('small-container')
  } else {
    sidebar.classList.remove('small-container')
  }
})
