function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2bnsx0TVk/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error , results){
    if(error){
        console.error(error);
    }
    else{
        document.getElementById("recognise_sound").innerHTML = results[0].label;
        document.getElementById("accuracy_of_sound").innerHTML = (results[0].confidence*100).toFixed(3) + "%";

        var img = document.getElementById("image");

        if(results[0].label == "cat meowing"){
            img.src = cat.gif;
        }
        else if(results[0].label == "dog barking")
        {
            img.src = dog.gif
        }
        else if(results[0].label == "cow mooing")
        {
            img.src = cow.gif
        }
        else{
            img.src = lion.gif;
        }
        
    }
}