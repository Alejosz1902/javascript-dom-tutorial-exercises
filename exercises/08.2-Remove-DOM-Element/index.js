// Your code here
let list = document.querySelector("#parentLi");
let childs = list.childNodes;
//list.removeChild(childs[3]);
for (let i=0; i<childs.length;i++){
    console.log(childs[i]);
}