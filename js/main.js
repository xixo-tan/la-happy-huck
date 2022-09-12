$(document).ready(function() {
  $('.bg-switcher').bgSwitcher({
    images: ['../images/background1.jpg', '../images/background2.jpg', '../images/background3.jpg', '../images/background4.jpg', '../images/background5.jpg'],
    interval: 4000,
    loop: true
  })

  // $(window).scroll(function () {
  //   var windowHeight = $(window).height();
  //   var targetElement = $('.fadein').offset().top;
  //   var scroll = $(window).scrollTop();
  //   if (scroll > targetElement) {
  //     $('.fadein').css('opacity', '1');
  //   }
  // });

  $('.fuwat').css('visibility','hidden');
  $(window).scroll(function(){
    var windowHeight = $(window).height();
    var topWindow = $(window).scrollTop();
    $('.fuwat').each(function () {
    var objectPosition = $(this).offset().top;
      if (topWindow > objectPosition - windowHeight + 200) {
        $(this).addClass("fuwatAnime");
      }
    });
  });

  var windowWidth = $(window).width();
  if (windowWidth > 480) {
    $('.slider').slick({
      autoplay: false,
      slidesToShow: 4,
      infinite: true,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      centerPadding: '0',
    });
  } else {
    $('.slider').slick({
      autoplay: false,
      slidesToShow: 1,
      infinite: true,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      centerPadding: '0',
    });
  }
});