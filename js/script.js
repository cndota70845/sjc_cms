function nav() {
    $( "#nav" ).find( "li" ).hover(function () {
        $(this).addClass("on");
        $(this).find(".subNav").slideDown(300);
    }, 
    function () {
        $(this).removeClass("on");
        $(this).find(".subNav").hide({
            duration: 300,
        });
    });
}

function carousel() {
    $('.carousel').carousel({
        interval: 2000
    })
}

;(function (window) {
    nav();
    carousel();
}(window));