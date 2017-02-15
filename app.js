var json_elementos = [
    {
        "nombre":"Hipervínculo",
        "html":"<a></a>",
        "propiedades": [
            {
                "propiedad":"href",
                "type":"text",
                "etiqueta":"Escriba el enlace"               
            },
            {
                "propiedad":"target",
                "type":"select",
                "etiqueta":"Seleccione el destino",
                "valores":["_blank","_self","_parent"]
            },
            {
                "propiedad":"text",
                "type":"text",
                "etiqueta":"Ingrese el texto del enlace"
            },
            {
                "propiedad":"id",
                "type":"text",
                "etiqueta":"Escriba el nombre del elemento"           
            }
        ]
    },
    {
        "nombre":"Imagen",
        "html":"<img />",
        "propiedades": [
            {
                "propiedad":"src",
                "type":"text",
                "etiqueta":"Escriba la url de la imagen"               
            },
            {
                "propiedad":"height",
                "type":"text",
                "etiqueta":"Ingrese el alto"                
            },
            {
                "propiedad":"width",
                "type":"text",
                "etiqueta":"ingrese el ancho"           
            }
        ]
    }

];

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
var acordeones = 0;
var controlGroup = '';
var tinis = 0;
var tiny = '';
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
	$.getScript("//cloud.tinymce.com/stable/tinymce.min.js", function() {
    	console.log("tinymce cargado con exito");
	    // here you can use anything you defined in the loaded script
	});

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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
		       		}
		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
		    }
		});
		// $("").inserBefore(clickada)
		return false;
	});	
	$("body").on("click",".separar_en",function(){
		var clickada = $('body').find(".clickada");
		var cantidad = $(this).attr("id").split("_")[0];
		var anterior = '';
		var posterior = '';
		var padre = '';
		//var boton = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">×</span> </button>';
		if (clickada.prev().length != 0) {
			anterior = clickada.prev();
		}else if(clickada.next().length != 0 && clickada.prev().length == 0 && clickada.next().hasClass("gris")){
			posterior = clickada.next();
		}else{
			padre = clickada.parent();
		}
		divs = '';
		cantidad_columnas_actual = clickada.attr("class").split(" ")[0].split("-")[2];
		tamano_columna = Math.ceil(cantidad_columnas_actual/cantidad)
		console.log(tamano_columna)
		console.log(cantidad_columnas_actual,cantidad)
		for (var i = 0 ; i < cantidad; i++) {
			divs+='<div class="col-md-'+tamano_columna+' gris"></div>';
		}
		if (anterior != '') {
			anterior.after(divs);
			clickada.remove();
		}
		if (posterior != '') {
			posterior.before(divs);
			clickada.remove();
		}
		if (padre != '') {
			clickada.before(divs);
			clickada.remove();
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
		       		}
		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
		    }
		});
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

  	var $contextMenu = null;
  	$("body").on("click",".tab_mover_derecha",function(){
  		var clickada = $("body").find(".clickada");
  		var copy = clickada.html();
  		clickada.next().after("<li>"+copy+"</li>");
  		clickada.remove();

  	})
  	$("body").on("click",".tab_mover_izquierda",function(){
  		var clickada = $("body").find(".clickada");
  		var copy = clickada.html();
  		clickada.prev().before("<li>"+copy+"</li>");
  		clickada.remove();

  	})
  	$("body").on("contextmenu",".tabsita",function(e){
  		e.preventDefault();
  		var anterior = $(this).parent().prev();
  		var posterior = $(this).parent().next();
  		//console.log(anterior.prop("tagName"),posterior.prop("tagName"))
		var menu = '<ul class="dropdown-menu contextmenu multi-level" aria-labelledby="dLabel" style="position:absolute;display:none">'+

	   		'<li class="tab_a_la_derecha"><a href="#" onclick="return false;">Agregar Tab a la derecha</a></li>'+
	   		'<li class="tab_a_la_izquierda"><a href="#" onclick="return false;">Agregar Tab a la izquierda</a></li>'+
	   		'<li class="tab_mover_derecha"><a href="#" onclick="return false;">Mover Tab hacia la derecha</a></li>'+
	   		'<li class="tab_mover_izquierda"><a href="#" onclick="return false;">Mover Tab hacia la izquierda</a></li>'+
	  		'</ul>';
	  	$('body').append(menu);
	  	if (anterior.prop("tagName") != "LI") {
	  		$(".tab_mover_izquierda").addClass("hide")
  		}
		if (posterior.prop("tagName") != "LI") {
  			$(".tab_mover_derecha").addClass("hide")
  		}
	  	$contextMenu = $(".contextmenu");
		$contextMenu.on("click", "a", function() {
		   $contextMenu.hide();
		   setTimeout(function(){

		   		$('body').find('.clickada').removeClass('clickada');
		   	
		   	},1000)
		});
		$("body").click(function(){
			setTimeout(function(){

		   		$('body').find('.clickada').removeClass('clickada');
		   	
		   	},1000)
		})
		
		$(this).parent().addClass("clickada");

		$contextMenu.css({
		    display: "block",
		    left: e.pageX,
		    top: e.pageY
	   	});
  		return false;
  	});
	$("body").on("contextmenu",".gris",function(e){
		$("body").find(".clickada").removeClass("clickada");
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
	   		'<li class="hacia_derecha"><a>Unir hacia la derecha</a></li>'+
	   		'<li class="hacia_izquierda"><a>Unir hacia la izquierda</a></li>'+
	   		'<li class="dropdown-submenu"><a class="separar" dropdown-toggle" tabindex="-1"  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Separar en</a>'+
	   			'<ul class="dropdown-menu">'+
		     		'<li><a class="separar_en" id="2_espacio">Columna de 2 espacios</a></li>'+
		     		'<li><a class="separar_en" id="3_espacio">Columna de 3 espacios</a></li>'+
		     		'<li><a class="separar_en" id="4_espacio">Columna de 4 espacios</a></li>'+
		     		'<li><a class="separar_en" id="5_espacio">Columna de 5 espacios</a></li>'+
		     		'<li><a class="separar_en" id="6_espacio">Columna de 6 espacios</a></li>'+
		    	'</ul>'+
	   		'</li>'+
	   		'<li class="dropdown-submenu"><a class=" dropdown-toggle" tabindex="-1"  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Insertar Separador</a>'+
	   			'<ul class="dropdown-menu">'+
	   				'<li class="separador_antes"><a href="">Antes</a></li>'+
	   				'<li class="separador_despues"><a href="">Despues</a></li>'+
	   			'</ul>'+
	   		'</li>'+
	   		'<li class="dropdown-submenu"><a class=" dropdown-toggle" tabindex="-1"  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Insertar acordeón</a>'+
	   			'<ul class="dropdown-menu">'+
	   				'<li class="acordeon_antes"><a href="">Antes</a></li>'+
	   				'<li class="acordeon_despues"><a href="">Despues</a></li>'+
	   			'</ul>'+
	   		'</li>'+
	   		'<li class="insertar_control"><a > Insertar Control  </a></li>'+
	   		'<li class="insertar_texto"><a > Insertar Texto  </a></li>'+
	   		
	   		'<li class="eliminar_columna"><a class="bg-danger"> <span class="glyphicon glyphicon-remove"></span> Eliminar  </a></li>'+
	  		'</ul>';
	  	$('body').append(menu);
	  	$contextMenu = $(".contextmenu");
		$contextMenu.on("click", "a", function() {
		   $contextMenu.hide();
		   setTimeout(function(){

		   		$('body').find('.clickada').removeClass('clickada');
		   	
		   	},1000)
		});
		$("body").click(function(){
			setTimeout(function(){

		   		$('body').find('.clickada').removeClass('clickada');
		   	
		   	},1000)
		})
		var before = $(this).prev();
		var after = $(this).next();
		if (!before.hasClass("gris")) {
			$(".hacia_izquierda").remove();
		}
		if (!after.hasClass("gris")) {
			$(".hacia_derecha").remove();
		}
		$(this).addClass("clickada");
		$contextMenu.css({
		    display: "block",
		    left: e.pageX,
		    top: e.pageY
	   	});
		return false;
	});
	$("body").on("click",".insertar_texto",function(){
		var clickada = $("body").find(".clickada");
		tinis++;
		clickada.append("<textarea class='tinymce' id='tiny_"+tinis+"'></textarea><a class='cerrar_tiny'>X</a>")
		tiny = tinymce.init({
            selector: ".tinymce",
			plugins: " advcode advlist autolink link image lists charmap print preview textcolor",
			toolbar: "forecolor backcolor undo redo | styleselect | bold italic | link image alignleft aligncenter alignright"

        });
        setTimeout(function(){
        	$(".mce-notification").remove();
        },500)
        
	})
	$("body").on("click",".cerrar_tiny",function(e){
		tinymce.remove(".tinymce");
		$(this).parent().append($(".tinymce").val());
		$(".tinymce").remove();
		$(this).remove();
		//console.log($(".tinymce").val())
		return false;
	})
	$('body').on('click','.insertar_control',function(){
		var clickada = $("body").find(".clickada");
		$('#myModalCambioInput').modal('show');
		$('#myModalCambioInput').on('hidden.bs.modal', function () {
			$("#guardar_cambio_input").removeClass("creando_control");
		})
		$("#myModalLabel").text('Crear un Control');
		$("#guardar_cambio_input").addClass("creando_control");
		inputs = "<p>"+
			"<div class='form-group'>"+
				"<label>Propiedades</label>"+
			"</div>"+
			"<div class='row'>"+
				"<div class='col-md-6'>"+
					"<div class='form-group'>"+
						"<label>Nombre</label>"+
						"<input type='text' class='form-control' id='nombre_nuevo_control'>"+
					"</div>"+	
				"</div>"+
				"<div class='col-md-6'>"+
					"<div class='form-group'>"+
						"<label>Color de texto</label>"+
						"<select class='form-control' id='color_nuevo_control'>"+
							"<option value=''>Seleccione</option>"+
							"<option value='black'>Negro</option>"+
							"<option value='red'>Rojo</option>"+
							"<option value='white'>Blanco</option>"+
							"<option value='green'>Verde</option>"+
							"<option value='orange'>Naranja</option>"+
							"<option value='purple'>Morado</option>"+
						"</select>"+
					"</div>"+	
				"</div>"+
			"</div>"+
			"<div class='row'>"+
				"<div class='col-md-3'>"+
					"<div class='form-group'>"+
						"<label>"+
						"<input type='checkbox' id='solo_lectura_nuevo_control'>&nbsp;Solo lectura</label>"+
					"</div>"+	
				"</div>"+
				"<div class='col-md-3'>"+
					"<div class='form-group'>"+
						"<label>Valor</label>"+
						"<input type='text' placeholder='Valor' class='form-control' id='valor_nuevo_control'>"+
					"</div>"+	
				"</div>"+
				"<div class='col-md-6'>"+
					"<div class='form-group'>"+
						"<label>Color de Fondo</label>"+
						"<select class='form-control' id='color_fondo_nuevo_control'>"+
							"<option value=''>Seleccione</option>"+
							"<option value='black'>Negro</option>"+
							"<option value='red'>Rojo</option>"+
							"<option value='white'>Blanco</option>"+
							"<option value='green'>Verde</option>"+
							"<option value='orange'>Naranja</option>"+
							"<option value='purple'>Morado</option>"+
						"</select>"+
					"</div>"+	
				"</div>"+
			"</div>"+
			"<div class='row'>"+
				"<div class='col-md-6'>"+
					"<div class='form-group'>"+
						"<label>Fuente</label>"+
						"<select name='' id='fuente_nuevo_control' class='form-control'>"+
							"<option>Seleccione</option>"+
							"<option value='times new roman'>Times New Roman</option>"+
							"<option value='garamond'>Garamond</option>"+
							"<option value='georgia'>georgia</option>"+
							"<option value='trebuchet'>Trebuchet</option>"+
							"<option value='arial'>Arial</option>"+
							"<option value='verdana'>Verdana</option>"+
							"<option value='courier'>Courier</option>"+
							"<option value='courier new'>Courier New</option>"+
							"<option value='andele mono'>Andele Mono</option>"+
						"</select>"+
					"</div>"+	
				"</div>"+
				"<div class='col-md-6'>"+
					"<div class='form-group'>"+
						"<label>Color de Borde</label>"+
						"<select class='form-control' id='color_borde_nuevo_control'>"+
							"<option value=''>Seleccione</option>"+
							"<option value='black'>Negro</option>"+
							"<option value='red'>Rojo</option>"+
							"<option value='white'>Blanco</option>"+
							"<option value='green'>Verde</option>"+
							"<option value='orange'>Naranja</option>"+
							"<option value='purple'>Morado</option>"+
						"</select>"+
					"</div>"+	
				"</div>"+
			"</div>"+
			"<div class='row'>"+
				"<div class='col-md-6'>"+
					"<div class='form-group'>"+
						"<label>Tipo de Control</label>"+
						"<select name='' id='tipo_nuevo_control' class='form-control'>"+
							"<option>Seleccione</option>"+
							"<option value='hidden'>Oculto</option>"+
							"<option value='text'>Texto</option>"+
							"<option value='textarea'>Texto largo</option>"+
							"<option value='select'>Combo</option>"+
							"<option value='date'>Fecha</option>"+
							"<option value='email'>Email</option>"+
							"<option value='number'>Numero</option>"+
							"<option value='checkbox'>Checkbox</option>"+
						"</select>"+
					"</div>"+
					"<div id='opciones_div' class='hide'>"+
						"<input type='text' class='form-control' id='opciones' placeholder='Ej: opcion1, opcion2, etc...'>"+
					"</div>"+
				"</div>"+
				"<div class='col-md-6'>"+
					"<div class='form-group'>"+
						"<label>Ancho del Borde (PX)</label>"+
						"<input type='text' class='form-control' id='ancho_borde_nuevo_control'>"+
					"</div>"+	
				"</div>"+
			"</div>"+
			"<div class='row'>"+
				"<div class='col-md-6'>"+
					"<div class='form-group'>"+
						"<label>Tamaño de texto interno</label>"+
						"<input type='text' name='' id='tamano_nuevo_control' class='form-control'>"+
					"</div>"+	
				"</div>"+
				"<div class='col-md-6'>"+
					"<div class='form-group'>"+
						"<label>Propiedades (Separar con Enter)</label>"+
						"<textarea name='' id='propiedades_nuevo_control' class='form-control' placeholder='Si escribes aqui no será tomado en cuenta las propiedades anteriores'></textarea>"+
					"</div>"+	
				"</div>"+
			"</div>"+
			"<div class='row'>"+
				"<div class='col-md-12 codigo_del_control'>"+

				"</div>"+
			"</div>"+
		"</p>";
		$("#body_cambio_input").html(inputs);
		console.log(inputs)
		return false;
	});
	$("body").on("change","#tipo_nuevo_control",function(){
		if ($(this).val() == 'select') {
			$("#opciones_div").removeClass("hide");
			$("#valor_nuevo_control").parent().addClass("hide");
		}else{
			$("#opciones_div").addClass("hide");
			$("#valor_nuevo_control").parent().removeClass("hide");
		}
	});
	$("body").on("click",".acordeon_antes",function(){
		acordeones++;
		var clickada = $("body").find(".clickada");
		var acordeon = '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
	  '<div class="panel panel-default">'+
	    '<div class="panel-heading" role="tab" id="headingOne'+acordeones+'">'+
	      '<h4 class="panel-title">'+
	        '<a role="button" data-toggle="collapse" contenteditable="true" data-parent="#accordion" href="#collapseOne'+acordeones+'1" aria-expanded="true" aria-controls="collapseOne'+acordeones+'1">'+
	          'Collapsible Group Item #1'+
	        '</a>'+
	      '</h4>'+
	    '</div>'+
	    '<div id="collapseOne'+acordeones+'1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne'+acordeones+'">'+
	      '<div class="panel-body" >'+
	      	'<div class="row"><div contenteditable="true" class="gris col-md-12"></div></div>'+
	      '</div>'+
	    '</div>'+
	  '</div>'+
	  '<div class="panel panel-default">'+
	    '<div class="panel-heading" role="tab" id="headingTwo'+acordeones+'1">'+
	      '<h4 class="panel-title">'+
	        '<a class="collapsed" role="button" contenteditable="true" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo'+acordeones+'2" aria-expanded="false" aria-controls="collapseTwo'+acordeones+'2">'+
	          'Collapsible Group Item #2'+
	        '</a>'+
	      '</h4>'+
	    '</div>'+
	    '<div id="collapseTwo'+acordeones+'2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo'+acordeones+'1">'+
	      '<div class="panel-body" >'+
	      	'<div class="row"><div contenteditable="true" class="gris col-md-12"></div></div>'+
	      '</div>'+
	    '</div>'+
	  '</div>'+
	  '<div class="panel panel-default">'+
	    '<div class="panel-heading" role="tab" id="headingThree'+acordeones+'2">'+
	      '<h4 class="panel-title">'+
	        '<a class="collapsed" role="button" contenteditable="true" data-toggle="collapse" data-parent="#accordion" href="#collapseThree'+acordeones+'3" aria-expanded="false" aria-controls="collapseThree'+acordeones+'3">'+
	          'Collapsible Group Item #3'+
	        '</a>'+
	      '</h4>'+
	    '</div>'+
	    '<div id="collapseThree'+acordeones+'3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree'+acordeones+'2">'+
	      '<div class="panel-body" >'+
	      	'<div class="row"><div contenteditable="true" class="gris col-md-12"></div></div>'+
	      '</div>'+
	    '</div>'+
	  '</div>'+'<a href="" onClick="$(this).parent().remove();return false;"> X </a>'+
	'</div>';
		clickada.parent().before(acordeon);
		return false;
	});
	$("body").on("click",".acordeon_despues",function(){
		acordeones++;
		var clickada = $("body").find(".clickada");
		var acordeon = '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
	  '<div class="panel panel-default">'+
	    '<div class="panel-heading" role="tab" id="headingOne'+acordeones+'">'+
	      '<h4 class="panel-title">'+
	        '<a role="button" data-toggle="collapse" contenteditable="true" data-parent="#accordion" href="#collapseOne'+acordeones+'1" aria-expanded="true" aria-controls="collapseOne'+acordeones+'1">'+
	          'Collapsible Group Item #1'+
	        '</a>'+
	      '</h4>'+
	    '</div>'+
	    '<div id="collapseOne'+acordeones+'1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne'+acordeones+'">'+
	      '<div class="panel-body" contenteditable="true">'+
	        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven'+
	      '</div>'+
	    '</div>'+
	  '</div>'+
	  '<div class="panel panel-default">'+
	    '<div class="panel-heading" role="tab" id="headingTwo'+acordeones+'1">'+
	      '<h4 class="panel-title">'+
	        '<a class="collapsed" role="button" contenteditable="true" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo'+acordeones+'2" aria-expanded="false" aria-controls="collapseTwo'+acordeones+'2">'+
	          'Collapsible Group Item #2'+
	        '</a>'+
	      '</h4>'+
	    '</div>'+
	    '<div id="collapseTwo'+acordeones+'2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo'+acordeones+'1">'+
	      '<div class="panel-body" contenteditable="true">'+
	        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven'+
	      '</div>'+
	    '</div>'+
	  '</div>'+
	  '<div class="panel panel-default">'+
	    '<div class="panel-heading" role="tab" id="headingThree'+acordeones+'2">'+
	      '<h4 class="panel-title">'+
	        '<a class="collapsed" role="button" contenteditable="true" data-toggle="collapse" data-parent="#accordion" href="#collapseThree'+acordeones+'3" aria-expanded="false" aria-controls="collapseThree'+acordeones+'3">'+
	          'Collapsible Group Item #3'+
	        '</a>'+
	      '</h4>'+
	    '</div>'+
	    '<div id="collapseThree'+acordeones+'3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree'+acordeones+'2">'+
	      '<div class="panel-body" contenteditable="true">'+
	        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven'+
	      '</div>'+
	    '</div>'+
	  '</div>'+'<a href="" onClick="$(this).parent().remove();return false;"> X </a>'+
	'</div>';
		clickada.parent().after(acordeon);
		return false;
	});
	$("body").on("click",".separador_antes",function(){
		var clickada = $("body").find(".clickada");
		clickada.parent().before("<div class='no_se_ve'><hr><a href='#' onClick='$(this).parent().remove();return false;'>x</a></div>");
		return false;
	});
$("body").on("click",".separador_despues",function(){
		var clickada = $("body").find(".clickada");
		clickada.parent().after("<div class='no_se_ve'><hr><a href='#' onClick='$(this).parent().remove();return false;'>x</a></div>");
		return false;
	});
	$("body").on("click",".hacia_derecha",function(){
		var clickada = $('body').find(".clickada");
		var esta_columna = parseInt(clickada.attr("class").split(" ")[0].split("-")[2]);
		var clase = clickada.next().attr("class").split(" ");
		var la_clase = clase[0];
		var columna = parseInt(la_clase.split("-")[2]);

		var suma = esta_columna + columna;
		console.log(clickada.prev())
		var boton = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">×</span> </button>';

		if (clickada.prev().length) {
			
			clickada.prev().after("<div class='col-md-"+suma+" gris'></div>")
			clickada.next().remove();
			clickada.remove();
		}else{
			clickada.next().remove()
			clickada.parent().prepend("<div class='col-md-"+suma+" gris'></div>")
			clickada.remove();
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
		       		}
		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
		    }
		});

	});
	$("body").on("click",".hacia_izquierda",function(){
		var clickada = $('body').find(".clickada");
		var esta_columna = parseInt(clickada.attr("class").split(" ")[0].split("-")[2]);
		var clase = clickada.prev().attr("class").split(" ");
		var la_clase = clase[0];
		var columna = parseInt(la_clase.split("-")[2]);
		console.log(esta_columna,columna)
		var suma = esta_columna + columna;
		var boton = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">×</span> </button>';

		if (clickada.next().length) {
			
			clickada.next().before("<div class='col-md-"+suma+" gris'></div>")
			clickada.prev().remove();
			clickada.remove();
		}else{
			clickada.prev().remove()
			clickada.parent().prepend("<div class='col-md-"+suma+" gris'></div>")
			clickada.remove();
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
		       		}
		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
		    }
		});

	});
	$("body").on("click",function(){
		// console.log("caemos?")
		// setTimeout(function(){

		// 	$('body').find('.clickada').removeClass('clickada');
		
		// },1000)
		if ($contextMenu) {

			$contextMenu.hide();
		}
	})


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
		  tools_array += '<li role="presentation" class="dropdown">'+'<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Agregar Elemento<span class="caret"></span></a>'+
			  '<ul class="dropdown-menu">';
			  for (var i = 0; i < json_elementos.length; i++) {
			  	tools_array +='<li><a href="#" class="elemento_html" title="Arrastra el elemento hacia una columna" onClick="return false;" id="'+json_elementos[i]['nombre']+'">Agregar '+json_elementos[i]['nombre']+'</a></li>';
			  }
			  	

			   tools_array +='</ul>'+
		  '</li>';

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
		$('.elemento_html').draggable({
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
	$("body").on("click",".tab_a_la_izquierda",function(){
		tabs_editables++;
		var clickada = $("body").find(".clickada");
		boton_cerrar = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>';
		$(".tabs-container ul").eq(0).find("li.active").removeClass('active');
		clickada.before("<li class='active'><a data-toggle='tab' id='"+tabs_editables+"' class='tab_editable_"+tabs_editables+" tabsita' contenteditable='true'>Escribe el Nombre aqui</a>"+boton_cerrar+"</li>");
		$(".tab-content").append("<div id='' class='tab-pane content_tab_"+tabs_editables+"'><div class='panel-body'><h1 contenteditable='true'>Contenido del tab "+tabs_editables+"</h1></div></div>")
		tool_bar_dinamic = '<div id="tool_bar_'+tabs_editables+'" class="tool_bar"></div>';
		$(".content_tab_"+tabs_editables+" .panel-body").append(tool_bar_dinamic);
		$('#tool_bar_'+tabs_editables).append(controles);

		$('.plugin_tool').draggable({
			helper: "clone"
		});		
		$('.elemento_html').draggable({
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
	$("body").on("click",".tab_a_la_derecha",function(){
		tabs_editables++;
		var clickada = $("body").find(".clickada");
		boton_cerrar = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>';
		$(".tabs-container ul").eq(0).find("li.active").removeClass('active');
		clickada.after("<li class='active'><a data-toggle='tab' id='"+tabs_editables+"' class='tab_editable_"+tabs_editables+" tabsita' contenteditable='true'>Escribe el Nombre aqui</a>"+boton_cerrar+"</li>");
		$(".tab-content").append("<div id='' class='tab-pane content_tab_"+tabs_editables+"'><div class='panel-body'><h1 contenteditable='true'>Contenido del tab "+tabs_editables+"</h1></div></div>")
		tool_bar_dinamic = '<div id="tool_bar_'+tabs_editables+'" class="tool_bar"></div>';
		$(".content_tab_"+tabs_editables+" .panel-body").append(tool_bar_dinamic);
		$('#tool_bar_'+tabs_editables).append(controles);

		$('.plugin_tool').draggable({
			helper: "clone"
		});		
		$('.elemento_html').draggable({
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

	$('.plugin_tool').draggable({
		helper:'clone'
	});
	$('.elemento_html').draggable({
		helper:'clone'
	});
	// $("body").on('.elemento_html',function(){
	// 	return false;
	// })
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		var id = $(ui.draggable).attr("id");
		       		var el = '';
		       		$("#guardar_cambio_input").addClass("agregando_elemento");
		       		html = '';
		       		for (var i = 0; i < json_elementos.length; i++) {
		       			if (json_elementos[i]['nombre'] == id) {
		       				el = json_elementos[i]['html'];
		       				
			       			for (var j = 0; j < json_elementos[i]['propiedades'].length; j++) {
			       				html+="<div class='form-group'>"+
			       						"<label>"+json_elementos[i]['propiedades'][j]['propiedad']+"</label>";
			       				if (json_elementos[i]['propiedades'][j]['type'] == 'select') {

				       				html+="<select class='form-control atributo_nuevo ' id='value_"+json_elementos[i]['nombre']+"'>";
				       					html+="<option>Seleccione</option>";
				       					for (var k = 0; k < json_elementos[i]['propiedades'][j]['valores'].length; k++) {
				       						html+="<option value='"+json_elementos[i]['propiedades'][j]['valores'][k]+"'>"+json_elementos[i]['propiedades'][j]['valores'][k]+"</option>";
				       					}
				       				html+="</select></div>";
			       				}else{
			       					html+="<input type='text' id='value_"+json_elementos[i]['nombre']+"' class=' atributo_nuevo form-control'>"+
				       					"</div>";
			       				}
			       			}
		       			}
		       			
		       		}
		       		$("#myModalLabel").html("Propiedades de "+id);
		       		$("#body_cambio_input").html(html);
		       		el=$(el).addClass("el");
		       		//$("#body_cambio_input").append(el);
		       		$(droppable).append(el)
		       		$('#myModalCambioInput').modal('show');
		       		/*if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
		       		}*/
		       	}else{
		       		
		       	 draggable.appendTo(droppable);
		       	}
		    }
		});
			
	});
	$("body").on('contextmenu','.imagen_creada',function(){
		$(this).remove()
		return false;
	})
	$('body').on('click',".una_fila_dos_columna",function(){
		id_tab = $(this).parent().parent().parent().parent().parent().attr("id").split("_")[2];

		equis = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>'
		div = '<div class="row"><div class="col-md-6 gris"></div><div class="col-md-6 gris"></div>'+equis+'</div>';
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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

		       	}else if($(ui.draggable).hasClass('elemento_html')){
		       		if ($(ui.draggable).attr("id") == "hipervinculo") {
		       			var texto = prompt("Ingresa el texto del hipervinculo");
		       			var direccion = prompt("Ingresa la dirección de enlace (link)");
		       			if (texto && direccion) {
		       				$(droppable).append("<a class='imagen_creada' target='_blank' href='"+direccion+"'>"+texto+"</a>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "imagen") {
		       			var direccion = prompt("Ingresa la dirección de enlace de la imagen");
		       			var ancho = prompt("Ingresa el ancho de la imagen en Pixeles");
		       			var alto = prompt("Ingresa el alto de la imagen en Pixeles");
		       			if (ancho && alto) {
		       				$(droppable).append("<img class='imagen_creada' src='"+direccion+"' width='"+ancho+"' height='"+alto+"'>");
		       			}
		       		}
		       		if ($(ui.draggable).attr("id") == "separador") {
		       			// alert("?")
		       			$(droppable).append("<div class='no_se_ve'><hr> <a onclick='$(this).parent().remove();'>x</a></div>");
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
	$("body").on("click","#eliminar_input",function(){
		if (confirm("Esta seguro?")) {
			$("body").find(".posible_eliminar").remove();
			$('#myModalCambioInput').modal('hide');
		}
	})
	$('body').on("contextmenu",".control-group",function(e){
		e.preventDefault();
		select_values = undefined;
		$(this).addClass("posible_eliminar");
		controlGroup = $(this);
		$('#myModalCambioInput').modal('show');
		var label = $(this).find(".control-label");
		$("#myModalLabel").text(label.text());
		body = "";

		type = $(this).find(".controls").eq(0).children().eq(0).attr("type");
		tagName = $(this).find(".controls").eq(0).children().eq(0).prop("tagName");
		if (type=="text" && tagName == "INPUT" || type=="textarea" && tagName == "TEXTAREA") {
			input = $(this).find(".controls").eq(0).children().eq(0);
				body += "<button class='btn btn-danger' id='eliminar_input' >Eliminar</button><br><br><div class='col-md-6 panel panel-default'>"+
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
						"<label><input type='radio' name='text_cambio' value='hidden' class='text_cambio'> Oculto</label>"+
				"</div>";
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
							"</div>";
					body += "<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio'  value='hidden' class='text_cambio'> Oculto</label>"+
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
							body += "<div class='textarea_cambio_div'>"+
						"<label><input type='radio' name='text_cambio' value='hidden' class='text_cambio'> Oculto</label>"+
				"</div>";
					}else{
						body +=	"<div class='textarea_cambio_div'>"+
								"<label><input type='radio' name='text_cambio' value='text' class='text_cambio'> Text</label>"+
							"</div>";
							body += "<div class='textarea_cambio_div'>"+
						"<label><input type='radio' name='text_cambio' value='hidden' class='text_cambio'> Oculto</label>"+
				"</div>";
					}
					
					if (tagName == 'TEXTAREA') {
						body += "<div class='textarea_cambio_div'>"+
									"<label><input type='radio' name='text_cambio' checked value='textarea' class='text_cambio'> Textarea</label>"+
								"</div>";
								body += "<div class='textarea_cambio_div'>"+
						"<label><input type='radio' name='text_cambio' value='hidden' class='text_cambio'> Oculto</label>"+
				"</div>";
					}else{

						body += "<div class='textarea_cambio_div'>"+
									"<label><input type='radio' name='text_cambio' value='textarea' class='text_cambio'> Textarea</label>"+
								"</div>";
								body += "<div class='textarea_cambio_div'>"+
						"<label><input type='radio' name='text_cambio' value='hidden' class='text_cambio'> Oculto</label>"+
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
			

		}


				body +="<div class='row'>"+
					"<div class='col-md-12'>"+
						"<div class='form-group'>"+
							"<label>Color de texto</label>"+
							"<select class='form-control' id='color_nuevo_control'>"+
								"<option value=''>Seleccione</option>"+
								"<option value='black'>Negro</option>"+
								"<option value='red'>Rojo</option>"+
								"<option value='white'>Blanco</option>"+
								"<option value='green'>Verde</option>"+
								"<option value='orange'>Naranja</option>"+
								"<option value='purple'>Morado</option>"+
							"</select>"+
						"</div>"+	
					"</div>"+
					"<div class='col-md-6'>"+
						"<div class='form-group'>"+
							"<label>Color de Fondo</label>"+
							"<select class='form-control' id='color_fondo_nuevo_control'>"+
								"<option value=''>Seleccione</option>"+
								"<option value='black'>Negro</option>"+
								"<option value='red'>Rojo</option>"+
								"<option value='white'>Blanco</option>"+
								"<option value='green'>Verde</option>"+
								"<option value='orange'>Naranja</option>"+
								"<option value='purple'>Morado</option>"+
							"</select>"+
						"</div>"+	
					"</div>"+
				"</div>";
				body +="<div class='row'>"+
			"<div class='col-md-6'>"+
					"<div class='form-group'>"+
						"<label>Fuente</label>"+
						"<select name='' id='fuente_nuevo_control' class='form-control'>"+
							"<option>Seleccione</option>"+
							"<option value='times new roman'>Times New Roman</option>"+
							"<option value='garamond'>Garamond</option>"+
							"<option value='georgia'>georgia</option>"+
							"<option value='trebuchet'>Trebuchet</option>"+
							"<option value='arial'>Arial</option>"+
							"<option value='verdana'>Verdana</option>"+
							"<option value='courier'>Courier</option>"+
							"<option value='courier new'>Courier New</option>"+
							"<option value='andele mono'>Andele Mono</option>"+
						"</select>"+
					"</div>"+	
				"</div>"+
				"<div class='col-md-6'>"+
					"<div class='form-group'>"+
						"<label>Color de Borde</label>"+
						"<select class='form-control' id='color_borde_nuevo_control'>"+
							"<option value=''>Seleccione</option>"+
							"<option value='black'>Negro</option>"+
							"<option value='red'>Rojo</option>"+
							"<option value='white'>Blanco</option>"+
							"<option value='green'>Verde</option>"+
							"<option value='orange'>Naranja</option>"+
							"<option value='purple'>Morado</option>"+
						"</select>"+
					"</div>"+	
				"</div>"+
				"</div>";
				body+="<div class='row'>"+
						"<div class='col-md-6'>"+
							"<div class='form-group'>"+
								"<label>Ancho del Borde (PX)</label>"+
								"<input type='text' class='form-control' id='ancho_borde_nuevo_control'>"+
							"</div>"+	
						"</div>"+
						"<div class='col-md-6'>"+
							"<div class='form-group'>"+
								"<label>"+
								"<input type='checkbox' id='solo_lectura_nuevo_control'>&nbsp;Solo lectura</label>"+
							"</div>"+	
						"</div>"	
						"</div>"+
						"</div>";
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

		if ($("#guardar_cambio_input").hasClass("agregando_elemento")) {
			$(".atributo_nuevo").each(function(){
				atributo = $(this).parent().find("label").text();
				if (atributo == 'text') {
					$(".el").text($(this).val())

				}else{

					$(".el").attr(atributo,$(this).val());
				}
				$(this).parent().remove();
			});
			$("#guardar_cambio_input").removeClass("agregando_elemento");
			$('#myModalCambioInput').modal('hide');
			return;
		}

		if ($("#tipo_nuevo_control").val() == "Seleccione") {
			alert("Es necesario escoger por lo menos un tipo de control");
			return;
		}
		var color_text = $("#color_nuevo_control").val();
		var fuente = $("#fuente_nuevo_control").val();
		var ancho_borde = $("#ancho_borde_nuevo_control").val();
		var color_fondo = $("#color_fondo_nuevo_control").val();
		var color_borde = $("#color_borde_nuevo_control").val();
		var solo_lectura = $("#solo_lectura_nuevo_control").is(":checked");
		if ($(this).hasClass("creando_control")) {
			var label = $("#nombre_nuevo_control").val();
			var tipo = $("#tipo_nuevo_control").val();
			var tamano = $("#tamano_nuevo_control").val();
			
			var propiedades = $("#propiedades_nuevo_control").val();
			var valor = $("#valor_nuevo_control").val() ? 'value="'+$("#valor_nuevo_control").val()+'"' : '';

			if (solo_lectura) {
				readonly = "readonly='readonly'";
			}else{
				readonly = "";
			}

			if (tamano) {
				tamano = 'maxlength="'+tamano+'"';
			}else{
				tamano = "";
			}
			if (!color_text) {
				color_text='';
			}
			if (!ancho_borde) {
				ancho_borde='';
			}
			if (!color_borde) {
				color_borde='';
			}
			if (!color_fondo) {
				color_fondo='';
			}

			style = "style='color:"+color_text+";border:"+ancho_borde+"px solid "+color_borde+";background-color:"+color_fondo+"'";

			switch(tipo){
				case "text":
				label_ = label.split(' ').join('_');
				input = '<input class="form-control" '+style+' '+readonly+' '+valor+' '+tamano+' id="'+label_+'" name="'+label_+'" type="text">'
				break;
				case "hidden":
				label_ = label.split(' ').join('_');
				input = '<input class="form-control" '+style+' '+readonly+' '+valor+' '+tamano+' id="'+label_+'" name="'+label_+'" type="hidden">'
				break;
				case "textarea":
				label_ = label.split(' ').join('_');
				input = '<textarea class="form-control" '+style+' '+readonly+' '+valor+' '+tamano+' id="'+label_+'" name="'+label_+'"></textarea>';
				break;
				case "email":
				label_ = label.split(' ').join('_');
				input = '<input class="form-control" '+style+' '+readonly+' '+valor+' '+tamano+' id="'+label_+'" name="'+label_+'" type="email">'
				break;
				case "number":
				label_ = label.split(' ').join('_');
				input = '<input class="form-control" '+style+' '+readonly+' '+valor+' '+tamano+' id="'+label_+'" name="'+label_+'" type="number">'
				break;
				case "checkbox":
				label_ = label.split(' ').join('_');
				input = '<label><input type="checkbox" name="'+label_+'">&nbsp;'+label+'</label>';
				break;
				case "select":
				if ($("#opciones").val()) {
					var opciones = $("#opciones").val().split(',');
					var html_options = '<option>Seleccione</option>';
					for (var i = 0; i < opciones.length; i++) {
						html_options+="<option value='"+$.trim(opciones[i])+"'>"+$.trim(opciones[i])+"</option>";
					}
				}else{
					alert("Es necesario escribir las opciones del combo!");
					$('#opciones').focus();
					return;
				}
				label_ = label.split(' ').join('_');
				input = '<select class="form-control" '+style+' '+readonly+' '+valor+' '+tamano+' id="'+label_+'" name="'+label_+'">'+html_options+'</select>';
				break;
				case "date":
				label_ = label.split(' ').join('_');
				nuevo_input = "<input type='text' class='form-control col-md-12' readonly='readonly' name='"+label_+"' id='"+label_+"'>";
				html_date = "<label class='control-label'>"+label_+"</label><div class='controls'><div class='input-group date' id='datetimepicker1'>"+nuevo_input+"<span class='input-group-addon'><span class='glyphicon glyphicon-calendar'></span></span></div></div>";
		          
				break;
			}

			if ($("#propiedades_nuevo_control").val()) {
				style=$("#propiedades_nuevo_control").val().replace("\n"," ");
				console.log(style)
				switch(tipo){
					case "text":
					label_ = label.split(' ').join('_');
					input = '<input '+style+' type="text">'
					break;
					case "hidden":
					label_ = label.split(' ').join('_');
					input = '<input '+style+' type="hidden">'
					break;
					case "textarea":
					label_ = label.split(' ').join('_');
					input = '<textarea '+style+'"></textarea>';
					break;
					case "email":
					label_ = label.split(' ').join('_');
					input = '<input '+style+' type="email">'
					break;
					case "number":
					label_ = label.split(' ').join('_');
					input = '<input '+style+' type="number">'
					break;
					case "checkbox":
					label_ = label.split(' ').join('_');
					input = '<label><input type="checkbox" '+style+' ">&nbsp;'+label+'</label>';
					break;
					case "select":
					if ($("#opciones").val()) {
						var opciones = $("#opciones").val().split(',');
						var html_options = '<option>Seleccione</option>';
						for (var i = 0; i < opciones.length; i++) {
							html_options+="<option value='"+$.trim(opciones[i])+"'>"+$.trim(opciones[i])+"</option>";
						}
					}else{
						alert("Es necesario escribir las opciones del combo!");
						$('#opciones').focus();
						return;
					}
					label_ = label.split(' ').join('_');
					input = '<select '+style+'>'+html_options+'</select>';
					break;
					case "date":
					label_ = label.split(' ').join('_');
					nuevo_input = "<input type='text' class='form-control col-md-12' readonly='readonly' name='"+label_+"' id='"+label_+"'>";
					html_date = "<label class='control-label'>"+label_+"</label><div class='controls'><div class='input-group date' id='datetimepicker1'>"+nuevo_input+"<span class='input-group-addon'><span class='glyphicon glyphicon-calendar'></span></span></div></div>";
			          
					break;
				}				
			}

			if (tipo == 'date') {
				var control = '<div class="control-group" style="position: relative;">'+
		            html_date+
		        '</div>';
			}else{
				if (tipo == "hidden") {
					var control = input;
				}else{

					if (tipo == 'checkbox') {
						var control = '<div class="control-group" style="position: relative;">'+
				            input+
				        '</div>';

					}else{
						var control = '<div class="control-group" style="position: relative;">'+
				            '<label class="control-label">'+label+'</label>'+
				            '<div class="controls">'+
				                input+
				                
				            '</div>'+
				        '</div>';	
					}
				}
				
			}


	        $(".panel-body .row .col-md-12").eq(0).prepend(control);
	        if (tipo == 'date') {
	        	$('.date').datepicker({
		                todayBtn: "linked",
		                keyboardNavigation: false,
		                forceParse: false,
		                calendarWeeks: true,
		                autoclose: true,
		                format: "dd-mm-yyyy"
		            });
	        }

	        $('.control-group').draggable();
			console.log("se esta creando un control");
			$(this).removeClass("creando_control");
			return false;
		}

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
		if (!color_text) {
				color_text='';
			}
			if (!ancho_borde) {
				ancho_borde='';
			}
			if (!color_borde) {
				color_borde='';
			}
			if (!color_fondo) {
				color_fondo='';
			}
			if (solo_lectura) {
				readonly = "readonly='readonly'";
			}else{
				readonly = "";
			}
			style = "style='color:"+color_text+";border:"+ancho_borde+"px solid "+color_borde+";background-color:"+color_fondo+"' "+readonly;
		if (typeof value == 'undefined') {
			value = '';
		}
		if (tipo == 'textarea') {
			nuevo_input = "<textarea "+propiedades+" "+style+" >"+value+"</textarea>";
		}
		if (tipo == 'text' || tipo == 'date') {
			nuevo_input = "<input "+propiedades+" "+style+" >";
		}
		if (tipo == 'select') {
			nuevo_input = "<select "+propiedades+" "+style+" >";	
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