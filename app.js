$(document).ready(function(){

	var inputs = $("#main form").find('input');

	inputs.each(function(i){
		console.log($(this).prop('tagName'))
	});

	var tool_bar = '<div id="tool_bar"></div>';
	$("#main form").prepend(tool_bar)
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
	$("#tool_bar").prepend(controles)

	$('body').on('click',".una_fila_una_columna",function(){
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-12 gris"></div>'+equis+'</div>';
		$("#tool_bar").append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});
			
	});
	$('body').on('click',".una_fila_dos_columna",function(){
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-6 gris"></div><div class="col-md-6 gris"></div>'+equis+'</div>';
		$("#tool_bar").append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');

		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_tres_columna",function(){
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-4 gris"></div><div class="col-md-4 gris"></div><div class="col-md-4 gris"></div>'+equis+'</div>';
		$("#tool_bar").append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');

		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_cuatro_columna",function(){
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-3 gris"></div><div class="col-md-3 gris"></div><div class="col-md-3 gris"></div><div class="col-md-3 gris"></div>'+equis+'</div>';
		$("#tool_bar").append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});

	$('body').on('click',".una_fila_cinco_columna",function(){
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div>'+equis+'</div>';
		$("#tool_bar").append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});

	$('body').on('click',".una_fila_seis_columna",function(){
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div><div class="col-md-2 gris"></div>'+equis+'</div>';
		$("#tool_bar").append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_siete_columna",function(){
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div>'+equis+'</div>';
		$("#tool_bar").append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_ocho_columna",function(){
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div>'+equis+'</div>';
		$("#tool_bar").append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_nueve_columna",function(){
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div>'+equis+'</div>';
		$("#tool_bar").append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_diez_columna",function(){
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div>'+equis+'</div>';
		$("#tool_bar").append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_once_columna",function(){
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div>'+equis+'</div>';
		$("#tool_bar").append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",

		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_doce_columna",function(){
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div><div class="col-md-1 gris"></div>'+equis+'</div>';
		$("#tool_bar").append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	draggable.appendTo(droppable);
		    }
		});		
	});
	$('body').on('click',".una_fila_ochocuatro_columna",function(){
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-8 gris"></div><div class="col-md-4 gris"></div>'+equis+'</div>';
		$("#tool_bar").append(div);
		$( ".gris" ).droppable({
		   // accept: ".control-group",
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	console.log('soltaron algo por aqui')
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