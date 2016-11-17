<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->



$(document).on("pagecreate","#pageone",function(){
  
  	$('#taptext').on("tap",function(){
    	
          var randombutton = random();
            alert(randombutton);
    }}); 
    
    //$('#tapholdtext').on("taphold",function(){
    	//$(this).hide();
 	//});
    
    //$('#swipetext').on("swipeleft",function(){
    	//$(this).css('color', 'green');
  	//});   

});

function random() {
	       return !Math.round(Math.random());
}