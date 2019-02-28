(function($) {
"use strict";

$(document).ready(function () {

  /*preloader*/

  $('.prelouder-start').on('click', function(){
    $('.preloader-cell').each(function(index) {
      var item = $(this);
      var timerId = setInterval(function() {

        item.fadeTo( 1000 , 0.1, function() {
          $(this).css('opacity', 1);
        });
      }, index * 200);

    });
  });

  /*preloader END*/

  /*menu mobile*/

  $('.menu-toggle-btn').on('click', function(){
    $('.header-right').slideToggle();
  });


  var mql = window.matchMedia('all and (max-width: 720px)');
  var mql2 = window.matchMedia('all and (min-width: 721px)');

  if (mql.matches) {
    $('.bottom-menu-full').appendTo($('.header-right-top'));
    $('.head-phone').appendTo($('.header-right-top'));

    $('.cart-paper').appendTo($('.mobile-cart-wrap'));

    $('#show-cart').text('скрыть корзину');
    $('#show-cart').addClass('active');

    $('#show-cart').on('click', function(){
      $('.mobile-cart-wrap').slideUp();
    });
  }

  if (mql2.matches) {
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
  }

  /*cart mobile*/

  $('.cart-toggle-btn').on('click', function(){
    $('.mobile-cart-wrap').slideToggle();
  });

  /* Temp-code */

$('.click').on('click', function(){
  $('.floating-section').toggleClass('floating-visible');
  $(this).toggleClass('active');
  $('.container').toggleClass('container-overlay');
});

$('.click2').on('click', function(){
  $('.floating-section').addClass('floating-visible');
  $(this).closest('li').addClass('current-menu-item');
  $('.container').toggleClass('container-overlay');
});

$('#close-link').on('click', function(){
  $('.floating-section').removeClass('floating-visible');
  $('.container').removeClass('container-overlay');
});

/* Temp-code-end */

  /* fast-access */
  
  
  $('.fast-access-btn').on('click', function() {
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.fast-access-block').removeClass('fast-access-inner-show')
    } else {
      $(this).addClass('active').siblings().removeClass('active');
      $('#fast-access-popup').find('.fast-access-block').removeClass('fast-access-inner-show').eq($(this).index()).addClass('fast-access-inner-show');
    }
  });

  /* fast-access end */



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
  });


});//end ready


})(jQuery);




