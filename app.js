
var dives = document.querySelectorAll(".squere")
var headingcolor = document.querySelector(".displayColor")
var h1 = document.querySelector("h1")
var message = document.querySelector("#message")
var newColor = document.querySelector("#reset")
var easyMode = document.querySelector("#easy")
var hardMode = document.querySelector("#Hard")


var colors = changeDivColor(6)

var pickColor = RandomColor(colors)


var green = "rgb(80, 254, 13)"
var red = "rgb(235, 12, 12)"
headingcolor.textContent = pickColor


//  new color 
newColor.addEventListener("click",function(){
    message.textContent = " ";
    this.textContent = " New Color "
    colors = changeDivColor(6)
   
    pickColor = RandomColor(colors)
    headingcolor.textContent = pickColor
    for( var i = 0; i < dives.length; i++){
        dives[i].style.backgroundColor = colors[i]
    }

})

// easy mode

easyMode.addEventListener("click",function(){
    this.classList.add("selectBtn");
    hardMode.classList.remove("selectBtn")
    colors = changeDivColor(3)
    pickColor = RandomColor(colors)
    headingcolor.textContent = pickColor

    for ( var i = 0; i < dives.length; i++){
        if(colors[i]){
            dives[i].style.backgroundColor = colors[i]
        }else{
            dives[i].style.display = "none";
        }
    }


})
hardMode.addEventListener("click",function(){
    this.classList.add("selectBtn");
    easyMode.classList.remove("selectBtn")

    colors = changeDivColor(6)
    pickColor = RandomColor(colors)
    headingcolor.textContent = pickColor

  for (var i = 0; i < dives.length; i++){
      dives[i].style.backgroundColor = colors[i];
      dives[i].style.display = "block";
  }

})
for(var i = 0; i<dives.length; i++){
    dives[i].style.backgroundColor = colors[i]
    dives[i].addEventListener("click",function(){
         
        var chosenColor = this.style.backgroundColor;

        if(chosenColor===pickColor){
            newColor.textContent = "try again"
            message.textContent = "write"
            message.style.color = green
            MatchColor(pickColor)
            h1.style.backgroundColor = pickColor
            
            
        }else{
            message.textContent = "wrong"
            message.style.color = red
            this.style.backgroundColor = "#232323";
        }

   
    })
}


function MatchColor (color){
    for (var i = 0; i<dives.length; i++){
        dives[i].style.backgroundColor = color 
    }
}



function RandomColor(value){
    var Rand = Math.floor(Math.random() * colors.length)
    return value[Rand]
}


function changeDivColor (value){
    color = []

     for (var i = 0; i < value; i++){
         colorssdiv()
         color.push(colorssdiv())
     }
    return color;

}



function colorssdiv (){
    var r = Math.floor(Math.random() *256)
    var g = Math.floor(Math.random() *256)
    var b = Math.floor(Math.random() *256)

    return rgb = "rgb" + "(" + r + ", " + g + ", " + b + ")"
    
}

























































