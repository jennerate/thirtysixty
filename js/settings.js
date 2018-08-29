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
$('#thirty, #sixty').click(function() {
    selectedTime = $(this).val();
    workoutDetails.time = selectedTime;
});

var selectedSets;
$('.desired-sets').click( function() {
    selectedSets = $(this).val();
    workoutDetails.set = selectedSets;
});

var selectedRests;
$('.desired-rests').click(function(){
    selectedRests = $(this).val();
    workoutDetails.rest = selectedRests;
}) 

$('#submitForm').click(function() {
   $(".settings-container").hide();
   $(".workout-container").show();
    remainingSets = workoutDetails.set;
    document.getElementById("currentSets").innerHTML = remainingSets;
});

// sets page if statement determine which page to load