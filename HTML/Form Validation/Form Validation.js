function valid() {
    let idid = document.getElementById("fid").value;

    let fnfn = document.getElementById("fn").value;
    let rfnfn = /[0-9]/;

    let ppp = document.getElementByTd("fpp").value;

    let dd = document.getElementByTd("dd").value;

    let pin = document.getElementByTd("fpin").value;
    let rpin = /[a-z A-Z]/;

    let fe = document.getElementByTd("fe").value;
    let rfe = /([a-z A-Z 0-9 \.-_]+)@(^(gmail)$).(com)/;

    if (idid.length < 8 || idid.length > 12) {
        document.getElementById("idlb").style.visibility = "visible";
        document.getElementById("fid").style.border = "2px solid red";
        return false;
    }

    if (rfnfn.test(fnfn)) {
        document.getElementById("nlb").style.visibility = "visible";
        document.getElementById("fn").style.border = "2px solid red";
        return false;
    }
    
    if(ppp.length < 7 || ppp.length > 12){
        document.getElementById("pplb").style.visibility = "visible";
        document.getElementById("fpp").style.border = "2px solid red";
        return false;
    }

    if(dd = select){
        document.getElementById("ddlb").style.visibility = "visible";
        document.getElementById("dd").style.border = "2px solid red";
        return false;
    }

    if(rpin.test(pin) || pin.length != 6){
        document.getElementById("pinlb").style.visibility = "visible";
        document.getElementById("fpin").style.border = "2px solid red";
        return false;
    }

    if(!rfe.test(fe)){
        document.getElementById("elb").style.visibility = "visible";
        document.getElementById("fe").style.border = "2px solid red";
        return false;
     }

}
