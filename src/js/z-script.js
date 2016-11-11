// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');


jQuery(document).ready(function($){  

  /* галерея "специалисты" */
  $('.staff__gallery').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1
      //   }
      // },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.hamburger').click(function(e) { 
      e.preventDefault();
      $(this).closest('.header').find('.nav').toggle();
  });

  // $('.menu-services__close').click(function(e) { 
  //     e.preventDefault();
  //     $(this).closest('.menu-services').hide();
  // });

  // var servicesMoreLink = $('.services-type__item--more .services-type__link');
  // $(servicesMoreLink).click(function(e) { 
  //     e.preventDefault();
  //     $(this).closest('.services-type__item--more').hide();
  //     $(this).closest('.services-type__list').find('.services-type__item--hidden').show();
  // });

  // /* Faq accordion */
  // $('.faq__ask').click(function(){
  //   if($(this).next('.faq__text').is(":visible")) {
  //     $(this).next('.faq__text').slideUp();
  //     $(this).closest('.faq__block').find('.faq__icon--active').removeClass('faq__icon--active');
  //   } else {
  //     $(this).closest('.faq').find('.faq__text').slideUp();
  //     $(this).siblings('.faq__text').slideDown();
  //     $(this).closest('.faq').find('.faq__icon--active').removeClass('faq__icon--active');
  //     $(this).closest('.faq__block').find('.faq__icon').addClass('faq__icon--active');
  //   }
  // }); 

  // /* search */
  // $('.social-links__link--search').click(function(e) { 
  //     e.preventDefault();    
  //     $('.search').show();
  // });
  // $('.search__close').click(function(e) { 
  //     e.preventDefault();    
  //     $('.search').hide();
  // });

  // /* плавный скролл наверх */
  // $('.up').click(function () {
  //   $("html, body").animate({
  //     scrollTop: 0
  //   }, 600);
  //   return false;
  // });

  // /* sticky menu */
  // var headerInner = $('.header__inner');
  // var headerNav = $('.header__nav'); 
  // var navList = $('.nav__list');
  // var navItemLogo = $(navList).find('.nav__item--logo');
  // var navItemBtn = $(navList).find('.nav__item--btn');      

  // $(window).scroll(function () {
  //   if ($(window).width() > 768) {
  //     if ($(this).scrollTop() >= headerInner.height() ) {
  //       $(headerNav).addClass('header__nav--sticky');
  //       $(navList).addClass('nav__list--sticky');
  //       $(navItemLogo).show();
  //       $(navItemBtn).hide();
  //     } else {
  //       $(headerNav).removeClass('header__nav--sticky');
  //       $(navList).removeClass('nav__list--sticky');
  //       $(navItemLogo).hide();
  //       $(navItemBtn).show();
  //     }
  //   }
  // });

  // /* hamburger */
  // $('.hamburger').click(function(e) { 
  //     e.preventDefault();    
  //     $('.nav__wrapper').toggle();
  // });


  /* 404 - sticky footer */
  // var footerHeight = $('.footer').outerHeight();
  // if ($(window).height() >= $('body').height()){
  //   $('body').addClass('body--full-screen');
  //   $('body').css('padding-bottom', footerHeight+'px');
  //   $('.footer').addClass('footer--stuck-to-bottom');
  // }















    /* Map */
    // var map = new GMaps({
    //     el: '.contacts__map',
    //     lat: 59.971198,
    //     lng: 30.315121,
    //     scrollwheel: false
    // });
    // map.drawOverlay({
    //     lat: 59.971198,
    //     lng: 30.315121,
    //     content: '<div class="pin"></div>'
    // });

});

