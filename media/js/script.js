$('.dropdown').hover(function() {
    if (!($(this).hasClass('open'))) {
        $('.dropdown-toggle', this).trigger('click');
    }
}, function() {
    if ($(this).hasClass('open')) {
        $('.dropdown-toggle', this).trigger('click');
    }
});

$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });




window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}