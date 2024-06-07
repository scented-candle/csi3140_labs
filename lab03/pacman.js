var pacPos;
var ghostPos;
var fruitPos;
var score; 
var lvlComp;

function createGame(n) {
    var arr = new Array(n);

    score = 0;
    lvlComp = false;

    pacPos = Math.floor((Math.random() * n));
    ghostPos = Math.floor((Math.random() * n));
    fruitPos = Math.floor((Math.random() * n));

    while(ghostPos == pacPos){
        ghostPos = Math.floor((Math.random() * n)); 
    }

    while(fruitPos == pacPos || fruitPos == pacPos) {
        fruitPos = Math.floor((Math.random() * n));
    }

    for(var i = 0; i < n ; i++){
        arr[i] = ".";
    }

    arr[pacPos] = "C";
    arr[fruitPos] = "@";
    arr[ghostPos] = "^";
    
    document.write(arr);

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

    if(score = n-3){
        lvlComp = true;
        document.writeln("Level completed!");
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

    if(score = arr.length-3){
        lvlComp = true;
        document.writeln("Level completed!");
    }

    return arr;

}

function ghostMove(game) {
    arr = game;

    const direction = Math.random() < 0.5 ? -1 : 1;
    
    if ((ghostPos + direction) >= 0 && (ghostPos + direction) < arr.length) {
        arr[ghostPos] = '.';
        arr[ghostPos + direction] = '^';
    } 

    return arr;
}


function startGhost(game) {
    setInterval(ghostMove, 2000);
}

