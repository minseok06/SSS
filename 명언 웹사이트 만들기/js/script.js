$('.navi>li').mouseover(function(){
    $(this).children('.submenu').stop().slideDown(200);
    // $('.submenu').stop().slideDown(200);
});
$('.navi>li').mouseout(function(){
    $(this).children('.submenu').stop().slideUp(200);
    // $('.submenu').stop().slideUp(200);
});