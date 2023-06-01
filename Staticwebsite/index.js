currentindex=0

images=["first.jpg","second.jpeg","third.jpeg","fourth.jpeg",
"fifth.jpeg",
"sixth.jpg"]

setInterval(
    function() {
        currentindex=Math.round(Math.random()*5)
     document.getElementById("img1").src = images[ currentindex]
    },10000
)

function changeimage(arrowtype){
    if(arrowtype=="right"){
        currentindex=currentindex==5?0:++currentindex
    }
    else if(arrowtype=="left"){
        currentindex=currentindex==0?5:--currentindex
    }
    document.getElementById("img1").src=images[currentindex]
}

function hideimage(arrow){
    if(arrow=="up"){
        document.getElementById("slide-show").style.display="none";
        document.getElementById("up").style.display="none";
        document.getElementById("down").style.display="block";
        
    }
    else{
        document.getElementById("slide-show").style.display="block";
        document.getElementById("up").style.display="block";
        document.getElementById("down").style.display="none";
    }
}