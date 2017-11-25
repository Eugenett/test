//SCROLL-BAR
var head = document.querySelector('.header-fix');
function topHeight() {
    var top = getComputedStyle(document.getElementById('top'));
    return parseInt(top.height) + parseInt(top.marginTop) + parseInt(top.marginBottom);
}
function headHeight() {
    var cont = getComputedStyle(head);
    return parseInt(cont.height) + parseInt(cont.marginTop) + parseInt(cont.marginBottom) + 'px';
}
window.onscroll = function() {
var block = document.querySelector('.page');

    if (window.pageYOffset > topHeight()) {
         head.classList.add('scroll');
            block.style.marginTop = headHeight();
    }else {
            head.classList.remove('scroll');
            block.style.marginTop = '0';
    }
}
// ***

//slider
  $('.slider1').owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        smartSpeed: 1000,
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 3
            },
            1024:{
                items: 4
            },
        }
    });

  $('.slider2').owlCarousel({
        nav: true,
        dots: false,
        autoplay: false,
        loop: true,
        margin: 150,
        smartSpeed: 1000,
        items: 2,
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2
            },
        }  
  });
//

// arrows
$('.slider1 .owl-prev').empty().append('<div class="prev-arrow"></div>');
$('.slider1 .owl-next').empty().append('<div class="next-arrow"></div>');

$('.slider2 .owl-prev').empty().append('<div class="prev-arrow_2"></div>');
$('.slider2 .owl-next').empty().append('<div class="next-arrow_2"></div>');
//

// slide-menu
$('.page .header-menu__icon').on('click', function(){
    $('.block-menu').animate({
        right: '0%'
    }, 100);
});
$('.block-menu__cross').on('click', function(){
    $('.block-menu').animate({
        right: '-43%'
    }, 100);
});
//
//accardeon

$('.about-us__job-accordion-title-block').click(function() {
    $('.about-us__job-accordion-item').siblings().find('.about-us__job-accordion-title-block').removeClass('active-accordion');
    $('.about-us__job-accordion-item').siblings().find('.about-us__job-accordion-main-block').slideUp();
    $('.about-us__job-accordion-item').siblings().find('.about-us__job-accordion-button-toggle-img').removeClass('accordion-rotate');
    $('.about-us__job-accordion-item').each(function(i){
      var i = i + 1
      $(this).find('.about-us__icon').attr('class', 'about-us__icon about-us__icon-' + i)
    });
    
    if ($(this).closest('.about-us__job-accordion-item').hasClass('active')) {
      // alert("if")
      $(this).find('.about-us__job-accordion-title-block').removeClass('active-accordion');
      $(this).find('.about-us__job-accordion-main-block').slideUp();
      $(this).find('.about-us__job-accordion-button-toggle-img').removeClass('accordion-rotate');
      $(this).closest('.about-us__job-accordion-item').removeClass('active');

      var num3 = $(this).find('.about-us__icon').attr('class').substr(-1);
      $(this).find('.about-us__icon').removeClass('about-us__icon-active-' + num3).addClass('about-us__icon-' + num3);

    } else {
      // alert(222)
      $(this).toggleClass('active-accordion');
      $(this).next().slideToggle();
      $(this).next().next().find('.about-us__job-accordion-button-toggle-img').toggleClass('accordion-rotate');
      $('.about-us__job-accordion-item').siblings().removeClass('active');
      $(this).closest('.about-us__job-accordion-item').addClass('active');
      $(this).find('.about-us__job-accordion-title-block').removeClass('active-accordion');

      var num2 = $(this).find('.about-us__icon').attr('class').substr(-1);
      $(this).find('.about-us__icon').removeClass('about-us__icon-' + num2).addClass('about-us__icon-active-' + num2);
      
    }
  });

  $('.about-us__job-accordion-button-toggle-img').click(function() {
    $('.about-us__job-accordion-item').siblings().find('.about-us__job-accordion-title-block').removeClass('active-accordion');
    $('.about-us__job-accordion-item').siblings().find('.about-us__job-accordion-main-block').slideUp();
    $('.about-us__job-accordion-item').siblings().find('.about-us__job-accordion-button-toggle-img').removeClass('accordion-rotate');
    $('.about-us__job-accordion-item').each(function(i){
      var i = i + 1
      $(this).find('.about-us__icon').attr('class', 'about-us__icon about-us__icon-' + i)
    });

    if ($(this).closest('.about-us__job-accordion-item').hasClass('active')) {
      // alert(111);
      $(this).find('.about-us__job-accordion-title-block').removeClass('active-accordion');
      $(this).find('.about-us__job-accordion-main-block').slideUp();
      $(this).find('.about-us__job-accordion-button-toggle-img').removeClass('accordion-rotate');
      $(this).closest('.about-us__job-accordion-item').removeClass('active');
      var num4 = $(this).find('.about-us__icon').attr('class');
      $(this).find('.about-us__icon').removeClass('about-us__icon-active-' + num4).addClass('about-us__icon-' + num4);
    } else {
      // alert(222);
      $(this).closest('.about-us__job-accordion-button-toggle').prev().slideToggle();
      $(this).closest('.about-us__job-accordion-button-toggle').prev().prev().toggleClass('active-accordion');
      $(this).toggleClass('accordion-rotate');
      $('.about-us__job-accordion-item').siblings().removeClass('active');
      $(this).closest('.about-us__job-accordion-item').addClass('active');

      var num5 = $(this).closest('.about-us__job-accordion-button-toggle').prev().prev().find('.about-us__icon').attr('class').substr(-1);
      $(this).closest('.about-us__job-accordion-button-toggle').prev().prev().find('.about-us__icon').removeClass('about-us__icon-' + num5).addClass('about-us__icon-active-' + num5);
    }
  });





//***

//type=range

//1
$('.rng1').change(function(){
    let val = $('.rng1').val();
    $('.form-req__val1').html('bis ' + val + ' €');
})

//2
$('.rng2').change(function(){
    let val = $('.rng2').val();
    $('.form-req__val2').html(val);
})

//3
$('.rng3').change(function(){
    let val = $('.rng3').val();
    if(val == '2') {
        $('.form-req__val3').html('4 Wochen');
    }else if(val == '3') {
        $('.form-req__val3').html('2 Monate');
    }else if(val == '4') {
        $('.form-req__val3').html('4 Monate');
    }else if(val == '5') {
        $('.form-req__val3').html('6 Monate');
    }else if(val == '6') {
        $('.form-req__val3').html('1 Jahr');
    }else {
        $('.form-req__val3').html('Gestern');
    }
})

//***

// open/close map
$(document).mouseup(function (e) {
    var container = $(".overview");
    if (container.has(e.target).length === 0){
        container.css('visibility', 'hidden');
    }
});
$('.footer-content__link').click(function(e) {
    e.preventDefault();
    $('.overview').css('visibility', 'visible');

})

//close-map from escape
$(document).keyup(function(e) {
    if(e.keyCode === 27) {
    $('.overview').css('visibility', 'hidden');
    }
})
//***

//slow-scroll
$('.header-btn__link').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
    return false;
})

$('.our-skills__link').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
    return false;
})
//***



//parallax
$(document).ready(function() {
var wide = window.innerWidth + "px solid transparent";
  $(".triangle").css("border-right", wide );
  $(".triangle-bottom").css("border-left", wide);
});

//***