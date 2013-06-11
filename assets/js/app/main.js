(function(){
  var pawser;

  function isScrolledIntoView(element) {
    var documentTop = $(window).scrollTop();
    var documentBottom = documentTop + $(window).height();

    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();

    return ((elementTop <= documentBottom) && (elementBottom >= documentTop));
  }

  pawser = $(".loading-message").pawser();

  var mainBear = new Motio(document.getElementById('main-bear'), {
    fps: 25,
    frames: 21,
    vertical: true
  });

  var aboutBear = new Motio(document.getElementById('about-bear'), {
    fps: 25,
    frames: 30,
    vertical: true
  });

  var scheduleBear = new Motio(document.getElementById('schedule-bear'), {
    fps: 25,
    frames: 25,
    vertical: true
  });

  var registerBear = new Motio(document.getElementById('register-bear'), {
    fps: 25,
    frames: 43,
    vertical: true
  });

  var sponsorsBear = new Motio(document.getElementById('sponsors-bear'), {
    fps: 25,
    frames: 24,
    vertical: true
  });

  var bears = {
    main: mainBear,
    about: aboutBear,
    schedule: scheduleBear,
    register: registerBear,
    sponsors: sponsorsBear
  }



  $(window).load(function() {
    setTimeout(function() {
      $(".page-loader").fadeOut(1000, function() {
        $(this).remove();
        pawser && pawser.stop();
      });
    }, 2000);
  })

  $(function() {

    $(".register-container .btn-primary").each(function() {
      var texts = [
        "Register",
        "Register Now",
        "Barcamp awaits",
        "We're Bear-y excited",
        "Rawr?",
        "Flat Design Is So In Now",
        "The Wait Is Unbearible",
        "A-bear-ilently",
        "Bear with me",
        "Are you pre-beared?",
        "Straw-bear-ys Are Delicious",
        "I'm going Bear-zerk",
        "I'm so em-bear-est...",
        "Built With Our Bear Hands",
        "It's Absolute Panda-monium",
        "Any-bear-y notice the puns?",
        "A Real Kodiak Moment...",
        "It's A Panda-emic!",
        "It's Bearing Down On Us",
        "Good time? Furrr Sure.",
        "Bear Grylls Is Coming?",
        "Polarizing",
        "Impawsible!",
        "Another Barcamp? Fur Real?"
      ]
      var element = $(this);
      var randomText = texts[Math.floor(Math.random()*texts.length)];
      var randomZ = Math.floor(Math.random()*361);
      var randomScale = Math.random() * (1.5 - 0.5) + 0.5;
      var randomMargin = Math.floor(Math.random()*21);
      var randomColor = Math.floor(Math.random()*16777215).toString(16);

      _.each(["-webkit-transform", "-moz-transform", "-ms-transform", "transform"], function(property) {
        element.css(property, "scale(" + randomScale + ") rotateZ(" + randomZ + "deg)");
      });
      element.css("background-color", "#" + randomColor);
      element.css("margin", randomMargin);
      element.html(randomText);
    });


    $(window).scroll( _.debounce(function() {
      $("[data-bear]").each(function() {
        var bear = $(this).data("bear");

        if (isScrolledIntoView($(this)) && $(this).is(":visible")) {
          bears[bear].play()
        }
        else {
          bears[bear].pause()
        }
      })
    }, 300) );

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
