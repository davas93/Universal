//Отложенная загрузка картинок
window.onload = () => {
  var imgDefer = document.getElementsByTagName("img");
  for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute("data-src")) {
      imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
    }
  }
};

//Мобильное меню
$(".menu-button").on("click", function () {
  $(".navbar-bottom").toggleClass("navbar-bottom--active");
});
$(".navbar-menu__item").on("click", function () {
  $(".navbar-bottom").removeClass("navbar-bottom--active");
});

//Вызов модального окна с видео
$(".play__button").on("click", function () {
  $("#youtube-1").attr("src", "https://www.youtube.com/embed/rx783h43B_Q");
  $("#youtube-2").attr("src", "https://www.youtube.com/embed/xRsbaH_uXo0");
  $(".modal-video").addClass("modal-video--active");
  $(".overlay").addClass("overlay--active");
});
$(".close-button").on("click", function () {
  $("#youtube-1").attr("src", null);
  $("#youtube-2").attr("src", null);
  $(".modal-video").removeClass("modal-video--active");
  $(".overlay").removeClass("overlay--active");
});

//Табы
(function ($) {
  $(function () {
    $(".recommended").on(
      "click",
      ".recommended-item:not(.recommended-item--active)",
      function () {
        $(this)
          .addClass("recommended-item--active")
          .siblings()
          .removeClass("recommended-item--active")
          .closest(".main-article-wrapper")
          .find(".article")
          .removeClass("article--active")
          .eq($(this).index())
          .addClass("article--active");
      }
    );
  });
})(jQuery);

//Нумерация рекомедованых статей
$(function () {
  var $num = $(".recommended-sidebar__item-num"),
    number = $num.length,
    i = 0;
  while (i < number) {
    $num.eq(i).text(++i);
  }
});

//Изменение цвета закладки
$(".feature-articles__item-bookmark").on("click", function () {
  $(this).toggleClass("feature-articles__item-bookmark--active");
});

//слайдер
var swiper = new Swiper(".hot-articles__swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
