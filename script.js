var output = document.getElementById("output");
var invalid = "/0";
function display(num) {
    output.value += num;
}

function calculate(){
    try{
        if(output.value.includes(invalid)){
            alert("Denominator can't be 0.");
            clearScreen();
        } else {
            output.value = eval(output.value);
        }
    }
    catch(err){
        alert(err);
        clearScreen();
    }
}

function clearScreen(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0,-1);
}