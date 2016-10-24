var canvas = null
var context = null

var image = new Image()
image.src = "Hoowa.png"

var eventType, keyCode;
var playerX=50, playerY=50;

var keyArr=[]

function init() {
  canvas = document.getElementById('gameCanvas')
  context = canvas.getContext('2d')
  requestAnimationFrame(update)

  for(let i=0; i<234; i++)
  keyArr.push(false)
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height)
  context.drawImage(image,playerX,playerY)

  if(keyArr[37])
  {
   playerX -=5
  }

  else if(keyArr[38])
  {
   playerY -=5
  }
  else if(keyArr[39])
  {
   playerX +=5
  }
  else if(keyArr[40])
  {
   playerY +=5
  }

  requestAnimationFrame(update)
}

function onKeyDown(e) {
  keyArr[e.keyCode]=true;
}

function onKeyUp(e) {
  keyArr[e.keyCode]=false;
}

window.addEventListener('load',init)
window.addEventListener('keydown',onKeyDown)
window.addEventListener('keyup',onKeyUp)
