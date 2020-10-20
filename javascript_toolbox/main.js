$(document).ready(function(){

    let fontSize = 20;

    $("#box").on("click", function(){
        console.log("I was clicked!, but in jquery!")
        printHello();
        addTheNumbers(10, 20);
        $("body").css("background", "purple");

        $(this).css("fontSize", fontSize);
        fontSize = fontSize + 5;

        $("div").css("color", "red");
    })

    

    function printHello() {
        console.log("hello");
    }

   
    function addTheNumbers(num1, num2) {
        console.log(num1 + num2);
    }


})


