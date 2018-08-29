$(document).ready(function() {
    document.getElementById("giphy").innerHTML = '<iframe src="https://giphy.com/embed/3o7qDQNEs2CtC5AkZW" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
})

var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=encouragement&api_key=hZKTWyZHuBaU0J00XV9sPoFAvYOOuyi6&limit=100");
var embeddedUrl = [];

function getGif() {    
    xhr.done(function(data) {
        var allGifs = data["data"];
        for (let i = 0; i < allGifs.length; i++) {
            let gifInformation = allGifs[i];
            embeddedUrl.push(gifInformation["embed_url"]);
        }
    });
}

getGif();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayGif() {
    var index = getRandomInt(0, embeddedUrl.length);
    document.getElementById("giphy").innerHTML = '<iframe src="' + embeddedUrl[index] + '"width="960" height="540"  frameBorder="0" class="giphy-embed" allowFullScreen </iframe>';
}

var i = 0, total = 50;
function changeGif() {
    displayGif();
    i++;
    if( i < total ){
        setTimeout(changeGif, (getRandomInt(3,7) * 1000) );
    }
}

changeGif();

document.getElementById("remaining-time").innerHTML = "test";