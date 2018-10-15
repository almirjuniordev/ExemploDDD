$(document).ready(function () {
    //var max_fields = 100; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID

    var x = 1; //initlal text box count
    //$(add_button).click(function (e) { //on add input button click
    //    e.preventDefault();
    //    //if (x < max_fields) { //max input box allowed
    //        x++; //text box increment
    //        $(wrapper).append('<div class="claim">' +
    //            '<input type="text" id="item" name="claims" style="text-transform:uppercase" placeholder="Digite o item">' + 
    //            '<input type="number" min="1" max="100" id="valor" name="claims" placeholder="Nivel">' +
    //            '<a href="#" class="remove_field">Remover</a>' +
    //            '<br />' + 
    //            '</div>'); //add input box
    //    //}

            


    //});

    //$(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
    //    e.preventDefault(); $(this).parent('div').remove(); x--;
    //})

    $(".panel-body").on("click", ".remove_field", function (e) { //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })

    

    verificaAcessos();
});



$("#menu").change(function () {
    if ($("#menu").val() === "") {
        $("#selPermissoes").prop('disabled', true);
        $("#Nivel").prop('disabled', true);


        LimpaPermissoes();

        LimpaNivel();



    }
    else {
        $("#selPermissoes").prop('disabled', false);
        $("#Nivel").prop('disabled', true);
        LimpaNivel();


        $.getJSON($("#GetPermissoes").val(), { idMenu: $("#menu").val() })
            .then(function (response) {

                //$('#selPermissoes')
                //    .find('option')
                //    .remove()
                //    .end();


                //$('#selPermissoes').append($('<option>',
                //    {
                //        value: "",
                //        text: "SELECIONE UMA PERMISSÃO"
                //    }));


                LimpaPermissoes();
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

$("#selPermissoes").change(function () {
    if ($("#selPermissoes").val() === "") {
        $("#Nivel").prop('disabled', true);

        LimpaNivel();
    }
    else {
        $("#Nivel").prop('disabled', false);


        $.getJSON($("#GetNivel").val(), { chave: $("#selPermissoes option:selected").text() })
            .then(function (response) {
                LimpaNivel();

                $.each(response, function (i, field) {
                    //alert(field.Item1);
                    $('#Nivel').append($('<option>',
                        {
                            text: field.Nivel,
                        }));
                });

            });

    }
})





$("#cadastrarPermissoesUsuario").click(function () {


    $(".panel-body").append('<div class="PermissaoMenuNivel">' +
        '<div class="claim bg-gray-active color-palette" style= "width: 50%;" > ' +
        '<div class="col col-md-10">' +
        '<label> Id de Menu:   </label>' +
        '<span>  ' + $("#menu option:selected").text() + '      </span>' +
        '<label> Permissão:   </label>' +
        '<span>  ' + $("#selPermissoes option:selected").text() + '      </span>' +
        '</div>' +
        '<label> Nivel:   </label>' +
        '<span>  ' + $("#Nivel option:selected").text() + '</span>' +
        '<input type="hidden" name="todasPermissoes" value=' + $("#menu").val() + '/' + $("#selPermissoes option:selected").text() + '/' + $("#Nivel").val() + '>' +
        '</div>' +
        '<a href="#" class="remove_field">Remover</a>' +
        '</div>' +
        '<br />');




    //$.getJSON($("#CadastrarPermissoesUsuario").val(),
    //    {
    //        idMenu: $("#menu").val(),
    //        Chave: $("#selPermissoes option:selected").text(),
    //        Nivel: $("#Nivel option:selected").text(),
    //        id: $("#Guid").val()
    //    },
    //).then(function (response) {

    //    //$(".panel-body").append('<div class="claim bg-gray-active color-palette" style="width: 50%;">' +
    //    //    '<div class="col col-md-6">' +
    //    //    '<label> Menu:   </label>' +
    //    //    '<label>  ' + response.idMenu + '      </label>' +
    //    //    '<label> Permissão:   </label>' +
    //    //    '<label>  ' + response.Chave + '      </label>' +
    //    //    '</div>' +
    //    //    '<label> Nivel:   </label>' +
    //    //    '<label>  ' + response.Nivel + '</label>' +
    //    //    '</div>' +
    //    //    '<br />');
    //    });


});


function verificaAcessos() {
    if ($("#menu").val() === "") {
        $("#selPermissoes").prop('disabled', true);
        $("#Nivel").prop('disabled', true);
    }
    else {
        $("#selPermissoes").prop('disabled', false);
        $("#Nivel").prop('disabled', false);
    }
}


function LimpaNivel() {

    $("#Nivel")
        .find('option')
        .remove()
        .end();


    $("#Nivel").append($('<option>',
        {
            value: "",
            text: "SELECIONE UM NIVEL"
        }));

    $("#Nivel").val("")
}


function LimpaPermissoes() {

    $("#selPermissoes")
        .find('option')
        .remove()
        .end();


    $("#selPermissoes").append($('<option>',
        {
            value: "",
            text: "SELECIONE UMA PERMISSÃO"
        }));

    $("#selPermissoes").val("")

}








