let alertName= alert("You fell asleep and are now forced to fight a DreamCatcher demon in order to find your way back into the 3rd Dimension.Should you be defeated,you will be forced to spend eternity in the UpsideDown.");
let promptChar= prompt("You must choose which soul to conjur as your best bet for escape back to the realm of living in the flesh... you can either be a 'djinn', 'succubus' or 'starlord'");




 function begin(){
     if (promptChar=== "djinn"){
        alert("you have the power to possess your opponent by facepalming them right between the eyes");
    }
else if ((promptChar== "succubus") || (promptChar== "starlord")){
    let artifact= prompt("How do you wish to defeat the DreamCatcher demon: 'headbut', 'barehands', 'deathstare'");
}
begin();
switch(artifact){
case 'headbut':
 alert("You've chosen the dumbest choice,enjoy your stay in nothingness bye eeee");
 headbut1();
 break;
case 'barehands':  
alert("Are you dumb?Sayonara");
break;
case 'deathstare':
 alert("You have chosen the eyes of death to pierce the soul of the DreamCatcher and kill it");
break;
 default:

}

 
}

