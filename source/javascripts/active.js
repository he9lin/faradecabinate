$(document).ready(function(){
    
                // Isotope Activation
                $(".isotope-container").isotope({
					itemSelector: '.nf-item',
					masonry: {
                      columnWidth: 0
                    }
				});
				
				// Add isotope click function
				
				$('.isotope-filter li a').click(function(){
					$(".isotope-filter li a").removeClass("active");
					$(this).addClass("active");
			 
					var selector = $(this).attr('data-filter');
					$(".isotope-container").isotope({
						filter: selector,
						animationOptions: {
							duration: 750,
							easing: 'linear',
							queue: false,
						}
					});
					return false;
				});
                          
    
    
                // Smoth Scrolling for Nav
                $('.scrollto').click(function(e){
                    $('html,body').scrollTo(this.hash, this.hash);
                    e.preventDefault();
                });
    
    
    
                //    HTML Table for Product Info
                $( ".espressoShake" ).find('.table').append( '<table class="table table-bordered"><tbody><tr><td>Items\Styles</td><td>Espresso Shake</td></tr><tr><td>Box Color</td><td>ESPRESSO</td></tr><tr><td>Face</td><td>MAPLE</td></tr><tr><td>Box</td><td>PLYWOOD</td></tr><tr><td>Plywood Size</td><td>5/8"</td></tr><tr><td>Camlock</td><td>Y</td></tr><tr><td>Drawer Color</td><td>Natural</td></tr><tr><td>Dovetail</td><td>Y</td></tr><tr><td>Slides</td><td>Undermount</td></tr></tbody></table>' );

                $( ".whiteShake" ).find('.table').append( '<table class="table table-bordered"><tbody><tr><td>Items\Styles</td><td>White Shake</td></tr><tr><td>Box Color</td><td>WHITE</td></tr><tr><td>Face</td><td>MAPLE</td></tr><tr><td>Box</td><td>PLYWOOD</td></tr><tr><td>Plywood Size</td><td>5/8"</td></tr><tr><td>Camlock</td><td>Y</td></tr><tr><td>Drawer Color</td><td>Natural</td></tr><tr><td>Dovetail</td><td>Y</td></tr><tr><td>Slides</td><td>Undermount</td></tr></tbody></table>' );

                $( ".raisedWhite" ).find('.table').append( '<table class="table table-bordered"><tbody><tr><td>Items\Styles</td><td>Raised White</td></tr><tr><td>Box Color</td><td>WHITE</td></tr><tr><td>Face</td><td>MAPLE</td></tr><tr><td>Box</td><td>PLYWOOD</td></tr><tr><td>Plywood Size</td><td>5/8"</td></tr><tr><td>Camlock</td><td>Y</td></tr><tr><td>Drawer Color</td><td>Natural</td></tr><tr><td>Dovetail</td><td>Y</td></tr><tr><td>Slides</td><td>Undermount</td></tr></tbody></table>' );

                $( ".walnutMaple" ).find('.table').append( '<table class="table table-bordered"><tbody><tr><td>Items\Styles</td><td>Walnut Maple</td></tr><tr><td>Box Color</td><td>WHITE</td></tr><tr><td>Face</td><td>MAPLE</td></tr><tr><td>Box</td><td>PLYWOOD</td></tr><tr><td>Plywood Size</td><td>5/8"</td></tr><tr><td>Camlock</td><td>Y</td></tr><tr><td>Drawer Color</td><td>Natural</td></tr><tr><td>Dovetail</td><td>Y</td></tr><tr><td>Slides</td><td>Undermount</td></tr></tbody></table>' );
    
    
                //  Header Hide/Show with Popup Window
                $(".item-mask").click(function(){
                    $(".header, .intro-scroll-down").hide();
                });
                $(".modal").click(function(){
                    $(".header, .intro-scroll-down").show();
                });
                $(document).on('keyup',function(evt) {
                    if (evt.keyCode == 27) {
                       $(".header, .intro-scroll-down").show();
                    }
                });
});