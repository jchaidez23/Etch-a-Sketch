function createSquares(){
    try{
        let divs = document.getElementById("container");
        while(divs.firstChild){
            divs.removeChild(divs.lastChild);
        }
    }
    catch{
        console.log("No squares");
    }
    let numberSquares = getNumber();
    const container = document.querySelector("#container");
    
    for(var i = 0; i<numberSquares; i++){
        var div = document.createElement("div");
        div.setAttribute("style", "color: blue; background: white;")
        div.className = "createdBoxes";
        div.id = "createdBoxes";
        container.appendChild(div)
        for(var j = 0; j <numberSquares; j++){
            var childDiv = document.createElement("div");
            childDiv.className = "createdBoxes";
            // childDiv.setAttribute("style", "color: blue; background: white; border: black 0.1px solid;")
            let padding = getPadding(numberSquares);
            childDiv.style.width = padding;
            childDiv.style.height = padding;
            childDiv.addEventListener(
                "mouseenter",
                (event) => {
                    event.target.style.backgroundColor = "black";
                }
            )
            // childDiv.style.padding = padding;

            div.appendChild(childDiv);
            
        }
    }
}

function getPadding(squares){
    var area = 1080;
    console.log(squares)
    var paddingSize = Math.ceil(area/squares);
    padding = Math.floor(Math.sqrt(paddingSize));
    padding = String(paddingSize) + "px";
    console.log(padding);
    return padding;
}

function getNumber(){
    var number =  parseInt(document.getElementById("squares").value);
    console.log(number)
    return number;
}

function hover(){

}