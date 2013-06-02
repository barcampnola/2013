var PageTransitions = (function() {

  var main = $('#main'),
      pages = main.children( "[data-behavior='page']" ),
      pagesCount = pages.length,
      current = 0,
      isAnimating = false,
      endOutPage = false,
      endNextPage = false,
      animEndEventNames = {
        'WebkitAnimation' : 'webkitAnimationEnd',
        'OAnimation' : 'oAnimationEnd',
        'msAnimation' : 'MSAnimationEnd',
        'animation' : 'animationend'
      },
      // animation end event name
      animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
      // support css animations
      support = Modernizr.cssanimations,

      animation = {
        moveToLeft: {
          outClass: "page-moveToLeft",
          inClass:  "page-moveFromRight"
        },

        moveToRight: {
          outClass: "page-moveToRight",
          inClass:  "page-moveFromLeft"
        }
      }

  function init() {

    pages.each( function() {
      var page = $( this );
      page.data( 'originalClassList', page.attr( 'class' ) );
    } );

    pages.eq( current ).addClass( 'page-current' );


  }

  function navigate(direction, animationType) {

    if(isAnimating) return false;

    isAnimating = true;

    var outPage = pages.eq( current );

    if (direction === "previous") {
      prevPage();
    }
    else {
      nextPage();
    }

    var inPage   = pages.eq( current ).addClass( 'page-current' ),
        outClass = animation[animationType].outClass,
        inClass  = animation[animationType].inClass;

    outPage.addClass(outClass).on(animEndEventName, function() {
      outPage.off(animEndEventName );
      endOutPage = true;

      if(endNextPage) {
        onEndAnimation(outPage, inPage);
      }
    });

    inPage.addClass(inClass).on(animEndEventName, function() {
      inPage.off(animEndEventName );
      endNextPage = true;

      if(endOutPage) {
        onEndAnimation(outPage, inPage);
      }
    });

    if(!support) {
      onEndAnimation(outPage, inPage);
    }
  }

  function prevPage(outPage, animationType) {
    if(current > 0) {
      --current;
    }
    else {
      current = pagesCount - 1;
    }
  }

  function nextPage(outPage, animationType) {
    if(current < pagesCount - 1) {
      ++current;
    }
    else {
      current = 0;
    }
  }

  function onEndAnimation( $outpage, $inpage ) {
    endOutPage = false;
    endNextPage = false;
    resetPage($outpage, $inpage);
    isAnimating = false;
  }

  function resetPage( $outpage, $inpage ) {
    $outpage.attr('class', $outpage.data('originalClassList'));
    $inpage.attr('class', $inpage.data('originalClassList') + ' page-current');
  }

  init();

  return { init : init, navigate : navigate };

})();