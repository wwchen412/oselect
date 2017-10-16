//上方會員bar

$('header .member').click(function() {

    var member_menu = $(this).find('ul');
    if (member_menu.hasClass('d-none')) {
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

// menubar
$('.menu-bar').click(function() {
    var phone_nav = $('.nav-phone');
    var body = $('body');
    if (phone_nav.hasClass('d-none')) {
        phone_nav.removeClass('d-none');
        body.addClass('active');
    }
    phone_nav.find('span.close').click(function() {
        event.stopPropagation();
        $(this).parents('.nav-phone').addClass('d-none');
        body.removeClass('active');
    })
    phone_nav.click(function() {
        event.stopPropagation();
        if (!$(this).hasClass('d-none')) {
            $(this).addClass('d-none');
            body.removeClass('active');
        }
    })
    phone_nav.children().click(function() {
        event.stopPropagation();
    })

})