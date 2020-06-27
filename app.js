
function getNumber(num){
    var abc  = document.getElementById("outputAnswer");
   abc.value+= num
}

function clearAns(){
    var abc  = document.getElementById("outputAnswer");
    abc.value = ""
}


function totalAns(){
    var abc  = document.getElementById("outputAnswer");
    abc.value=eval(abc.value)
}


function cutAns(){
    var abc  = document.getElementById("outputAnswer").value;
    var lenAbc = abc.length;
    for (var i=0;i<lenAbc;i++){}
    var removeDigit=i-1
    var finale = abc.slice(0,removeDigit);
    console.log(finale);
    document.getElementById("outputAnswer").value=finale
}
