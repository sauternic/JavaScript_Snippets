//Zufallszahlen in gewünschtem Bereich! :)

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Teständerung in Fork