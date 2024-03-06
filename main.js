// displaying the first block of question
document.getElementsByClassName("container")[0].style.display = "block";

// defining the next function
function next(id) {
    document.getElementsByClassName("container")[id-1].style.display = "none";
    document.getElementsByClassName("container")[id].style.display = "block";
}

//getting final result
function result() {
    var score = 0;
    if (document.getElementById("correct1").checked) {
        score++;
    }
    if (document.getElementById("correct2").checked) {
        score++;
    }
    if (document.getElementById("correct3").checked) {
        score++;
    }
    if (document.getElementById("correct4").checked) {
        score++;
    }
    alert("your score is: "+ score);
}