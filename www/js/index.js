var myscan = null;
var myclueJSON = null;

var myscan = scanner.scan(startScan(result), handleError(error)); //call scanning function and assign result JSON to myscan variable
alert(myscan); //returns undefined

document.addEventListener("deviceready", init, false);
function init() {
    document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    resultDiv = document.querySelector("#results");
}
function startScan() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
             var myresult = result.text;
			  var obj= JSON.parse(myresult);
			  //fetch event id from barcode
			  var myeventid = obj.name;
			  //fetch clue sequence from barcode
			  var mycluesequence = obj.age;
			  //form JSON string
			  var myscanJSON = '{"name":"' + myeventid + '","age":"' + mycluesequence + '"}';
			  //return JSON string
			  return myscanJSON;
			
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
}