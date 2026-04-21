// JavaScript Document

function hidetext() {
	$("#hidden_biography").slideToggle("slow");
}


function changebuttontext(){
	$("#biographybutton").text($("#biographybutton").text() == 'Curriculum Vitae' ? 'Hide Curriculum' : 'Curriculum Vitae');
}

/*
function changebuttontext() {
  $("#biographybutton").toggle(function() {
    $(this).text('Hide Content');
  }, function() {
    $(this).text('show Content');
  });

}
*/

/*
$(document).ready(function() {
	
	$("#biographybutton").show();

	$("#biographybutton").toggle(function() {
        $(this).text('Curriculum Vitae');
    }, function() {
        $(this).text('Curriculum Vitae');
    }).click(function(){
        $("#hidden_biography").slideToggle("fast");
    });
*/

/*
	$("#offerbutton4").toggle(function() {
        $(this).text('Less Information');
    }, function() {
        $(this).text('More Information');
    }).click(function(){
        $("#hidden_offer4").slideToggle("fast");
    });

	$("#offerbutton3").toggle(function() {
        $(this).text('Less Information');
    }, function() {
        $(this).text('More Information');
    }).click(function(){
        $("#hidden_offer3").slideToggle("fast");
    });

	$("#offerbutton4").toggle(function() {
        $(this).text('Less Information');
    }, function() {
        $(this).text('More Information');
    }).click(function(){
        $("#hidden_offer4").slideToggle("fast");
    });

	$("#offerbutton5").toggle(function() {
        $(this).text('Less Information');
    }, function() {
        $(this).text('More Information');
    }).click(function(){
        $("#hidden_offer5").slideToggle("fast");
    });

	$("#offerbutton6").toggle(function() {
        $(this).text('Less Information');
    }, function() {
        $(this).text('More Information');
    }).click(function(){
        $("#hidden_offer6").slideToggle("fast");
    });

	$("#offerbutton7").toggle(function() {
        $(this).text('Less Information');
    }, function() {
        $(this).text('More Information');
    }).click(function(){
        $("#hidden_offer7").slideToggle("fast");
    });

	$("#offerbutton8").toggle(function() {
        $(this).text('Less Information');
    }, function() {
        $(this).text('More Information');
    }).click(function(){
        $("#hidden_offer8").slideToggle("fast");
    });

	$("#offerbutton9").toggle(function() {
        $(this).text('Less Information');
    }, function() {
        $(this).text('More Information');
    }).click(function(){
        $("#hidden_offer9").slideToggle("fast");
    });
*/
