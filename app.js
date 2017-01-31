

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
var controlGroup = '';
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
	$("body").on("click",".der",function(){
		var clickada = $('body').find(".clickada");
		var cantidad = $(this).attr("id").split("_");
		clickada.after("<div class='col-md-"+cantidad[0]+" gris'></div>")
		// $("").inserBefore(clickada)
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
		return false;
	});
	$("body").on("click",".iz",function(){
		var clickada = $('body').find(".clickada");
		var cantidad = $(this).attr("id").split("_");

		clickada.before("<div class='col-md-"+cantidad[0]+" gris'></div>");
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
		// $("").inserBefore(clickada)
		return false;
	});	
	$("body").on("click",".arri",function(){
		var clickada = $('body').find(".clickada");
		var cantidad = $(this).attr("id").split("_");
		var boton = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">×</span> </button>';
		switch(parseInt(cantidad[0])){
			case 1:
				clickada.parent().before("<div class='row'><div class='col-md-12 gris'></div>"+boton+"</div>");
			break;
			case 2:
				clickada.parent().before("<div class='row'><div class='col-md-6 gris'></div><div class='col-md-6 gris'></div>"+boton+"</div>");
			break;
			case 3:
				clickada.parent().before("<div class='row'><div class='col-md-4 gris'></div><div class='col-md-4 gris'></div><div class='col-md-4 gris'></div>"+boton+"</div>");
			break;
			case 4:
				clickada.parent().before("<div class='row'><div class='col-md-3 gris'></div><div class='col-md-3 gris'></div><div class='col-md-3 gris'></div><div class='col-md-3 gris'></div>"+boton+"</div>");
			break;
			case 5:
				clickada.parent().before("<div class='row'><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div>"+boton+"</div>");
			break;
			case 6:
				clickada.parent().before("<div class='row'><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div>"+boton+"</div>");
			break;
			default:
			console.log("NO HACE NADA");
			break;
		}
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
		// $("").inserBefore(clickada)
		return false;
	});	
	$("body").on("click",".aba",function(){
		var clickada = $('body').find(".clickada");
		var cantidad = $(this).attr("id").split("_");
		var boton = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">×</span> </button>';

		switch(parseInt(cantidad[0])){
			case 1:
				clickada.parent().after("<div class='row'><div class='col-md-12 gris'></div>"+boton+"</div>");
			break;
			case 2:
				clickada.parent().after("<div class='row'><div class='col-md-6 gris'></div><div class='col-md-6 gris'></div>"+boton+"</div>");
			break;
			case 3:
				clickada.parent().after("<div class='row'><div class='col-md-4 gris'></div><div class='col-md-4 gris'></div><div class='col-md-4 gris'></div>"+boton+"</div>");
			break;
			case 4:
				clickada.parent().after("<div class='row'><div class='col-md-3 gris'></div><div class='col-md-3 gris'></div><div class='col-md-3 gris'></div><div class='col-md-3 gris'></div>"+boton+"</div>");
			break;
			case 5:
				clickada.parent().after("<div class='row'><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div>"+boton+"</div>");
			break;
			case 6:
				clickada.parent().after("<div class='row'><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div><div class='col-md-2 gris'></div>"+boton+"</div>");
			break;
			default:
			console.log("NO HACE NADA");
			break;
		}
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
		// $("").inserBefore(clickada)
		return false;
	});	
	$("body").on("click",".eliminar_columna",function(){
		// alert("??")
		var clickada = $('body').find(".clickada");
		var cantidad = clickada.parent().find('.gris').length;
		console.log(cantidad)
		if (cantidad == 1) {
			clickada.parent().remove();
		}else{
			clickada.remove();

		}
		return false;
	});

	var menu = '<ul class="dropdown-menu contextmenu multi-level" aria-labelledby="dLabel" style="position:absolute;display:none">'+
   		'<li class="dropdown-submenu"><a class="menu_a_la_derecha dropdown-toggle" tabindex="-1"  data-toggle="dropdown"  href="#" role="button" aria-haspopup="true" aria-expanded="false">Agregar columna a la derecha  </a>'+
	   		'<ul class="dropdown-menu">'+
	     		'<li><a class=" der" id="1_espacio">Columna de 1 espacio</a></li>'+
	     		'<li><a class=" der" id="2_espacio">Columna de 2 espacios</a></li>'+
	     		'<li><a class=" der" id="3_espacio">Columna de 3 espacios</a></li>'+
	     		'<li><a class=" der" id="4_espacio">Columna de 4 espacios</a></li>'+
	     		'<li><a class=" der" id="5_espacio">Columna de 5 espacios</a></li>'+
	     		'<li><a class=" der" id="6_espacio">Columna de 6 espacios</a></li>'+
	    	'</ul>'+
   		'</li>'+
   		'<li class="dropdown-submenu"><a class="menu_a_la_izquierda dropdown-toggle" tabindex="-1"  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Agregar columna a la izquierda</a>'+
	   		'<ul class="dropdown-menu">'+
	     		'<li><a class="iz" id="1_espacio">Columna de 1 espacio</a></li>'+
	     		'<li><a class="iz" id="2_espacio">Columna de 2 espacios</a></li>'+
	     		'<li><a class="iz" id="3_espacio">Columna de 3 espacios</a></li>'+
	     		'<li><a class="iz" id="4_espacio">Columna de 4 espacios</a></li>'+
	     		'<li><a class="iz" id="5_espacio">Columna de 5 espacios</a></li>'+
	     		'<li><a class="iz" id="6_espacio">Columna de 6 espacios</a></li>'+
	    	'</ul>'+
   		'</li>'+
   		'<li class="dropdown-submenu"><a class="menu_a_la_arriba dropdown-toggle" tabindex="-1"  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Agregar fila arriba</a>'+
	   		'<ul class="dropdown-menu">'+
	     		'<li><a class="arri" id="1_espacio">Columna de 1 espacio</a></li>'+
	     		'<li><a class="arri" id="2_espacio">Columna de 2 espacios</a></li>'+
	     		'<li><a class="arri" id="3_espacio">Columna de 3 espacios</a></li>'+
	     		'<li><a class="arri" id="4_espacio">Columna de 4 espacios</a></li>'+
	     		'<li><a class="arri" id="5_espacio">Columna de 5 espacios</a></li>'+
	     		'<li><a class="arri" id="6_espacio">Columna de 6 espacios</a></li>'+
	    	'</ul>'+
   		'</li>'+
   		'<li class="dropdown-submenu"><a class="menu_a_la_abajo dropdown-toggle" tabindex="-1"  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Agregar fila abajo</a>'+
	   		'<ul class="dropdown-menu">'+
	     		'<li><a class="aba" id="1_espacio">Columna de 1 espacio</a></li>'+
	     		'<li><a class="aba" id="2_espacio">Columna de 2 espacios</a></li>'+
	     		'<li><a class="aba" id="3_espacio">Columna de 3 espacios</a></li>'+
	     		'<li><a class="aba" id="4_espacio">Columna de 4 espacios</a></li>'+
	     		'<li><a class="aba" id="5_espacio">Columna de 5 espacios</a></li>'+
	     		'<li><a class="aba" id="6_espacio">Columna de 6 espacios</a></li>'+
	    	'</ul>'+
   		'</li>'+
   		'<li class="eliminar_columna"><a class=" bg-danger "> <span class="glyphicon glyphicon-remove"></span> Eliminar  </a></li>'+
  		'</ul>';
  	$('body').append(menu);
  	var $contextMenu = $(".contextmenu");

	$("body").on("contextmenu",".gris",function(e){
		$(this).addClass("clickada");
		$contextMenu.css({
		    display: "block",
		    left: e.pageX,
		    top: e.pageY
	   	});
		return false;
	});
	$("body").on("click",function(){
		// console.log("caemos?")
		// setTimeout(function(){

		// 	$('body').find('.clickada').removeClass('clickada');
		
		// },1000)
		$contextMenu.hide();
	})
	$contextMenu.on("click", "a", function() {
	   $contextMenu.hide();
	   setTimeout(function(){

	   		$('body').find('.clickada').removeClass('clickada');
	   	
	   	},1000)
	});

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
		    		// console.log(herramientas_array[i].categoria,buscarCategoria(herramientas_array[i].categoria,plugins_categories))
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
		$(".tabs-container ul").eq(0).append("<li class='active'><a data-toggle='tab' id='"+tabs_editables+"' class='tab_editable_"+tabs_editables+" tabsita' contenteditable='true'>Escribe el Nombre aqui</a>"+boton_cerrar+"</li>");
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
		        // console.log();
		        $(ui.draggable).remove()
		        $(".content_tab_"+$(this).attr('class').split(" ")[0].split("_")[2]+" .panel-body").append('<div class="control-group" data-drop="true">'+ui.draggable.html()+'</div>')
		        //$(".tabs-container").tabs("refresh");
		        $('.control-group').draggable();
		    }
		});
	});

	$("body").on('keyup', '.tabsita', function() {
		console.log($(this).attr("id"))
		// if (!$(this).attr("id")) {

		    $(this).attr("href","#tab"+$(this).text().replace(/ /g,"_"));
		    $(".content_tab_"+$(this).attr("id")).attr("id","tab"+$(this).text().replace(/ /g,"_"))
		// }
	});
	$("body").on('blur', '.tabsita', function() {
		// if (!$(this).attr("id")) {
	    	$(this).attr("contenteditable",false)
		// }
	});
	var inputs = $("#main form").find('input');

	inputs.each(function(i){
		// console.log($(this).prop('tagName'))
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
	var modal_cambio_input = '<div class="modal fade" id="myModalCambioInput" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> <div class="modal-dialog modal-lg" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title" contenteditable="true" id="myModalLabel">Modal title</h4> </div> <div class="modal-body" id="body_cambio_input"></div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button> <button type="button" class="btn btn-primary" id="guardar_cambio_input">Guardar</button> </div> </div> </div> </div>';
	$("#main").append(modal_cambio_input)
	$('.control-group').draggable();

	$('body').on("contextmenu",".control-group",function(e){
		e.preventDefault();
		select_values = undefined;
		controlGroup = $(this);
		$('#myModalCambioInput').modal('show');
		var label = $(this).find(".control-label");
		$("#myModalLabel").text(label.text());
		body = "";

		type = $(this).find(".controls").eq(0).children().eq(0).attr("type");
		tagName = $(this).find(".controls").eq(0).children().eq(0).prop("tagName");
		if (type=="text" && tagName == "INPUT" || type=="textarea" && tagName == "TEXTAREA") {
			input = $(this).find(".controls").eq(0).children().eq(0);
				body += "<div class='col-md-6 panel panel-default'>"+
							"<center><h3>Input Type</h3></center>";
					if (type == 'text') {

						body +=	"<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' checked value='text' class='text_cambio'> Text</label>"+
							"</div>";
					}else{
						body +=	"<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' value='text' class='text_cambio'> Text</label>"+
							"</div>";
					}
					
					if (tagName == 'TEXTAREA') {
						body += "<div class='textarea_cambio_div'>"+
									"<label><input type='radio' name='text_cambio' checked value='textarea' class='text_cambio'> Textarea</label>"+
								"</div>";
					}else{

						body += "<div class='textarea_cambio_div'>"+
									"<label><input type='radio' name='text_cambio' value='textarea' class='text_cambio'> Textarea</label>"+
								"</div>";
					}
					body += "<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' value='select' class='text_cambio'> Select</label>"+
							"</div>";
					body += "<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' value='date' class='text_cambio'> Date</label>"+
							"</div>"+
						"</div>";
				body += "<div class='col-md-6 panel panel-default'>"+
							"<center><span style='padding:10px;font-size:16px;font-weight: 600;margin-top:10px'>Propiedades</span>&nbsp;&nbsp;<button class='btn btn-primary btn-xs' id='add_propiedades' style='margin-top:4px;'>+</button></center>"+
							"<div class='panel_propiedades'>"+

							"</div>"+
						"<br></div>";

		}
		if ((typeof type == "undefined" && tagName == "SELECT") || (type == "select" && tagName == "SELECT")) {
			
			input = $(this).find(".controls").eq(0).children().eq(0);
			// console.log($(this).find(".controls").eq(0))
			// console.log(input.data());
				body += "<div class='col-md-6 panel panel-default'>"+
							"<center><h3>Input Type</h3></center>";
					
					body +=	"<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' value='text' class='text_cambio'> Text</label>"+
							"</div>";
					
					body += "<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' value='textarea' class='text_cambio'> Textarea</label>"+
							"</div>";
					
					body += "<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' checked value='select' class='text_cambio'> Select</label>"+
							"</div>";
					body += "<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' value='date' class='text_cambio'> Date</label>"+
							"</div>"+
						"</div>";

				body += "<div class='col-md-6 panel panel-default'>"+
							"<center><span style='padding:10px;font-size:16px;font-weight: 600;margin-top:10px'>Propiedades</span>&nbsp;&nbsp;<button class='btn btn-primary btn-xs' id='add_propiedades' style='margin-top:4px;'>+</button></center>"+
							"<div class='panel_propiedades'>"+

							"</div>"+
						"<br></div>";

			select_values = "<div class='row'>";
				select_values += "<div class='col-md-6 panel panel-default panel_options' style='padding-bottom:8px;'>";
				select_values += "<center><span style='padding:10px;font-size:16px;font-weight: 600;margin-top:10px'>Select Options</span>&nbsp;&nbsp;<button class='btn btn-primary btn-xs' id='add_options' style='margin-top:4px;'>+</button></center>";
						input.find('option').each(function(i){
							if ($(this).text()) {
								// console.log('input:',i)
								select_values += "<div class='row'>";
									select_values += "<div class='col-md-4'>";
										select_values += "<input type='text' value='"+$(this).val()+"' class='form-control option_valor'>"
									select_values += "</div>";
									select_values += "<div class='col-md-5'>";
										select_values += "<input type='text' value='"+$(this).text()+"' class='form-control option_texto'>"
									select_values += "</div>";
									select_values += "<div class='col-md-1'>";
										select_values += "<button class='cerrar btn btn-primary btn-xs'>x</button>"
									select_values += "</div>";
								select_values += "</div>";
							}
						})
				select_values += "</div>";
			select_values += "</div>";

			// console.log(select_values)
			

		}

		if (tagName == 'DIV') {
			input = $(this).find(".controls").eq(0).children().eq(0);
				body += "<div class='col-md-6 panel panel-default'>"+
							"<center><h3>Input Type</h3></center>";
					if (type == 'text') {

						body +=	"<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' checked value='text' class='text_cambio'> Text</label>"+
							"</div>";
					}else{
						body +=	"<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' value='text' class='text_cambio'> Text</label>"+
							"</div>";
					}
					
					if (tagName == 'TEXTAREA') {
						body += "<div class='textarea_cambio_div'>"+
									"<label><input type='radio' name='text_cambio' checked value='textarea' class='text_cambio'> Textarea</label>"+
								"</div>";
					}else{

						body += "<div class='textarea_cambio_div'>"+
									"<label><input type='radio' name='text_cambio' value='textarea' class='text_cambio'> Textarea</label>"+
								"</div>";
					}
					body += "<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' value='select' class='text_cambio'> Select</label>"+
							"</div>";
					if (tagName == 'DIV') {
						body += "<div class='textarea_cambio_div'>"+
									"<label><input type='radio' name='text_cambio' checked value='date' class='text_cambio'> Date</label>"+
								"</div>"+
							"</div>";

					}else{
						body += "<div class='textarea_cambio_div'>"+
									"<label><input type='radio' name='text_cambio' value='date' class='text_cambio'> Date</label>"+
								"</div>"+
							"</div>";	
					}
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
			if (typeof input.attr("name") != 'undefined') {

				nueva = "<div class='row'>"+
					"<div class='col-xs-6'><input type='text' placeholder='Class' value='name' class='form-control propiedad_nombre'></div>"+
					"<div class='col-xs-6'><input type='text' placeholder='Valor Class' value='"+input.attr("name")+"' class='form-control propiedad_valor'></div>"+
				"</div>";
				$(".panel_propiedades").append(nueva);
			}

			attributes_select = input.data();

			for (attr in attributes_select) {
				if (attr) {

					nueva = "<div class='row'>"+
						"<div class='col-xs-6'><input type='text' placeholder='Class' value='data-"+attr+"' class='form-control propiedad_nombre'></div>"+
						"<div class='col-xs-6'><input type='text' placeholder='Valor Class' value='"+attributes_select[attr]+"' class='form-control propiedad_valor'></div>"+
					"</div>";
					$(".panel_propiedades").append(nueva);				
				}
			}

		$(".panel_options").parent().remove();
		
			if (typeof select_values != "undefined") {
				// alert("?")
				$("#body_cambio_input").append(select_values);
			}
			

	})
	$("body").on("click","#add_propiedades",function(){
		nueva = "<div class='row'>"+
			"<div class='col-xs-5'><input type='text' placeholder='Propiedad' class='form-control propiedad_nombre'></div>"+
			"<div class='col-xs-6'><input type='text' placeholder='Valor Propiedad' class='form-control propiedad_valor'></div>"+
			"<div class='col-xs-1'><button class='close' onclick='$(this).parent().parent().remove()'>x</button></div>"
		"</div>"
		$(".panel_propiedades").append(nueva);
	});

	$("body").on("click","#guardar_cambio_input",function(){

		var propiedades='';
		var tipo='';

		$(".text_cambio").each(function(){
			if ($(this).is(":checked")) {
				tipo = $(this).val();
				propiedades+= ' type="'+tipo+'" ';
				// console.log('tipo:',tipo);
			}
		});

		$(".propiedad_nombre").each(function(i){
			console.log($(this).val(),$('.propiedad_valor').eq(i).val());
			//si el valor de la propiedad no viene vacio, lo asigna
			if ($('.propiedad_valor').eq(i).val()) {

				if ($(this).val == 'value') {
					value=$('.propiedad_valor').eq(i).val();
				}
				propiedades+= $(this).val()+"='"+$('.propiedad_valor').eq(i).val()+"' ";
			}

		})
		if (typeof value == 'undefined') {
			value = '';
		}
		if (tipo == 'textarea') {
			nuevo_input = "<textarea "+propiedades+" >"+value+"</textarea>";
		}
		if (tipo == 'text' || tipo == 'date') {
			nuevo_input = "<input "+propiedades+" >";
		}
		if (tipo == 'select') {
			nuevo_input = "<select "+propiedades+" >";	
			$(".option_valor").each(function(i){
				nuevo_input += "<option value='"+$(this).val()+"'>"+$('.option_texto').eq(i).val()+"</option>";	
			})
			nuevo_input += "</select>";	
		}
		// console.log(nuevo_input)
		// console.log(controlGroup)
		labelName = $("#myModalLabel").text();
		console.log(tipo)
		if (tipo == 'date') {
			controlGroup.html("<label class='control-label'>"+labelName+"</label><div class='controls'><div class='input-group date' id='datetimepicker1'>"+nuevo_input+"<span class='input-group-addon'><span class='glyphicon glyphicon-calendar'></span></span></div></div>");
	          $('.date').datepicker({
	                todayBtn: "linked",
	                keyboardNavigation: false,
	                forceParse: false,
	                calendarWeeks: true,
	                autoclose: true,
	                format: "dd-mm-yyyy"
	            });
		}else{

			controlGroup.html("<label class='control-label'>"+labelName+"</label><div class='controls'>"+nuevo_input+"</div>");
		}
		$('#myModalCambioInput').modal('hide');

	});

	$("body").on("click",".text_cambio",function(){
		$(this).attr("checked",true);
		if ($(this).val() == 'select') {
			select_values = "<div class='row'>";
				select_values += "<div class='col-md-6 panel panel-default panel_options' style='padding-bottom:8px;'>";
				select_values += "<center><span style='padding:10px;font-size:16px;font-weight: 600;margin-top:10px'>Select Options</span>&nbsp;&nbsp;<button class='btn btn-primary btn-xs' id='add_options' style='margin-top:4px;'>+</button></center>";
				
								// console.log('input:',i)
								select_values += "<div class='row'>";
									select_values += "<div class='col-md-4'>";
										select_values += "<input type='text' value='' class='form-control option_valor'>"
									select_values += "</div>";
									select_values += "<div class='col-md-5'>";
										select_values += "<input type='text' value='' class='form-control option_texto'>"
									select_values += "</div>";
									select_values += "<div class='col-md-1'>";
										select_values += "<button class='cerrar btn btn-primary btn-xs'>x</button>"
									select_values += "</div>";
								select_values += "</div>";
						
				select_values += "</div>";
			select_values += "</div>";	
			if ($('.panel_options').length == 0) {
				// alert("No habia")
				$("#body_cambio_input").append(select_values);
			}else{
				// alert("Si habia")

				select_values = "<center><span style='padding:10px;font-size:16px;font-weight: 600;margin-top:10px'>Select Options</span>&nbsp;&nbsp;<button class='btn btn-primary btn-xs' id='add_options' style='margin-top:4px;'>+</button></center>";
				
								// console.log('input:',i)
								select_values += "<div class='row'>";
									select_values += "<div class='col-md-4'>";
										select_values += "<input type='text' value='' class='form-control option_valor'>"
									select_values += "</div>";
									select_values += "<div class='col-md-5'>";
										select_values += "<input type='text' value='' class='form-control option_texto'>"
									select_values += "</div>";
									select_values += "<div class='col-md-1'>";
										select_values += "<button class='cerrar btn btn-primary btn-xs'>x</button>"
									select_values += "</div>";
								select_values += "</div>";
						
				select_values += "</div>";
				$(".panel_options").html(select_values);
				
			}	
		}else{
			$(".panel_options").remove();
		}
	})

	$("body").on("click",".cerrar",function(){
		$(this).parent().parent().remove();
	})

	$("body").on("click","#add_options",function(){
		select_values = "<div class='row'>";
			select_values += "<div class='col-md-4'>";
				select_values += "<input type='text' value='' class='form-control option_valor'>"
			select_values += "</div>";
			select_values += "<div class='col-md-5'>";
				select_values += "<input type='text' value='' class='form-control option_texto'>"
			select_values += "</div>";
			select_values += "<div class='col-md-1'>";
				select_values += "<button class='cerrar btn btn-primary btn-xs' >x</button>"
			select_values += "</div>";
		select_values += "</div>";
		$(".panel_options").append(select_values);
	});
	// $(".dropdown-menu li").hover(function(e){
	// 	console.log($(this).css('position'));
	// 	$(".sub-menu").css("top",$(this).css('top')-10)
	// })
});