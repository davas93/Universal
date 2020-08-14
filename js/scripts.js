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
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Изменение цвета закладки
$(".article-head__bookmark").on("click", function () {
  $(this).toggleClass("article-head__bookmark--active");
});

//Cлайдер статьи
var swiper = new Swiper(".article-slider__sliders", {
  loop: true,
  navigation: {
    nextEl: ".article-slider__button-next",
    prevEl: ".article-slider__button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

//раскрытие скрытых блоков
$(".comments__button-more").click(function () {
  $(".comments__button-more-icon").toggleClass(
    "comments__button-more-icon--active"
  );
  $(".comments__message:nth-child(n+5)").slideToggle(1000);
});

const btn = document.querySelector(".comments__button-more > span");
var button = document.querySelector(".comments__button-more");
button.addEventListener("click", function () {
  btn.innerHTML =
    btn.innerHTML === "Load more"
      ? (btn.innerHTML = "Hide")
      : (btn.innerHTML = "Load more");
});
