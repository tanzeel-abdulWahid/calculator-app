
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
 
