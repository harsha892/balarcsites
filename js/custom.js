  $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
          $('.scrollToTop').fadeIn();
      } else {
          $('.scrollToTop').fadeOut();
      }
  });

  $('.scrollToTop').on('click', function() {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
  });
  $('.navbar-nav li a').click(function(){
    $(this).addClass('active');
});