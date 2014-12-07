(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    
    function success(resultArray) {

        //alert("Scanned " + resultArray[0] + " code: " + resultArray[1]);
        //window.location = "index.html?oId=" + resultArray[0];

        var orderId = localStorage.getItem("orderNo") || 0;

        if (orderId != 0) {
            if (resultArray[0].localeCompare(orderId) != 0) {
                window.location = "./../Incorrect Order/incorrectOrder.html?oId=" + resultArray[0];
            } else {
                window.location = "./../Order/correctorder.html";
            }   
        } else {
            window.location = "index.html?oId=" + resultArray[0];
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
    
    function fnSuccess(data) {
        // TODO: This application has been reactivated. Restore application state here.
        //alert("success: " + data);
    };
    function fnError(data) {
        // TODO: This application has been reactivated. Restore application state here.
        //alert("error: " + data);
    };

})();