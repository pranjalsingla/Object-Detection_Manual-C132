img = "";
status1 = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("COCOSSD model is loaded");
    status1 = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(img,0,0,640,420);
    fill("#d12317");
    text("Dog",40,70);
    noFill();
    stroke("#d12317");
    rect(30,50,450,360);

    fill("#d12317");
    text("Cat",310,110);
    noFill();
    stroke("#d12317");
    rect(300,90,290,300);
}