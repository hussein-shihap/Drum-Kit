




const button1= document.querySelectorAll(".drum");

for(let i=0;i<button1.length;i++){

    button1[i].addEventListener("click",  function(){


let buttonInnerHTML=this.innerHTML;
playSound(buttonInnerHTML)



    } );
  
  }


function playSound(key){

if(key==="w"){
    let audio=new Audio("./sounds/tom-1.mp3");
    audio.play();
    }

else if(key==="a"){
    let audio=new Audio("./sounds/tom-2.mp3");
    audio.play();
    }
    
else if(key==="s"){
    let audio=new Audio("./sounds/tom-3.mp3");
    audio.play();
    }
    
    
else if(key==="d"){
    let audio=new Audio("./sounds/tom-4.mp3");
    audio.play();
    }
    
else if(key==="j"){
    let audio=new Audio("./sounds/snare.mp3");
    audio.play();
    }
    
    
else if(key==="k"){
    let audio=new Audio("./sounds/kick-bass.mp3");
    audio.play();
    }


else if(key==="l"){
    let audio=new Audio("./sounds/crash.mp3");
    audio.play();
    }


}


document.addEventListener("keydown", function(event) {
  playSound(event.key);
});