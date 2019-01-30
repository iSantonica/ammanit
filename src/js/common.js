(function($) {
"use strict";

$(document).ready(function () {

$('.click').on('click', function(){
  $('.floating-section').toggleClass('floating-visible');
  $(this).toggleClass('active');
});

$('#show-cart').on('click', function(){
  $('.cart-total-row').slideToggle();
  $('.amanit-cart-table-wrap').slideToggle();
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $(this).text('скрыть корзину');
  } else {
      $(this).text('показать корзину');
  }
});

  $('.scrollbar-inner').scrollbar();



  if(window.matchMedia("(max-width: 1024px)").matches){

  } 


});


})(jQuery);




