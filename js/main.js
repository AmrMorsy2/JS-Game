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
class Character {
        height = "100px";
        width = "100px";
        img = "assets/myCharacter.jpg";
        constructor(x, y) {
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
var myCharacter = new Character("500px", "500px");
var tile1 = new Tile("250px", "250px")
var tile2 = new Tile("300px", "1200px")
var tile3 = new Tile("500px", "1000px")
var tile4 = new Tile("600px", "1400px")
var myTiles = [tile1,tile2,tile3,tile4];
var level = 1;
var acel = 1 ;
var coinInterval;
var coinElements = [];
var tilesElements = [];
var dir = 0;
var score = 0;
var tiles = [tile1, tile2, tile3, tile4];
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
////////////////func Move////////////////////////////////////////////////////

var move = function (obj) {
        var str = (obj.style.top);
        str = str.substr(0, str.length - 2);
        var posY = parseInt(str);
        var str2 = obj.style.left;
        str2 = str2.substr(0, str2.length - 2);
        var posX = parseInt(str2);

        if (dir == 0)
                obj.style.left = Math.min(1750,(posX + acel)) + "px";
        if (dir == 1)
                obj.style.top = Math.max(220,(posY - acel)) + "px";
        if (dir == 2)
                obj.style.left = Math.max(50,(posX - acel)) + "px";
        if (dir == 3)
                obj.style.top = Math.min(600,(posY + acel)) + "px";
        console.log(posX);
        console.log(posY);
        checkCollideCoin(obj);
        checkCollideTile(obj);

}

function checkCollideCoin(obj) {
        for (let i = 0; i < coinElements.length; i++)
                if (isCollide(coinElements[i], obj)) {
                        coinElements[i].parentElement.removeChild(coinElements[i]);
                        score++;
                        let myScoreBoard = document.getElementById("myScore");
                        myScoreBoard.innerHTML = score + "Coins";
                        if (score == 10){
                                level = 2;
                                for (let i = 0; i < myTiles.length; i++) {
                                        tilesElements.push(renderElement(myTiles[i]));
                                }
                        }
                        if (score == 20){
                                acel = 3;
                                level = 3;
                        }
                        return true;
                }
        return false;
}
function checkCollideTile(obj) {
        for (let i = 0; i < tilesElements.length; i++)
                if (isCollide(tilesElements[i], obj)) {
                        clearInterval(moveInterval);
                        clearInterval(coinInterval);
                        alert("game over");
                        document.location.reload();
                        return true;
                }
        return false;
}

////////////////rendering the first elements/////////////////////////////////

///////getting the coins apear every 60 sec //////////////////////
var createCoin = function () {
        coinInterval = setInterval(function () {
                var newCoin = new Coin(Math.floor((Math.random() * 450) + 210) + "px", Math.floor((Math.random() * 1700) + 100) + "px");
                //  coins.push(newCoin);
                coinElements.push(renderElement(newCoin));
        }, 1000)
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
}
//////////// Check for Collision
function isCollide(obj1, obj2) {
        return !(
                ((obj1.y + obj1.height) < (obj2.y)) ||
                (obj1.y > (obj2.y + obj2.height)) ||
                ((obj1.x + obj1.width) < obj2.x) ||
                (obj1.x > (obj2.x + obj2.width))
        );
}


///////Game Start



////////Base Game Functions

//setInterval(ChangeDir,100);
/*createCoin();
*/
var moveCharacter = renderElement(myCharacter);
var moveInterval;
document.getElementById("startGame").addEventListener('click',function(){
        moveInterval = setInterval(move, 1, moveCharacter)
        createCoin();
});
setInterval(ChangeDir, 100);

