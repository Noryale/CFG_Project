$(document).ready(function() {
    $("#searchFood").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#showFood *").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});