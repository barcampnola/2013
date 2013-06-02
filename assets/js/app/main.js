$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

// Usage:

$([
  '/img/page-2.jpg',
  '/img/page-3.jpg',
  '/img/page-2-bear-sprite.png'
]).preload();



$(function() {
  $("[data-click~='next-page']").click(function(e) {
    e.preventDefault();

    PageTransitions.nextPage(1);
  });

  $("[data-click~='previous-page']").click(function(e) {
    e.preventDefault();

    PageTransitions.nextPage(2);
  });
});



$(".page-1-bear").spritespin({
  source      : "/img/page-1-bear-sprite.png",
  width       : 475,
  height      : 600,
  frames      : 29,
  framesX     : 6,
  loop        : true,
  module      : "360",
  behavior    : "none"
});

$(".page-2-bear").spritespin({
  source      : "/img/page-2-bear-sprite.png",
  width       : 406,
  height      : 500,
  frames      : 30,
  framesX     : 6,
  loop        : true,
  module      : "360",
  behavior    : "none"
});

$(".page-3-bear").spritespin({
  source      : "/img/page-3-bear-sprite.png",
  width       : 343,
  height      : 500,
  frames      : 48,
  framesX     : 8,
  loop        : true,
  module      : "360",
  behavior    : "none"
});

$(".page-4-bear").spritespin({
  source      : "/img/page-4-bear-sprite.png",
  width       : 448,
  height      : 550,
  frames      : 54,
  framesX     : 6,
  loop        : true,
  module      : "360",
  behavior    : "none"
});