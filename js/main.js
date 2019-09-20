var body = document.getElementsByTagName("body");
let coin = document.createElement("img");
coin.setAttribute("src","assets/myCoin.jpg" );
coin.style.width = "50px"
coin.style.height = "50px"
var renderElement= function(x,y,img){
        img.style.top = x;
        img.style.bottom = y;
        body[0].appendChild(img);
} 

 renderElement("200px","-200px",coin)
console.log(coin)

//contro diraction method

let d;

document.addEventListener("keydown",direction);

function direction(event){
let key = event.keyCode;
if( key == 37 && d != "RIGHT"){
    left.play();
    d = "LEFT";
}else if(key == 38 && d != "DOWN"){
    d = "UP";
    up.play();
}else if(key == 39 && d != "LEFT"){
    d = "RIGHT";
    right.play();
}else if(key == 40 && d != "UP"){
    d = "DOWN";
    down.play();
}
}