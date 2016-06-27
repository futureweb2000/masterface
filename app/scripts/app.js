(function(){


	//have event handdler to projects items visualization
	$('#projects')
	.find('.projects-item')
	.hover(function(){
		$this = $(this);
		$this.find('.mask')
			.toggleClass('left0')
	})
	//how to bind the same handdler to both events?
	.click(function(){
			$this = $(this);
			$this.find('.mask')
				.toggleClass('left0')
	})


	$nav = $('.navigation');
		$nav.find('span')
			.click(function(){
			$('.navigation span').toggleClass('hide');
			$nav.find('ul').toggleClass('right0')
		});

		var $questions = $('#questions');

		$questions.find('.questions-wrap-items-item')
			.click(function(){
				$(this).find('.answer')
				.slideToggle();

				$(this).find('.question span.fa')
				.toggleClass('hide');
			});




})();