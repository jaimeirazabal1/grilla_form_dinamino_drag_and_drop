var tabs_editables = 0;
$(document).ready(function(){
	var tool_bar = '<div id="tool_bar_'+tabs_editables+'" class="tool_bar"></div>';
	var controles = '<ul class="nav nav-tabs">'+
  		'<li role="presentation" class="dropdown">'+
    		'<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Agregar Filas <span class="caret"></span></a>'+
    
    '<ul class="dropdown-menu">'+
    	'<li><a class="una_fila_una_columna">Agregar 1 fila con 1 columna</a></li>'+
    	'<li><a class="una_fila_dos_columna">Agregar 1 fila con 2 columna</a></li>'+
    	'<li><a class="una_fila_tres_columna">Agregar 1 fila con 3 columna</a></li>'+
    	'<li><a class="una_fila_cuatro_columna">Agregar 1 fila con 4 columna</a></li>'+
    	'<li><a class="una_fila_cinco_columna">Agregar 1 fila con 5 columna</a></li>'+
    	'<li><a class="una_fila_seis_columna">Agregar 1 fila con 6 columna</a></li>'+
    	'<li><a class="una_fila_siete_columna">Agregar 1 fila con 7 columna</a></li>'+
    	'<li><a class="una_fila_ocho_columna">Agregar 1 fila con 8 columna</a></li>'+
    	'<li><a class="una_fila_nueve_columna">Agregar 1 fila con 9 columna</a></li>'+
    	'<li><a class="una_fila_diez_columna">Agregar 1 fila con 10 columna</a></li>'+
    	'<li><a class="una_fila_once_columna">Agregar 1 fila con 11 columna</a></li>'+
    	'<li><a class="una_fila_doce_columna">Agregar 1 fila con 12 columna</a></li>'+
    	'<li><a class="una_fila_ochocuatro_columna">Agregar una columna de 8 y otra de 4</a></li>'+
    '</ul>'+
  '</li>'+
'</ul>';

	/*codigo para los tabs*/
	$(".tabs-container").find("a").append("&nbsp;&nbsp;<button class='btn btn-success btn-xs btn_agregar_tabs'>+</button>");
	$("body").on("click",".btn_agregar_tabs",function(){
		tabs_editables++;
		$(".tabs-container ul").eq(0).find("li.active").removeClass('active');
		$(".tabs-container ul").eq(0).append("<li class='active'><a data-toggle='tab' id='"+tabs_editables+"' class='tab_editable_"+tabs_editables+"' contenteditable='true'>Escribe el Nombre aqui</a></li>");
		$(".tab-content").append("<div id='' class='tab-pane content_tab_"+tabs_editables+"'><div class='panel-body'><h1>Contenido del tab "+tabs_editables+"</h1></div></div>")
		tool_bar_dinamic = '<div id="tool_bar_'+tabs_editables+'" class="tool_bar"></div>';
		$(".content_tab_"+tabs_editables+" .panel-body").append(tool_bar_dinamic);
		$('#tool_bar_'+tabs_editables).append(controles)
		$("#"+tabs_editables).droppable({
		    activeClass: "ui-state-highlight",
		    drop: function (event, ui) {
		        $(this).attr("id")
		        $(ui.draggable).remove()
		        $(".content_tab_"+tabs_editables+" .panel-body").append('<div class="control-group" data-drop="true">'+ui.draggable.html()+'</div>')
		        //$(".tabs-container").tabs("refresh");
		        $('.control-group').draggable();
		    }
		});
	});

	$("body").on('keyup', '[contenteditable]', function() {
	    $(this).attr("href","#tab"+$(this).text().replace(/ /g,"_"));
	    $(".content_tab_"+$(this).attr("id")).attr("id","tab"+$(this).text().replace(/ /g,"_"))
	});
	$("body").on('blur', '[contenteditable]', function() {
	    $(this).attr("contenteditable",false)
	});
	var inputs = $("#main form").find('input');

	inputs.each(function(i){
		console.log($(this).prop('tagName'))
	});


	$("#tabDatos_Generales").prepend(tool_bar);

	$("#tool_bar_"+tabs_editables).prepend(controles)

	$('body').on('click',".una_fila_una_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-12 gris"></div>'+equis+'</div>';
		$("#tool_bar_"+id_tab).append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	$(this).parent().find('.close').remove();
		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});
			
	});
	$('body').on('click',".una_fila_dos_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];

		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-6 gris"></div><div class="col-md-6 gris"></div>'+equis+'</div>';
		$("#tool_bar_"+id_tab).append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');

		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_tres_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];

		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-4 gris"></div><div class="col-md-4 gris"></div><div class="col-md-4 gris"></div>'+equis+'</div>';
		$("#tool_bar_"+id_tab).append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');

		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_cuatro_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];

		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-3 gris"></div><div class="col-md-3 gris"></div><div class="col-md-3 gris"></div><div class="col-md-3 gris"></div>'+equis+'</div>';
		$("#tool_bar_"+id_tab).append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});

	$('body').on('click',".una_fila_cinco_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];

		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div>'+equis+'</div>';
		$("#tool_bar_"+id_tab).append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});

	$('body').on('click',".una_fila_seis_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];

		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div>'+equis+'</div>';
		$("#tool_bar_"+id_tab).append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_siete_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];

		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div>'+equis+'</div>';
		$("#tool_bar_"+id_tab).append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_ocho_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];

		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div>'+equis+'</div>';
		$("#tool_bar_"+id_tab).append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_nueve_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];

		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div>'+equis+'</div>';
		$("#tool_bar_"+id_tab).append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_diez_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];

		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div>'+equis+'</div>';
		$("#tool_bar_"+id_tab).append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_once_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];

		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div>'+equis+'</div>';
		$("#tool_bar_"+id_tab).append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",

		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_doce_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];

		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div>'+equis+'</div>';
		$("#tool_bar_"+id_tab).append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_ochocuatro_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];

		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-8 gris"></div><div class="col-md-4 gris"></div>'+equis+'</div>';
		$("#tool_bar_"+id_tab).append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$("body").on("click",".close",function(){
		$(this).parent().remove();
	});


	$('.control-group').draggable();
});