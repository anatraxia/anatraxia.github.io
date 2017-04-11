/* global $ */

$(document).ready(function () {
  console.log('DOM loaded')

  // Slick slider init
  $('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrow: true
  })
})
