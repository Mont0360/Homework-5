//makes sure the html and css are loaded before running.
$(document).ready(function () {
    
    //current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    //Assign click event listener for saveBtn
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);
    })

})