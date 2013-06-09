(function(window, $) {
    var loadingMessages = [
      "Partitioning Social Network",
      "Blurring Reality Lines",
      "Searching For The Keymaster",
      "Twittering the Twitterers",
      "Talking To Wife, She Looks Mad",
      "Connecting at 9600 Baud",
      "CSS-ifying the HTMLs",
      "Manipulating Modal Memory",
      "Testing Underworld Telecommunications",
      "Priming Secret Coding Societies",
      "Wrangling Internet Trolls",
      "Reticulating Graduated Splines",
      "Writing Teen Romance Vampire Novel",
      "Replacing Gyroscopic Bearings",
      "Observing Quantum Bits",
      "Making 'Vroom Vroom' Sounds",
      "Preparing a Tasty Grilled Cheese Sandwich",
      "Infuriating Furious Bits",
      "Emulating IE Speed",
      "Preparing Bacon for Homeward Transportation",
      "Mitigating Time-Stream Discontinuities",
      "Neutralizing Shuriken Oxidization",
      "Crossing The Streams",
      "Creating KickStarter Funding Round",
      "Fighting Like A Ton Of Other Bears",
      "Predicting Puddle Prevalence",
      "Calculating Vertical Trajectories",
      "Unexpectedly Reticulating Splines",
      "Weaving Shirts On Company Loom",
      "Individualizing Snowflakes",
      "Realizing Trix Are For Kids",
      "Fighting Back The Loneliness",
      "Calculating Lifetime Aspirations",
      "Writing Scrolling Startup String Text",
      "Making Designs Pop *and* Lock",
      "Rasterizing Reputation Algorithms",
      "Reticulating Underwater Splines",
      "Navigating The Stormy Sea",
      "Fiercely Reticulating Splines",
      "Not Pirating Music",
      "Developing Code Rants",
      "Analyzing Developer Angst, Coming To Some Interesting Conclusions",
      "Remodeling Spline Reticulator",
      "Eating King Cake",
      "Reticulating Music Splines",
      "Balancing Domestic Coefficients",
      "Scaling AWS Servers",
      "Discovering Self-Consciousness",
      "Calibrating Music Matrix",
      "Stopping John Connor",
      "Vertexualizing Integers 'n Stuff",
      "Eating A Pizza Bagel",
      "Downloading Weather Data",
      "Synthesizing Emotional Love",
      "Composing Melodic Euphony",
      "Reticulating Unreticulated Splines",
      "Recycling Hex Decimals",
      "Interpreting US Copyright Law Violations",
      "Decoding Rings",
      "Practicing Interpretive Ice Dancing"
    ];

  var Pawser = function(element, options) {
    var  self = this
        ,timer = null
        ;
    this.element = $(element);

    this.init = function() {
      this.unUsedMessages = loadingMessages.slice(0);
      this.loadMessage();

      timer = window.setInterval(function() {
        self.loadMessage();
      }, 1500);
      return this;
    };
    this.stop = function() {
      window.clearInterval(timer);
    }

    this.loadMessage = function() {
      var randomMessage = this.pickRandomMessage();
      this.element.html(randomMessage);
    };

    this.pickRandomMessage = function() {
      var  idx = Math.floor(Math.random() * this.unUsedMessages.length)
      return this.unUsedMessages.splice(idx, 1);
    };

    return this;
  };

  $.fn.pawser = function(options) {
    return new Pawser(this, options).init();
  };

})(window, jQuery);