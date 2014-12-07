//(function () {
//    "use strict";

//    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    
//    function onDeviceReady() {
        
//        //cordova.exec(success, failure, "ScanditSDK", "scan",
//        //             ["wgCwJi12EeSFOCujwS5JdgPvTvSmg4hC4oTeUBBEP2Q",
//        //              {
//        //                  "beep": true,
//        //                  "1DScanning": true,
//        //                  "2DScanning": true,
//        //                  "inverseRecognition": true,
//        //                  "upce": false
//        //              }]);
//      cordova.plugins.barcodeScanner.scan(
//          function (result) {
//              alert("We got a barcode\n" +
//                    "Result: " + result.text + "\n" +
//                    "Format: " + result.format + "\n" +
//                    "Cancelled: " + result.cancelled);
//          },
//          function (error) {
//              alert("Scanning failed: " + error);
//          }
//       );

//        window.location = "./../Patient/12345678.html";

//    };

    
//    function success(resultArray) {

//        //alert("Scanned " + resultArray[0] + " code: " + resultArray[1]);

//        //window.location = "index.html?Nhi=" + resultArray[0];
        
//        if (resultArray[0].indexOf("ABC1234") != -1) {
//            window.location = "./../Patient/abc1234.html";
//        } else if (resultArray[0].indexOf("DEF1234") != -1) {
//            window.location = "./../Patient/def1234.html";
//        } else if (resultArray[0].indexOf("HGI1234") != -1) {
//            window.location = "./../Patient/hgi1234.html";
//        } else if (resultArray[0].indexOf("TUV1234") != -1) {
//            window.location = "./../Patient/tuv1234.html";
//        } else if (resultArray[0].indexOf("XYZ1234") != -1) {
//            window.location = "./../Patient/xyz1234.html";
//        } else if (resultArray[0].indexOf("12345678") != -1) {
//            window.location = "./../Patient/12345678.html";
//        } else {
//            window.location = "index.html?Nhi=" + resultArray[0];
//        }

//    }

//    function failure(error) {
//        alert("Failed: " + error);
//    }

//})();

// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        cordova.plugins.barcodeScanner.scan(
        function (result) {
            alert("We got a barcode\n" +
                  "Result: " + result.text + "\n" +
                  "Format: " + result.format + "\n" +
                  "Cancelled: " + result.cancelled);
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
     );

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();