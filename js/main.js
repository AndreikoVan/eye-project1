
var varg_teamNow= 1;
var varg_teamMax = 2;

function team_init() {
/*
    var i = 1;
    for (i = 1; i <= 9; i++) {
        vari = "#Div" + i;
        var $temp = $(vari);
        var getPrevTop = $temp.position().top;
        console.log(" before " + i + " =: " + getPrevTop);
        getPrevTop = getPrevTop + $("#controllerWindow").width() / 10.0;
        console.log(" after " + i + " =: " + getPrevTop);
        $temp.animate({
            top: getPrevTop,
            opacity: 0.25,
            left: "+=50"
        }, 2000);
    }
 */ 
}
function nextTeam() {

    if (varg_teamNow == 2)
        varg_teamNow = 1
    else
        varg_teamNow++;
    return varg_teamNow;
}
function prevTeam() {

    if (varg_teamNow == 1)
        varg_teamNow = 2
    else
        varg_teamNow--;

    
    return varg_teamNow;
}

function team_view(TeamNumber) {
    //debugger;
    LoadXMLOnGlobalVariabels(TeamNumber);
    
}
function leftbutton_click() {
    
    varg_strLog = "you are clicked left"; dump();
    team_init();
    var prevTeamNumber = prevTeam();
    team_view(prevTeamNumber);
}
function rightbutton_click() {
    varg_strLog = "you are clicked right"; dump();
    team_init();
    var nextTeamNumber = nextTeam();

    team_view(nextTeamNumber);
}

function logo_click() {
    varg_strLog = "you are clicked logo"; dump();
}