$(document).ready(function() {
  $('.bg-switcher').bgSwitcher({
    images: ['../images/background1.jpg', '../images/background2.jpg', '../images/background3.jpg', '../images/background4.jpg', '../images/background5.jpg'],
    interval: 4000,
    loop: true
  })

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

  $('.slider').slick({
      autoplay: false,
      slidesToShow: 4,
      infinite: true,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      centerPadding: '0',
      responsive: [
      {
        breakpoint: 480, // 399px以下のサイズに適用
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    });
});