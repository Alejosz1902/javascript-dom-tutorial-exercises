let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
let selectCountry = document.getElementById("mySelect");

for (let i=0; i<countries.length;i++){
    let option = document.createElement("option");
    option.value = countries[i];
    option.innerHTML = countries[i];
    selectCountry.appendChild(option);
}

selectCountry.addEventListener("change",function(){
    let chosenCountry = selectCountry.value;
    alert(chosenCountry);
})