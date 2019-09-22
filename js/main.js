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
class Character{
        height = "100px";
        width = "100px";
        img = "assets/myCharacter.jpg";
        constructor( x, y){
                this.x = x
                this.y = y;
        }
}
///////////////////////create objects//////////////
var body = document.getElementsByTagName("body");
var myCharacter = new Character("500px","500px");
var coin1 = new Coin("320px","300px")
var coin2 = new Coin("380px","450px")
var coin3 = new Coin("500px","200px")
var coin4 = new Coin("400px","150px")
var coinElements = [];
var dir = 0;
var coins  = [coin1,coin2,coin3,coin4];
//////////////////////render element function///////////////////////
var renderElement= function(obj){
        let element = document.createElement("img");
        element.setAttribute("src",obj.img );
        element.style.width = obj.width
        element.style.height = obj.height

        element.style.position = "absolute"
        element.style.top = obj.x;
        element.style.left = obj.y;
        body[0].appendChild(element);
        return element;
} 
////////////////func Move////////////////////////////////////////////////////

var move = function(obj)
{       
        var str = (obj.style.top);
        str = str.substr(0,str.length-2);
        var posY = parseInt(str);
        var str2 = obj.style.left;
        str2 = str2.substr(0,str2.length-2);
        var posX = parseInt(str2);
        
        if(dir==0)
                obj.style.left = (posX+20) +"px";
        if(dir==1)
                obj.style.top = (posY-20) +"px";
        if(dir==2)    
                obj.style.left = (posX-20) +"px";
        if(dir==3)
                obj.style.top = (posY+20) +"px";
        if(checkCollide(obj))
                console.log("Collide");
}

function checkCollide(obj){
        for(let i=0;i<coinElements.length;i++)
                if(isCollide(coinElements[i],obj)){
                        coinElements[i].parentElement.removeChild(coinElements[i]);
                        return true;
                }
        return false;
}

////////////////rendering the first elements/////////////////////////////////

///////getting the coins apear every 60 sec //////////////////////
var createCoin = function () {
        setInterval(function () {
                var newCoin = new Coin(Math.floor((Math.random() * 1000) + 1) + "px", Math.floor((Math.random() * 1000) + 1) + "px")
                console.log(newCoin);
                coins.push(newCoin);
                coinElements.push(renderElement(newCoin));
        }, 6000)
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

////////Base Game Functions

//setInterval(ChangeDir,100);
/*createCoin();
*/
var moveCharacter = renderElement(myCharacter);
setInterval(ChangeDir,100);
createCoin();
setInterval(move,200,moveCharacter)
