function printLines(args) {
    var lines = args.map(String);
    
    for (let line of lines){
        if (line === "Stop"){
            break;
        }

        console.log((line));
    } 
}

printLines(['1','Stop','4'])