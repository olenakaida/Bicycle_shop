function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

//slider
$(document).ready(function () {
  $(".slider__body").slick({
    dots: true,
    arrows: false,
    accessibility: false,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {},
      },
    ],
  });
});

//burger-menu
$(document).ready(function () {
  $(".icon-menu").click(function (e) {
    $(this).toggleClass("active");
    $(".menu__body").toggleClass("active");
    e.preventDefault();
  });
});
