function hamburger_toggle() {
  $("#nav").toggle();
  $(".pda_menu").toggleClass("open");
}

function set_viewport(){
  var width_value = window.screen.width < 450 ? 'width=device-width' : 'width=1200';
  $('meta[name=viewport]').attr('content',width_value);
//мобильные адаптивно, а на планшетах будет зум

}

$( ".item_nav_item" ).click(function(e) {
  // меняем контент
  $('.item_slide').hide('fast');
  $('#'+$(this).data('tabid')).show('fast');

  // меняем навигацию
  $('.item_nav_item-active').removeClass('item_nav_item-active');
  $(this).addClass('item_nav_item-active');

});

$( ".item_nav_pda" ).click(function(e) {
  // меняем контент
  // $('.item_slide').hide('fast');
  $('#'+$(this).data('tabid')).toggle('fast',function () {});

  // меняем навигацию
  $('.item_nav_pda_active').removeClass('item_nav_pda_active');
  $(this).addClass('item_nav_pda_active');

});

$(document).ready(function() {

  window.addEventListener('resize', function(){
    set_viewport();
   if (window.innerWidth > 500) $('#cat_filter_wrapper').show();
  });
  set_viewport();

  $("#slider_partners").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      }
      ,
      1000: {
        items: 5,
        nav: false,
        loop: false,
        margin: 20
      }
    }
  });

  $("#slider_recommend").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      }
      ,
      1000: {
        items: 2,
        nav: false,
        loop: false,
        margin: 0
      }
    }
  });

  $("#slider_news").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      }
      ,
      1000: {
        items: 3,
        nav: false,
        loop: false,
        margin: 4
      }
    }
  });

});
