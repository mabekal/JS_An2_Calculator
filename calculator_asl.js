let result = document.getElementById("disp");

function add(value){   
    result.value += value;
}

function dclear(){
    result.value = "";
}

function calc(){
    result.value = eval(result.value);
}

function sqr(){
    result.value = result.value*result.value;
}

function cube(){
    result.value = result.value*result.value*result.value;
}