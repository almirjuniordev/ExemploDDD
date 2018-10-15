$(document).ready(function () {
    verificaAcessos();
    //adicionaPermissao();
    $("#menu").select2({
        width: 'resolve' // need to override the changed default
    });

    


})

$("#enviarPermissao").click(function () {

    var model = {
        id: $('#ID').val(),
        chave: $("#Chave").val(),
        nivel: $("#Niveis option:selected ").val(),
        observacoes: $("#Observacoes").val()
    }

    $.ajax({

        type: "POST",
        url: $("#Enviar").val(),
        data: model,
        dataType: "json",
        success: function (response) {


            $(".input_fields_wrap").append('<div class="claim bg-gray-active color-palette" style="width: 50%;">' +
                '<div class="col col-md-10">' +
                '<label> Permissão:   </label>' +
                '<label>  ' + response.Chave + '      </label>' +
                '</div>' +
                '<label> Nivel:   </label>' +
                '<label>  ' + response.Nivel + '</label>' +
                '</div>' +
                '<br />');

            // Aqui vai um append na div ao lado que vai conter as permissoes de acesso

            //$('#selPermissoes').append(
            //    $('<option>',
            //        {
            //            text: data.Chave,
            //            value: data.ID

            //        }, '</option>')
            //);

            //$("#Chave").val('');






        }

    });


});

$("#Adicionar").click(function () {

    var model = {
        id: $('#ID').val(),
        chave: $('#Chave').val().toUpperCase(),
        nivel: $("#Nivel").val()
    }


    //$("#Niveis option").each(function () {
    //    var sel = $(this).text();
    //    if (model.nivel === sel) {
    //        swal("Erro", "Nivel já existe :(", "error");
    //        return;
    //    }
    //});






    $.ajax({
        type: "POST",
        url: $("#AdicionarNivel").val(),
        data: model,
        dataType: "json",
        success: function (data) {



            $('#Niveis').append(
                $('<option>',
                    {
                        text: data.Nivel,

                    }, '</option>')
            );

        },
        error: function (data) {
            //alert("error")
            swal("Erro", "Nivel ja existente :(", "error");
            return;
        },
    })

    //}).then(function (data) {

    //    $('#Niveis').append(
    //        $('<option>',
    //            {
    //                text: data.Nivel,

    //            }, '</option>')
    //    );

    //})

});


function verificaAcessos() {
    if ($("#menu").val() === "") {
        $("#selPermissoes").prop('disabled', true);
        $("#Nivel").prop('disabled', true);
        $("#Observacoes").prop('disabled', true);
    }
    else {
        $("#selPermissoes").prop('disabled', false);
        $("#Nivel").prop('disabled', false);
        $("#Observacoes").prop('disabled', false);
    }
}

function adicionaPermissao() {

    //var max_fields = 100; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function (e) { //on add input button click
        e.preventDefault();
        //if (x < max_fields) { //max input box allowed
        x++; //text box increment
        $(wrapper).append('<div class="claim">' +
            '<input type="text" id="item" name="claims" style="text-transform:uppercase" placeholder="Digite o item">' +
            '<input type="number" min="1" max="100" id="valor" name="claims" placeholder="Nivel">' +
            '<a href="#" class="remove_field">Remover</a>' +
            '<br />' +
            '</div>'); //add input box
        //}
    });

    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    });

}



