$(document).ready(function() {

    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li a').click(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        } );
    })(jQuery);

});

var tab = $('tab');
var line = $('<div />').addClass('line');

line.appendTo(tab);

var active = tab.find('.active');
var pos = 0;
var wid = 0;

if(active.length) {
    pos = active.position().left;
    wid = active.width();
    line.css({
        left: pos,
        width: wid
    });
}

tab.find('ul li a').click(function(e) {
    e.preventDefault();
    if(!$(this).parent().hasClass('active') && !tab.hasClass('animate')) {

        tab.addClass('animate');

        var _this = $(this);

        tab.find('ul li').removeClass('active');

        var position = _this.parent().position();
        var width = _this.parent().width();

        if(position.left >= pos) {
            line.animate({
                width: ((position.left - pos) + width)
            }, 300, function() {
                line.animate({
                    width: width,
                    left: position.left
                }, 150, function() {
                    tab.removeClass('animate');
                });
                _this.parent().addClass('active');
            });
        } else {
            line.animate({
                left: position.left,
                width: ((pos - position.left) + wid)
            }, 300, function() {
                line.animate({
                    width: width
                }, 150, function() {
                    tab.removeClass('animate');
                });
                _this.parent().addClass('active');
            });
        }

        pos = position.left;
        wid = width;
    }
});