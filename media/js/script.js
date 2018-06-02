$('.dropdown').hover(function() {
    if (!($(this).hasClass('open'))) {
        $('.dropdown-toggle', this).trigger('click');
    }
}, function() {
    if ($(this).hasClass('open')) {
        $('.dropdown-toggle', this).trigger('click');
    }
});