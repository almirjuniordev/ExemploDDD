$(document).ready(function () {

    var checado = "";
    var listaInputs = $('label.tpConsulta').children("input[type=radio]");
    //$.ajax({
    //    url: $("#TipoInscricao").val(),
    //    type: 'GET',
    //    dataType: 'json',
    //    success: function (data) {
    //        $.each(data, function (index, key) {
    //            $("#tipoInscricao").append($('<option></option>').val(key).html(key));
    //        });
    //    }
    //});

    

    listaInputs.each(function (index, item) {
        if (index === 0) {
            $(item).prop('checked', true)
            checado = item.value.toLowerCase().replace("#","");
        }
        else {
            $(item).prop('checked', false);
        }
    });


    var listaDeViews = $('div.form-group').children("div.inscrito");
    var selection = $($(this).val());


    listaDeViews.each(function (index, item) {
        if (item.id.toLowerCase() !== checado) {
            $('#' + item.id.toString()).not(selection.show()).hide();
        }
    });
})

$('input[name=consulta]').click(function () {
    var selection = $($(this).val());
    $('.inscrito').not(selection.show()).hide();
});