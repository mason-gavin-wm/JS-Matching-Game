/**
 * Created by session1 on 8/12/16.
 */




var theLeftSide  = document.getElementById("leftSide");
var theRightSide  = document.getElementById("rightSide");
//var body = document.body;
var numberOfFaces = 5;


function generateFaces(){

    for(var i = 0; i < numberOfFaces; i++){

        var image = document.createElement("img");

        image.style.height= "55px";
        image.style.width= "55px";
        image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/2000px-Smiley.svg.png";

        image.style.top = (Math.random() * 400) + "px";
        image.style.left = (Math.random() * 400) + "px";

        theLeftSide.appendChild(image);

    }


}
generateFaces();

