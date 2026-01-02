$(document).ready(function () {
    $("#myinput").on("keyup", function () {
        let value = $(this).val().toLowerCase();

        $(".container .fruitImg").filter(function () {
            $(this).toggle(
                $(this).text().toLowerCase().indexOf(value) > -1
            );
        });
    });
});
