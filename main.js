$(document).ready(function(){

    var scrollLink = $('.scroll');

    //Smooth scrolling
    scrollLink.click(function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000 )
    });
});

