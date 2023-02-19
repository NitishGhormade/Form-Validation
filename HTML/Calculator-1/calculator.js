
let display = document.getElementById("panel");

function allclear(){
  display.value = "";
}

function math(n){
  display.value += n;
}

function inv(){
  display.value = -display.value;
}

function del(){
  display.value = display.value.slice(0,-1);
}

function eq(){
  display.value = eval(display.value);
}