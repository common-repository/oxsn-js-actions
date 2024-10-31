(function($) {

	$('.oxsn_js_actions[data-type="content"]').each(function() {

		var $paired_id = $(this).data('paired');
		if ( $('.oxsn_js_actions[data-type="link"][data-paired="' + $paired_id + '"]').data('effect') == 'accordion' || $('.oxsn_js_actions[data-type="link"][data-paired="' + $paired_id + '"]').data('effect') == 'reveal') {
			$(this).toggleClass('oxsn_hidden');
		}

	});

	var clickHandler = ('ontouchstart' in document.documentElement ? 'touchstart' : 'click');
	$('.oxsn_js_actions[data-type="link"][data-action="click"]').bind(clickHandler, function() {

		var $paired_id = $(this).data('paired');
		var $effect = $(this).data('effect');

		if ($effect == 'scrollto') {

			$('html, body').animate({scrollTop: $('.oxsn_js_actions[data-type="content"][data-paired="' + $paired_id + '"]').not(this).offset().top}, 500);

		} else if ($effect == 'accordion') {

			$('.oxsn_js_actions[data-effect="accordion"]').not(this).not('.oxsn_js_actions[data-type="content"][data-paired="' + $paired_id + '"]').removeClass('active');
			$(this).toggleClass('active');
			$('.oxsn_js_actions[data-type="content"][data-paired="' + $paired_id + '"]').toggleClass('active').slideToggle();

		} else if ($effect == 'reveal') {

			$('.oxsn_js_actions[data-effect="reveal"]').not(this).not('.oxsn_js_actions[data-type="content"][data-paired="' + $paired_id + '"]').removeClass('active');
			$(this).toggleClass('active');
			$('.oxsn_js_actions[data-type="content"][data-paired="' + $paired_id + '"]').toggleClass('active').fadeToggle();

		}

	});

	$('.oxsn_js_actions[data-type="link"][data-action="hover"]').hover(function() {

		var $paired_id = $(this).data('paired');
		var $effect = $(this).data('effect');

		if ($effect == 'scrollto') {

			$('html, body').animate({scrollTop: $('.oxsn_js_actions[data-type="content"][data-paired="' + $paired_id + '"]').not(this).offset().top}, 500);

		} else if ($effect == 'accordion') {

			$('.oxsn_js_actions[data-effect="accordion"]').not(this).not('.oxsn_js_actions[data-type="content"][data-paired="' + $paired_id + '"]').removeClass('active');
			$(this).toggleClass('active');
			$('.oxsn_js_actions[data-type="content"][data-paired="' + $paired_id + '"]').toggleClass('active').slideToggle();

		} else if ($effect == 'reveal') {

			$('.oxsn_js_actions[data-effect="reveal"]').not(this).not('.oxsn_js_actions[data-type="content"][data-paired="' + $paired_id + '"]').removeClass('active');
			$(this).toggleClass('active');
			$('.oxsn_js_actions[data-type="content"][data-paired="' + $paired_id + '"]').toggleClass('active').fadeToggle();

		}

	});

})(jQuery);