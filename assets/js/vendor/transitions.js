var PageTransitions = (function() {

  var pages = $("[data-page]"),
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

      animEndEventName = animEndEventNames[ Modernizr.prefixed('animation') ],
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
      var page = $(this);
      page.data('originalClasses', page.attr('class'));
    });

    pages.eq(current).addClass('page-current');
  }

  function navigate(direction, animationType) {
    if (isAnimating) return false

    isAnimating = true;

    var outPage = pages.eq(current);

    if (direction === "next") {
      setNextPage();
    }
    else if (direction === "previous") {
      setPreviousPage();
    }
    else {
      setPage(direction);
    }


    var inPage   = pages.eq(current),
        outClass = animation[animationType].outClass,
        inClass  = animation[animationType].inClass;

    if (!inPage.hasClass("page-current")) {
      inPage.addClass('page-current');

      outPage.addClass(outClass).on(animEndEventName, function() {
        outPage.off(animEndEventName );
        endOutPage = true;

        if (endNextPage) onEndAnimation(outPage, inPage);
      });

      inPage.addClass(inClass).on(animEndEventName, function() {
        inPage.off(animEndEventName );
        endNextPage = true;

        if (endOutPage) onEndAnimation(outPage, inPage);
      });
    }

    isAnimating = false;

    if (!support) onEndAnimation(outPage, inPage)
  }

  function setPage(page) {
    if (typeof page === "number") {
      current = pageNumber;
    }
    else {
      current = pages.index($("[data-page=" + page + "]"))
    }
  }

  function setPreviousPage() {
    if (current > 0) --current

    else current = pagesCount - 1
  }

  function setNextPage() {
    if (current < pagesCount - 1) ++current

    else current = 0
  }

  function onEndAnimation(outPage, inPage) {
    endOutPage = false;
    endNextPage = false;

    outPage.attr('class', outPage.data('originalClasses'));
    inPage.attr('class', inPage.data('originalClasses') + ' page-current');
  }

  init();

  return { init : init, navigate : navigate };

})();