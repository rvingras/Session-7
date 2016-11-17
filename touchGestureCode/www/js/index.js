<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	function random() {
	       return !Math.round(Math.random());
            window.localStorage.getItem(“random”);
}

 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	});   


});