$(document).ready(() => {
    $(".consume").on("click", (event) => {
        event.preventDefault();
        let url = "/api/burgers/" + $(event.currentTarget).data("id");
        console.log(url);
        $.ajax({
            url: url,
            method: "PUT"
        }).then(() => {
            location.reload();
        });
    }
});