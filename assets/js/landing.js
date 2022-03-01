$(function () {
  $(".toggler").on("click", function () {
    $(".side_nav").slideToggle(500);
  });
});

$(".carousel").carousel({
  interval: 2000,
});
