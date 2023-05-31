
let mening1, mening2, mening3, mening4;

let skicka, töm, output, audio, bytspråk;
 
window.addEventListener("load", init)

//Första4 är en sträng med det första fyra orden
// restav 1 är första meningen utan det fyra första orden
//Function som skriver ut i text ruttan
function send(){ 

    första4 = mening1.value.split(" ").splice(0,4);
    restav1 = mening1.value.split (" ").splice(4,mening1.value.length)
    output.innerHTML = `${första4.join(" ").toUpperCase()}<br><br>${första4.join(" ")}
    <br>${restav1.join(" ")}<br>${första4.join(" ")}
    <br>${mening2.value}<br>${mening3.value}<br>${mening4.value}<br>${första4.join(" ")}`
  
// Är en speech API som är inbyggd i javascript. Den läser upp text.
    let utterance = new SpeechSynthesisUtterance(`
    ${första4 + första4 + restav1
    + första4 + mening2.value
    + mening3.value + mening4.value 
    + första4} `);
    utterance.lang = "sv" //språk på talsyntes
    utterance.rate = 1 //hur snabbt talsyntes pratar
    utterance.volume = 0.8
    utterance.pitch = 5
    speechSynthesis.speak(utterance);
  }
//functionen som låter audio spelas i backgrunden
function playAudio() {
    audio = document.getElementById("myAudio");
    audio.volume = 0.01
    audio.play();
  }
  document.addEventListener('DOMContentLoaded', playAudio);

// funktionen tömmer text rutorna och avbryter talsyntes 
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
   töm.addEventListener("click", clear)
  
   skicka = document.getElementsByClassName("button")[1];
   skicka.addEventListener("click", send);
}
