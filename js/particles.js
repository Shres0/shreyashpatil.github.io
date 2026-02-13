const canvas=document.getElementById("particleCanvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];
let mouse={x:null,y:null};

for(let i=0;i<150;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2+1
  });
}

window.addEventListener("mousemove",e=>{
  mouse.x=e.x;
  mouse.y=e.y;
});

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    let dx=mouse.x-p.x;
    let dy=mouse.y-p.y;
    let dist=Math.sqrt(dx*dx+dy*dy);
    if(dist<120){
      p.x+=dx*0.02;
      p.y+=dy*0.02;
    }
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
