
// hides the container when the page os loaded.
window.onload = function () {
    $(".gameChoice-container").hide();
};


// When you click on either of the answers
// the game choices will reavel,
// and your answer options will disapear.
// Your answer will be displayed

document.getElementByClassName("gameChoice-container").addEventListener(click, revealGameChoices);

function revealGameChoices() {
    
    
    var a1 = document.getElementById("answer-1").innerHTML;

    if (a1) {
        document.getElementById("myAnswer").innerHTML = 'YOU - "Ooow, my hëad!"' ;
    } 
    
    $(".gameChoice-container").slideDown('slow');
    $(".menu-answer-box").hide();
}

