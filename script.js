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
            childDiv.setAttribute("style", "color: blue; background: white; border: black 1px solid; padding: 78px;")
            div.appendChild(childDiv);
            
        }
    }
}

