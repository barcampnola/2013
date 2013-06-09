(function(window, $, _){
var defaultOptions = {
						duration: 25*1000
					};
$.fn.animateElement = jqueryWidget(function($el){
	var op = _.defaults($el.data('animated-background-element'), defaultOptions)
	animationLoop($el, [{left: '95%'}, {left: '0%'}], op, 0);
});

function animationLoop($el, steps, op, currentStepIndex) {
	var step = steps[currentStepIndex];
	$el.animate(step, _.extend(op, {
		done: _.partial(animationLoop, $el, steps, op, (currentStepIndex+1)%steps.length )
	}) );
}

function jqueryWidget(fnInit) {
	return function jqueryWidget(){
		var args = arguments;
		$(this).each(function(i, el){
			var params = _.toArray(args);
			params.unshift($(this));
			fnInit.apply(this, params);
		});
	}
}
})(window, jQuery, _)