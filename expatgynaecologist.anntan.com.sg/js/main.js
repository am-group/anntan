jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	jQuery(window).scroll(function(){
		(jQuery(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( jQuery(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		jQuery('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	
	
	function isInt(value) {
			  var x;
			  if (isNaN(value)) {
				return false;
			  }
			  x = parseFloat(value);
			  return (x | 0) === x;
	}
	
	
	function captulateForm($getthis,$replace){
				var $this = $getthis;
				var $thisId = $this.attr("id");
				
				var $getInt  = $this.attr("id").replace ( /[^\d.]/g, '' );
				
				
				if(!isInt($thisId)){
					$this.find("form").attr("id","contactform" + $getInt).attr("name","contactform" + $getInt);
					 setTimeout(function(){ 
					
							jQuery("form#contactform" +  $getInt  + " input[type=text]").each(function(){
								var $thisInput = jQuery(this);
								var $getCurrName =  $thisInput.attr("id");
								$thisInput.attr("id",$getCurrName + $getInt);
							});
							jQuery("form#contactform"+  $getInt  + " div#captchadiv").attr("id","captchadiv" + $getInt);
							jQuery("form#contactform" +  $getInt  + " input[type=submit]").attr("id","submitBtn" + $getInt);
					 }, 500);
				}
		}
	
	
	jQuery("#loadform1,#loadform2").load("form.html",function(){
		captulateForm(jQuery(this),0);
     });
	 

});