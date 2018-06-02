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