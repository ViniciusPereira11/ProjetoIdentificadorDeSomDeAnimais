function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/1p1hmVN2Z/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){

        console.error(error);
    } else {
        console.log(results);
        var resultado = results[0].label;
        var ra = Math.floor(Math.random()*255);
        var ga = Math.floor(Math.random()*255);
        var ba = Math.floor(Math.random()*255);
        document.getElementById("som").style.color = "rgb("+ra+","+ga+", "+ba+")";
        document.getElementById("som").innerHTML = resultado;
        document.getElementById("precisao").innerHTML = Math.round(results[0].confidence.toFixed(2) * 100) + "%";

        var img1 = document.getElementById('a1');
        var img2 = document.getElementById('a2');
        var img3 = document.getElementById('a3');
        var img4 = document.getElementById('a4');

        if(resultado == "Background Noise"){
            img1.style.display = "block";
            img2.style.display = "none";
            img3.style.display = "none";
            img4.style.display = "none";
        }else if(resultado=='miado'){
            img1.style.display = "none";
            img2.style.display = "block";
            img3.style.display = "none";
            img4.style.display = "none";
        }else if(resultado=='passaro'){
            img1.style.display = "none";
            img2.style.display = "none";
            img3.style.display = "block";
            img4.style.display = "none";
        }else{
            img1.style.display = "none";
            img2.style.display = "none";
            img3.style.display = "none";
            img4.style.display = "block";
        }
    }
}