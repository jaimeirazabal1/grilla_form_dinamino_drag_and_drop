$(document).ready(function(){

	$(".control-group").draggable();

	$("input[type='text'],.date").resizable({
		  start: function( event, ui ) {
		    $(ui.helper).height(ui.originalSize.height+30);
		    $(ui.helper).width(ui.originalSize.width+30);
		 }
	});
});