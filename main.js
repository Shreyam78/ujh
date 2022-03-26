Webcam.set(
    {
        height: 300,
        width: 350,
        image_format: "png",
        png_quality: 90
    });

camera = document.getElementById("camera");

Webcam.attach("#camera");


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id = "pic" src = "' + data_uri + '"/>';
    });
}


console.log("version ml5", ml5.version);

a = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0dWMaSOAB/", model);

function model() {
    console.log("Model Loaded");
}

function check() {
   any = document.getElementById("pic");
   a.classify(any,gotresult);
}

function gotresult(error,results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}