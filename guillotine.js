const canvas = document.getElementById('guillotine');
const gfx = canvas.getContext('2d');
let width = canvas.width = gfx.width = window.innerWidth;
let height = canvas.height = gfx.height = window.innerHeight;

let barHeight = height / Math.round(height / 45);

let lastX = 0;

function randomWidth() {
  return Math.round(Math.random() * 2) + 1;
}

let hueFrom = Math.random() * 180;
let hueTo = (hueFrom + Math.random() * 120 + 60) % 360;
let hueV = 10;
let satV = 20;
let lightV = 20;
let satMid = 85;
let lightMid = 55;
let lightFrom = lightMid  + Math.random() * 20 - 10;
let lightTo = lightMid + Math.random() * 20 - 10;

function randomFill(v) {
  let h = (v * (hueTo - hueFrom) + hueFrom + Math.random() * hueV - hueV / 2) % 360;
  let s = Math.random() * satV - satV / 2 + satMid;
  let coolerLightMid = v * (lightTo - lightFrom) + lightFrom;
  let l = Math.random() * lightV - lightV / 2 + coolerLightMid;
  return `hsl(${h},${s}%,${l}%)`;
}

for (let y = 0; y < height; y += barHeight) {
  for (let x = randomWidth(); x < width; x += randomWidth())  {
    gfx.fillStyle = randomFill(y / height);
    gfx.fillRect(lastX, y, x - lastX, height);
    lastX = x;
  }
}
