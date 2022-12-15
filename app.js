$(function(){
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
});