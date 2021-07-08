function compute()
{
    var principal = document.getElementById("principal").value;

    //Validation for user input
    if(principal == 0 || principal < 0) {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;

        var year = new Date().getFullYear()+parseInt(years);

        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML = "<div>If you deposit <span style='background-color:yellow;'>"+principal + ",</span><br/>at an interest rate of <span style='background-color:yellow;'>"+rate + ".</span><br/>You will receive an amount of <span style='background-color:yellow;'>"+interest+",</span><br/>in the year <span style='background-color:yellow;'>" + year + "</span></div>";
    }
}


function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
    
