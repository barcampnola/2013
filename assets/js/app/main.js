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

  $(".main-bear").spritespin({
    source      : "/img/page-main-bear-sprite.png",
    width       : 424,
    height      : 550,
    frames      : 21,
    framesX     : 3,
    loop        : true,
    module      : "360",
    behavior    : "none"
  });

  $(".about-bear").spritespin({
    source      : "/img/page-about-bear-sprite.png",
    width       : 406,
    height      : 500,
    frames      : 30,
    framesX     : 6,
    loop        : true,
    module      : "360",
    behavior    : "none"
  });

  $(".schedule-bear").spritespin({
    source      : "/img/page-schedule-bear-sprite.png",
    width       : 343,
    height      : 500,
    frames      : 48,
    framesX     : 8,
    loop        : true,
    module      : "360",
    behavior    : "none"
  });

  $(".register-bear").spritespin({
    source      : "/img/page-register-bear-sprite.png",
    width       : 448,
    height      : 550,
    frames      : 54,
    framesX     : 6,
    loop        : true,
    module      : "360",
    behavior    : "none"
  });

  $(".sponsors-bear").spritespin({
    source      : "/img/page-sponsors-bear-sprite.png",
    width       : 507,
    height      : 450,
    frames      : 24,
    framesX     : 6,
    loop        : true,
    module      : "360",
    behavior    : "none"
  });

  $("[data-slider='about']").unslider({'dots': true});

  $("[data-slider='sponsors']").unslider();

  $("[data-page-change]").click(function(e) {
    e.preventDefault();
    var page = this.hash,
        target = $(page);

    $('html, body').stop().animate({
        'scrollTop': target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = page;
    });



    pageLink = $(this).addClass('current');
    pageLink.siblings().removeClass('current');

    toPage = pageLink.attr("data-page-change");

    // $(".animated").spritespin("animate", false);

    // Shifter.navigate(toPage, "moveToLeft", function() {
    //   $(".page-" + toPage + " .animated").spritespin("animate", true);
    // });
  });

  $(".animated").click(function(e) {
    $(this).spritespin({"animate": true, "frameTime": 50, "loop": false});
  });
});


