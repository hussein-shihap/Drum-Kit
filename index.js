


const buttons= document.querySelectorAll(".drum");

for(let i=0; i<buttons.length;i++){


buttons[i].addEventListener("click", function(){


let buttonInner=this.innerHTML;
playSound(buttonInner);
addAnimation(buttonInner);

});


}




function playSound(key){

if(key==="w"){
    let audio=new Audio("./tom-1.mp3");
     audio.play();



}

else if(key==="a"){
      let audio=new Audio("./tom-2.mp3");
     audio.play();



}

else if(key==="s"){
      let audio=new Audio("./tom-3.mp3");
     audio.play();

}


else if(key==="d"){
      let audio=new Audio("./tom-4.mp3");
     audio.play();}
     
 else if(key==="j"){
      let audio=new Audio("./snare.mp3");
     audio.play();}
     
 else if(key==="k"){ 
      let audio=new Audio("./kick-bass.mp3");
     audio.play();}
     
 else if(key==="l"){
      let audio=new Audio("./crash.mp3");
    audio.play();
    }

 else {

    console.log("inavalid key pressesd")
 }     
}



document.addEventListener("keydown", function(event){

playSound(event.key)
addAnimation(event.key)

});




function addAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}











