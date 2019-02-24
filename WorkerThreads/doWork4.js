//Empfangen von postMessage des UI Threads
this.onmessage = function (arg) {
    this.postMessage(arg.data);
};