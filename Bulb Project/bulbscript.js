const turnOnBulb = () => {
    let objBulb = document.getElementById("bulbImg");
    let imgSrc = objBulb.getAttribute("src");
    objBulb.setAttribute("src", "On_Bulb.jpg");
}

const turnOffBulb = () => {
    let objBulb = document.getElementById("bulbImg");
    let imgSrc = objBulb.getAttribute("src");
    objBulb.setAttribute("src", "Off_Bulb.jpg");
}

const toggleBulb = () => {

    let objImg = document.getElementById("bulbImg");
    let imgStatus = objImg.getAttribute("src");
    let objButt = document.getElementById("dualButton");
    let btnText = objButt.innerHTML;

    if (imgStatus == "On_Bulb.jpg") {
        turnOffBulb();
        objButt.innerHTML = "ON &#128516;";

    }
    else {
        turnOnBulb();
        objButt.innerHTML = "OFF &#128564;";
    }

}

