


	var bh = document.body.offsetHeight;
	var ch = $('body').height();
	var wh = $(window).height(),
		half = wh / 2,
		headerHeight = $('header').outerHeight();

	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();

		var flag = bh - wh;
		console.log('wh', wh, 'bh', bh, 'ch', ch);
		console.log(scrollTop);
		console.log(flag);
		if (flag - scrollTop < 100 ) {
			$('.link-img').hide(200);
			return;
		}

		if (scrollTop >= half) {
			$('.link-img').show(200);
		} else {
			$('.link-img').hide(200);
		};

		
		console.log(scrollTop == flag);
	});
	


