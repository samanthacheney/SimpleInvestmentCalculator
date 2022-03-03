function compute()
{
 //calculate numbers 
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

//interst statement after computation
document.getElementById("result").innerhtml= 
`If you deposit ${principal},
 at an interest rate of ${rate}.
 You will recieve an amount of ${interest},
in the year ${year}.`<br>
}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//updates for rate value
function getSliderValue() {
    document.getElementById("ratespan").innerhtml= document.getElementById("rate").value
}

//validation of principal
function validateAmount(){
    var principal= document.getElementById("principal").value
    var biggerThanZero= parseInt(principal)>0;
    if (!notBiggerThanZero){
        alert ("Enter a positive number");
        document.getElementById("principal").focus
    }
}
