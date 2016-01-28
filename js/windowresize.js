//<!-- image Loading...   -->
    var varg_dataleft;
    var varg_dataright;
    var varg_datalogo;
        
    var varg_devx;
    var varg_devy;
    var varg_dpi;
 //   <script>
    function gettingDeviceInfo() {
        var devicex;
        var devicey;
        devicex = screen.width;
        devicey = screen.height;
        var dpix = screen.deviceXDPI;
        var dpiy = screen.deviceYDPI;
        var str_debug = "";
        str_debug += "dx=" + devicex +",";
        str_debug += "dy=" + devicey +",";
        str_debug += "dpix=" + devicey +",";
        str_debug += "dpiy=" + devicey +",";

        console.log(str_debug);
    }
//</script>
        
    function controllerWindowResize() {
           
    varg_devx = window.innerWidth;
    varg_devy = window.innerHeight;
    varg_strLog = "," + varg_devx + "," + varg_devy; dump();

    var newWidth = varg_devx;

    var conWidth = $("#controllerWindow").width();
    var conHeight =$("#controllerWindow").height(); 

    var GoodControlllerSqure = Math.min(conWidth, conHeight);
    var Goodratio = GoodControlllerSqure / GoodLeftSize;

    var marginleft, margintop, marginright, marginbottom;
    if (conWidth >= conHeight) {
        margintop = 0;
        marginbottom = 0;
        marginleft = marginright = (conWidth - conHeight) / 2.0;
    }
    if (conWidth < conHeight) {
        margintop = marginbottom = (conHeight - conWidth) / 2.0;
        marginleft = marginright = 0;
    }
    var GoodLeftSize = Math.min($("#leftbutton").width(), $("#leftbutton").height());
    GoodLeftSize *= Goodratio;
            
    var GoodRightSize = Math.min($("#rightbutton").width(), $("#rightbutton").height());
    GoodRightSize *= Goodratio;

    var GoodLogoSize = Math.min($("#logo").width(), $("#logo").height());
    GoodLogoSize *= Goodratio;

    //debugger;
    $("#leftbutton").width(GoodLeftSize);
    $("#leftbutton").height(GoodLeftSize);
    $("#rightbutton").width(GoodRightSize);
    $("#rightbutton").height(GoodRightSize);
    $("#logo").width(GoodLogoSize); 
    $("#logo").height(GoodLogoSize);

    var aboutFontGuess = newWidth * 0.09;
    if (aboutFontGuess > 30) aboutFontGuess = 20;
    $("#teamcaptionbutton").css("font-size", aboutFontGuess,"top","5%");
    //makingTeamCaptionButtonByUsingCanvasInHTML();
    }

            $("#leftbutton").ready(function () {
                varg_strLog = "leftbutton ready start"; dump();
            });

            $(window).resize(function () {
                varg_strLog = "win resize start"; dump();
                controllerWindowResize();
            }
            );
            $(window).ready(function () {
                varg_strLog = "win ready start"; dump();

            });

            $(document).ready(
                function () {
                    //alert("doc ready start");//alert("doc ready end");
                    varg_strLog = "doc ready start"; dump();
                    varg_devx = screen.width;
                    varg_devy = screen.height;
                    varg_strLog = "doc," + varg_devx + "," + varg_devy; dump();

                    var $leftbutton = $("#leftbutton");
                    var $rightbutton = $("#rightbutton");
                    $leftbutton.click(varg_dataleft, leftbutton_click);
                    $rightbutton.click(varg_dataright, rightbutton_click);
                    var $logodiv = $("#logo");
                    $logodiv.click(varg_datalogo, logo_click);
                    //var $fontlength = $("#teamcaptionbutton");
                    //$fontlength.css("font-size", window.innerWidth / 20 + "px");
                }
                );

//</script>
