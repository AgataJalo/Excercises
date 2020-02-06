var counter = 0;

function uplikes(){
    counter = counter + 1;

    document.getElementById("likes").innerHTML = counter + " likes";
}



function downlikes(){
    counter = counter- 1;

    document.getElementById("likes").innerHTML = counter + " likes";
}

