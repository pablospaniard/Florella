$(function() {
   
    //Cache the window object
    var $window = $(window);
    
    //Parallax bacground effect
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); //assigning the object
        $($window).scroll(function(){
            
            //scroll the background at var speed
            //yPos is a negative because we're scrolling it up
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            
            //put together our final bgd position
            var coords = '50% ' + yPos + 'px';
            
            //Move the background
            $bgobj.css({backgroundPosition: coords});            
        }); //end window scroll
    });
});