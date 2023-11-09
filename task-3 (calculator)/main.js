let display = document.getElementById('display');


function calculate(value) {
  if(value == "AC"){
    display.value = "";
  }else if(value == "DEL"){
    display.value  = display.value.slice(0,-1);
    
  }else if(value == "="){
    display.value = eval(display.value);
  }else{
    
    display.value += value;
  }
}