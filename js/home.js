///////Game Start

var rat = document.getElementById("rat")
var cat = document.getElementById("cat")

document.getElementById("startbtn").addEventListener("click",function(){
    if(rat.checked) 
    {localStorage.setItem("index",1)
    console.log(localStorage.getItem("index"))
    window.location.replace("index.html");    
    }
    if(cat.checked) 
    {localStorage.setItem("index",0)
    console.log(localStorage.getItem("index"))
    window.location.replace("index.html");
    }
    
})
