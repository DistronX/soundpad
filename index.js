for (var i=0; i<7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var currentButton = this.innerHTML;
        buttonAnimation(currentButton);
        makeSound(currentButton);
    });
}

document.addEventListener("keypress",function (event){
    makeSound(event.key);
});

function makeSound(currentButton) {
    buttonAnimation(currentButton);

    switch (currentButton) {
        case 'w':
            var audio = new Audio("sounds/illuminati.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/illuminati.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/illuminati.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/illuminati.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/illuminati.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/illuminati.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/illuminati.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(buttonId) {
    var currentButton = document.querySelector("." + buttonId)

    currentButton.classList.add("pressed");
    window.setTimeout(function (){currentButton.classList.remove("pressed")}, 90);
}