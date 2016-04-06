$(document).ready(function(){
  // Isotope Activation
  $('.isotope-container').imagesLoaded(function() {
    $(".isotope-container").isotope({
      itemSelector: '.nf-item',
      masonry: {
        columnWidth: 0
      }
    });
  });

  // Add isotope click function
  $('.isotope-filter li a').click(function(){
    $(".isotope-filter li a").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr('data-filter');
    $(".isotope-container").isotope({
      filter: selector
      // animationOptions: {
      //   duration: 750,
      //   easing: 'linear',
      //   queue: false,
      // }
    });
    return false;
  });

  // Smoth Scrolling for Nav
  $('.scrollto').click(function(e){
    $('html,body').scrollTo(this.hash, this.hash);
    e.preventDefault();
  });
});
