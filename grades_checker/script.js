document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("checkButton").addEventListener("click", checkGrade);

});

function checkGrade(){
    try{
    let marks = parseInt(document.getElementById("marks").value);
    let result = "";
        if(isNaN(marks)){
            throw "Pleas enter a valid number!";
        }
        if(marks < 0 || marks > 100){
            throw "Marks should be between 0 and 100!!";
        }


    if(marks >=80 && marks<=100){
        result = "Excellent you got A grade";
    }
    else if(marks>=70 && marks<=79){
        result = "Great, you got B!";
    }
    else if(marks>=60 && marks<=69){
        result = "Good, you got C!";
    }
    else if(marks>=50 && mark<=59){
        result = "Well, you got D!";
    }
    else if(marks>=0 && marks>=49){
        result = "Hmm, you got F!";
    }

    document.getElementById("result").innerText = result;
    alert(result);
}
catch(error){
 document.getElementById("result").innerText = "Error: "+ error;
 alert("Warning...");
}
}