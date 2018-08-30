var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 15,
    freeMode: true,
});

$('.btn-seconds').click(function() { 
    $('.btn-seconds').removeClass('btn-seconds-active');
    $(this).addClass('btn-seconds-active');
});


$('.desired-sets').click(function() { 
    $('.desired-sets').removeClass('btn-set-active');
    $(this).addClass('btn-set-active');
});

$('.desired-rests').click(function() { 
    $('.desired-rests').removeClass('btn-rests-active');
    $(this).addClass('btn-rests-active');
});

function Workout(time, set, rest) {
    this.time = time;
    this.set = set;
    this.rest = rest;
}

var workoutDetails = new Workout(0,0,0);

var selectedTime;
var remainingTime;
$('#thirty, #sixty').click(function() {
    selectedTime = $(this).val();
    workoutDetails.time = selectedTime;
    remainingTime = selectedTime;
});

var selectedSets;
$('.desired-sets').click( function() {
    selectedSets = $(this).val();
    workoutDetails.set = selectedSets;
});

var selectedRests;
var remainingRests;
$('.desired-rests').click(function(){
    selectedRests = $(this).val();
    workoutDetails.rest = selectedRests;
    remainingRests = selectedRests;
}) 

$('#submitForm').click(function() {
   $(".settings-container").hide();
   $(".rests-container").hide();
   $(".workout-container").show();
   $(".congratulations-container").hide();
   workoutCountdown();
    remainingSets = workoutDetails.set;
    document.getElementById("currentSets").innerHTML = remainingSets;
});


var confettiSettings = {"target":"my-canvas","max":"800","size":"1","animate":true,"props":["circle","square","triangle","line"],"colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],"clock":"25","width":"375","height":"667"};
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


$("#congrats-btn").click(function() {
    $(".settings-container").show();
    $(".rests-container").hide();
    $(".workout-container").hide();
    $(".congratulations-container").hide();
});