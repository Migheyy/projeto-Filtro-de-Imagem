function preload(){
    //carregar imagens, sons
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position();
    video = createCapture(VIDEO);
    video.hide();
    corSelecionada="";
}

function draw(){
    image(video, 0, 0, 640, 480)
    tint(corSelecionada);
}

function tirarFoto(){
    save('fotinha.png');
}

function aplicarFiltro(){
    corSelecionada=document.getElementById('cor').value;
}