(function(){
  var pawser;

  $(window).load(function() {
    $(".page-current .animated").spritespin("animate", true);

    setTimeout(function() {
      $(".page-loader").fadeOut(1000, function() {
        $(this).remove();
        pawser && pawser.stop();
      });
    }, 2000);
  })

  $(function() {
    pawser = $(".loading-message").pawser();

    $("[data-bear=main]").spritespin({
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

    $("[data-bear=about]").spritespin({
      source      : "/img/page-about-bear-sprite.png",
      width       : 406,
      height      : 500,
      frames      : 30,
      framesX     : 6,
      animate     : false,
      loop        : true,
      module      : "360",
      behavior    : "none"
    });

    $("[data-bear=schedule]").spritespin({
      source      : "/img/page-schedule-bear-sprite.png",
      width       : 343,
      height      : 500,
      frames      : 48,
      framesX     : 8,
      animate     : false,
      loop        : true,
      module      : "360",
      behavior    : "none"
    });

    $("[data-bear=register]").spritespin({
      source      : "/img/page-register-bear-sprite.png",
      width       : 448,
      height      : 550,
      frames      : 54,
      framesX     : 6,
      animate     : false,
      loop        : true,
      module      : "360",
      behavior    : "none"
    });

    $("[data-bear=sponsors]").spritespin({
      source      : "/img/page-sponsors-bear-sprite.png",
      width       : 507,
      height      : 450,
      frames      : 24,
      framesX     : 6,
      loop        : true,
      animate     : false,
      module      : "360",
      behavior    : "none"
    });

    $("[data-slider='about']").unslider({'dots': true});

    $("[data-slider='sponsors']").unslider();

    $("nav a, .next-section").click(function(e) {
      e.preventDefault();
      var page = this.hash,
          target = $(page);

      $('html, body').stop().animate({
          'scrollTop': target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = page;
      });
    });

    var delayedStart;

    $(".nav li").on('activate', function() {
      $('.animated').spritespin('animate', false);
      clearTimeout(delayedStart);

      var page = $(this).find('a')[0].hash;

      delayedStart = setTimeout(function() {
        $(page + ' .animated').spritespin('animate', true);
      }, 300);
    });
  });

  $('.animated-background-element').animateElement();

})();
