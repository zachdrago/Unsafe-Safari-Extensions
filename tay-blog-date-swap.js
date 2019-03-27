setTimeout(function(){








	if( $('body').hasClass('wsite-blog-index') ) {

		$('.blog-date').each(function() {

			var season;


			var blog_date = $(this).find('.date-text').text();
			var date_split = blog_date.split('/');

			var month = date_split[0];
			var year = date_split[2];

			console.log(month+', '+year);


			if(month >= 8 && month <= 12) {
				season = "Fall";
			}
			if(month >= 1 && month <= 5) {
				season = "Spring";
			}

			var newDateformat = season+' | '+year;

			$(this).find('.date-text').text(newDateformat);
			$('<p class="semester">'+newDateformat+'</p>').insertAfter( $(this) );

		});
		

	}













	if( $('body').hasClass('wsite-blog-post') ) {

			var season;


			var blog_date = $('.date-text').text();
			var date_split = blog_date.split('/');

			var month = date_split[0];
			var year = date_split[2];

			console.log(month+', '+year);


			if(month >= 8 && month <= 12) {
				season = "Fall";
			}
			if(month >= 1 && month <= 5) {
				season = "Spring";
			}

			var newDateformat = season+' | '+year;

			$('.date-text').text(newDateformat);
			$('<p class="semester">'+newDateformat+'</p>').insertAfter( $('.blog-date') );
		

	}









}, 2500);





