/*
https://gitlab.com/antora/antora-ui-default/-/merge_requests/126/
Lightbox functionality: a user clicks on an image, and it will open full screen until user closes it again.

Supported functionality:

when lightbox is closed for all images:
 * if the image has a link, the standard behavior for hovering and clicking is unchanged.

when lightbox is closed for standard block image:
 * when hovering over image AND if original size of image is greater than displayed image,
   THEN change mouse pointer to pointer
   (works for both bitmap images the same way as for SVG images)
 * when clicking on image AND if original size of image is greater than displayed image, THEN open lightbox
   (works for both bitmap images the same way as for SVG images)

when lightbox is closed for inlined or interactive SVG image:
 * when hovering over image THEN change mouse pointer to pointer
 * when clicking on image THEN open lightbox

when lightbox is open for all images:
 * when user clicks on close icon, lightbox will close
 * when user presses Escape, lightbox will close
 * when user presses Tab to select the close button and presses Space or Enter, lightbox will close

when lightbox is opened for standard block image:
 * when user clicks enlarged image, lightbox will close

when lightbox is opened for interactive SVG:
 * when user clicks enlarged image AND if the SVG doesn't contain any hyperlinks, lightbox will close
 * when user clicks enlarged image AND if the SVG contain a hyperlinks AND the user clicks outside of a hyperlink,
   nothing happens (the lightbox will stay open)
 * when user clicks enlarged image AND if the SVG contains hyperlinks AND the user clicks on a hyperlink,
   the hyperlinks will work as before

when lightbox is opened for inlined SVG:
 * when user clicks on links included in the SVG, the hyperlinks will work as before
 * when user clicks outside of the links withing the SVG, the lightbox will close

 */

;(function () {
  'use strict'
  var lightbox
  var config = (document.getElementById('site-script') || { dataset: {} }).dataset
  var content

  function init () {
    if (!lightbox) {
      lightbox = document.createElement('div')
      lightbox.setAttribute('aria-modal', 'true')
      lightbox.className = 'modal'
      var closeLink = document.createElement('a')
      // set href to make it selectable with tab / assistive technologies
      closeLink.href = '#'
      closeLink.className = 'close'
      closeLink.setAttribute('title', 'Close lightbox')
      if (config.svgAs === 'svg') {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.setAttribute('class', 'copy-icon')
        var use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
        use.setAttribute('href', window.uiRootPath + '/img/octicons-16.svg#icon-x')
        svg.appendChild(use)
        closeLink.appendChild(svg)
      } else {
        // https://codepen.io/marianab/pen/gOPJOjJ
        let svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="329pt" viewBox="0 0 329.26933 329" width="329pt">
          <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 
          0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 
          128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 
          0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 
          128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 
          6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 
          128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 
          10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>`
        var img = document.createElement('img')
        img.src=  `data:image/svg+xml;utf-8,${svgIcon}`
        img.alt = 'close icon'
        img.className = 'x-icon'
        closeLink.appendChild(img)
      }
      lightbox.appendChild(closeLink)
      content = document.createElement('div')
      content.className = 'content'
      lightbox.appendChild(content)
      var body = document.getElementsByTagName('body')[0]
      body.appendChild(lightbox)
      body.addEventListener('keydown', function (e) {
        if (e.code === 'Escape' && isOpen()) {
          close(e)
        }
      })

      content.addEventListener('click', close)
      closeLink.addEventListener('click', function (e) {
        close(e)
        e.preventDefault()
      })
      closeLink.addEventListener('keydown', function (e) {
        if (e.code === 'Space' || e.code === 'Enter') {
          close(e)
          e.preventDefault()
        }
      })
    }
  }

  function open () {
    lightbox.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }

  function isOpen () {
    return lightbox && lightbox.style.display === 'block'
  }

  function close (e) {
    lightbox.style.display = 'none'
    content.firstChild.remove()
    document.body.style.overflow = ''
    // don't prevent default here, as that will allow links in SVGs to work
  }

  // depending on ratio of source vs target element, make the lightbox content 90% of height or width
  function setImageSize (img, source, target) {
    var ratioSource = source.offsetWidth / source.offsetHeight
    var ratioTarget = target.offsetWidth / target.offsetHeight
    if (ratioSource < ratioTarget) {
      img.style.height = '90vh'
    } else {
      img.style.width = '90vw'
    }
  }
  /* swiper slider img*/
  document.querySelectorAll('.slide img').forEach(function (element) {
    if (element.parentNode.nodeName === 'A') {
      // if parent node is an anchor, keep the anchor instead of opening lightbox
      return
    }
    element.parentNode.className += ' lightbox'
    if (typeof element.parentNode.classList.remove === 'function') {
      element.parentNode.addEventListener('mouseover', function (e) {
        if (element.naturalWidth <= element.offsetWidth && element.naturalHeight <= element.offsetHeight) {
          element.parentNode.classList.remove('lightbox')
        } else {
          element.parentNode.classList.add('lightbox')
        }
      })
    }
    element.style.cursor = 'pointer'
    element.addEventListener('click', function (e) {
      if (element.naturalWidth <= element.offsetWidth && element.naturalHeight <= element.offsetHeight) {
        // don't open lightbox is already shown at 100% or more
        return
      }
      init()
      var img = document.createElement('img')
      img.src = e.currentTarget.src
      img.alt = e.currentTarget.alt
      setImageSize(img, element.parentNode, content.parentNode)
      content.appendChild(img)
      open()
    })
  })

  document.querySelectorAll('.imageblock img').forEach(function (element) {
    if (element.parentNode.nodeName === 'A') {
      // if parent node is an anchor, keep the anchor instead of opening lightbox
      return
    }
    element.parentNode.className += ' lightbox'
    if (typeof element.parentNode.classList.remove === 'function') {
      element.parentNode.addEventListener('mouseover', function (e) {
        if (element.naturalWidth <= element.offsetWidth && element.naturalHeight <= element.offsetHeight) {
          element.parentNode.classList.remove('lightbox')
        } else {
          element.parentNode.classList.add('lightbox')
        }
      })
    }
    element.addEventListener('click', function (e) {
      if (element.naturalWidth <= element.offsetWidth && element.naturalHeight <= element.offsetHeight) {
        // don't open lightbox is already shown at 100% or more
        return
      }
      init()
      var img = document.createElement('img')
      img.src = e.currentTarget.src
      img.alt = e.currentTarget.alt
      setImageSize(img, element.parentNode, content.parentNode)
      content.appendChild(img)
      open()
    })
  })

  document.querySelectorAll('.imageblock object').forEach(function (element) {
    if (element.parentNode.nodeName === 'A') {
      // if parent node is an anchor, keep the anchor instead of opening lightbox
      return
    }
    element.parentNode.className += ' lightbox'
    element.parentNode.addEventListener('click', function (e) {
      init()
      var img = document.createElement('object')
      img.type = element.type
      img.data = element.data
      open()
      setImageSize(img, element, content.parentNode)
      if (element.getSVGDocument() && element.getSVGDocument().querySelectorAll('a').length === 0) {
        // if the SVG doesn't contain any links, allow user to click on image to close the image
        img.style.pointerEvents = 'none'
      }
      content.appendChild(img)
      // prevent links in SVGs to open, as this should only open the lightbox
      e.preventDefault()
    })
  })
  document.querySelectorAll('.imageblock svg').forEach(function (element) {
    if (element.parentNode.nodeName === 'A') {
      // if parent node is an anchor, keep the anchor instead of opening lightbox
      return
    }
    element.parentNode.className += ' lightbox'
    element.parentNode.addEventListener('click', function (e) {
      init()
      var img = element.cloneNode(true)
      open()
      // override height/width from cloned element
      img.style.height = 'auto'
      img.style.width = 'auto'
      // need to select element's parent node, as offsetWidth/offsetHeight not available on SVG
      setImageSize(img, element.parentNode, content.parentNode)
      content.appendChild(img)
      // prevent links in SVGs to open, as this should only open the lightbox
      e.preventDefault()
    })
  })
})()