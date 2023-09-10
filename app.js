// function --> dahij ashiglah bolomjtoi codnii tsugluulga
/*function restart(){
    console.log("game restarted")
    console.log("hello")
}
restart();
restart();
restart();

function hello(name,age){
    console.log("Snu minii neriig " + name);
    console.log("Minii nas " +age);
}
hello("Khan-Erdene", 13);
hello("Undram", 13);
hello("Batgalt", 14);

function sum(a,b){
    if(a>b){
        console.log(a)
    }else if(b>a){
        console.log(b)
    }}
sum(15,20);
sum(25,70);
sum(77,100);
*/
var body=document.getElementsByTagName('body')[0];
console.log(body);
var colors = ['brown','red','purple','blue','black','grey'];
var btn = document.getElementsByTagName('button')[0]
console.log(btn);
var i=-1;
function color(){
    random = Math.floor(Math.random()*(colors.length-1));
    
    i++;
    body.style.backgroundColor=colors[random];
    btn.innerText = colors[random];
    if(i>=colors.length-1){
        i=-1;
    }
}
