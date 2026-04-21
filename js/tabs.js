(function($) {

    $("#ntabcontent").find('#ntabtwo').hide();
    $("#ntabcontent").find('#ntabthree').hide();
    $("#ntabcontent").find('#ntabfour').hide();
    $("#ntabcontent").find('#ntabfive').hide();
	
	var tabs =  $(".ntabs li a");
	var tabcont = $(".tab-pane.fade");
  
	tabs.click(function() {
		var content = this.hash.replace('/','');		
		tabs.removeClass("active");
		$(this).addClass("active");
		tabcont.removeClass("in active");
		$(content).addClass("in active");
		/*alert($(content).attr("class"));*/
    $("#ntabcontent").find('#ntabone').hide();
    $("#ntabcontent").find('#ntabtwo').hide();
    $("#ntabcontent").find('#ntabthree').hide();
    $("#ntabcontent").find('#ntabfour').hide();
    $("#ntabcontent").find('#ntabfive').hide();
	
	/*$(".tab-pane.fade").hide();*/
	
	/*alert($(".tab-pane.fade.in.active").attr("id"));*/
	/*tabcont.getElementsByClassName("tab-pane fade in active").fadeIn(200);*/
    /*$("#ntabcontent").find('div').hide();*/
    $(".tab-pane.fade.in.active").fadeIn(200);
	});

})(jQuery);