
//Mascara javascript
function mask(inputName, mask, evt) {

    try {

        var text = document.getElementById(inputName);
        var value = text.value;

        // If user pressed DEL or BACK SPACE, clean the value

        try {
            var e = (evt.which) ? evt.which : event.keyCode;
            if (e == 46 || e == 8) {
                text.value = "";
                return;
            }

        } catch (e1) { }

        var literalPattern = /[0\*]/;
        var numberPattern = /[0-9]/;
        var newValue = "";

        for (var vId = 0, mId = 0 ; mId < mask.length ;) {
            if (mId >= value.length)
                break;

            // Number expected but got a different value, store only the valid portion
            if (mask[mId] == '0' && value[vId].match(numberPattern) == null) {
                break;
            }

            // Found a literal

            while (mask[mId].match(literalPattern) == null) {
                if (value[vId] == mask[mId])
                    break;
                newValue += mask[mId++];
            }

            newValue += value[vId++];
            mId++;

        }

        text.value = newValue;

    } catch (e) { }
}


$(function () {

    $("#cpf").mask("999.999.999-99");
    $("#date").mask("99/99/9999", { placeholder: "mm/dd/yyyy", completed: function () { alert("completed!"); } });
    $(".phone").mask("(999) 999-9999");
    $("#phoneExt").mask("(999) 999-9999? x99999");
    $("#iphone").mask("+33 999 999 999");
    $("#tin").mask("99-9999999");
    $("#ssn").mask("999-99-9999");
    $("#product").mask("a*-999-a999", { placeholder: " " });
    $("#eyescript").mask("~9.99 ~9.99 999");
    $("#po").mask("PO: aaa-999-***");
    $("#pct").mask("99%");
    $("#phoneAutoclearFalse").mask("(999) 999-9999", { autoclear: false, completed: function () { alert("completed autoclear!"); } });
    $("#phoneExtAutoclearFalse").mask("(999) 999-9999? x99999", { autoclear: false });

    $("input").blur(function () {
        $("#info").html("Unmasked value: " + $(this).mask());
    }).dblclick(function () {
        $(this).unmask();
    });
});
