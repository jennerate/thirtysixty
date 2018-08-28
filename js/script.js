var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
});

var test;

$(document).ready(function(){ 
    $('.btn-seconds').click(function() { 
        $('.btn-seconds').removeClass('btn-seconds-active');
        $(this).addClass('btn-seconds-active');
    });
});

$(document).ready(function(){ 
    $('.btn-set').click(function() { 
        $('.btn-set').removeClass('btn-set-active');
        $(this).addClass('btn-set-active');
    });
});

$(document).ready(function() {
    $('.desired-sets').click( function() {
    var selectedSets= $(this).val();
    console.log(selectedSets);
    });
});

$(document).ready(function() {
    document.getElementById("giphy").innerHTML = '<iframe src="https://giphy.com/embed/3o7qDQNEs2CtC5AkZW" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
})

var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=fun&api_key=hZKTWyZHuBaU0J00XV9sPoFAvYOOuyi6&limit=100");
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
    document.getElementById("giphy").innerHTML = '<iframe src="' + embeddedUrl[index] + '"width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen </iframe>';
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

