///////Game Start

var rat = document.getElementById("rat")
var cat = document.getElementById("cat")

document.getElementById("startbtn").addEventListener("click",function(){
    if(rat.checked) 
    {localStorage.setItem("home",1)
    console.log(localStorage.getItem("home"))
    window.location.replace("home.html");    
    }
    if(cat.checked) 
    {localStorage.setItem("home",0)
    console.log(localStorage.getItem("home"))
    window.location.replace("home.html");
    }
    
})
