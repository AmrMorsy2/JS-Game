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
class Tile {
        height = "50px";
        width = "50px";
        img = "assets/tile.jpg"
        constructor(x, y) {
                this.x = x
                this.y = y;
        }
    }
///////////////////////create objects//////////////
var body = document.getElementsByTagName("body");
var myCharacter = new Character("500px","500px");
var tile1 = new Tile("320px","300px")
var tile2 = new Tile("380px","450px")
var tile3 = new Tile("500px","200px")
var tile4 = new Tile("400px","150px")
var coinElements = [];
var tilesElements = [];
var dir = 0;
var score = 0 ;
var tiles  = [tile1,tile2,tile3,tile4];
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
        checkCollideCoin(obj);
        checkCollideTile(obj);

}

function checkCollideCoin(obj){
        for(let i=0;i<coinElements.length;i++)
                if(isCollide(coinElements[i],obj)){
                        coinElements[i].parentElement.removeChild(coinElements[i]);
                        score++;
                        
if(score == 10)
        for(let i = 0;i<tiles.length;i++){
                var newTile = new Tile(Math.floor((Math.random() * 1000) + 1) + "px", Math.floor((Math.random() * 1000) + 1) + "px")
                tilesElements.push(renderElement(newTile))
        }

                        console.log(score);
                        return true;
                }
        return false;
}
function checkCollideTile(obj){
        for(let i=0;i<tilesElements.length;i++)
                if(isCollide(tilesElements[i],obj)){
                        clearInterval(moveInterval);
                        alert("game over");
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
              //  coins.push(newCoin);
                coinElements.push(renderElement(newCoin));
        }, 2000)
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
var moveInterval = setInterval(move,100,moveCharacter)