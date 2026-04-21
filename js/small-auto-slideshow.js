// JavaScript Document

$(document).ready(function(){
$("#slideshow > div:gt(0)").hide();
 
setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow1');
},  3000);

});

/*
$(document).ready(function(){
$("#fader > div:gt(0)").hide();

setInterval(function() {
  $('#fader > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#fader');
}, 2000);
});
*/

/*$(document).ready(function(){
$(function() {
    $('#fader div:not(:first)').hide();

    var pause = false;
    
    function fadeNext() {
        $('#fader div').first().fadeOut().appendTo($('#fader'));
        $('#fader div').first().fadeIn();
    }

    $('#fader, .button').hover(function() {
        pause = true;
    },function() {
        pause = false;
    });

    function doRotate() {
        if(!pause) {
            fadeNext();
        }    
    }
    
    var rotate = setInterval(doRotate, 4000);
});
});*/