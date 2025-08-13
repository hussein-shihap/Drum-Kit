




const button1= document.querySelectorAll(".drum");

for(let i=0;i<button1.length;i++){

    button1[i].addEventListener("click",  function(){


let buttonInnerHTML=this.innerHTML;
playSound(buttonInnerHTML)



    } );
  
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
    audio.play();
    }
    
else if(key==="j"){
    let audio=new Audio("./snare.mp3");
    audio.play();
    }
    
    
else if(key==="k"){
    let audio=new Audio("./kick-bass.mp3");
    audio.play();
    }


else if(key==="l"){
    let audio=new Audio("./crash.mp3");
    audio.play();
    }


}


document.addEventListener("keydown", function(event) {
  playSound(event.key);

});


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.classList.add("pressed");

setTimeout(() =>{

this.classList.remove("pressed");

},100);




  });
}









