
(function ($) {

})

$("#addTask").click(function () {
    var task = $("#textInput").val();
    if (task !== "") {
        $("#theList").append("<li>" + task + ' <button class="complete">Merkitse tehdyksi</button></li>');
        $("#textInput").val("");

    }
});
$("#nuke").click(function () {
    $("#theList").empty();
});

$(document).on("click", ".complete", function () {
    $(this).parent().toggleClass("completed")
});


$("#clearCompleted").click(function () {
    $("#theList .completed").fadeOut(300, function () {
        $(this).remove();
    });
});