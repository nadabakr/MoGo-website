$(window).scroll(function() {
    if ($(this).scrollTop() > $("#header").height()) {
        $("body").addClass("fixed-nav");
    } else {
        $("body").removeClass("fixed-nav");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 20 && $(this).scrollTop() < $("#header").height()) {
        $(".navbar").addClass("d-none");
    } else {
        $(".navbar").removeClass("d-none");
    }
});