/**
 * Comprimir arquivo pelo site http://javascriptcompressor.com/
 * Ofuscar arquivo pelo site https://javascriptobfuscator.com
 *
 */



var usuario = "";
var senha = "";

//$('#Entrar').click(function () {

//    usuario = $("#UserName").val()

//    var key = CryptoJS.enc.Utf8.parse('8080808080808080');
//    var iv = CryptoJS.enc.Utf8.parse('8080808080808080');   
//    //senha = CryptoJS.AES.encrypt($("#Password").val(), "OABSP")

//    senha = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse($("#Password").val()), key,
//        {
//            keySize: 128 / 8,
//            iv: iv,
//            mode: CryptoJS.mode.CBC,
//            padding: CryptoJS.pad.Pkcs7
//        });   



//    var myData = {
//        UserName: usuario,
//        Password: senha.toString(),
//    }

//    $.post({
//        url: $("#Login").val(),
//        type: 'POST',
//        //dataType: "json",
//        contentType: 'application/json',
//        data: JSON.stringify(myData),

//        success: function (message) {

//            if (message === "Nova Senha") {
//                window.location.href = '#signup';
//            }

//            else if (message === "Sucesso") {
//                window.location.href = $("#Home").val();
//            }
//            else {
//                $('#spanValidacao').text(message);
//                $('#spanValidacao').show();
//                $("#UserName").val('')
//                $("#Password").val('')
//            }
//        }
//    });
//});

//$("#Atualizar").click(function () {
//    var myData = {
//        UserName: usuario,
//        OldPassword: senha,
//        NewPassword: $("#NovaSenha").val(),
//        ConfirmPassword: $("#ConfirmarSenha").val()
//    }

//    $.post({
//        url: $("#AlterarSenha").val(),
//        type: 'POST',
//        dataType: "json",
//        contentType: 'application/json',
//        data: JSON.stringify(myData),

//        success: function (message) {
//            if (message === "Sucesso") {
//                window.location.href = $("#Home").val();
//            }
//            else {
//                $('#spanValidacao').text(message);
//                $('#spanValidacao').show();
//                $("form").trigger('reset');
//            }

//        }
//    });
//});


//$("form").keyup(function () {
//    $('#spanValidacao').hide();
//});

//$("form").keyup(function () {
//    $('.text-danger').hide();
//});

