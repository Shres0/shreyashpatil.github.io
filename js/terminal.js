const input=document.getElementById("terminalInput");
const output=document.getElementById("terminalOutput");

const commands={
help:"about skills contact",
about:"Embedded Systems Engineer | Automotive Ethernet | Firmware Validation",
skills:"STM32 | CAN | Ethernet | MDIO | Linux | Embedded C",
contact:"Email: shresp3002@gmail.com"
};

input.addEventListener("keydown",e=>{
if(e.key==="Enter"){
let cmd=input.value.trim();
output.innerHTML+="<div>> "+cmd+"</div>";
output.innerHTML+="<div>"+(commands[cmd]||"Unknown command")+"</div>";
input.value="";
}
});
