let saveEl=document.getElementById("save-el");
let counterEl=document.getElementById("count-el");

let count=0;
function increment(){
    count++;
    counterEl.textContent=count;
}
function save(){
    saveEl.innerText+=count +"-";
    counterEl.textContent=0;
    count=0;
}
