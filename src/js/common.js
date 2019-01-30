(function($) {
"use strict";

$(document).ready(function () {

$('.click').on('click', function(){
  $('.floating-section').toggleClass('floating-visible');
  $(this).addClass('active');
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


	
	// $(window).resize(function(){
 //    if(window.matchMedia("(min-width: 767px)").matches){
	// 		$(".main-slider-section").height($(window).height() - $('.header').outerHeight());
 //    }
	// });

	/*TABS*/
	// $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	// 	$(this)
	// 		.addClass('active').siblings().removeClass('active')
	// 		.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	// });

  // $('.main-slider').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   dots: false,
  //   prevArrow: '.main-slider-prev',
  //   nextArrow: '.main-slider-next'
  // });

  // $('#menu-toggle').click(function(){
  //   $(this).toggleClass('open');
  //   $('.drop-menu').toggleClass('active');
  //   $('.header-menu').slideToggle();
  // });


  // $('.catalog-single-slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   asNavFor: ".catalog-single-slider-nav",
  //   dots: false,
  //   arrows: false,
  // });
  // $('.catalog-single-slider-nav').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   dots: false,
  //   asNavFor: ".catalog-single-slider-for",
  //   focusOnSelect: true,
  // });

  // /*Количество товара на странице корзины */
  // $('.button-plus').click(function(){
  //   var inputNumber = $('input[type="number"]');
  //   var inputVal = 1;
  //
  //     inputVal++;
  //     $(this).parent().find(inputNumber.val(inputVal)) ;
  //
  //
  // });
  /*маска номера телефона*/
  // $("input[type='tel']").mask("+7(999) 999-9999");

  /*универсальный блок с выпадающем подблоком*/
  // $('.toggle-box-btn').click(function() {
  //   $(this).toggleClass('active');
  //   $(this).closest($('.toggle-box ')).find($('.toggle-box-drop')).slideToggle();
  // }); 


  /*Выпадающее подменю в сайдбаре на странице Рекламных конструкций*/
  // $('.calalog-services-list>li').click(function() {
  //   $(this).toggleClass('active');
  //   $(this).find($('.calalog-services-list__drop')).slideToggle();
  // }); 

  /*custom-scroll*/
  // $('.custom-scroll').niceScroll({
  //   cursorcolor: "#f74b4b",
  //   cursoropacitymin: 0.8,
  //   cursorwidth: "8px",
  //   background: "#f3f3f3",
  //   cursorborder: "none",
  //   cursorborderradius: "0",
  //
  // });

  $('.scrollbar-inner').scrollbar();


  

  if(window.matchMedia("(max-width: 1024px)").matches){

    /*перенос главного меню в мобильной версии*/
    // $('.main-menu').appendTo($('.drop-menu'));
    /*перенос контактной инф. с верхнего хедера в мобильное меню*/
    // $('.header .contact-info').appendTo($('.drop-menu'));

    // $('.submenu').click(function () {
    //   $(this).find($('.submenu-wrap')).slideToggle();
    // });


    // $('#menu-toggle').click(function(){
    //   $(this).toggleClass('open');
    //   $('.drop-menu').toggleClass('active');
    // });

    // $('.sidebar').appendTo($('.sidebar-mobile__inner'));
    // $(".sidebar-mobile__btn").after($('.sidebar-header'));
    // $('.sidebar-mobile__title').click(function () {
    //   $('.sidebar-mobile__btn').toggleClass('active');
    //   $('.sidebar-mobile__inner').slideToggle();
    // });

    /*добавление в слайдер контента блока "Услуги" на мобильной версии*/
    // $('.services-descr-short__item').removeClass('tabs__content');
    // $('.services-list.tabs__caption').slick({
    //   slidesToShow: 6,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   dots: false,
    //   asNavFor: '.services-descr-short',
    //   adaptiveHeight: true,
    //   variableWidth: true,
    //   centerMode: true,
    //   focusOnSelect: true,
    //   responsive: [
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //       }
    //     }
    //   ]
    // });
    // $('.services-descr-short').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   dots: false,
    //   asNavFor: '.services-list.tabs__caption',
    //   adaptiveHeight: true,

    // });




  } // end window.matchMedia("(max-width: 1024px)").matches

  if(window.matchMedia("(max-width: 767px)").matches){
    /*на странице товара перемещаем слайдер под название товара*/
    // $('.verdor-label-box').after($('.catalog-single-photo'));
  }// end window.matchMedia("(max-width: 767px)").matches



});


})(jQuery);




