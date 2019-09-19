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