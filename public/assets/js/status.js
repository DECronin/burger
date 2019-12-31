$(document).ready(() => {
    $(".consume").on("click", (event) => {
        event.preventDefault();
        let url = "/api/burgers/" + $(event.currentTarget).data("id");
        sendAjax(url);
    });

    $("#reset-all").on("click", (event) => {
        event.preventDefault();
        // let apiLength = 
        console.log("Reset All Burger Statuses to Devoured: false");
        // for(i = 0; i < ; i++){
        //     let url = "/api/burgers/" + i;
        //     sendAjax(url)
        // }

    })

    function sendAjax(url){
        console.log(url);
        $.ajax({
            url: url,
            method: "PUT"
        }).then(() => {
            location.reload();
        });
    }
});