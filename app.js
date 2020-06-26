// function getNumber(num){
//     var outputAnswer  = document.getElementById("outputAnswer");
//     outputAnswer.innerHTML += num
// }

// function clear(){
//     var outputAnswer  = document.getElementById("outputAnswer");
//     outputAnswer.innerHTML = "0"
// }

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
 