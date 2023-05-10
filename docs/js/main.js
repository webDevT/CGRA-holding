$(function(){

$('.menu-btn').click(function(){
    $('.menu-content-wrapper').toggleClass('active');
})
$('.menu-link, .close').click(function(){
    $('.menu-content-wrapper').removeClass('active');
})
});