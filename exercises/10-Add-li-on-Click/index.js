let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let elem =document.createElement("li");
	elem.innerHTML = "New element";
	let list =document.getElementById("myList");
	list.appendChild(elem);
});
