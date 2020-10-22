$(document).ready(function(){

    let fontSize = 20;

    $("#box").on("click", function(){
        console.log("I was clicked!, but in jquery!")
        printHello();
        addTheNumbers(10, 20);
        $("body").css("background", "purple");

        $(this).css("fontSize", fontSize);
        fontSize = fontSize + 10;

        $("#box").addClass("my-special-rotate-class");

        $("div").css("color", "red");
    })

    let shouldAddText = true;

    // Mouse wheel event: Trigger an effect when the user scrolls
    $(document).on("wheel", function() {
        //console.log("scrolling happened!");

        let coolBox = `<div class="cool-box"></div>`;
        let amountScrolled = $(document).scrollTop();

        console.log("scroll: " + amountScrolled);

        if(amountScrolled > 1000 && shouldAddText == true) {
            $("body").css("background", "pink");
            let p = `<p class= "some-text">"""""someText"""""</p>`;

            //아주 중요한 부분 backtick 쓰는 방법 여기에서 p는 윗줄을 말함
            $("body").append(p)
            $(".some-text").css("top", `${amountScrolled + 400}px`);
            shouldAddText = false;
        }

        $("body").append(coolBox);
    })

    setInterval(function) {
        let coolBox = `<div class="cool-box"></div>`;
        $("body").append(coolBox);

        //랜덤으로 색 변하게
        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);

        $(".cool-bos").css("background", "rgb"(${randomR}, ${randomG},${randomB})`)
    }, 1000)

    setTimeout(function() {
        alert("it has been 3 seconds");
    }, 3000)


    function printHello() {
        console.log("hello");
    }

   
    function addTheNumbers(num1, num2) {
        console.log(num1 + num2);
    }


})


