$(document).ready(function($) {
    $("#gallery .col-sm-2 img").hover(function() {
        $("#gallery .col-sm-2 img").removeClass('change');
        $(this).addClass('change');
        $('#main-img').attr('src',$(this).attr('src'));
    });
    $("#gallery .col-sm-2 img").mouseenter(function() {
        $(this).addClass("glow");
    });
    $("#gallery .col-sm-2 img").mouseleave(function() {
        $(this).removeClass("glow");
    });
    /* these are for the shadows on the tabbed box page */
    $(".shadow img").mouseenter(function() {
        $(this).addClass("glow");
    });
    $(".shadow img").mouseleave(function() {
        $(this).removeClass("glow");
    });
});

/* change classes based on viewport, from here:
   https://www.sitepoint.com/community/t/adding-removing-classes-on-resize-jquery/191805/3 
   with a little tinker from me */
$(window).on('load, resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 500) {
        $(".btn-group").removeClass("btn-group").addClass("btn-group-xs")
    }else{
        $(".btn-group-xs").removeClass("btn-group-xs").addClass("btn-group")
    }
});

// disappear buttons
function bPress(which) {
    which.style.visibility = "hidden";
}
