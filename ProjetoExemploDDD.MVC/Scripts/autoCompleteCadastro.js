$("#register_UserName").keyup(function () {
    $("#register_Email").val(this.value + "@oabsp.org.br");
});