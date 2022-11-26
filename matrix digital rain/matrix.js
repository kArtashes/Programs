let canvas = document.getElementById("Matrix");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let katakana = "アカサタナハマヤャラワガザダバイキシチヒミリヰギジヂビプヅズグルュムヌツケセトモホヘメユオコソトノホモゴヲドボ";
let latin = "ABCDIFGHIJKLMNOPQRSTUVWXYZ";
let nums = "0123456789";

let alphabet = katakana + latin + nums;

let fontSize = 16;
let columns = canvas.width/fontSize;

let rainDrops = [];

for(let x = 0;x < columns;x++){
    rainDrops[x] = 1
}

let draw = () => {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    R = Math.random * 255;
    G = Math.random * 255;
    B = Math.random * 255;

    context.fillStyle = "green"
    context.font = fontSize + "px monospace"

    for(let i = 0;i < rainDrops.length;i++){
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.9){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};
setInterval(draw, 15)