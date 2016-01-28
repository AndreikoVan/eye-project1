var varg_presentation_Array = ["classic","modern","new","stapper"];
var varg_presentation =varg_presentation_Array[0];
var varg_PlayersCalledDiv =[];
function CreatingPlayers() {

    var Players = document.getElementById("Players");
    var strPlayers = "";

    var leftStartfori = 0;
    var zindex = 0;
    var LapWidth = 30; //17%;
    //debugger;
    var SoImageWidth = 100 / ((1 - LapWidth / 100) * varg_PersonLength + LapWidth / 100);

    for (var fori = 0; fori < varg_PersonLength; fori++) {
        
        if (fori == 0)
            leftStartfori = "0";
        if (fori >= 1 && fori < varg_PersonLength) {
            //debugger;
            leftStartfori = fori * SoImageWidth*(1-LapWidth/100);
        }
        zindex = 50 + fori;
        strPlayers += "<div class ='player' id='Div" + (fori + 1) + "' onclick = restartAimation(" + fori + ") style= 'display:none;visibility:hidden; position:absolute;bottom:15%; left:" + leftStartfori + "%; width:" + SoImageWidth + "%; height:auto;'>";
        strPlayers += " <img id='DivImg" + (fori + 1) + "'  src = '" + varg_PersonExArray[fori].ImagePath + "'" + " alt = '" + varg_PersonExArray[fori].ImagePath + "'" + " width='100%' height ='auto' style='z-index:" + zindex + ";' /> </div>";
    }
    console.log(strPlayers);

    console.log(strPlayers);
    Players.innerHTML = strPlayers;
    document.getElementById("teamcaptionbutton").innerHTML = varg_Team.Name;
}

var varg_playerTween = [];

function restartAimation(index) {
    varg_playerTween[index].restart();
}
//<script>
function AnimatePlayers() {

    console.log("Animate Palyers()");
    var fori; 
    for (fori = 0; fori < varg_PersonLength; fori++)
    {

        var $CurrPlayer = $("#Div" + (fori + 1));
        
        varg_PlayersCalledDiv [fori] = $CurrPlayer;

        $CurrPlayer.css("display", "block");
        $CurrPlayer.css("visibility", "visible");

        var fromTop;
        var fromLeft;
        var bfromToporBottom;
        var bfromLeftorRight;
        
        var fromWidth = $CurrPlayer.width();
        var fromHeight = $CurrPlayer.height();

        bfromToporBottom = Math.round(Math.random()) % 3;
        fromTop = $("#controllerWindow").height()/ 2 * bfromToporBottom;
        
        if (bfromToporBottom ==  0) {
        }
        if (bfromToporBottom ==  1) {
        }
        if (bfromToporBottom ==  2) {
        }

        bfromLeftorRight = Math.round(Math.random()) % 3;
        fromLeft = $("#controllerWindow").width() / 2 * bfromLeftorRight;

        //if (fori < 2)  alert("fromTop =" + fromTop + "      fromLeft =" + fromLeft);

        console.log("fromTop =" + fromTop + "      fromLeft =" + fromLeft);
        
        if (bfromLeftorRight ==  0) {
                       
        }

        if (bfromLeftorRight == 1) {
        }

        if (bfromLeftorRight == 2) {
            
        }
        
        if (bfromToporBottom == 0) {
            fromWidth = 0;
        }

        if (varg_presentation == varg_presentation_Array[0])
            varg_playerTween[fori] = TweenLite.from($CurrPlayer, 2, { opacity: 0, left: fromLeft + "px", top: fromTop + "px", width: fromWidth + "px", height: fromHeight + "px" });
        else if(varg_presentation == varg_presentation_Array[1]) {
            if ( fori == (varg_PersonLength-1) )
            {
                varg_playerTween = TweenMax.staggerFrom(varg_PlayersCalledDiv,1,{ scale: 0.2, opacity: 0.3 }, 0.25);
            }
        }
    }

}
//</script>
