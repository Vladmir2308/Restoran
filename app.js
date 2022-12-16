$(function(){
    /* Fixed Header  */
    let header = $("#header");
    
    let scrollPos = $(window).scrollTop();
    
    $(window).on("scroll load repeat", function(){
        let introH = $("#page__intro").height();
        scrollPos = $(this).scrollTop();
        
        if (scrollPos > introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    });
    
    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;
        
        $("html, body").animate({
            scrollTop: elementOffset - 20 
        }, 1000);
    });
});