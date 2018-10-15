$("#CadastrarCategoria").click(function () {

    var data = { Descricao: document.getElementById('CadCategoria').value.toUpperCase() }

    if (data.Descricao === "") {
        swal("Erro", "Digite uma categoria :(", "error");
        return;
    }

    $("#selCategoria option:selected").each(function () {
        var sel = $(this).text();
        if (data.Descricao === sel) {
            swal("Erro", "Categoria já existe :(", "error");
            return;
        }
    });



    //$('span [data-valmsg-for="Descricao"]').text("Teste novo")
    //$('data-valmsg-for="Descricao"')

    $.ajax({
        type: "POST",
        url: $("#Cadastrar").val(),
        data: data,
        dataType: "json",
        success: function (data) {

            $('#selCategoria').append(
                $('<option>',
                {
                    text: data.Descricao,
                    value: data.ID

                },'</option>')
            );

            $("#CadCategoria").val('');
        },
        error: function (data) {
            //alert("error")
            swal("Erro", "Erro ao cadastrar Categoria :(", "error");
            return;
        },

    })

});




$('#selCategoria').change(function () {
    var sel = $('#selCategoria option:selected').text()

    if (sel != "SELECIONE UMA CATEGORIA") {
        $('button#excluir').show();

        localStorage.setItem('categoria', sel);
        
    }
    else {
        $('button#excluir').hide();
    }


    //if (data.Descricao === sel) {
    //    swal("Erro", "Categoria já existe :(", "error");
    //    return;
    //}
});


$('#excluir').on('show.bs.modal', function (e) {
    var categoria = $('#selCategoria option:selected').text();
    $(e.currentTarget).find('input[name="categoria.Descricao"]').val(categoria);
});





