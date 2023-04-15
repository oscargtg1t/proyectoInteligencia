function analizar(){
    var suscripcionkey="ab22254711c343448ca0ce2e5c9d617f";
    var uribasi="https://analizarimagenes.cognitiveservices.azure.com/vision/v3.2/analyze";
    var params = {
        "visualFeatures": "Objects",
        "visualFeatures": "Brands",
        "language": "es",
        "model-version":"latest"
    };

    // Display the image.
    var sourceImageUrl = document.getElementById("urlapi").value;
    //document.querySelector("#sourceImage").src = sourceImageUrl;

    // Perform the REST API call.
    $.ajax({
        url: uribasi + "?" + $.param(params),

        // Request headers.
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", suscripcionkey);
        },

        type: "POST",

        // Request body.
        data: '{"url": ' + '"' + sourceImageUrl + '"}',
    })

    .done(function(data) {
        // Show formatted JSON on webpage.
      
        //VARIABLE 
        var datos=JSON.stringify(data, null, 2);
        document.getElementById("codigo").innerHTML= "<pre>" + datos + "</pre>";
        console.log("datos " + datos);

})
.fail(function(jqXHR, textStatus, errorThrown) {
    // Display error message.
    var errorString = (errorThrown === "") ?
        "Error. " : errorThrown + " (" + jqXHR.status + "): ";
    errorString += (jqXHR.responseText === "") ?
        "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
            jQuery.parseJSON(jqXHR.responseText).message :
                jQuery.parseJSON(jqXHR.responseText).error.message;
    alert(errorString);
});


};
