var pacPos;
var ghostPos;
var fruitPos;
var score; 

function createGame(n) {
    var arr = new Array();

    score = 0;

    pacPos = Math.floor((Math.random() * n));
    ghostPos = Math.floor((Math.random() * n));
    fruitPos = Math.floor((Math.random() * n));

    while(ghostPos == pacPos){
        ghostPos = Math.floor((Math.random() * n)); 
    }

    while(fruitPos == pacPos || fruitPos == pacPos) {
        fruitPos = Math.floor((Math.random() * n));
    }

    for(var i = 0; i < n; i++ ){

        if(i == pacPos){
            arr.push("C");
        } else if (i == ghostPos){
            arr.push("^");
        } else if (i == fruitPos){
            arr.push("@");
        }else{
            arr.push(".");
        }
    }
    
    return arr;

}

function moveLeft(game) {
    var arr = new Array;

    arr = game;

    if (pacPos == 0){
        arr[0] = " ";
        arr[(arr.length - 1)] = "C";

        if(arr[(arr.length - 1)] != fruitPos || arr[(arr.length - 1)] != ghostPos){
            score++;
        }

    } else {
        arr[pacPos] = " ";
        arr[pacPos - 1] = "C"

        if(arr[pacPos - 1] != fruitPos || arr[pacPos - 1] != ghostPos){
            score++;
        }
    }

    return arr;
}

function moveRight(game) {
    var arr = new Array;

    arr = game;

    if (pacPos == arr.length - 1){
        arr[arr.length - 1] = " ";
        arr[0] = "C";

        if(arr[0] != fruitPos || arr[0] != ghostPos){
            score++;
        }

    } else {
        arr[pacPos] = " ";
        arr[pacPos + 1] = "C";

        if(arr[pacPos + 1] != fruitPos || arr[pacPos + 1] != ghostPos){
            score++;
        }
    }

    return arr;

}