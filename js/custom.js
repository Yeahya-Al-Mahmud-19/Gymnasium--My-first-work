$(function(){

    "use strict"

// Menu Fixing

  var menuoff = $('.menu_part').offset().top;
  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    if(scrolling > menuoff){
      $('.menu_part').addClass('menufix ');
    }
    else{
      $('.menu_part').removeClass('menufix ');
    }

  });





    //  Banner Slider

    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        dots: true,
        prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
      });


// VenoBox in About Part

$('.venobox').venobox({
    titleattr: 'data-title'
});




// Slick Slider in Team Part

$('.team_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          prevArrow: '<i class="fas fa-chevron-left prev_arrw"></i>',
          nextArrow: '<i class="fas fa-chevron-right next_arrw"></i>',
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          prevArrow: '<i class="fas fa-chevron-left prev_arrw"></i>',
          nextArrow: '<i class="fas fa-chevron-right next_arrw"></i>',
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1500,
          arrows: true,
          prevArrow: '<i class="fas fa-chevron-left prv_arrw"></i>',
          nextArrow: '<i class="fas fa-chevron-right nxt_arrw"></i>',
        }
      } 
    ]
  });




// Slider in Testimonial Part

$('.slider_start').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });




// CounterUp 

$('.counter').counterUp({
    delay: 10,
    time: 1500,
});



// ColorfullTab on Class Part
$("#colorful").colorfulTab();  




// Slick Slider in marketPlace Part

$('.market_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
  nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        dots: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});



// Back to Top Button

$(window).on('scroll', function(){

  var scrolling = $(this).scrollTop();

  if(scrolling > 300 ){

    $('.back_to_top').fadeIn();
  }
  else{
    $('.back_to_top').fadeOut();
  }

});

$('.back_to_top').on('click', function(){

  $('html').animate({
    scrollTop: 0,
  }, 2000);

});




// Responsive slick slider

$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});








});

