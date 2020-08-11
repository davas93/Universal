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
  $("#youtube").attr("src", "https://www.youtube.com/embed/rx783h43B_Q");
  $(".modal-video").addClass("modal-video--active");
  $(".overlay").addClass("overlay--active");
});
$(".close-button").on("click", function () {
  $("#youtube").attr("src", null);
  $(".modal-video").removeClass("modal-video--active");
  $(".overlay").removeClass("overlay--active");
});
