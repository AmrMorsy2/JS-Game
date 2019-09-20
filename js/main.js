var body = document.getElementsByTagName("body");
let coin = document.createElement("img");
coin.setAttribute("src", "assets/myCoin.jpg");
coin.style.width = "50px"
coin.style.height = "50px"
var renderElement = function (x, y, img) {
        img.style.position = "absolute";
        img.style.top = x + "px";
        img.style.left = y + "px";
        body[0].appendChild(img);
}

renderElement(200, 200, coin)
console.log(coin)

let dir = 0;

function changeDir(evn) {
        if (evn.key == "ArrowUp")
                dir = 0;
        if (evn.key == "ArrowDown")
                dir = 1;
        if (evn.key == "ArrowLeft")
                dir = 2;
        if (evn.key == "ArrowRight")
                dir = 3;
}
/*
setInterval(()=>{
        console.log(dir);
},500);
*/
document.addEventListener("keydown", changeDir);

