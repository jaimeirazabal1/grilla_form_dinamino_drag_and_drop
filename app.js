$(function(){
    $(".dropdown-menu > li > a.trigger").on("click",function(e){
        var current=$(this).next();
        var grandparent=$(this).parent().parent();
        if($(this).hasClass('left-caret')||$(this).hasClass('right-caret'))
            $(this).toggleClass('right-caret left-caret');
        grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
        grandparent.find(".sub-menu:visible").not(current).hide();
        current.toggle();
        e.stopPropagation();
    });
    $(".dropdown-menu > li > a:not(.trigger)").on("click",function(){
        var root=$(this).closest('.dropdown');
        root.find('.left-caret').toggleClass('right-caret left-caret');
        root.find('.sub-menu:visible').hide();
    });
});
var tabs_editables = 0;
var herramientas_array=[
    {
    "nombre":"Datepicker", 
    "html":"<div class='control-group' data-drop='true'><label class='control-label'>Etiqueta</label><div class='controls'><input class='form-control' id='Controller' name='Controller' type='text' value='Sin valor'></div></div>",
    "icono":"https://image.freepik.com/iconos-gratis/15-de-mayo-la-pagina-del-calendario-simbolo-interfaz_318-58187.jpg",
    "tooltip":"Plugin para seleccionar una fecha",
    "categoria":"Fechas"
    },
    {
    "nombre":"Datepicker 2", 
    "html":"<div class='control-group' data-drop='true'><label class='control-label'>Etiqueta</label><div class='controls'><input class='form-control' id='Controller' name='Controller' type='text' value='Sin valor'></div></div>",
    "icono":"https://image.freepik.com/iconos-gratis/15-de-mayo-la-pagina-del-calendario-simbolo-interfaz_318-58187.jpg",
    "tooltip":"Plugin para seleccionar una fecha",
    "categoria":"Fechas"
    },
    {
    "nombre":"Tagsinput", 
    "html":"<div class='control-group' data-drop='true'><label class='control-label'>Tags</label><div class='controls'><input class='form-control' id='Controller' name='Controller' type='text' value='Sin valor'></div></div>",
    "icono":"https://maxcdn.icons8.com/Android_L/PNG/512/Shopping/tags-512.png",
    "tooltip":"Plugin para insertar tags",
    "categoria":"Autocompletes"
    },
    {
    "nombre":"Tagsinput 2", 
    "html":"<div class='control-group' data-drop='true'><label class='control-label'>Tags</label><div class='controls'><input class='form-control' id='Controller' name='Controller' type='text' value='Sin valor'></div></div>",
    "icono":"https://maxcdn.icons8.com/Android_L/PNG/512/Shopping/tags-512.png",
    "tooltip":"Plugin para insertar tags",
    "categoria":"Autocompletes"
    },
    {
    "nombre":"Editor", 
    "html":"<div class='control-group' data-drop='true'><label class='control-label'>Editor</label><div class='controls'><input class='form-control' id='Controller' name='Controller' type='text' value='Sin valor'></div></div>",
    "icono":"http://findicons.com/files/icons/1376/smoothicons_7/128/html_editor.png",
    "tooltip":"Plugin para editor de texto",
    "categoria":"Editores"
    },
        {
    "nombre":"Editor2", 
    "html":"<div class='control-group' data-drop='true'><label class='control-label'>Editor</label><div class='controls'><input class='form-control' id='Controller' name='Controller' type='text' value='Sin valor'></div></div>",
    "icono":"http://findicons.com/files/icons/1376/smoothicons_7/128/html_editor.png",
    "tooltip":"Plugin para editor de texto",
    "categoria":"Editores"
    }
];
var plugins_categories = [];
function buscarCategoria(categoria,plugins_categories){
	for (var i = 0; i < plugins_categories.length; i++) {
		if (plugins_categories[i].categoria == categoria) {
			return true;
		}
	}
	return false;
}
$(document).ready(function(){
	 $('.dropdown-submenu a.test').on("click", function(e){
	    $(this).next('ul').toggle();
	    e.stopPropagation();
	    e.preventDefault();
	  });
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
		  '</li>';
	var tools_array = '<li role="presentation" class="dropdown">'+
    		'<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Agregar Plugins<span class="caret"></span></a>'+
    
		    '<ul class="dropdown-menu">';

		    	for (var i = 0; i < herramientas_array.length ; i++) {
		    		console.log(herramientas_array[i].categoria,buscarCategoria(herramientas_array[i].categoria,plugins_categories))
		    		if (buscarCategoria(herramientas_array[i].categoria,plugins_categories)) {
		    			//$('.'+herramientas_array[i].categoria).append('<li><a href="#">'+herramientas_array[i].categoria+'</a></li>')
		    		}else{
		    			plugins_categories.push({
		    				categoria : herramientas_array[i].categoria
		    			});
		    			tools_array+='<li class="dropdown-submenu">';
		    				tools_array+='<a href="#" class="test" tabindex="-1">'+herramientas_array[i].categoria+' <span class="caret"></span></a>';
		    				tools_array+='<ul class="dropdown-menu'+herramientas_array[i].categoria+'">';
		    					for (var j = 0; j < herramientas_array.length ; j++) {
		    						if ( herramientas_array[j].categoria == herramientas_array[i].categoria) {
		    							tools_array+='<li><p>&nbsp;&nbsp;<img src="'+herramientas_array[j].icono+'" nombre="'+herramientas_array[j].nombre+'" class="plugin_tool" width="20px" >&nbsp;&nbsp;<a href="#">'+herramientas_array[j].nombre+'</a></p></li>';
		    						}
		    					}
		    				tools_array+='</ul>';
	                    tools_array+='</li>';
		    		}
		    		//tools_array+='<li title="'+herramientas_array[i].tooltip+'" ><img width="20" nombre="'+herramientas_array.nombre+'" class="plugin_tool pull-left" src="'+herramientas_array[i].icono+'"><p style="padding:6px" nombre="'+herramientas_array[i].nombre+'">'+herramientas_array[i].nombre+'&nbsp;&nbsp;</p></li>';
		    	}
		    tools_array +='</ul>';
		  tools_array +='</li>';
		tools_array +='</ul>';

	controles = controles+tools_array;
	
 

	/*codigo para los tabs*/
	$(".tabs-container").find("a").append("&nbsp;&nbsp;<button class='btn btn-success btn-xs btn_agregar_tabs'>+</button>");
	$("body").on("click",".btn_agregar_tabs",function(){
		tabs_editables++;
		boton_cerrar = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>';
		$(".tabs-container ul").eq(0).find("li.active").removeClass('active');
		$(".tabs-container ul").eq(0).append("<li class='active'><a data-toggle='tab' id='"+tabs_editables+"' class='tab_editable_"+tabs_editables+"' contenteditable='true'>Escribe el Nombre aqui</a>"+boton_cerrar+"</li>");
		$(".tab-content").append("<div id='' class='tab-pane content_tab_"+tabs_editables+"'><div class='panel-body'><h1 contenteditable='true'>Contenido del tab "+tabs_editables+"</h1></div></div>")
		tool_bar_dinamic = '<div id="tool_bar_'+tabs_editables+'" class="tool_bar"></div>';
		$(".content_tab_"+tabs_editables+" .panel-body").append(tool_bar_dinamic);
		$('#tool_bar_'+tabs_editables).append(controles);

		$('.plugin_tool').draggable({
			helper: "clone"
		});		

		$("#"+tabs_editables).droppable({
		    activeClass: "ui-state-highlight",
		    drop: function (event, ui) {
		        console.log();
		        $(ui.draggable).remove()
		        $(".content_tab_"+$(this).attr('class').split(" ")[0].split("_")[2]+" .panel-body").append('<div class="control-group" data-drop="true">'+ui.draggable.html()+'</div>')
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

	$("#tool_bar_"+tabs_editables).prepend(controles);

	$('.plugin_tool').draggable();

	$('body').on('click',".una_fila_una_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];
		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-12 gris"></div>'+equis+'</div>';
		$("#tool_bar_"+id_tab).append(div);
		$( ".gris" ).droppable({
		   hoverClass: "hover",
		    drop: function( event, ui ) {
		    	id = $(this).parent().parent().attr('id').split('_')[2];
		    	$(".tab_editable_"+id).parent().find('.close').remove();
		    	$(this).parent().find('.close').remove();
		    	
		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	// Move draggable into droppable
		       	if ($(ui.draggable).hasClass('plugin_tool')) {
			       	for (var i = 0; i < herramientas_array.length; i++) {
			       		if (herramientas_array[i].nombre == $(ui.draggable).attr('nombre')) {

		       				$(droppable).append(herramientas_array[i].html);
			       		}
			       	}

		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
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
		    	id = $(this).parent().parent().attr('id').split('_')[2];
		    	$(".tab_editable_"+id).parent().find('.close').remove();
		    	// console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');

		       	if ($(ui.draggable).hasClass('plugin_tool')) {
			       	for (var i = 0; i < herramientas_array.length; i++) {
			       		if (herramientas_array[i].nombre == $(ui.draggable).attr('nombre')) {

		       				$(droppable).append(herramientas_array[i].html);
			       		}
			       	}

		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
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
		    	id = $(this).parent().parent().attr('id').split('_')[2];
		    	$(".tab_editable_"+id).parent().find('.close').remove();
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');

		       	if ($(ui.draggable).hasClass('plugin_tool')) {
			       	for (var i = 0; i < herramientas_array.length; i++) {
			       		if (herramientas_array[i].nombre == $(ui.draggable).attr('nombre')) {

		       				$(droppable).append(herramientas_array[i].html);
			       		}
			       	}

		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
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
		    	id = $(this).parent().parent().attr('id').split('_')[2];
		    	$(".tab_editable_"+id).parent().find('.close').remove();
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	if ($(ui.draggable).hasClass('plugin_tool')) {
			       	for (var i = 0; i < herramientas_array.length; i++) {
			       		if (herramientas_array[i].nombre == $(ui.draggable).attr('nombre')) {

		       				$(droppable).append(herramientas_array[i].html);
			       		}
			       	}

		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
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
		    	id = $(this).parent().parent().attr('id').split('_')[2];
		    	$(".tab_editable_"+id).parent().find('.close').remove();
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	if ($(ui.draggable).hasClass('plugin_tool')) {
			       	for (var i = 0; i < herramientas_array.length; i++) {
			       		if (herramientas_array[i].nombre == $(ui.draggable).attr('nombre')) {

		       				$(droppable).append(herramientas_array[i].html);
			       		}
			       	}

		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
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
		    	id = $(this).parent().parent().attr('id').split('_')[2];
		    	$(".tab_editable_"+id).parent().find('.close').remove();
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	if ($(ui.draggable).hasClass('plugin_tool')) {
			       	for (var i = 0; i < herramientas_array.length; i++) {
			       		if (herramientas_array[i].nombre == $(ui.draggable).attr('nombre')) {

		       				$(droppable).append(herramientas_array[i].html);
			       		}
			       	}

		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
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
		    	id = $(this).parent().parent().attr('id').split('_')[2];
		    	$(".tab_editable_"+id).parent().find('.close').remove();
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	if ($(ui.draggable).hasClass('plugin_tool')) {
			       	for (var i = 0; i < herramientas_array.length; i++) {
			       		if (herramientas_array[i].nombre == $(ui.draggable).attr('nombre')) {

		       				$(droppable).append(herramientas_array[i].html);
			       		}
			       	}

		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
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
		    	id = $(this).parent().parent().attr('id').split('_')[2];
		    	$(".tab_editable_"+id).parent().find('.close').remove();
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	if ($(ui.draggable).hasClass('plugin_tool')) {
			       	for (var i = 0; i < herramientas_array.length; i++) {
			       		if (herramientas_array[i].nombre == $(ui.draggable).attr('nombre')) {

		       				$(droppable).append(herramientas_array[i].html);
			       		}
			       	}

		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
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
		    	id = $(this).parent().parent().attr('id').split('_')[2];
		    	$(".tab_editable_"+id).parent().find('.close').remove();
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	if ($(ui.draggable).hasClass('plugin_tool')) {
			       	for (var i = 0; i < herramientas_array.length; i++) {
			       		if (herramientas_array[i].nombre == $(ui.draggable).attr('nombre')) {

		       				$(droppable).append(herramientas_array[i].html);
			       		}
			       	}

		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
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
		    	id = $(this).parent().parent().attr('id').split('_')[2];
		    	$(".tab_editable_"+id).parent().find('.close').remove();
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	if ($(ui.draggable).hasClass('plugin_tool')) {
			       	for (var i = 0; i < herramientas_array.length; i++) {
			       		if (herramientas_array[i].nombre == $(ui.draggable).attr('nombre')) {

		       				$(droppable).append(herramientas_array[i].html);
			       		}
			       	}

		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
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
		    	id = $(this).parent().parent().attr('id').split('_')[2];
		    	$(".tab_editable_"+id).parent().find('.close').remove();
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	if ($(ui.draggable).hasClass('plugin_tool')) {
			       	for (var i = 0; i < herramientas_array.length; i++) {
			       		if (herramientas_array[i].nombre == $(ui.draggable).attr('nombre')) {

		       				$(droppable).append(herramientas_array[i].html);
			       		}
			       	}

		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
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
		    	id = $(this).parent().parent().attr('id').split('_')[2];
		    	$(".tab_editable_"+id).parent().find('.close').remove();
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	if ($(ui.draggable).hasClass('plugin_tool')) {
			       	for (var i = 0; i < herramientas_array.length; i++) {
			       		if (herramientas_array[i].nombre == $(ui.draggable).attr('nombre')) {

		       				$(droppable).append(herramientas_array[i].html);
			       		}
			       	}

		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
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
		    	id = $(this).parent().parent().attr('id').split('_')[2];
		    	$(".tab_editable_"+id).parent().find('.close').remove();
		    	console.log('soltaron algo por aqui')
		    	$(this).parent().find('.close').remove();

		       	var droppable = $(this);
		       	var draggable = ui.draggable;
		       	draggable.prop('style','');
		       	if ($(ui.draggable).hasClass('plugin_tool')) {
			       	for (var i = 0; i < herramientas_array.length; i++) {
			       		if (herramientas_array[i].nombre == $(ui.draggable).attr('nombre')) {

		       				$(droppable).append(herramientas_array[i].html);
			       		}
			       	}

		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
		    }
		});		
	});
	$("body").on("click",".close",function(){
		$(this).parent().remove();
	});
	var modal_cambio_input = '<div class="modal fade" id="myModalCambioInput" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> <div class="modal-dialog modal-lg" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title" id="myModalLabel">Modal title</h4> </div> <div class="modal-body" id="body_cambio_input"></div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button> <button type="button" class="btn btn-primary">Guardar</button> </div> </div> </div> </div>';
	$("#main").append(modal_cambio_input)
	$('.control-group').draggable();

	$('body').on("contextmenu",".control-group",function(e){
		e.preventDefault();
		$('#myModalCambioInput').modal('show');
		var label = $(this).find(".control-label");
		$("#myModalLabel").text(label.text());
		body = "";

		type = $(this).find(".controls").eq(0).children().eq(0).attr("type");
		tagName = $(this).find(".controls").eq(0).children().eq(0).prop("tagName");
		console.log(type,tagName)
		if (type=="text" && tagName == "INPUT") {
			input = $(this).find(".controls").eq(0).children().eq(0);
				body += "<div class='col-md-6 panel panel-default'>"+
							"<center><h3>Input Type</h3></center>"+
							"<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' checked class='text_cambio'> Text</label>"+
							"</div>";
					body += "<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' class='textarea_cambio'> Textarea</label>"+
							"</div>";
					body += "<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' class='select_cambio'> Select</label>"+
							"</div>";
					body += "<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' class='date_cambio'> Date</label>"+
							"</div>"+
						"</div>";
				body += "<div class='col-md-6 panel panel-default'>"+
							"<center><span style='padding:10px;font-size:16px;font-weight: 600;margin-top:10px'>Propiedades</span>&nbsp;&nbsp;<button class='btn btn-primary btn-xs' id='add_propiedades' style='margin-top:4px;'>+</button></center>"+
							"<div class='panel_propiedades'>"+

							"</div>"+
						"<br></div>";

		}
		$("#body_cambio_input").html("<div class='row'>"+body+"</div>");
			nueva = "<div class='row'>"+
				"<div class='col-xs-6'><input type='text' placeholder='Class' value='class' class='form-control propiedad_nombre'></div>"+
				"<div class='col-xs-6'><input type='text' placeholder='Valor Class' value='"+input.attr("class")+"' class='form-control propiedad_valor'></div>"+
			"</div>";
			$(".panel_propiedades").append(nueva);
			nueva = "<div class='row'>"+
				"<div class='col-xs-6'><input type='text' placeholder='Class' value='id' class='form-control propiedad_nombre'></div>"+
				"<div class='col-xs-6'><input type='text' placeholder='Valor Class' value='"+input.attr("id")+"' class='form-control propiedad_valor'></div>"+
			"</div>";
			$(".panel_propiedades").append(nueva);
			nueva = "<div class='row'>"+
				"<div class='col-xs-6'><input type='text' placeholder='Class' value='name' class='form-control propiedad_nombre'></div>"+
				"<div class='col-xs-6'><input type='text' placeholder='Valor Class' value='"+input.attr("name")+"' class='form-control propiedad_valor'></div>"+
			"</div>";
			$(".panel_propiedades").append(nueva);
	})
	$("body").on("click","#add_propiedades",function(){
		nueva = "<div class='row'>"+
			"<div class='col-xs-6'><input type='text' placeholder='Nombre Propiedad' class='form-control propiedad_nombre'></div>"+
			"<div class='col-xs-6'><input type='text' placeholder='Valor Propiedad' class='form-control propiedad_valor'></div>"+
		"</div>"
		$(".panel_propiedades").append(nueva);
	});

	// $(".dropdown-menu li").hover(function(e){
	// 	console.log($(this).css('position'));
	// 	$(".sub-menu").css("top",$(this).css('top')-10)
	// })
});