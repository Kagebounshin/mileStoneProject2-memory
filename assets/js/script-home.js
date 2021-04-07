
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
    var a2 = document.getElementById("answer-2").innerHTML;
    var a3 = document.getElementById("answer-3").innerHTML;

    if (a1) {
        document.getElementById("myAnswer").innerHTML = 'YOU - "Ooow, my hëad!"' ;
    } else if (a2) {
        document.getElementById("myAnswer").innerHTML = 'YOU - "Yes, I\'m a detective, I knew that. (lie)"';
    } else if (a3) {
        document.getElementById("myAnswer").innerHTML = 'YOU - "I\'m a SUPERCOP!"';
    }
    
    $(".gameChoice-container").slideDown('slow');
    $(".menu-answer-box").hide();
}

