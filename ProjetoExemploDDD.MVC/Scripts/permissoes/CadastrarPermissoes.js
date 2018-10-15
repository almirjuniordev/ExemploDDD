$(document).ready(function () {
    verificaAcessos();
    //adicionaPermissao();
    $("#menu").select2({
        width: 'resolve' // need to override the changed default
    });


})

$("#menu").change(function () {
    if ($("#menu").val() === "") {
        $("#selPermissoes").prop('disabled', true);
        $("#Nivel").prop('disabled', true);
        $("#Observacoes").prop('disabled', true);
    }
    else {
        $("#selPermissoes").prop('disabled', false);
        $("#Nivel").prop('disabled', false);
        $("#Observacoes").prop('disabled', false);


        $.getJSON($("#GetPermissoes").val(), { idMenu: $("#menu").val() })
            .then(function (response) {

                $('#selPermissoes')
                    .find('option')
                    .remove()
                    .end();


                $('#selPermissoes').append($('<option>',
                    {
                        value: "",
                        text: "SELECIONE UMA PERMISSÃO"
                    }));

                $.each(response, function (i, field) {
                    //alert(field.Item1);
                    $('#selPermissoes').append($('<option>',
                        {
                            value: field.ID,
                            text: field.Chave,
                        }));
                });

        });

    }
})

$("#enviarPermissao").click(function () {

    if ($("#selPermissoes").val() === "") {
        swal("Erro", "Selecione uma Permissão :(", "error");
        return;
    }

    if ($("#Nivel").val() === "") {
        swal("Erro", "Informe um nivel :(", "error");
        return;
    }



    var model = {
        ID: $("#selPermissoes").val(),
        ItemConfiguradorsID: $("#menu").change().val(),
        Chave: $("#selPermissoes option:selected").text(),
        Nivel: $("#Nivel").val(),
        Observacoes: $("#Observacoes").val()
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

            $('#selPermissoes option:first').attr('selected', 'selected');

            $("#Nivel").val("");




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

$("#CadastrarPermissoes").click(function () {

    var model = {
        idMenu: $("#menu").change().val(),
        chave: $('#Chave').val().toUpperCase(),
    }

    


    if (model.Chave === "") {
        swal("Erro", "Digite uma Permissao :(", "error");
        return;
    }

    if ($("#menu").val() === "") {
        swal("Erro", "Selecione um menu :(", "error");
        return;
    }

    $("#selPermissoes option:selected").each(function () {
        var sel = $(this).text();
        if (model.Chave === sel) {
            swal("Erro", "Permissao já existe :(", "error");
            return;
        }
    });



    //$('span [data-valmsg-for="Descricao"]').text("menue novo")
    //$('data-valmsg-for="Descricao"')





    $.ajax({
        type: "POST",
        url: $("#Cadastrar").val(),
        data: model,
        dataType: "json",
        success: function (data) {

            $('#selPermissoes').append(
                $('<option>',
                    {
                        text: data.Chave,
                        value: data.ID

                    }, '</option>')
            );

            $("#Chave").val('');
        },
        error: function (data) {
            //alert("error")
            swal("Erro", "Erro ao cadastrar Permissao :(", "error");
            return;
        }
    });



    //}).then(function (data) {

    //        $('#selPermissoes').append(
    //            $('<option>',
    //                {
    //                    text: data.Chave,
    //                    value: data.ID

    //                }, '</option>')
    //        );

    //        $("#Chave").val('');

        //success: function (data) {

        //    //$('#selPermissoes option').each(function () {
        //    //    if ($(this).val() != ' ') {
        //    //        $(this).remove();
        //    //    }
        //    //});



        //    $('#selPermissoes').append(
        //        $('<option>',
        //            {
        //                text: data.Chave,
        //                value: data.ID

        //            }, '</option>')
        //    );

        //    $("#Chave").val('');
        //},
        //error: function (data) {
        //    //alert("error")
        //    swal("Erro", "Erro ao cadastrar Permissao :(", "error");
        //    return;
        //},

    })

//});


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



