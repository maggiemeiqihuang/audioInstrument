// document.body.style.backgroundColor = "red";
// find my test button
const testButton = document.getElementById("test-button");

// create intrument and connect to audio
const Synth = new Tone.Synth().toDestination();


// do something when we click that button
testButton.addEventListener("click" , playTestNote);

function playTestNote(){
    Synth.triggerAttackRelease("C4", "8n");
}