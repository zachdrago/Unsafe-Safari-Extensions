setTimeout(function(){

// ================== BLOG POST LIST ===========================

	if( $('body').hasClass('wsite-blog-index') ) {

		$('.blog-date').each(function() {

			var season;

			var blog_date = $(this).find('.date-text').text();
			var date_split = blog_date.split('/');

			var month = date_split[0];
			var year = date_split[2];



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


}, 2500);
