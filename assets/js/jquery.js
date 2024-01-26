
$(function() {

    $(".card-title").click(function() {
        $(".card-text").toggle("slow", function() {

        });
    });
    //tooltip de bootstrap 5
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })


});

