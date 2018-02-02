var MyInp = document.getElementById("num");
var numDisp = document.getElementById("NumDisplay");
var answer = Math.round(Math.random()*100);
var score = 100;

document.getElementById("guess").addEventListener("click", function(){
    //console.log("hi");
    //document.body.style.backgroundColor = "red";
    
    //console.log(parseInt("10")+1);
    var realNum = parseInt(MyInp.value);
    
    if(realNum == answer){
        numDisp.innerText = "You're Correct!" +score;
    } else {
        //numDisp.innertext = "Wrong";
        if (realNum < answer) {
            numDisp.innerText = "Too small!";
        } else if (realNum > answer){
            numDisp.innerText = "Too Big!";
        }
        score = score - 1;
    }
});