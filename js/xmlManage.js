
var varg_xmlPath = " ";
var varg_xmlFullName = " ";
var varg_xmlDoc;

function Person(imagefilename, firstname, lastname) {
    this.ImageFileName = imagefilename;
    this.FirstName = firstname;
    this.LastName = lastname;
}
function showPerson(anyPerson) {
    var strTemp = anyPerson.ImageFileName;
    strTemp = strTemp + "," + anyPerson.FirstName + "," + anyPerson.LastName;
    console.log(strTemp);
}
function PersonEx(imagefilename, firstname, lastname, stagenumber) {
    var person = new Person(imagefilename, firstname, lastname);
    this.ImageFileName = person.ImageFileName;
    this.FirstName = person.FirstName;
    this.LastName = person.LastName;
    this.ImagePath = varg_xmlPath + this.ImageFileName;
}
function showPersonEx(anyPersonEx) {
    var strTemp = anyPersonEx.ImageFileName;
    strTemp = strTemp + "," + anyPersonEx.FirstName + "," + anyPersonEx.LastName + ":" + anyPersonEx.ImagePath;
    console.log(strTemp);
}

var varg_PersonLength;
var varg_PersonExArray = [];


function Team(LogoFileName, Name, LogoColor1, LogoColor2, LogoColor3) {
    this.LogoFileName = LogoFileName;
    this.Name = Name;
    this.LogoColor1 = LogoColor1;
    this.LogoColor2 = LogoColor2;
    this.LogoColor3 = LogoColor3;
    
}
function showTeam(anyTeam) {
    var strTemp = anyTeam.LogoFileName;
    strTemp = strTemp + "," + anyTeam.Name + "," + anyTeam.LogoColor1;
    strTemp = strTemp + "," + anyTeam.LogoColor2 + "," + anyTeam.LogoColor3;
    console.log(strTemp);
}
var varg_Team = [];

function ButtonObject(ID, link, FileName,Pos) {
    this.ID = ID;
    this.link = link;
    this.FileName = FileName;
    this.Pos = Pos;
}
function showButtonObject(anyButtonObject) {
    var strTemp = anyButtonObject.ID;
    strTemp = strTemp + "," + anyButtonObject.link + "," + anyButtonObject.FileName;
    strTemp = strTemp + "," + anyButtonObject.Pos;
    console.log(strTemp);
}

var varg_ButtonArrayLength = [];
var varg_ButtonArray = [];

/* setting here
    var varg_xmlPath  81 line
    varg_xmlFullName;
    var varg_xmlDoc   
    var varg_PersonLength;
    var varg_PersonExArray = [];
    var varg_Team;
    var varg_ButtonArrayLength = [];
    var varg_ButtonArray = [];
*/
var xhttp;
var nParsingResult = -1;
function LoadXMLOnGlobalVariabels(stageNumber) {
    //debugger;    
    if(xhttp == undefined)
        xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        console.log("state:" + xhttp.readyState + "," + xhttp.status);
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(varg_xmlPath + ":ok-4");
            nParsingResult = LoadXMLAfterParsing(stageNumber, xhttp);
            if (nParsingResult == 200) {
                CreatingPlayers();
                AnimatePlayers();
            }
        }
    };
    // setting  varg_xmlPath 
    varg_xmlPath = "Set " + stageNumber + "/";
    varg_xmlFullName = varg_xmlPath + "manifest.xml";
    xhttp.open("GET", varg_xmlFullName, true);
    xhttp.send();
}
function LoadXMLAfterParsing(stageNumber, xhttp) {
    //debugger;
    // setting xml doc.
    varg_xmlDoc = xhttp.responseXML;

    var varPerson;
    varPerson = varg_xmlDoc.getElementsByTagName("Person");
    varg_PersonLength = varPerson.length;
    var fori; for (fori = 0; fori < varg_PersonLength; fori++) {
        varImageFileName = varPerson[fori].getElementsByTagName("ImageFileName")[0].childNodes[0].nodeValue;
        varFirstName = varPerson[fori].getElementsByTagName("FirstName")[0].childNodes[0].nodeValue;
        varLastName = varPerson[fori].getElementsByTagName("LastName")[0].childNodes[0].nodeValue;
        var anyPersonEx = new PersonEx(varImageFileName, varFirstName, varLastName, stageNumber);
        varg_PersonExArray[fori] = anyPersonEx;
    }

    var varTeam;
    varTeam = varg_xmlDoc.getElementsByTagName("Team");
    var varTeamLength = varTeam.length;
    if (varTeamLength == 2) alert("error team count > 1");
    var para1 = varTeam[0].getElementsByTagName("LogoFileName")[0].childNodes[0].nodeValue;
    var para2 = varTeam[0].getElementsByTagName("Name")[0].childNodes[0].nodeValue;
    var para3 = varTeam[0].getElementsByTagName("LogoColor1")[0].childNodes[0].nodeValue;
    var para4 = varTeam[0].getElementsByTagName("LogoColor2")[0].childNodes[0].nodeValue;
    var para5 = varTeam[0].getElementsByTagName("LogoColor3")[0].childNodes[0].nodeValue;
    varg_Team = new Team(para1, para2, para3, para4, para5);

    /*var varg_ButtonArrayLength = [];
    var varg_ButtonArray = [];*/
    var varControls;
    varControl = varg_xmlDoc.getElementsByTagName("Controls");
    var varControlLength = varControl.length;
    if (varControlLength == 2) alert("error! \n VarControlLength >1");

    var varButton = varg_xmlDoc.getElementsByTagName("Button");
    varg_ButtonArrayLength = varButton.length;
    for (fori = 0; fori < varg_ButtonArrayLength; fori++) {
        var para1 = varButton[fori].getElementsByTagName("ID")[0].childNodes[0].nodeValue;
        var para2 = varButton[fori].getElementsByTagName("link")[0].childNodes[0].nodeValue;
        var para3 = varButton[fori].getElementsByTagName("FileName")[0].childNodes[0].nodeValue;
        var para4 = varButton[fori].getElementsByTagName("Pos")[0].childNodes[0].nodeValue;
        varg_ButtonArray[fori] = new ButtonObject(para1,para2,para3,para4);
    }
    //debug
    for (fori = 0; fori < varg_PersonLength; fori++) {
        showPersonEx(varg_PersonExArray[fori]);
    }
    showTeam(varg_Team);
    for (fori = 0; fori < varg_ButtonArrayLength; fori++) {
        showButtonObject(varg_ButtonArray[fori]);
    }

    return 200;
}














// other functions is to test.

// irrespective of varg_PersonExArray && varg_PersonLength
function myxmlView(stageNumber,xhttp) {
    var xmlDoc = xhttp.responseXML;
    var varPerson;
    var varTeam;
    var varControls;

    varPerson = xmlDoc.getElementsByTagName("Person");
    var varg_PersonLength = varPerson.length;

    varTeam = xmlDoc.getElementsByTagName("Team");
    var varTeamLength = varTeam.length;

    varControl = xmlDoc.getElementsByTagName("Controls");
    var varControlLength = varControl.length;

    var varButton = xmlDoc.getElementsByTagName("Button");
    var varButtonLength = varButton.length;

    var strTemp100 = ""; var varImageFileName = "", varFirstName = "", varLastName = "";

    var fori; for (fori = 0; fori < varg_PersonLength; fori++) {

        varImageFileName = varPerson[fori].getElementsByTagName("ImageFileName")[0].childNodes[0].nodeValue;
        strTemp100 = strTemp100 + varImageFileName;

        varFirstName = varPerson[fori].getElementsByTagName("FirstName")[0].childNodes[0].nodeValue;
        strTemp100 = strTemp100 + "," + varFirstName;

        varLastName = varPerson[fori].getElementsByTagName("LastName")[0].childNodes[0].nodeValue;
        strTemp100 = strTemp100 + "," + varLastName;

        strTemp100 = strTemp100 + "" + "<br>";
    }

    return strTemp100;
}
function xmlView(stageNumber) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //alert(varg_xmlPath + ":ok-4");
            console.log(varg_xmlPath + ":ok-4");
            document.getElementById("demo").innerHTML = myxmlView(stageNumber, xhttp);
        }
    };

    varg_xmlPath = "Set " + stageNumber + "/" + "manifest.xml";
    xhttp.open("GET", varg_xmlPath, true);
    xhttp.send();
}
// Respective of varg_PersonExArray && varg_PersonLength
function loadDoc(stageNumber) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //alert(varg_xmlPath + ":ok-4");
            console.log(varg_xmlPath + ":ok-4");
            getStageElement(stageNumber, xhttp);
            var para = 0;
            LoadingAnyImage(para);
        }
    };
  
    varg_xmlPath = "Set " + stageNumber + "/" + "manifest.xml";
    xhttp.open("GET", varg_xmlPath , true);
    xhttp.send();
}   
function getStageElement(stageNumber, xhttp) {

    var xmlDoc = xhttp.responseXML;

    var strTemp = stageNumber;

    var varPerson;
    var varTeam;
    var varControls;

    varPerson = xmlDoc.getElementsByTagName("Person");
    varg_PersonLength = varPerson.length;        

    varTeam = xmlDoc.getElementsByTagName("Team");
    var varTeamLength = varTeam.length;

    varControl = xmlDoc.getElementsByTagName("Controls");
    var varControlLength = varControl.length;

    var varButton = xmlDoc.getElementsByTagName("Button");
    var varButtonLength = varButton.length;
        
    var strTemp100 = ""; var varImageFileName = "", varFirstName = "", varLastName = "";

    var fori;for (fori = 0; fori < varg_PersonLength; fori++) {

        varImageFileName = varPerson[fori].getElementsByTagName("ImageFileName")[0].childNodes[0].nodeValue;
        strTemp100 = strTemp100 + varImageFileName;

        varFirstName = varPerson[fori].getElementsByTagName("FirstName")[0].childNodes[0].nodeValue;
        strTemp100 = strTemp100 + "," + varFirstName;

        varLastName = varPerson[fori].getElementsByTagName("LastName")[0].childNodes[0].nodeValue;
        strTemp100 = strTemp100 + "," + varLastName;
        //console log 
        var anyPersonEx =  new PersonEx(varImageFileName, varFirstName, varLastName, stageNumber);
        //showPersonEx(anyPersonEx);
        varg_PersonExArray[fori] = anyPersonEx;
        strTemp100 = strTemp100 + "" + "<br>";
    }

    //debug
    for (fori = 0; fori < varg_PersonLength; fori++) {
        showPersonEx(varg_PersonExArray[fori]);
        console.log(varg_PersonExArray[fori].FirstName);
    }
    document.getElementById("demo").innerHTML = strTemp + "<hr>" + strTemp100;
}
//</script>