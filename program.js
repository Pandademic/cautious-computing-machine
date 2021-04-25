function submit(){
//Para 1
sentence1Para1=document.getElementById("a1").value;
sentence2Para1=document.getElementById("a2").value;
sentence3Para1=document.getElementById("a3").value;
sentence4Para1=document.getElementById("a4").value;
sentence5Para1=document.getElementById("a5").value;
sentence6Para1=document.getElementById("a6").value;
//para 2
sentence1Para2=document.getElementById("b1").value;
sentence2Para2=document.getElementById("b2").value;
sentence3Para2=document.getElementById("b3").value;
sentence4Para2=document.getElementById("b4").value;
sentence5Para2=document.getElementById("b5").value;
sentence6Para2=document.getElementById("b6").value;
//console
console.log(sentence1Para1);
console.log(sentence2Para1);
console.log(sentence3Para1);
console.log(sentence4Para1);
console.log(sentence5Para1);
console.log(sentence6Para1);

console.log(sentence1Para2);
console.log(sentence2Para2);
console.log(sentence3Para2);
console.log(sentence4Para2);
console.log(sentence5Para2);
console.log(sentence6Para2);

//compile
para1=sentence1Para1+sentence2Para1+sentence3Para1+sentence4Para1+sentence5Para1+sentence6Para1;
console.log("paragraph 1="+para1);
para2=sentence1Para2+sentence2Para2+sentence3Para2+sentence4Para2+sentence5Para2+sentence6Para2;
console.log("paragraph 2="+para2);
essay=para1+"  "+para2;
console.log("Essay="+essay);
//show
document.getElementById("displayParagraph1").innerHTML=para1;
document.getElementById("display2").innerHTML=para2;
}