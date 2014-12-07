(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    
    function success(resultArray) {

        //alert("Scanned " + resultArray[0] + " code: " + resultArray[1]);

        //window.location = "index.html?id=" + resultArray[0];
        if (resultArray[0].indexOf("731632") != -1) {
            window.location = "./Areas/Nurse/731632.html";
        } else if (resultArray[0].indexOf("731625") != -1) {
            window.location = "./Areas/Nurse/731625.html";
        } else if (resultArray[0].indexOf("721180") != -1) {
            window.location = "./Areas/Nurse/721180.html";
        } else if (resultArray[0].indexOf("736884") != -1) {
            window.location = "./Areas/Nurse/736884.html";
        } else {
            window.location = "index.html?id=" + resultArray[0];
        }  

    }

    function failure(error) {
        alert("Failed: " + error);
    }


    function onDeviceReady() {
        cordova.exec(success, failure, "ScanditSDK", "scan",
                     ["wgCwJi12EeSFOCujwS5JdgPvTvSmg4hC4oTeUBBEP2Q",
                      {
                          "beep": true,
                          "1DScanning": true,
                          "2DScanning": true,
                          "inverseRecognition": true,
                          "upce": false
                      }]);

    };

})();