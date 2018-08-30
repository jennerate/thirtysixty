var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
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

var workoutDetails = new Workout("a", "b","c");

var selectedTime;
var remainingTime;
$('#thirty, #sixty').click(function() {
    // selectedTime = $(this).val();
    // workoutDetails.time = selectedTime;
    // remainingTime = selectedTime;
    remainingTime = 3;
    selectedTime = 3;
});

var selectedSets;
var remainingSets;
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
