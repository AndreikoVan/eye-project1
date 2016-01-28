var varg_strLog = "";
function dump() {
    if (varg_strLog == "") {
        alert("you are not setting up dump information");
    }
    else {
        console.log(varg_strLog);
    }
}