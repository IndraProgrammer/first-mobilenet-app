Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
}); 
camera=document.getElementById("camera");
Webcam.attach("camera");
function takeSnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="capturedImage" src="'+data_uri+'"/>';

    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("MobileNet",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function check(){
    img=document.getElementById("capturedImage");
    classifier.classify(img,gotResult);
}
function gotResult(error,Result){
 if(error){
     console.log(error);
 }
 else{
     console.log(Result);
     document.getElementById("object_name").innerHTML=Result[0].label;
 }
}