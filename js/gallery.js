$(document).ready(function($) {
    $("#gallery .col-md-2 img").hover(function() {
        $("#gallery .col-md-2 img").removeClass('change');
        $(this).addClass('change');
        $('#main-img').attr('src',$(this).attr('src'));
    });
    $("#gallery .col-md-2 img").mouseenter(function() {
        $(this).addClass("glow");
    });
    $("#gallery .col-md-2 img").mouseleave(function() {
        $(this).removeClass("glow");
    });
});