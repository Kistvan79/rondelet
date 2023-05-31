console.log("Hello")

let mening1;
let mening2;
let mening3;
let mening4;

let skicka;
let töm;
var output;
let audio;




 
window.addEventListener("load", function(){
    init();
})


function send(){ 
    first4 = mening1.value.split(" ").splice(0,4);
    restof1 = mening1.value.split (" ").splice(4,mening1.value.length)
    output.innerHTML = `${first4.join(" ").toUpperCase()}<br><br>${first4.join(" ")}
    <br>${restof1.join(" ")}<br>${first4.join(" ")}
    <br>${mening2.value}<br>${mening3.value}<br>${mening4.value}<br>${first4.join(" ")}`
  

    let utterance = new SpeechSynthesisUtterance(`
    ${first4 + first4 + restof1
    + first4 + mening2.value
    + mening3.value + mening4.value 
    + first4} `);
    utterance.lang = "sv"
    utterance.rate = 1
    utterance.volume = 0.8
    utterance.pitch = 5
    speechSynthesis.speak(utterance);
    voices = speechSynthesis.getVoices();
    
  }
  

function playAudio() {
    audio = document.getElementById("myAudio");
    audio.volume = 0.01
    audio.play();
  }
  document.addEventListener('DOMContentLoaded', playAudio);


function clear(){
    document.getElementsByClassName("form")[0].value = "";
    document.getElementsByClassName("form")[1].value = "";
    document.getElementsByClassName("form")[2].value = "";
    document.getElementsByClassName("form")[3].value = "";
    output.innerHTML = `Utmatning sker här...`
    speechSynthesis.cancel();
}

function init(){
   output = document.getElementsByClassName("outputtext")[0];
   mening1 = document.getElementsByClassName("form")[0]; 
   mening2 = document.getElementsByClassName("form")[1]; 
   mening3 = document.getElementsByClassName("form")[2]; 
   mening4 = document.getElementsByClassName("form")[3];
   
   
   töm = document.getElementsByClassName("button")[0];
   töm.addEventListener("click", function(){
    clear();
   });
  
   skicka = document.getElementsByClassName("button")[1];
   skicka.focus();
   skicka.addEventListener("click", function(){ 
    send();
})};