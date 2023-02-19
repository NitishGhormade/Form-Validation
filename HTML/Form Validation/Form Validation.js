function validate(){
  let fn = document.getElementById("fn").value;;
  let rfn = /[0-9]/;

  

  if(rfn.test(fn)){
    alert("hello");
    document.getElementById("nlb").style.visibility="visible";
    return false;
}

}