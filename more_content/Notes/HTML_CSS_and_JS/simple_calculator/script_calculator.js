// The function will clear the values (Clear Button)
function clearScreen(){
    document.getElementById("result").value = "";
}

// The function will display the current value
function display(value){
    document.getElementById("result").value += value;
}

// The function will evaluate the expression and returns the result
function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}