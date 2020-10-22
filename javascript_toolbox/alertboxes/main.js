$(document).ready(function(){
    $("body").on("click", function() {
      let alertBox = `<div class="alert">This is an alert!
        <button>OK</button>
        </div>`

    let randomX = Math.floor(Math.random()*500);
    let randomY = Math.floor(Math.random()*500);

    console.log("randomX: " + randomX);
    console.log("randomY: " + randomY);

        $('body').append(alertBox);

        $('.alert:last-child').css(`transform`, `translate(${randomX}px, ${randomY}px)`);
    })

})