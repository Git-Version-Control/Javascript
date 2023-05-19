//line1
//document.getElementById("count-el").innerText=5;

/*let count=0;//let count be 0
console.log(count);

let myAge=22;
let humanDogRatio=7/1;
let myDogAge=myAge*humanDogRatio;
console.log(myDogAge)*/
let count=0;
function increment(){
    count++;
    document.getElementById("count-el").innerText=count;
}
function save(){
    let countStr=count+"-";
    document.getElementById("save-el").textContent+=countStr;
    count=0;
    document.getElementById("count-el").innerText=count;
}