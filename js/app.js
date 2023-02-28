$(document).ready(function(){
  $(".page-scroll li a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    let hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - $('.navbar').outerHeight()
    }, 800, function(){
      // window.location.hash = hash;
    });
  }
  });
  });
  $(document).ready(function(){
  let navh = $('nav').height();
  if ($(window).scrollTop()>navh){
    $("nav").addClass("head-active");
    $('.navbar-brand img').attr('src', '/img/logo-small.png?=1');
  
  }
  else{
    $("nav").removeClass("head-active");
    $('.navbar-brand img').attr('src', '/img/logo-white.png?=1');
  }
  });
  $(window).on("scroll",function(){
  if ($(window).scrollTop()){
    $("nav").addClass("head-active");
    $('.navbar-brand img').attr('src', '/img/logo-small.png?=1');
    
  }
  else{
    $("nav").removeClass("head-active");
    $('.navbar-brand img').attr('src', '/img/logo-white.png?=1');
  }
  });
  
  
  $(".form-control").focus(function () {
  $(this).parent().addClass('active');
  }).blur(function () {
  if($(this).val() === ""){
      $(this).parent().removeClass('active');
  }
  else{
      $(this).parent().addClass('active');
  }
  });
  
  $('.navbar-toggler').click(function(){
  $('.navbar-collapse').toggleClass('active');
  $('.navbar-toggler i').toggleClass('fa-times text-white');
  $('body').toggleClass('overflow-hidden');
  });
  
  
  $('.drop-menu').click(function(){
  $(this).siblings().find('.dropdown').slideUp();
  $(this).find('.dropdown').slideToggle();
  });
  if($(window).width() < 991){
  $('.footer-language,.language').click(function(){
      $(this).find('.dropdown').toggleClass('lang-active');
  });
  }
  // let height = $('#call-to-action').offset().top - $('.navbar').outerHeight();
  // window.scrollTo({top: height, behavior: 'smooth'});
  

  
  

(function() {
  $(document).ready(function() {
      $(window).scrollTop() > 200 ? $(".back-to-top").addClass("show") : $(".back-to-top").removeClass("show");
    $(window).scroll(function() {
      return $(window).scrollTop() > 200 ? $(".back-to-top").addClass("show") : $(".back-to-top").removeClass("show");
    }), $(".back-to-top").click(function() {
      return $("html,body").animate({
        scrollTop: "0"
      });
    });
  });
}).call(this);



$( ".doctors-box" ).hover(
function() {
$(this).parent().addClass('active-color').removeClass('not-active');
$(this).parent().siblings().addClass('not-active').removeClass('active-color');
}, function() {
$('.doctors-box').parent().removeClass('not-active');
$('.doctors-box').parent().siblings().removeClass('active-color');
}
);


$('.quotes .quote').each(function(e){
$(this).attr('id', 'ides' + e);
});

//     })