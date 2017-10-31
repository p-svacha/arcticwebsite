(function ($) {
	function showInfo(me){
		var hover = me.getElementsByClassName("project-hover")[0];
		/*$(hover).height(380);
		$(hover).children('div').show()*/
		$(hover).css({ opacity: 0.8 });
	}

	function hideInfo(me){
		var hover = me.getElementsByClassName("project-hover")[0];
		/*$(hover).height(0);
		$(hover).children('div').hide()*/
		$(hover).css({ opacity: 0 });
	}
	
	$(".project-hover").click(function () {
		var a = $(this).find('a')[0]
		window.location.href=a.href;
	});

	$( document ).ready(function() {	
		$( ".project" ).mouseover(function() {
			showInfo(this);
		});

		$( ".project" ).mouseout(function() {
			hideInfo(this);
		});
	});

	$(window).scroll(function(e) {

	  if ($(window).scrollTop() > 126) {
		$("#logo").css({'background-size':'60px'});
		$("#navigation").css({'padding-top':'14px'});
		$("#header-container").css("height","62");
		$("#arctic-title").css({'margin-top':'5px'});
		$("#arctic-title").css({'margin-left':'80px'});
		$("#arctic-slogan").css({'margin-left':'80px'});
		$("#arctic-title").css({'font-size':'28px'});
		$("#arctic-title").css({'height':'22px'});
		$("#arctic-slogan").css({'font-size':'20px'});
	  } else {
		$("#logo").css({'background-size':'100px'});
		$("#navigation").css({'padding-top':'40px'});
		$("#header-container").css("height","120");
		$("#arctic-title").css({'margin-top':'20px'});
		$("#arctic-title").css({'margin-left':'120px'});
		$("#arctic-slogan").css({'margin-left':'120px'});
		$("#arctic-title").css({'font-size':'40px'});
		$("#arctic-title").css({'height':'40px'});
		$("#arctic-slogan").css({'font-size':'24px'});
	  }

	});
})(jQuery);
