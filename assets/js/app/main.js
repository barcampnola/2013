$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

// Usage:

// $([
//   '/img/page-2.jpg',
//   '/img/page-3.jpg',
//   '/img/page-2-bear-sprite.png'
// ]).preload();

$(window).load(function() {
  $(".page-current .animated").spritespin("animate", true);

  setTimeout(function() {
    $(".page-loader").fadeOut(1000, function() {
      $(this).remove();
    });
  }, 2000);
})


$(function() {
  $(".loading-message").pawser();

  $(".main-bear").spritespin({
    source      : "/img/page-main-bear-sprite.png",
    width       : 424,
    height      : 550,
    frames      : 21,
    framesX     : 3,
    animate     : false,
    loop        : true,
    module      : "360",
    behavior    : "none"
  });

  $(".about-bear").spritespin({
    source      : "/img/page-about-bear-sprite.png",
    animate     : false,
    width       : 406,
    height      : 500,
    frames      : 30,
    framesX     : 6,
    animate     : false,
    loop        : true,
    module      : "360",
    behavior    : "none"
  });

  $(".schedule-bear").spritespin({
    source      : "/img/page-schedule-bear-sprite.png",
    animate     : false,
    width       : 343,
    height      : 500,
    frames      : 48,
    framesX     : 8,
    animate     : false,
    loop        : true,
    module      : "360",
    behavior    : "none"
  });

  $(".register-bear").spritespin({
    source      : "/img/page-register-bear-sprite.png",
    animate     : false,
    width       : 448,
    height      : 550,
    frames      : 54,
    framesX     : 6,
    animate     : false,
    loop        : true,
    module      : "360",
    behavior    : "none"
  });

  $(".sponsors-bear").spritespin({
    source      : "/img/page-sponsors-bear-sprite.png",
    animate     : false,
    width       : 507,
    height      : 450,
    frames      : 24,
    framesX     : 6,
    loop        : true,
    animate     : false,
    module      : "360",
    behavior    : "none"
  });

  $("[data-page]").shifter();


  $('[data-slider]').unslider();


  $("[data-page-change]").click(function(e) {
    e.preventDefault();

    toPage = $(this).attr("data-page-change");

    $(".page-current .animated").spritespin("animate", false);

    Shifter.navigate(toPage, "moveToLeft", function() {
      $(".page-" + toPage + " .animated").spritespin("animate", true);
    });
  });
});


