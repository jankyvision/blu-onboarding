(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict









let step = "step1";

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");

function next() {
  if (step === "step1") {
    step = "step2";
    step1.classList.remove("is-active");
    step1.classList.add("is-complete");
    step2.classList.add("is-active");
  } else if (step === "step2") {
    step = "step3";
    step2.classList.remove("is-active");
    step2.classList.add("is-complete");
    step3.classList.add("is-active");
  } else if (step === "step3") {
    step = "step4d";
    step3.classList.remove("is-active");
    step3.classList.add("is-complete");
    step4.classList.add("is-active");
  } else if (step === "step4d") {
    step = "complete";
    step4.classList.remove("is-active");
    step4.classList.add("is-complete");
  } else if (step === "complete") {
    step = "step1";
    step4.classList.remove("is-complete");
    step3.classList.remove("is-complete");
    step2.classList.remove("is-complete");
    step1.classList.remove("is-complete");
    step1.classList.add("is-active");
  }
}

//Billing Address

var form = $('#myForm'),
    checkbox = $('#changeShip'),
    chShipBlock = $('#changeShipInputs');

chShipBlock.hide();

checkbox.on('click', function() {
    if($(this).is(':checked')) {
      chShipBlock.show();
      chShipBlock.find('input').attr('required', true);
    } else {
      chShipBlock.hide();
      chShipBlock.find('input').attr('required', false);
    }
})

$(document).ready(function(){
  $('input[type="checkbox"]').click(function(){
      var inputValue = $(this).attr("value");
      $("." + inputValue).toggle();
  });
});

// // Ocean Imports
// var form = $('#myForm'),
//     checkbox = $('#oceanImports'),
//     chShipBlock = $('#oceanImportsInputs');

// chShipBlock.hide();

// checkbox.on('click', function() {
//     if($(this).is(':checked')) {
//       chShipBlock.show();
//       chShipBlock.find('input').attr('required', true);
//     } else {
//       chShipBlock.hide();
//       chShipBlock.find('input').attr('required', false);
//     }
// })

// // Ocean Exports

// var form = $('#myForm'),
//     checkbox = $('#oceanExports'),
//     chShipBlock = $('#oceanExportsInputs');

// chShipBlock.hide();

// checkbox.on('click', function() {
//     if($(this).is(':checked')) {
//       chShipBlock.show();
//       chShipBlock.find('input').attr('required', true);
//     } else {
//       chShipBlock.hide();
//       chShipBlock.find('input').attr('required', false);
//     }
// })

$(function () {
  $('.button-checkbox').each(function () {

      // Settings
      var $widget = $(this),
          $button = $widget.find('button'),
          $checkbox = $widget.find('input:checkbox'),
          color = $button.data('color'),
          settings = {
              on: {
                  icon: 'glyphicon glyphicon-check'
              },
              off: {
                  icon: 'glyphicon glyphicon-unchecked'
              }
          };

      // Event Handlers
      $button.on('click', function () {
          $checkbox.prop('checked', !$checkbox.is(':checked'));
          $checkbox.triggerHandler('change');
          updateDisplay();
      });
      $checkbox.on('change', function () {
          updateDisplay();
      });

      // Actions
      function updateDisplay() {
          var isChecked = $checkbox.is(':checked');

          // Set the button's state
          $button.data('state', (isChecked) ? "on" : "off");

          // Set the button's icon
          $button.find('.state-icon')
              .removeClass()
              .addClass('state-icon ' + settings[$button.data('state')].icon);

          // Update the button's color
          if (isChecked) {
              $button
                  .removeClass('btn-default')
                  .addClass('btn-' + color + ' active');
          }
          else {
              $button
                  .removeClass('btn-' + color + ' active')
                  .addClass('btn-default');
          }
      }

      // Initialization
      function init() {

          updateDisplay();

          // Inject the icon if applicable
          if ($button.find('.state-icon').length == 0) {
              $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
          }
      }
      init();
  });
});

