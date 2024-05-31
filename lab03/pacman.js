function createGame(n){
    var arr = new Array();

    var pacPos = Math.floor((Math.random() * n));
    var ghostPos = Math.floor((Math.random() * n));
    var fruitPos = Math.floor((Math.random() * n));

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
            arr.push("^")
        } else if (i == fruitPos){
            arr.push("@")
        }else{
            arr.push(".")
        }
    }
    
    document.write(arr);

}


createGame(10);