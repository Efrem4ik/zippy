$(".header__slider").slick({
  dots: true,
  arrows: false
});

$(".video-slider__items").slick({
  dots: false,
  arrows: false,
  centerMode: true,
  variableWidth: true,
  slidesToShow: 1
});

$('.life-team__big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
});
$('.life-team__small').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.life-team__big',
  centerMode: true,
  focusOnSelect: true,
});