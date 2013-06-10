(function(){
  var pawser;

  $(window).load(function() {
    setTimeout(function() {
      $(".page-loader").fadeOut(1000, function() {
        $(this).remove();
        pawser && pawser.stop();
      });
    }, 2000);
  })

  $(function() {

    // window.pageLocations = []

    // $("[data-page]").each(function(index, element) {
    //   var name = $(element).data("page");

    //   pageLocations.push = $(element).offset().top;
    // });

    $(window).scroll(function() {
      // var position = $(window).scrollTop();

      // $("[data-bear]").each(function() {
      //   if (isScrolledIntoView(this)) {
      //     $(this).spritespin("animate", true);
      //   }
      //   else {
      //     $(this).spritespin("animate", false);
      //   }
      // })

      // $.each(pageLocations, function(index, value) {
      //   previousPage = pageLocations[index-1];

      //   _.find(pageLocations, function(value) { return value > position });
      //   if (position > ) stop animation

      // });




    });

    // function isScrolledIntoView(element) {
    //   var documentTop = $(window).scrollTop();
    //   var documentBottom = documentTop + $(window).height();

    //   var elementTop = $(element).offset().top;
    //   var elementBottom = elementTop + $(element).height();

    //   return ((elementTop <= documentBottom) && (elementBottom >= documentTop));
    // }


    pawser = $(".loading-message").pawser();

    var mainBear = new Motio(document.getElementById('main-bear'), {
      fps: 15,
      frames: 21,
      vertical: true
    });
    mainBear.play();

    var aboutBear = new Motio(document.getElementById('about-bear'), {
      fps: 15,
      frames: 30,
      vertical: true
    });
    aboutBear.play();

    var scheduleBear = new Motio(document.getElementById('schedule-bear'), {
      fps: 15,
      frames: 25,
      vertical: true
    });
    scheduleBear.play();

    var registerBear = new Motio(document.getElementById('register-bear'), {
      fps: 15,
      frames: 43,
      vertical: true
    });
    registerBear.play();

    var sponsorsBear = new Motio(document.getElementById('sponsors-bear'), {
      fps: 15,
      frames: 24,
      vertical: true
    });
    sponsorsBear.play();

    // $("[data-bear=main]").spritespin({
    //   source      : "/img/page-main-bear-sprite.png",
    //   width       : 424,
    //   height      : 550,
    //   frames      : 21,
    //   framesX     : 3,
    //   animate     : false,
    //   loop        : true,
    //   module      : "360",
    //   behavior    : "none"
    // });

    // $("[data-bear=about]").spritespin({
    //   source      : "/img/page-about-bear-sprite.png",
    //   width       : 406,
    //   height      : 500,
    //   frames      : 30,
    //   framesX     : 6,
    //   animate     : false,
    //   loop        : true,
    //   module      : "360",
    //   behavior    : "none"
    // });

    // $("[data-bear=schedule]").spritespin({
    //   source      : "/img/page-schedule-bear-sprite.png",
    //   width       : 343,
    //   height      : 500,
    //   frames      : 48,
    //   framesX     : 8,
    //   animate     : false,
    //   loop        : true,
    //   module      : "360",
    //   behavior    : "none"
    // });

    // $("[data-bear=register]").spritespin({
    //   source      : "/img/page-register-bear-sprite.png",
    //   width       : 448,
    //   height      : 550,
    //   frames      : 54,
    //   framesX     : 6,
    //   animate     : false,
    //   loop        : true,
    //   module      : "360",
    //   behavior    : "none"
    // });

    // $("[data-bear=sponsors]").spritespin({
    //   source      : "/img/page-sponsors-bear-sprite.png",
    //   width       : 507,
    //   height      : 450,
    //   frames      : 24,
    //   framesX     : 6,
    //   loop        : true,
    //   animate     : false,
    //   module      : "360",
    //   behavior    : "none"
    // });

    $("[data-slider='sponsors']").unslider();

    var aboutSlider = $("[data-slider='about']").unslider({dots: true, delay: false}),
        aboutData = aboutSlider.data('unslider');

    aboutSlider
      .on('swipeleft', function(e) {
        aboutData.next();
      })
      .on('swiperight', function(e) {
        aboutData.prev();
      })
      .on('move', function(e) {
        var left = 100 * e.distX / aboutSlider.width();
      })
      .on('movestart', function(e) {
        // If the movestart heads off in a upwards or downwards
        // direction, prevent it so that the browser scrolls normally.
        if ((e.distX > e.distY && e.distX < -e.distY) ||
            (e.distX < e.distY && e.distX > -e.distY)) {
          e.preventDefault();
          return;
        }
      });

      // Find the tallest section, and make them all that tall.
      var maxHeight = 0;
      aboutSlider.find("ul li").each(function(e) {
        height = $(this).outerHeight();
        console.log(height);
        if (height > maxHeight) {
          maxHeight = height;
        }
      }).css('height', maxHeight);


  //   // To allow the slide to keep step with the finger,
  //   // temporarily disable transitions.
  //   wrap.addClass('notransition');
  // })

  // .on('move', function(e) {
  //   var left = 100 * e.distX / width;

  //   // Move slides with the finger
  //   if (e.distX < 0) {
  //     if (slides[i+1]) {
  //       slides[i].style.left = left + '%';
  //       slides[i+1].style.left = (left+100)+'%';
  //     }
  //     else {
  //       slides[i].style.left = left/4 + '%';
  //     }
  //   }
  //   if (e.distX > 0) {
  //     if (slides[i-1]) {
  //       slides[i].style.left = left + '%';
  //       slides[i-1].style.left = (left-100)+'%';
  //     }
  //     else {
  //       slides[i].style.left = left/5 + '%';
  //     }
  //   }
  // })

  // .on('moveend', function(e) {
  //   wrap.removeClass('notransition');

  //   slides[i].style.left = '';

  //   if (slides[i+1]) {
  //     slides[i+1].style.left = '';
  //   }
  //   if (slides[i-1]) {
  //     slides[i-1].style.left = '';
  //   }
  // });



    $("[data-slider='about'] li").click(function(e) {
      var i = $(this).index();
      aboutData.move(i);
    });

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

    // var delayedStart;

    $(".nav li").on('activate', function() {
      // $('.animated').spritespin('animate', false);
      // clearTimeout(delayedStart);rom

      var page = $(this).find('a')[0].hash;

      // delayedStart = setTimeout(function() {
        // $(page + ' .animated').spritespin('animate', true);
      // }, 300);
    });
  });

  $('.animated-background-element').animateElement();
})();
