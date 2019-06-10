/* global $ , window , console*/
$("html").niceScroll({
        cursorcolor:"#1abc9c" ,
        cursorwidth:"10px" ,
        cursorborder:"1px solid white" ,
        cursorborderradius: 50 ,
        speed: 800
    });

$(function(){
    var wh = $(window).height();
    $("header").height(wh);
    $(".ourservices").outerHeight(wh*.6);
    $(".ourteam").outerHeight(wh*.4);
    $("ul li").on("click",function(){
        $("ul li").removeClass("active");
        $(this).addClass("active");
    });
    $(window).on("resize",function(){
        $(".slider").each(function(){
      $(this).css("paddingTop",(((wh-$(this).children().height())/2))); 
    }); 
    });
    $(window).on("scroll", function() {
        let pos = $(this).scrollTop();
       if(pos > 150)
            $('.navbar').css({
                background: "rgba(0,0,0,.6)" 
            });
        //if($(this).scrollTop() )
        else $('.navbar').css({background: "transparent"});
        if(pos < 250 && pos > 0){
            $("ul li").removeClass("active");
            $("li:first-of-type").addClass("active");
        }
        else if(pos > 250 && pos < 1100){
            $("ul li").removeClass("active");
            $("li:nth-of-type(2)").addClass("active");
        }
        else if(pos > 1100 && pos < 1600){
            $("ul li").removeClass("active");
            $("li:nth-of-type(3)").addClass("active");
        }
        else if(pos > 1600 && pos < 2100){
            $("ul li").removeClass("active");
            $("li:nth-of-type(4)").addClass("active");
        }
        else{
            $("ul li").removeClass("active");
            $("li:nth-of-type(5)").addClass("active");
        }
        console.log($(this).scrollTop());
    });
    //Trigger for slider
    $('.slider').bxSlider({
        pager: false
    });
        $(".slider").each(function(){
          $(this).css("paddingTop",(((wh-$(this).children().height())/2))); 
        });
    // Hover in our images
    $(".pics > div").on("mouseenter",function(){
        $(this).children(".mainoverlay").show(400);
    });
    $(".pics > div").on("mouseleave",function(){
        $(this).children(".mainoverlay").hide(400);
    });
    //Click on projects
    $(".projects .container > button:nth-of-type(1)").on("click",function(){
        if(!$(this).hasClass("active")){
        $(".images").children().slideDown(400);
        }
    });
    $(".projects .container > button").on("click",function(){
       $(this).addClass("active").siblings().removeClass("active"); 
    });
    $(".projects .container > button:nth-of-type(2)").on("click",function(){
        $(".images > div:first-child").slideUp(300).nextUntil(".images >div:nth-child(4)").slideUp(400);
        $(".images > div:nth-child(3)").nextUntil(".images >div:nth-child(7)").slideDown(400);
    });
    $(".projects .container > button:nth-of-type(3)").on("click",function(){
        $(".images > div:nth-child(1)").slideDown(400).nextUntil(".images >div:nth-child(4)").slideDown(400);
        $(".images > div:nth-child(3)").nextUntil(".images >div:nth-child(7)").slideUp(400);
    });
    // Click on our navbar
    $(".navbar ul li ").on("click",function(){
        $('body , html').animate({
            scrollTop: $($(this).attr('data-value')).offset().top
        },1000);
    });
    
});

