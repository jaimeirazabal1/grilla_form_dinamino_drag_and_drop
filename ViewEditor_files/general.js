$(function () {
    // display focus in and out as per validation
    $('.inputclientrequired').blur(function () {
        if ($(this).val() == '') {
            $(this).parent().closest('.form-group').addclass('has-error');
        } else {
            $(this).parent().closest('.form-group').removeclass('has-error');
        }
    });
});
//$(document).ready(function () {
//    $('.inputClientRequired').blur(function () {
//        alert("yeah");
//        if ($(this).val() == '') {
//            $(this).parent().closest('.form-group').addClass('has-error');
//        } else {
//            $(this).parent().closest('.form-group').removeClass('has-error');
//        }
//    });
//});
function setDynamicRenderElement() {
    // display focus in and out as per validation
    $('.inputClientRequired').blur(function () {
        if ($(this).val() == '') {
            $(this).addClass('has-error');
        } else {
            $(this).removeClass('showRequired');
        }
    });
}
function setInputEntityAttributes(inpuElementArray, selectorType, elementType) {
    for (var i = 0; i < inpuElementArray.length; i++) {
        var element = $('' + selectorType + inpuElementArray[i].inputId);
        if (element != undefined) {
            if (element.val() != undefined) {
                if (!inpuElementArray[i].IsVisible) {
                    if (elementType == 0) {
                        $('' + selectorType + inpuElementArray[i].inputId + 'Header').hide()
                        element.parent().hide();
                    } else {
                        element.parent().closest('.form-group').hide();
                    }
                }
                if (inpuElementArray[i].IsRequired) {
                    element.addClass('inputClientRequired');
                    //element.after('<input type="hidden" value="' + inpuElementArray[i].selectDefaultValidationValue + '" />');
                }
                if (inpuElementArray[i].DefaultValue != '') {
                    switch (inpuElementArray[i].inputType.toString().toLowerCase()) {
                        case 'text':
                            if (element.val() == '' || element.val().trim() == 0) {
                                element.val(inpuElementArray[i].DefaultValue);
                            }
                            break;
                        case 'select':
                            if ($("" + selectorType + inpuElementArray[i].inputId + " option[value='" + inpuElementArray[i].DefaultValue + "']").length > 0) {
                                element.val(inpuElementArray[i].DefaultValue);
                            }
                            break;
                        case 'file':
                            break;
                        case 'checkbox':
                            element.attr('checked', true);
                            break;
                        default:
                            break;
                    }
                }
                if (inpuElementArray[i].HelpText != '') {
                    element.attr('title', inpuElementArray[i].HelpText);
                }
                if (inpuElementArray[i].IsReadOnly) {
                    element.attr('disabled', true);
                }
            }
        }
    }
}

//$('#CreateEmployee').bind('submit', function (event) {
//    alert("yes");
//    event.preventDefault();
//});

function checkClientValidate(formSelector) {
    var elementValid = true;
    $('.' + formSelector + ' .inputClientRequired').each(function () {
        if (this.nodeName.toString().toLowerCase() == 'select') {
            if ($(this).val() == '') {
                $(this).parent().closest('.form-group').addClass('has-error');
                $(this).focus();
                elementValid = false;
            } else {
                $(this).parent().closest('.form-group').removeClass('has-error');
            }
        } else {
            //alert($(this).val());
            if ($(this).val() == '') {
                //$(this).addClass('showRequired');
                $(this).parent().closest('.form-group').addClass('has-error');
                $(this).focus();
                elementValid = false;
            } else {
                //$(this).removeClass('showRequired');
                $(this).parent().closest('.form-group').removeClass('has-error');
            }
        }
    });
    return elementValid;
}
function dynamicFieldValidation(formSelector) {
    var elementValid = true;
    $('.' + formSelector + ' .inputClientRequired').each(function () {
        if (this.nodeName.toString().toLowerCase() == 'select') {
            if ($(this).val() == '' || $(this).val() == $(this).next().val()) {
                $(this).addClass('showRequired');
                $(this).focus();
                elementValid = false;
            } else {
                $(this).removeClass('showRequired');
            }
        } else {
            if ($(this).val() == '') {
                $(this).addClass('showRequired');
                $(this).focus();
                elementValid = false;
            } else {
                $(this).removeClass('showRequired');
            }
        }
    });

    setDynamicRenderElement();
    return elementValid;
}
//$(document).ready(function () {
//    $(".inputNumber").keydown(function (e) {
//        // Allow: backspace, delete, tab, escape, enter and .
//        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
//            // Allow: Ctrl+A, Command+A
//            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
//            // Allow: home, end, left, right, down, up
//            (e.keyCode >= 35 && e.keyCode <= 40)) {
//            // let it happen, don't do anything
//            return;
//        }
//        // Ensure that it is a number and stop the keypress
//        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//            e.preventDefault();
//        }
//    });
//});
$('body').on('keydown', '.inputNumber', function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        // Allow: Ctrl+A, Command+A
        (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)) {
        // let it happen, don't do anything
        return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});

function ajaxindicatorstart(text) {
    if (jQuery('body').find('#resultLoading').attr('id') != 'resultLoading') {
        jQuery('body').append('<div id="resultLoading" class="pace pace-active"><div class="bg"><div class="loading-spinner"><div class="sk-spinner sk-spinner-chasing-dots"><div class="sk-dot1"></div><div class="sk-dot2"></div></div></div></div></div>');
    }
    jQuery('#resultLoading').css({
        'width': '100%',
        'height': '100%',
        'position': 'fixed',
        'z-index': '10000000',
        'top': '0',
        'left': '0',
        'right': '0',
        'bottom': '0',
        'margin': 'auto',
        'padding-top': '100'
    });
    jQuery('#resultLoading .bg').css({
        'background': 'rgba(0, 0, 0, .7) none repeat scroll 0 0',
        'width': '100%',
        'height': '100%',
        'position': 'absolute',
        'top': '0',
        'padding-top': '100'
    });
    jQuery('#resultLoading .bg').height('100%');
    jQuery('#resultLoading').fadeIn(300);
    jQuery('body').css('cursor', 'wait');
}

function ajaxindicatorstop() {
    jQuery('#resultLoading .bg').height('100%');
    jQuery('#resultLoading').fadeOut(300);
    jQuery('body').css('cursor', 'default');
}

//LOADING
//jQuery(document).ajaxStart(function () {
//    ajaxindicatorstart('loading data.. please wait..');
//}).ajaxStop(function () {
//    //hide ajax indicator
//    ajaxindicatorstop();
//});