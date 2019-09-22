/////////////class Coin//////////////
class Coin {
        height = "50px";
        width = "50px";
        img = "assets/myCoin.png"
        constructor(x, y) {
                this.x = x
                this.y = y;
        }
}
///////////////////////create objects//////////////
var body = document.getElementsByTagName("body");
var dir = 0;
var coin1 = new Coin("320px", "300px")
var coin2 = new Coin("320px", "360px")
var coin3 = new Coin("500px", "200px")
var coin4 = new Coin("400px", "150px")
var coins = [coin1, coin2, coin3, coin4];
//////////////////////render element function///////////////////////
var renderElement = function (obj) {
        let element = document.createElement("img");
        element.setAttribute("src", obj.img);
        element.style.width = obj.width
        element.style.height = obj.height

        element.style.position = "absolute"
        element.style.top = obj.x;
        element.style.left = obj.y;
        body[0].appendChild(element);
        return element;
}
////////////////rendering the first elements/////////////////////////////////
let arr=[];
for (let i = 0; i < coins.length; i++) {
        console.log(coins[i])
        arr.push(renderElement(coins[i]))
}
///////getting the coins apear every 60 sec //////////////////////
var createCoin = function () {
        setInterval(function () {
                var newCoin = new Coin(Math.floor((Math.random() * 1000) + 1) + "px", Math.floor((Math.random() * 1000) + 1) + "px")
                console.log(newCoin);
                coins.push(newCoin);
                renderElement(newCoin);
        }, 60000)
}


///////////Change Direction Function
var ChangeDir = function () {
        document.onkeydown = function (evn) {
                if (evn.key == "ArrowRight")
                        dir = 0;
                if (evn.key == "ArrowUp")
                        dir = 1;
                if (evn.key == "ArrowLeft")
                        dir = 2;
                if (evn.key == "ArrowDown")
                        dir = 3;
                }
        console.log(dir);
        
}

function isCollide(obj1, obj2) {
        return !(
                ((obj1.y + obj1.height) < (obj2.y)) ||
                (obj1.y > (obj2.y + obj2.height)) ||
                ((obj1.x + obj1.width) < obj2.x) ||
                (obj1.x > (obj2.x + obj2.width))
        );
}
console.log(isCollide(arr[0],arr[1]));

////////Base Game Functions

//setInterval(ChangeDir,100);
/*createCoin();
*/


