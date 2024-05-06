var i =0;
var images = [ ];
var time = 2000;


    images[0] = "sony(1).png";
    images[1] = "sony(2).png";
    images[2] = "sony(3).png";
    images[3] = "sony(4).png";

function SlidingImg(){

    document.slide.src = 'images[1]';


        if (i < images.length - 1) {
                i++;
        } else {
            i = 0;
        }
        setTimeout("SlidingImg()" ,time);
}
window.onload = SlidingImg;




function hidenshow() {
    if (document.getElementById('showDiv').style.visibility == "visible") {

        document.getElementById('showDiv').style.visibility = "hidden"

    } else {
        document.getElementById('showDiv').style.visibility = "visible"
    }
}


function hidenshow2() {
    if (document.getElementById('showDiv2').style.visibility == "visible") {

        document.getElementById('showDiv2').style.visibility = "hidden"

    } else {
        document.getElementById('showDiv2').style.visibility = "visible"
    }
}


function hidenshow3() {
    if (document.getElementById('showDiv3').style.visibility == "visible") {

        document.getElementById('showDiv3').style.visibility = "hidden"

    } else {
        document.getElementById('showDiv3').style.visibility = "visible"
    }
}




