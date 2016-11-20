



$(document).on("pagecreate","#pageone",function(){
  
  	$('#taptext').on("tap",function(){
    	
          var randombutton = random();
            if (randombutton = true){
                navigator.notification.beep(1);
            } else {
                navigator.notification.beep(2);
            }

    } 
    
    //$('#tapholdtext').on("taphold",function(){
    	//$(this).hide();
 	//});
    
    //$('#swipetext').on("swipeleft",function(){
    	//$(this).css('color', 'green');
  	//});   

  )});

function random() {
	       return !Math.round(Math.random());
}