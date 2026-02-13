const input=document.getElementById("command");
const output=document.getElementById("output");

const commands={
help:"about skills contact",
about:"Embedded Systems Engineer specializing in Automotive Ethernet.",
skills:"STM32 | CAN | PHY | Linux | Embedded C",
contact:"Email: shresp3002@gmail.com"
};

input.addEventListener("keydown",e=>{
if(e.key==="Enter"){
let cmd=input.value;
output.innerHTML+="<div>> "+cmd+"</div>";
output.innerHTML+="<div>"+(commands[cmd]||"Command not found")+"</div>";
input.value="";
}
});
