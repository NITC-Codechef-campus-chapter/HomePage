$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > screen.height - 160) {
            $(".navbar").css("background", "#5b4142");

        } else {
            $(".navbar").css("background", "rgb(0,0,0,0.0)");
        }
        if(screen.width >= 1000){
            if(scroll > (screen.height - 160) / 3) {
            $(".institute_name").css("color", "#5b4142");
        } else {
            $(".institute_name").css("color", "#fcfcfc");
        }
    }
    })
})
$(document).ready(function () {
    $(".navbar a,footer a[href = '#myPage']").on('click',
        function (event) {
            if (this.hash != "") {
                event.preventDefault();
                var hash = this.hash;
                $('html,body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function () {
                    window.location.hash = hash;
                });
            }
        });
})
$(window).scroll(function () {
    $(".slideanim").each(function () {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
})
$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
        $navbar.collapse('hide');
    }
});
