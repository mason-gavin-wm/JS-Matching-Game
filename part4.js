/**
 * Created by session1 on 8/16/16.
 */
/**
 * Created by session1 on 8/15/16.
 */


/**
 * Created by session1 on 8/12/16.
 */




var theLeftSide  = document.getElementById("leftSide");
var theRightSide  = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
var numberOfFaces = 5;


function generateFaces(){

    for(var i = 0; i < numberOfFaces; i++){

        var image = document.createElement("img");


        image.src = "http://www.clipartbest.com/cliparts/dc6/eKX/dc6eKXKc9.png";
        image.style.height= "55px";
        image.style.width= "55px";
        image.style.top = (Math.random() * 325 + 50) + "px";
        image.style.left = (Math.random() * 325 + 50) + "px";

        theLeftSide.appendChild(image);

    }

    var leftSideImages = theLeftSide.cloneNode(true);

    leftSideImages.removeChild(leftSideImages.childNodes[leftSideImages.childNodes.length - 1]);

    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.onclick =function nextLevel(event){

        event.stopPropagation();
        while(theLeftSide.firstChild){
            theLeftSide.removeChild(theLeftSide.firstChild)
        }
        while(theRightSide.firstChild){
            theRightSide.removeChild(theRightSide.firstChild)
        }

        numberOfFaces +=5;

        generateFaces();

    };



}
generateFaces();


theBody.onclick = function gameOver() {

    alert("Game Over!");

    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
};




