
$(document).ready(function () {
	function frame(){
		var numChars = $("#input").val().length;
			if (numChars>0) {
				var targetString = $("#input").val();
				var str = $("#input").data("source");
				for (var i = 0; i < str.length; i++) {
					if(~str[i].indexOf(targetString) && $("#autoComplete").show()){
						$("#drop").append('<li><a href="#">'+str[i]+'</a></li>');
					}
			}
		}
	}
				//PRESSKEY
	$("#input").on('keyup', function(e){
		$("#autoComplete").hide();	
		$("#drop").empty();
		frame();
	});
				//CLICK
	$('ul').on('click', 'li', function(){
 		var linkText = $(this).text();
 		$("#input").val(linkText);
 		$("#autoComplete").hide();	
		$("#drop").empty();
	});
				//FOCUS
	$("#input").on('focus', function(){
		$("#autoComplete").hide();	
		$("#drop").empty();
		frame();
	});
				//FOCUSOUT
	var field_over=false; 
    var list_vis_hid=function (){
        if (field_over){
            $("#autoComplete").show()
        }
        else{
            $("#autoComplete").hide()
        }
    };
	$("#wrapper").hover(function (){
            field_over=true;
        },
        function (){
            field_over=false;
    });
	$("#input").blur(list_vis_hid);
});