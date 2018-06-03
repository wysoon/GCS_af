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



  var header = document.getElementById("nnbar");
var btns = header.getElementsByClassName("nnactive");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

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