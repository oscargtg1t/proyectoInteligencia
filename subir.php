<?php


//cop0y($_FILES['file1']['tmp_name'],"imagenes/" . $_FILES['file1']['name'] );

$ds= DIRECTORY_SEPARATOR;  //1
 
$storeFolder = '/imagenes';   //2
 
if (!empty($_FILES)) {
     
    $tempFile = $_FILES['file1']['tmp_name'];          //3             
      
    $targetPath = dirname( __FILE__ ) . $ds. $storeFolder . $ds;  //4
     
    $targetFile =  $targetPath. $_FILES['file1']['name'];  //5
 
    move_uploaded_file($tempFile,$targetFile); //6
     
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
<script src="consumo.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    
    
   
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

#codigo{
    overflow:auto;
    margin-left:10%;
padding:5px;
width:80%;
height:65%;
background-color:white;
text-align:left;
}



#mm1{
    width: 50%;
    height: 70%;
}

        #cuadro{
            position: fixed;
            top: 0%;
            left: 0%;
            width: 50%;
            height: 100%;
            background:none;
            border-radius: 0px 0px 0px 0px;        
        }

        body{

            background-color: #11132a;
        }

        nav{
         position: fixed;
         top: 4%;
         left: 20%;
         width: 80%;
         height: 10%;
         background-color: #4a474c;
         box-shadow: 4px 4px 8px black;


        }

        #logo{
            width: 12%;
            height: 10%;
    
            margin-left: 4%;
            margin-top: 2%;

        }

        .ini{
            width: 15%;
            height: 100%;
            background: none;
            margin-left: 1%;
            color: #f9df00;
            font-size: 15pt;
            border: none;

        }
        
        .ini:hover{

            width: 15%;
            height: 100%;
            background: none;
            margin-left: 1%;
            color: #4a474c;
            font-size: 15pt;
            border: none;
            background-color: #f9df00;

        }

        #envd{
    font-size: 17pt;
    position: absolute;
    top:80%;
    left:30%;
    width: 40%;
    height: 10%;
    border:none;
    background-color: #11132a;
    color:#f9df00;
}

.custom-input-file {
  background:none;
  color: #11132a;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto 0;
  min-height: 15px;
  overflow: hidden;
  padding: 10px;
  position: relative;
  text-align: center;
  width: 400px;
}

.custom-input-file .input-file {
 border: 10000px solid transparent;
 cursor: pointer;
 font-size: 10000px;
 margin: 0;
 opacity: 0;
 outline: 0 none;
 padding: 0;
 position: absolute;
 right: -1000px;
 top: -1000px;
}
.ffr{
    position:fixed;
    top: 0%;
    left:50%;
    width:50%;
    height: 100%;
    text-align: center;
    background-color: #f9df00;
}

@media only screen and (max-width: 600px) {
    .ffr{
    position:absolute;
    top: 0%;
    left:0%;
    width:100%;
    height:80%;
    text-align: center;
    background-color: #f9df00;
}  
   
nav{
        text-align: center;
         position: fixed;
         top: 5%;
         left: 0%;
         width: 100%;
         height: 7%;
         background-color: #4a474c;
         box-shadow: 4px 4px 8px black;


        }

        .ini{
            width: 19%;
            height: 100%;
            background: none;
          
            color: #f9df00;
            font-size: 12pt;
            border: none;

        }
        
        .ini:hover{

            width: 19%;
            height: 100%;
            background: none;
         
            color: #4a474c;
            font-size: 12pt;
            border: none;
            background-color: #f9df00;

        }

        #cuadro{
            position: absolute;
            top: 80%;
            left: 0%;
            width: 50%;
            height: 100%;
            background:none;
            border-radius: 0px 0px 0px 0px;        
        }

        #envd{
    font-size: 17pt;
    position: absolute;
    top:85%;
    left:30%;
    width: 40%;
    height: 10%;
    border:none;
    background-color: #11132a;
    color:#f9df00;
}




}

#ff{
    margin-left:20%;
    margin-top:20%;
}


    </style>
</head>
<body>
     


 <div id="cuadro">
       
<?php
echo '<img src="imagenes/' . $_FILES['file1']['name'] . '" width="400px" height="400px" id="ff"><br>';
echo '<input id="urlapi" type="text" value="https://picserch.azurewebsites.net/imagenes/' .$_FILES['file1']['name'] . '">';
?>
<br><input type="button" value="Analizar" onclick="analizar()">

 </div>   
 <img src="logopicserch.png" alt="" id="logo">




     
     
    <form action="subir.php"  method="POST" enctype="multipart/form-data"  id="file1" class="ffr">

<br><br><br><br><br><br><br>
<B>JSON IMAGEN</B><br>
<div id="codigo">
<embed id="bus" type="text/html" src="https://www.bing.com/search?q=comprar+tenis+verdes+adidas" width="4000px" height="4000px">
</div>





      </form>
<script>
function subir(){
    document.getElementById('file1').click();
    alert('funciona');
}

    document.getElementById('file1').onchange=function(e){
      let reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=function(){
          //let preview= document.getElementById('preview');
          imagen=document.getElementById('mm1');
         // imagen.style.width="250px"
          imagen.src=reader.result;
          //preview.append(imagen);
           }
        }
</script>

   
</body>
</html>

