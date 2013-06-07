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



$(function() {
  $("[data-page-change]").click(function(e) {
    e.preventDefault();

    toPage = $(this).attr("data-page-change");

    $(".animated").spritespin("animate", false);

    Shifter.navigate(toPage, "moveToLeft", function() {
      $(".page-" + toPage + " .animated").spritespin("animate", true);
    });
  });
});



$(".page-main-bear").spritespin({
  source      : "/img/page-main-bear-sprite.png",
  width       : 475,
  height      : 600,
  frames      : 29,
  framesX     : 6,
  loop        : true,
  module      : "360",
  behavior    : "none"
});

$(".page-about-bear").spritespin({
  source      : "/img/page-about-bear-sprite.png",
  animate     : false,
  width       : 406,
  height      : 500,
  frames      : 30,
  framesX     : 6,
  loop        : true,
  module      : "360",
  behavior    : "none"
});

$(".page-schedule-bear").spritespin({
  source      : "/img/page-schedule-bear-sprite.png",
  animate     : false,
  width       : 343,
  height      : 500,
  frames      : 48,
  framesX     : 8,
  loop        : true,
  module      : "360",
  behavior    : "none"
});

$(".page-register-bear").spritespin({
  source      : "/img/page-register-bear-sprite.png",
  animate     : false,
  width       : 448,
  height      : 550,
  frames      : 54,
  framesX     : 6,
  loop        : true,
  module      : "360",
  behavior    : "none"
});

$(".page-sponsors-bear").spritespin({
  source      : "/img/page-sponsors-bear-sprite.png",
  animate     : false,
  width       : 507,
  height      : 450,
  frames      : 24,
  framesX     : 6,
  loop        : true,
  module      : "360",
  behavior    : "none"
});

shifter = $("[data-page]").shifter();


$(function() {
  $('.sponsors').unslider({
    delay: false
  });
});