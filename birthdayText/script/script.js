let messages = ["Happy birthday",
	"Best of wishes",
	"You've aged."];

let i = messages.length;
let s = Math.floor(Math.random() * i);

document.getElementById("msg")
	.innerHTML = '" ' + messages[s] + ' "';
