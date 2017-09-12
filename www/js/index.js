var resultDiv;
var resultAge;
document.addEventListener("deviceready", init, false);
function init() {
    document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    resultDiv = document.querySelector("#results");
	resultAge = document.querySelector("#age");
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
			  //var myscanJSON = '{"name":"' + myeventid + '","age":"' + mycluesequence + '"}';
			 
            //var s = "Result: " + result.text + "<br/>" +
            //"Format: " + result.format + "<br/>" +
            //"Cancelled: " + result.cancelled;
			
            resultDiv.innerHTML = myeventid;
			resultAge.innerHTML = mycluesequence;
			
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
}