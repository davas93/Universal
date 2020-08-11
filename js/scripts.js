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
