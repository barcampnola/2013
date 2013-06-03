(function(window, $) {
  var Shifter = function(element, options) {
    this.pages = $(element);
    this.pagesCount = this.pages.length
    this.current = 0
    this.isAnimating = false
    this.endOutPage = false
    this.endNextPage = false
    this.animEndEventNames = {
      'WebkitAnimation' : 'webkitAnimationEnd',
      'OAnimation' : 'oAnimationEnd',
      'msAnimation' : 'MSAnimationEnd',
      'animation' : 'animationend'
    }

    this.animation = {
      moveToLeft: {
        outClass: "page-moveToLeft",
        inClass:  "page-moveFromRight"
      },

      moveToRight: {
        outClass: "page-moveToRight",
        inClass:  "page-moveFromLeft"
      }
    }

    this.animEndEventName = this.animEndEventNames[ Modernizr.prefixed('animation') ]
    this.support = Modernizr.cssanimations
  };

  Shifter.prototype = {

    init: function() {
      this.pages.each( function() {
        var page = $(this);
        page.data('originalClasses', page.attr('class'));
      });

      this.pages.eq(this.current).addClass('page-current');

      return this;
    },

    navigate: function(direction, animationType, callback) {
      var _this = this;

      if (this.isAnimating) return false

      this.isAnimating = true;

      var outPage = this.pages.eq(this.current);

      if (direction === "next") {
        this.setNextPage();
      }
      else if (direction === "previous") {
        this.setPreviousPage();
      }
      else {
        this.setPage(direction);
      }


      var inPage   = this.pages.eq(this.current),
          outClass = this.animation[animationType].outClass,
          inClass  = this.animation[animationType].inClass;

      if (!inPage.hasClass("page-current")) {
        inPage.addClass('page-current');

        outPage.addClass(outClass).on(this.animEndEventName, function() {
          outPage.off(_this.animEndEventName);
          _this.endOutPage = true;

          if (_this.endNextPage) _this.onEndAnimation(outPage, inPage);
        });

        inPage.addClass(inClass).on(this.animEndEventName, function() {
          inPage.off(_this.animEndEventName);
          _this.endNextPage = true;

          if (_this.endOutPage) _this.onEndAnimation(outPage, inPage);
        });
      }

      this.isAnimating = false;

      if (!this.support) this.onEndAnimation(outPage, inPage);

      if (callback) {
        callback();
      }
    },

    setPage: function(page) {
      if (typeof page === "number") {
        this.current = pageNumber;
      }
      else {
        this.current = this.pages.index($("[data-page=" + page + "]"))
      }
    },

    setPreviousPage: function() {
      if (this.current > 0) --this.current

      else this.current = this.pagesCount - 1
    },

    setNextPage: function() {
      if (this.current < this.pagesCount - 1) ++this.current

      else this.current = 0
    },

    onEndAnimation: function(outPage, inPage) {
      this.endOutPage = false;
      this.endNextPage = false;

      outPage.attr('class', outPage.data('originalClasses'));
      inPage.attr('class', inPage.data('originalClasses') + ' page-current');
    }
  }

  $.fn.shifter = function(options) {
    shifter = new Shifter(this, options).init();
    window.Shifter = shifter
    return shifter;
  };

  window.Shifter = Shifter;
})(window, jQuery);