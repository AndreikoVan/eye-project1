//<script>
function LoadingImageOnStage(imagePath, Position) {
    var $doc = $(document);
    var $theImage = new Image();
    $theImage.src = imagePath;
    $theImage.top = 0;
    $theImage.left = 0;
    $doc.add(theImage, stage);
}
/* 
debugger;
var $c = $("#teamcaptionbutton");
var theText = $c.text();

var theSizeX = $c.width();
var theSizeY = $c.height();

$c.text("");

var $ctx = $c;

$ctx.font = "20px Georgia";
/*              $ctx.strokeText(theText, theSizeX, theSizeY);
                $ctx.font = "30px Verdana";
                // Create gradient
                var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
                gradient.addColorStop("0", "magenta");
                gradient.addColorStop("0.5", "blue");
                gradient.addColorStop("1.0", "red");
                // Fill with gradient
                ctx.strokeStyle = gradient;
                ctx.strokeText("Big smile!", 10, 90);
                }
*/
