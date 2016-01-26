var strLog = "";
function dump() {
    if (strLog == "") {
        alert("you are not setting up dump information");
    }
    else {
        console.log(strLog);
    }
}

function leftbutton_click() {
    strLog = "you are clicked left"; dump();
    var $logoImage = $("#logo.img");
    $logoImage.css("left", "120");


}
function rightbutton_click() {
    strLog = "you are clicked right"; dump();
}

function logo_click() {
    strLog = "you are clicked logo"; dump();
}