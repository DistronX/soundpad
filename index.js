for (var i=0; i<7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress",function (event){
    buttonAnimation(event.key)
    var audio = new Audio("sounds/illuminati.mp3");
    audio.play();
});

function buttonAnimation(buttonId) {
    var currentButton = document.querySelector("." + buttonId)

    currentButton.classList.add("pressed");
    window.setTimeout(function (){currentButton.classList.remove("pressed")}, 90);
}