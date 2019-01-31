(function($) {
"use strict";

$(document).ready(function () {

  /* Temp-code */

$('.click').on('click', function(){
  $('.floating-section').toggleClass('floating-visible');
  $(this).toggleClass('active');
});

$('.click2').on('click', function(){
  $('.floating-section').addClass('floating-visible');
  $(this).closest('li').addClass('current-menu-item');
});

$('#close-link').on('click', function(){
  $('.floating-section').removeClass('floating-visible');
});

/* Temp-code-end */

  /* fast-access */

  $('#fast-access-btn-sitemap').on('click', function(){
    $('#fast-access-popup .fast-access-sitemap').toggleClass('fast-access-inner-show');
    $('#fast-access-popup').toggleClass('fast-access-show');
    $(this).toggleClass('active');
  });

  $('#fast-access-btn-contacts').on('click', function(){
    $('#fast-access-popup .fast-access-contacts').toggleClass('fast-access-inner-show');
    $('#fast-access-popup').toggleClass('fast-access-show');
    $(this).toggleClass('active');
  });

  $('#fast-access-btn-search').on('click', function(){
    $('#fast-access-popup .fast-access-search').toggleClass('fast-access-inner-show');
    $('#fast-access-popup').toggleClass('fast-access-show');
    $(this).toggleClass('active');
  });

  /* fast-access end */

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

  $('.amanit-product__slider .slider-wrap').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    dotsClass: 'amanit-dots'
  });

  /*  dima search-form   */
  $('.search-input .form-input').on('input',function () {
    if($(this).val().length > 0){
      $(this).parent().find('.clear-input').css('display', 'inline-block');
    } else {
      $(this).parent().find('.clear-input').css('display', 'none');
    }
    $(this).parent().find('.clear-input').click(function(){
      $(this).css('display', 'none');
    });
  }); // end on

  /*
  * dima: Сопутствующте услуги:
  * */

  $('.amanit-product-card_related-services .js-link').click(function(){
    let jsLinlCurText = $(this).attr('data-more');
    let jsLinlNextText = $(this).attr('data-less');
    $(this)
      .toggleClass('active')
      .text($(this).hasClass('active') ? jsLinlNextText : jsLinlCurText)
      .closest('.amanit-product-card_related-services')
      .find('.related-services__bot').slideToggle();
  }); // end click
  $('.toggle-box .js-link').click(function(){
    let jsLinlCurText = $(this).attr('data-more');
    let jsLinlNextText = $(this).attr('data-less');
    $(this)
      .toggleClass('active')
      .text($(this).hasClass('active') ? jsLinlNextText : jsLinlCurText)
      .parent('.toggle-box')
      .find('.toggle-box__inner')
      .toggleClass('active');
    console.log('click');
  });
  $('.toggle-box .js-toogle-link ').click(function(){
    let jsLinlCurText = $(this).attr('data-more');
    let jsLinlNextText = $(this).attr('data-less');
    $(this)
      .text($(this).hasClass('active') ? jsLinlNextText : jsLinlCurText)
      .parent('.toggle-box')
      .find('.toggle-box__inner')
      .toggleClass('active');
    console.log('click');
  }); 

});//end ready


})(jQuery);




