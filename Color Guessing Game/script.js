function generateRandomColors(num){
    var arr = [];
    for (var i=0;i<num;i++){
        arr.push(randomColors());
    }
    return arr;
}
function randomColors(){
    var r = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

document.querySelector("#reset").addEventListener("click",function(){
    colors = generateRandomColors(numSquares);
    pickedColor= pickColor();
    document.querySelector("h1 span").textContent = pickedColor;
    for(var i =0; i< square.length;i++){
        //assign the color to the square
        square[i].style.backgroundColor = colors[i];}
    h1.style.backgroundColor = "steelblue";
    alert.textContent ="";
})

