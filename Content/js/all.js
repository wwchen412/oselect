//數字input
(function() {

    window.inputNumber = function(el) {

        var min = el.attr('min') || false;
        var max = el.attr('max') || false;

        var els = {};

        els.dec = el.prev();
        els.inc = el.next();

        el.each(function() {
            init($(this));
        });

        function init(el) {

            els.dec.on('click', decrement);
            els.inc.on('click', increment);

            function decrement() {
                var value = el[0].value;
                value--;
                if (!min || value >= min) {
                    el[0].value = value;
                }
            }

            function increment() {
                var value = el[0].value;
                value++;
                if (!max || value <= max) {
                    el[0].value = value++;
                }
            }
        }
    }
})();
//上方會員bar

$('header .member').click(function() {

        var member_menu = $(this).find('ul');
        if (member_menu.hasClass('d-none')) {
            member_menu.fadeIn(500);
            member_menu.removeClass('d-none');
        } else {
            member_menu.addClass('d-none');
        }
        member_menu.click(function() {
            event.stopPropagation();
        })
        member_menu.find('.close').click(function() {

            if (!member_menu.hasClass('d-none')) {
                member_menu.addClass('d-none');
            }
        })
    })
    // hover NAVBAR 底線


var $el, leftPos, newWidth,
    $mainNav = $("#mainNav");

$mainNav.append("<li id='magic-line'></li>");
var $magicLine = $("#magic-line");

$magicLine
    .width($(".current_page_item").width())
    .css("left", $(".current_page_item").position().left)
    .data("origLeft", $magicLine.position().left)
    .data("origWidth", $magicLine.width());

$("#mainNav li").hover(function() {
    $el = $(this);
    leftPos = $el.position().left;
    console.log(leftPos);
    newWidth = $el.width();
    $magicLine.stop().animate({
        left: leftPos,
        width: newWidth
    });

}, function() {
    $magicLine.stop().animate({
        left: $magicLine.data("origLeft"),
        width: $magicLine.data("origWidth")
    });

});


// menubar
$('.menu-bar').click(function() {
    var phone_nav = $('.nav-phone');
    var body = $('body');
    if (phone_nav.hasClass('d-none')) {

        phone_nav.fadeIn('slow');
        phone_nav.removeClass('d-none');
        $('.nav-phone-wrap').addClass('slide-right');
        body.addClass('active');
        $('.logo a').css('z-index', 0);
    }
    phone_nav.find('span.close').click(function() {
        event.stopPropagation();
        $(this).parents('.nav-phone').addClass('d-none');
        body.removeClass('active');
        $('.logo a').css('z-index', 3);
        $('.nav-phone-wrap').removeClass('slide-right');
    })
    phone_nav.click(function() {
        event.stopPropagation();
        if (!$(this).hasClass('d-none')) {
            $(this).addClass('d-none');
            body.removeClass('active');
            $('.logo a').css('z-index', 3);
            $('.nav-phone-wrap').removeClass('slide-right');
        }
    })
    phone_nav.children().click(function() {
        event.stopPropagation();
    })

})
$('footer').load('_footer.html');