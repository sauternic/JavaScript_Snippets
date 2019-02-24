//Empfangen von postMessage des UI Threads
this.onmessage = function () {
    //Hier zeitintensive Berechnung:
    for(var x = 0; x < 5000000000; x++){
        x;
    }
    //Ergebnis von Berechnung
    this.postMessage(x);
};