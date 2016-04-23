$(document).ready(function() {
  // select the text input
  $("#myColor").select();
  // button press
  $("#cc").click(function() {
    var myColor = $("#myColor").val();
    // change the color 
    $('body, .carousel').css({"background-color": myColor});
    // blow up the dialog well, slowly
    $( ".color-switcher" ).effect("explode", 1000);
    // wait five seconds and fade it back in
    $( ".color-switcher" ).delay(5000).fadeIn(1500);
    // re select the input so user can type another color w/o clicking
    $("#myColor").select();
  });
  $("#myColor").keypress(function(e) {
    if(e.which == 13) { //13 is the keycode of the enter key
      // trigger a button press
      $("#cc").trigger( "click" );
    }
  });
});
