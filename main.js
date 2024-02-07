Webcam.set({
    width:350,
    height:350,
    image_format : 'png',
    png_quality: 90
 });
 
 camera= document.getElementById("camera");
 
 Webcam.attach( '#camera');
 
 function take_snapshot()
 {
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri+'"/>';
 
     });
 }
 
 console.log('ml5 version: ', ml5.version);
 
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MKXEAj7tW/model.json',modelLoaded);
 
 function modelLoaded()
 {
     console.log('Model Loaded!!!');
 }

 function check()
 {
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResults);
 }
 
 
 function speak()
 {
    
    var synth = window.speechSynthesis;
    speak_data_1 = "The prediction is "+ prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 );
    synth.speak(utterThis);
}
 
 function gotResults(error, results)
 {
    
  if(error)
  {
    console.error(error);
  }
  else{
    prediction_1= results[0].label;
    speak();
    console.log(results);
    if(results[0].label == '✌')
    {
    document.getElementById('ren').innerHTML = 'VICTORY HAND';
    document.getElementById('ue').innerHTML = '✌';

    }
    else if(results[0].label == '👍')
    {
        document.getElementById('ren').innerHTML = 'THUMBS UP';
        document.getElementById('ue').innerHTML = '👍';
    }
    else if(results[0].label == '🤘')
    {
        document.getElementById('ren').innerHTML = 'SIGN OF THE HORNS';
        document.getElementById('ue').innerHTML = '🤘';
    }
    
   
  }
 }

 