var busqda="https://www.bing.com/search?q=compra+guatemala+" ;



function analizar(){
    var suscripcionkey="2a041a044aa5495899693a12e0627962";
    var uribasi="https://2it-research.cognitiveservices.azure.com/vision/v3.2/analyze";
    var params = {
    
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
        //var datos=JSON.stringify(data, null, 2);
       
         
        for(x=0;x<=data.brands.length-1;x++){
            busqda=busqda+ data.brands[x].name + "+";
        }
       
        // document.getElementById("codigo").innerHTML = +  "<pre>" + busqda + "</pre>";
       //console.log(busqda);
        //alert(datos);
        analizarObjetos();

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



function analizarObjetos(){
    var suscripcionkey="2a041a044aa5495899693a12e0627962";
    var uribasi="https://2it-research.cognitiveservices.azure.com/vision/v3.2/analyze";
    var params = {
        "visualFeatures": "tags",
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
        //var datos=JSON.stringify(data, null, 2);
        
       
        for(x=0;x<=data.tags.length-1;x++){
            busqda=busqda+ data.tags[x].name + "+";
        }
       
       
        //document.getElementById("codigo").innerHTML = "<pre>" + busqda + "</pre>";
        
        analizarColores();

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

function analizarColores(){
    var suscripcionkey="2a041a044aa5495899693a12e0627962";
    var uribasi="https://2it-research.cognitiveservices.azure.com/vision/v3.2/analyze";
    var params = {
        "visualFeatures": "Color",
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
        //var datos=JSON.stringify(data, null, 2);
        //busqda=busqda+datos;
        //document.getElementById("codigo").innerHTML = "<pre>" + busqda + "</pre>";
        
        for(x=0;x<=data.color.dominantColors.length-1;x++){
            busqda=busqda+ data.color.dominantColors[x] + "+";
        }
        
        console.log(busqda);
        //integracion a div de bing
        document.getElementById('bus').src=busqda;

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
