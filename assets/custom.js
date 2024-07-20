/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */
document.addEventListener('DOMContentLoaded', function() {
  var installmentsButton = document.querySelector('button#shopify-installments-cta');

  if (installmentsButton) {
      installmentsButton.addEventListener('load', function() {
          installmentsButton.setAttribute('title', 'Learn More');
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var quizIframe = document.querySelector('iframe[name="Product Recommendation Quiz"]');

  if (quizIframe) {
      quizIframe.addEventListener('load', function() {
          quizIframe.setAttribute('title', 'Quiz');
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.plyr__progress');
  elements.forEach(function(element) {
      element.removeAttribute('aria-valuemin');
  });
});

// Vanilla JavaScript
document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.cbb-frequently-bought-products');
  elements.forEach(function(element) {
      element.removeAttribute('aria-hidden');
  });
});

// jQuery
$(document).ready(function() {
  $('.cbb-frequently-bought-products').removeAttr('aria-hidden');
});

// Function to remove the aria-hidden attribute
function removeAriaHidden() {
  const elements = document.querySelectorAll(".shopify-theme-section-preview-popover.campaign-active.roundup-preview-container");
  elements.forEach(element => {
      element.removeAttribute("aria-hidden");
  });
}

// Create a MutationObserver to monitor DOM changes
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Ensure it's an element node
              if (node.matches(".shopify-theme-section-preview-popover.campaign-active.roundup-preview-container")) {
                  node.removeAttribute("aria-hidden");
              } else {
                  const elements = node.querySelectorAll(".shopify-theme-section-preview-popover.campaign-active.roundup-preview-container");
                  elements.forEach(element => {
                      element.removeAttribute("aria-hidden");
                  });
              }
          }
      });
  });
});

// Specify the target node and options for the observer
const targetNode = document.body;
const config = { childList: true, subtree: true };

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Initial call in case the elements are already in the DOM
removeAriaHidden();

$(document).ready(function(){
    $('.col-carousel-nav a').click(function(){
        var id_panel = $(this).attr('href');
        
        if( $(this).hasClass('active') ){
        }else{
            $('.col-carousel-nav a').removeClass('active');
            $('.col-carousel-panel').removeClass('active');

            $(id_panel).addClass('active');
        }

        $(this).addClass('active');

        window.dispatchEvent(new Event('resize'));

        //alert(id_panel);
        return false;
    });

    $(".twentytwenty-container").twentytwenty({no_overlay:true, default_offset_pct: 0.8});

    $('.gridt-container').simpleLoadMore({
      item: 'div.Grid_Testimonials',
      count: 1
    });

    $('.tag-inpt').off().change( function(){
      var newURL = $(this).nextAll('a').attr('href');
      window.location.href = newURL;
    });

    $('.add_to_cart_list').click(function( event ){
      event.preventDefault();
      var ID = $(this).attr("data-var_id");
      addItemToCart( ID, 1);    // paste your id product number
    });

    $('.PageOverlay, button.Drawer__Close').click(function(){
      alternate_remove_ajax();
    }); 

    AnnounceMent();

});

var slideIndex = 0;

function AnnounceMent() {
  var i;
  var slides = document.getElementsByClassName("Grid__Cell_Ann");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(AnnounceMent, 5000); // Change image every 2 seconds
}

function alternate_remove_ajax(){
  var cart_ajax = $('#sidebar-cart');
  $('.PageOverlay').removeClass('is-visible');
  $(cart_ajax).removeAttr('tabindex').attr('aria-hidden', 'true');
  document.documentElement.classList.remove('no-scroll');
}

//ajax add to cart
function addItemToCart(variant_id, qty){
  var data = {
    "id": variant_id,
    "quantity": qty
  }

  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    data: data,
    dataType: 'json',
    success: function(){
      
      var cart_ajax = document.getElementById('sidebar-cart');
      
      $('.PageOverlay').addClass('is-visible');

      cart_ajax.setAttribute('aria-hidden', 'false');

      cart_ajax.setAttribute('tabindex', '-1');

      document.documentElement.classList.add('no-scroll');

      document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
        bubbles: true
      }));

      //$('#cart-link-header').click();
    }
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//Accessibility\\
$(document).ready(function () {
      setTimeout(function () {
        $(".cbb-frequently-bought-recommendations-container ul.cbb-frequently-bought-products").removeAttr("aria-hidden");
        $(".quiz-wrap .container iframe#EoIPWQ").attr("aria-label","quiz-umair");
      }, 3000);
      }, 3000);

document.querySelector('.Grid__Cell.\\31\\/2.Grid--right h2').outerHTML = '<span>' + document.querySelector('.Grid__Cell.\\31\\/2.Grid--right h2').innerHTML + '</span>';
// $(".plyr__progress input#plyr-seek-892").removeAttr("aria-valuemax");
