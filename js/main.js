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
        //i=0
        charSrc=["cat.png","rat.png"]
        height = "100px";
        width = "100px";
        constructor(x, y,img) {
                this.x = x
                this.y = y;
                this.img = img;
        }
}
class Tile {
        height = "50px";
        width = "200px";
        img = "assets/tile.jpg"
        constructor(x, y) {
                this.x = x
                this.y = y;
        }
}
///////////////////////create objects//////////////
var index = localStorage.getItem("index") ;
var body = document.getElementsByTagName("body");
var charSrc=["cat.png","rat.png"]
var img = "assets/"+ charSrc[index];
var myCharacter = new Character("500px", "500px",img);
var tile1 = new Tile("250px", "250px")
var tile2 = new Tile("300px", "1200px")
var tile3 = new Tile("500px", "1000px")
var tile4 = new Tile("600px", "250px")
var TileX = [250, 300, 500, 600];
var TileY = [250, 1200, 1000, 1400];
var myTiles = [tile1, tile2, tile3, tile4];
var CollidCnt = 0;
var acel = 1;
var coinInterval;
var coinElements = [];
var tilesElements = [];
var dir = 0;
var score = 0;
var charI = 0
var tiles = [tile1, tile2, tile3, tile4];
///////////////set char ing/////////////////////////////////////////

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
        console.log(screen.width);
        if (dir == 0) {
                obj.style.left = Math.min(screen.width- (0.08*screen.width), (posX + acel)) + "px";
                if (obj.style.left == "1750px")
                        dir = 2;
        }
        if (dir == 1) {
                obj.style.top = Math.max(170, (posY - acel)) + "px";
                if (obj.style.top == "170px")
                        dir = 3;
        }
        if (dir == 2) {
                obj.style.left = Math.max(50, (posX - acel)) + "px";
                if (obj.style.left == "50px")
                        dir = 0;
        }
        if (dir == 3) {
                obj.style.top = Math.min(600, (posY + acel)) + "px";
                if (obj.style.top == "600px")
                        dir = 1;
        }
        checkCollideCoin(obj);
        checkCollideTile(obj);

}

function checkCollideCoin(obj) {
        for (let i = 0; i < coinElements.length; i++)
                if (isCollide(coinElements[i], obj)) {
                        coinElements[i].parentElement.removeChild(coinElements[i]);
                        score++;
                        let myScoreBoard = document.getElementById("myScore");
                        myScoreBoard.innerHTML = "Score : " +score + " Coins";
                        if (score == 10) {
                                obj.style.left = "500px";
                                obj.style.top = "500px";
                                for (let i = 0; i < myTiles.length; i++) {
                                        tilesElements.push(renderElement(myTiles[i]));
                                }
                        }
                        if (score == 20) {
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

function freeSpace(x, y) {

        for (let i = 0; i < TileX.length; i++) {
                if ((x + 500 > TileX[i] && x < TileX[i]) || (TileY + 500 > TileY[i] && y < TileY[i]))
                        return false;
                if ((x - 500 < TileX[i] && x > TileX[i]) || (y - 500 < TileY[i] && y > TileY[i]))
                        return false;
        }
        return true;
}

///////getting the coins apear every 60 sec //////////////////////
var createCoin = function (x) {
        coinInterval = setInterval(function () {
                let x;
                let y;
                x = Math.floor((Math.random() * 450) + 210);
                y = Math.floor((Math.random() * 1700) + 100);
                y= Math.min(y,screen.width- (0.08*screen.width));
                var newCoin = new Coin(x + "px", y + "px");
                //  coins.push(newCoin);
                coinElements.push(renderElement(newCoin));
        }, x)
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
                ((obj1.y + obj1.height) - 28 < (obj2.y)) ||
                (obj1.y > (obj2.y + obj2.height) - 28) ||
                ((obj1.x + obj1.width) - 28 < obj2.x) ||
                (obj1.x > (obj2.x + obj2.width) - 28)
        );
}


///////Game Start


////////Base Game Functions

//setInterval(ChangeDir,100);
/*createCoin();
*/
var moveCharacter = renderElement(myCharacter);
var moveInterval;
document.getElementById("startGame").addEventListener('click', function () {
        moveInterval = setInterval(move, 1, moveCharacter)
        createCoin(1);
});
setInterval(ChangeDir, 100);



