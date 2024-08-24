function createSquares(){
    const container = document.querySelector("#container");
    
    for(var i = 0; i<16; i++){
        var div = document.createElement("div");
        div.setAttribute("style", "color: blue; background: white;")
        div.className = "createdBoxes";
        container.appendChild(div)
        for(var j = 0; j <16; j++){
            var childDiv = document.createElement("div");
            childDiv.className = "createdBoxes";
            childDiv.setAttribute("style", "color: blue; background: white; border: black 1px solid;")
            let padding = getPadding(16);
            childDiv.style.padding = padding;
            div.appendChild(childDiv);
            
        }
    }
}

function getPadding(squares){
    var area = (1000 * 1000);
    console.log(squares)
    var paddingSize = Math.floor(area/(squares*squares))/100;
    padding = String(paddingSize) + "px";
    console.log(padding);
    return padding;
}
