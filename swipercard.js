 $(function() {
    let customerComments = $('.home-customer--carousel');

    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      dotsEach: 1,
      autoplay: true,           // Enable auto-swiping
      autoplayTimeout: 1000,     // Set swipe interval to 1 second (1000ms)
      autoplayHoverPause: true,  // Optional: pause on hover
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        }
      }
    });
  });
