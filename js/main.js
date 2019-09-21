/////////////class Coin//////////////
class Coin{
        height = "50px";
        width = "50px";
        img = "assets/myCoin.png"
        constructor( x, y){
            this.x = x
            this.y = y;
        }
    }
///////////////////////create objects//////////////
var body = document.getElementsByTagName("body");
var coin1 = new Coin("320px","300px")
var coin2 = new Coin("380px","450px")
var coin3 = new Coin("500px","200px")
var coin4 = new Coin("400px","150px")
var coins  = [coin1,coin2,coin3,coin4];
//////////////////////render element function///////////////////////
var renderElement= function( obj){
        let element = document.createElement("img");
        element.setAttribute("src",coin1.img );
        element.style.width = coin1.width
        element.style.height = coin1.height

        element.style.position ="absolute"
        element.style.top = obj.x;
        element.style.left = obj.y;
        body[0].appendChild(element);
} 
////////////////rendering the first elements/////////////////////////////////
for(let i=0 ;i<coins.length;i++){
        console.log(coins[i])
        renderElement(coins[i])
}
///////getting the coins apear every 60 sec //////////////////////
var createCoin = function(){
         setInterval(function(){
                var newCoin = new Coin(Math.floor((Math.random() * 1000) + 1)+"px",Math.floor((Math.random() * 1000) + 1)+"px")
                console.log(newCoin);
                coins.push(newCoin);
                renderElement(newCoin);
        },10000)
}
createCoin();