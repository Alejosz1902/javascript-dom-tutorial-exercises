let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let elem =document.createElement("div");
	elem.style.background = "yellow";
	elem.innerHTML='Hello World';
	document.body.appendChild(elem);
});
