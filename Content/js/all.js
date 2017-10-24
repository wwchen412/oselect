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
jQuery.extend(jQuery.validator.messages, {
    required: "此欄位必填.",
    remote: "Please fix this field.",
    email: "請輸入正確的 Email 信箱.",
    url: "請輸入正確的網址.",
    date: "請輸入正確的日期.",
    dateISO: "請輸入正確的 (ISO) 日期格式.",
    number: "本欄位請填入數字.",
    digits: "本欄位請填入數字.",
    creditcard: "請輸入正確的信用卡號.",
    equalTo: "密碼驗證失敗",
    maxlength: $.validator.format("至多輸入 {0} 個字."),
    minlength: $.validator.format("至少輸入 {0} 個字."),
    rangelength: $.validator.format("請輸入 {0} 到 {1} 個字."),
    range: $.validator.format("請輸入 {0} 到 {1} 的數字."),
    max: $.validator.format("請輸入小於等於 {0} 的值."),
    min: $.validator.format("請輸入大於等於 {0} 的值.")
});

jQuery.validator.addMethod("chkPid", function(value, element) {
    var people_id = value.replace(/\s+/g, "");
    return (
        this.optional(element) || /^[A-Z]{1}[1-2]{1}[0-9]{8}$/.test(people_id)
    );
}, "請輸入正確格式,身分證字號開頭需為大寫英文");

jQuery.validator.addMethod("mobileTaiwan", function(value, element) {
    var str = value;
    var result = false;
    if (str.length > 0) {
        //是否只有數字;
        var patt_mobile = /^[\d]{1,}$/;
        result = patt_mobile.test(str);

        if (result) {
            //檢查前兩個字是否為 09
            //檢查前四個字是否為 8869
            var firstTwo = str.substr(0, 2);
            var firstFour = str.substr(0, 4);
            var afterFour = str.substr(4, str.length - 1);
            if (firstFour == '8869') {
                $(element).val('09' + afterFour);
                if (afterFour.length == 8) {
                    result = true;
                } else {
                    result = false;
                }
            } else if (firstTwo == '09') {
                if (str.length == 10) {
                    result = true;
                } else {
                    result = false;
                }
            } else {
                result = false;
            }
        }
    } else {
        result = true;
    }
    return result;
}, "手機號碼不符合格式，僅允許09開頭的10碼數字");