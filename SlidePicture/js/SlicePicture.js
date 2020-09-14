var picture = document.querySelectorAll("#container > img");
var nex = document.querySelector("#next");
var pre = document.querySelector("#Previous");

var current = 0;

showPicture(current);

pre.onclick = prev;
nex.onclick = next;

function showPicture(x) {
    for(var i =0; i<picture.length; i++){
        picture[i].style.display ="none";
    }
    picture[x].style.display= "block";
}

function prev(){
    if (current > 0){
        current -= 1;
    }else{
        current = picture.length -1;
    }

    showPicture(current)
}

function next() {
    if (current < picture.length - 1){
        current += 1;
    }else{
        current = 0;
    }

    showPicture(current);
}
