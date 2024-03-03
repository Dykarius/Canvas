const scene = document.getElementById("scene")
const ctx = scene.getContext("2d")
const position = {x:0,y:0} //object
const keys = {
    left: {isPressed:false},
    right: {isPressed:false},
    up: {isPressed:false},
    down: {isPressed:false},
}
let speed1 = 25 //si je veux modifier la vitesse pas const
const size = 100


requestAnimationFrame(draw)

function draw (){
    requestAnimationFrame(draw)
    ctx.clearRect(0,0,scene.width,scene.height)
    move()
    ctx.fillStyle="rgb(185,96,245)"
    ctx.fillRect(position.x,position.y,size,size)
}

// setInterval(() => {
//     speed1+=1
// }, 500);


let bombe = 5
setTimeout(() => {
    console.log("on lance le décompte")
    let bombeTimer = setInterval(()=>{
        console.log(bombe)
        bombe-=1
        if (bombe==0){
            console.log("Boom")
            clearInterval(bombeTimer)
        }
    },1000)
}, 2000);

function move (){
    if (keys.down.isPressed==true) {
        position.y+=speed1
        if (position.y+size>scene.height){
            position.y=scene.height-size
        }
    }
    if (keys.up.isPressed==true) {
        position.y-=speed1
        if (position.y<0){
             position.y=0
        }
    }
    if (keys.left.isPressed==true) {
        position.x-=speed1
        if (position.x<0){
            position.x=0
        }
    }
    if (keys.right.isPressed==true) {
        position.x+=speed1
        if (position.x+size>scene.width){
            position.x=scene.width-size
        }
    }
}

window.addEventListener("keydown",e=>{
    console.log(keys)
    if (e.key=="ArrowDown") keys.down.isPressed=true
    if (e.key=="ArrowUp") keys.up.isPressed=true
    if (e.key=="ArrowLeft") keys.left.isPressed=true
    if (e.key=="ArrowRight") keys.right.isPressed=true
})

window.addEventListener("keyup",e=>{
    console.log(keys)
    if (e.key=="ArrowDown") keys.down.isPressed=false
    if (e.key=="ArrowUp") keys.up.isPressed=false
    if (e.key=="ArrowLeft") keys.left.isPressed=false
    if (e.key=="ArrowRight") keys.right.isPressed=false
})
