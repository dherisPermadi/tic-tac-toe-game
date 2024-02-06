$(window).on("load", function (e) {
  console.log('test');
  $(".loaded").fadeOut();
  $(".preloader").fadeOut("1000", "linear");
});
