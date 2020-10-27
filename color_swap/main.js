$(document).ready(function(){
    
let colors = [
    "red",
    "blue",
    "orange",
    "purple",
    "green"
]

let fonts = [
    "Helvetica",
    "Arial",
    "Trebuchet",
    "Times New Roman",
    "Comic Sans MS"
]


let index = 0;
$("#box").click(function() {
    let currentColor = colors[index];
    $("#box").css("background", currentColor);
    index++;
    if(Index == colors.length) {
        Index = 0;
    }
})

let fontIndex = 0;
$("#font-swap").click(function() {
    let currentFont = fonts [fontIndex];
    $("#font-swap").css("font-family", currentFont);
    fontIndex++;
    //loop back 하는 방법
    if(fontIndex == fonts.length) {
        fontIndex = 0;
    }
})

//이미지가 저절로 바뀌게 하는방법
setInterval(function() {
    let currentFont = fonts [fontIndex];
    $("#font-swap").css("font-family", currentFont);
    fontIndex++;
    if(fontIndex == fonts.length) {
        fontIndex = 0;
    }
}, 50)



})