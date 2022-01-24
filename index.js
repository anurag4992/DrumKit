var i=0;
while (i<document.querySelectorAll(".drum").length){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var exp=this.innerHTML;
        sound(exp);
        btnAnimation(exp);
       
    });
    i++;
}

document.addEventListener("keypress",function(event){
    sound(event.key);
    btnAnimation(event.key);
});

function sound(key){

    switch(key){

        case "w":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var crash=new Audio('sounds/kick-bass.mp3');
            crash.play();
            break;
        case "s":
            var crash=new Audio('sounds/snare.mp3');
            crash.play();
            break;
        case "d":
            var crash=new Audio('sounds/tom-1.mp3');
            crash.play();
            break;
        case "j":
            var crash=new Audio('sounds/tom-2.mp3');
            crash.play();
            break;
        case "k":
            var crash=new Audio('sounds/tom-3.mp3');
            crash.play();
            break;
        case "l":
            var crash=new Audio('sounds/tom-4.mp3');
            crash.play();
            break;

        default : console.log();

}
}

function btnAnimation(str){
    document.querySelector("."+str).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+str).classList.remove("pressed");
    },300);
}