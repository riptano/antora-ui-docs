/*Dark theme verification*/
function getTheme () {
  var localStorage = window.localStorage.getItem('theme')
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (localStorage) return localStorage
  if (prefersDark) return 'dark'
  return 'light'
}

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
  var theme = getTheme()

  var path = window.location.pathname
  var page = path.split('/').pop()
  var name = page.replace('.html', '')
  const sidebar = document.querySelector('.sidebar')
  const col = document.getElementById('collapse')
  var checkbox = document.getElementById('switch')
  if (theme === 'dark') {
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
        window.localStorage.setItem('theme', 'light')
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

document.querySelectorAll(`.nav-item>span.nav-text+.nav-item-toggle`).forEach(function (btn) {
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

document.querySelectorAll(".nav-item> span.nav-text").forEach(function (item) {
  item.addEventListener("click", function (event) {
    item.parentElement.classList.toggle("is-active");
  })
})

var heroBlock = document.querySelector('.dsHeroBlock')

if (heroBlock) {
  var heroTitle = document.querySelector('.paragraph.hero.title p')
  var heroContent = document.querySelector('.paragraph.hero.content p')

  document.querySelector('.dsHeroBlock').remove()

  var target = document.querySelector('main.article')
  target.insertBefore(heroBlock, target.children[1])

  var heroHTML = `<div class="dsHeroContent">
    <div class="dsHeroTitle">
      <h1> ${heroTitle.innerHTML} </h1>
    </div>
    <div class="dsHeroDescription">
      <p> ${heroContent.innerHTML} </p>
    </div>
  </div>`
  /* fallback for firefox :has pseudo-class */
  document.querySelector('.dsHeroBlock').innerHTML = heroHTML
  document.querySelector('.toolbar').classList.add('with-hero')
  document.querySelector('h1.page').style.display = 'none'
}


let sliderBlock = document.querySelectorAll('.swiper')
sliderBlock.forEach( (s,i) => {
  s.firstElementChild.className = 'swiper-wrapper'
  let prev = document.createElement('div'),
    next = document.createElement('div'),
    restart = document.createElement('div'),
    buttons = document.createElement('div')
  buttons.className = 'swiper-button-wrapper'
  prev.className = 'swiper-button-prev'
  next.className = 'swiper-button-next'
  restart.className = 'swiper-button-restart'
  buttons.appendChild(prev)
  buttons.appendChild(next)
  buttons.appendChild(restart)
  s.appendChild(buttons)
  s.classList.add('slider-'+i)
  const swiper = new Swiper('.swiper.slider-'+i, {
    // Optional parameters
    direction: 'horizontal',
    allowTouchMove: false,
    //touchStartPreventDefault: false,
    watchSlidesProgress: true,
    loop: false,
    effect: 'fade',
    slideClass: 'slide',
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  restart.addEventListener('click', resetSlider)
  function resetSlider() {
    swiper.slideTo(0)
  }
})

