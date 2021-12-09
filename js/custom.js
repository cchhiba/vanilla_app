// All custom javascript
// Pseudocode Steps
// 1. Set a click event on the mobile menu icon
// 2. Once clicked demonstrate jQuery chaining
// 3. Finally demonstrate jQuery callback functions

// $('.burger-menu').hide(8000);

$('document').ready(function(){
  // Select the mobile menu, add a click event, trigger an alert
  $('.fa-bars').click(function(){
    // alert("The menu bar was clicked.");
    // $('.daily-section').hide(3000).show(3000).hide(2000).show(2000);

    // these x4 below lines are callback function pattern
    $('.daily-section').hide(1000, function(){
      // alert('finished!!!!');
      $('.map-section').hide(1000, function(){
        $('.favourite-section').hide(2000, function(){
          // this last line does not need function at the end. you can close after 3000 with ;
          $('.footer-section').hide(3000, function(){
          });
        });
      });
    });

  });
// Click function ENDS
});
// Document ready ENDS
