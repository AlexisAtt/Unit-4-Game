/*
var queenHealth = 190;
var commanderHealth = 280;
var priestessHealth = 140;
var archerHealth = 195;
var userChar

var willieHealth= 350;
var smithersHealth= 300;
var jenkinsHealth= 450;


var queenAttack = -25;
var commanderAtatck = -45;
var priestessAttack = -15;
var archerAttack = -35;
*/

var chosenEnemy = false;
var chosenHero = false;
var attack = 0;
var health = 0;


//Character Stats://

var char1 = {
    queen: {
        health: 290,
        attack: 55,
        id: "queenHP"

},
    commander: {
        health: 380,
        attack: 70,
        id: "commanderHP"
    
},
    priestess: {
        health: 240,
        attack: 45,
        id: "priestessHP"
    },

    archer: {
        health: 295,
        attack: 65,
        id:"archerHP"
    },
}

var char2 = {
    willie: {
        health: 450,
        attack: 20,
        id: "willieHP"

    },
    smitherschar: {
        health: 500, 
        attack: 30,
        id: "smitherHP"
    },
    jenkinsChar: {
        health: 666,
        attack: 60,
        id: "jenkinsHP"
    }
}




//Button Clicks//

    $("#queenClick").click(function() {
        var id = $(this).attr('id')
        chosenHero = char1.queen
      console.log("queenClick");
      console.log("chosenHero");
        $("#commanderClicker").hide();
        $("#priestessClicker").hide();
        $("#archerClicker").hide();
    });



    $("#commanderClick").click(function() {
        var id = $(this).attr('id')
        chosenHero = char1.commander
        console.log("commanderClick");
        $("#queenClicker").hide();
        $("#priestessClicker").hide();
        $("#archerClicker").hide();
    });


    $("#priestessClick").click(function() {
        var id = $(this).attr('id')
        chosenHero = char1.priestess
        console.log("#priestessClick");
        $("#commanderClicker").hide();
        $("#queenClicker").hide();
        $("#archerClicker").hide();
    });



    $("#archerClick").click(function() {
        var id = $(this).attr('id')
        chosenHero = char1.archer
  
        $("#commanderClicker").hide();
        $("#priestessClicker").hide();
        $("#queenClicker").hide();
    });





//On Screen Text//

$("#queenHP").text(char1.queen.health);
$("#commanderHP").text(char1.commander.health);
$("#priestessHP").text(char1.priestess.health);
$("#archerHP").text(char1.archer.health);

$("#willieHP").text(char2.willie.health);
$("#smitherHP").text(char2.smitherschar.health);
$("#jenkinsHP").text(char2.jenkinsChar.health); 

//Enemy Move to Battle Ground//

$("#smithers").click(function() {
if (chosenEnemy){
    return;
}
    chosenEnemy = char2.smitherschar
  
    $("#empty-space").replaceWith($("#smithers"));
   
});



$("#willieButton").click(function() {
    if (chosenEnemy){
        return;
    }

    chosenEnemy = char2.willie
  
    $("#empty-space").replaceWith($("#willieButton"));
   
});


$("#jenkins").click(function() {
    if (chosenEnemy) {
        return;
    }

    chosenEnemy = char2.jenkinsChar

    $("#empty-space").replaceWith($("#jenkins"));
   
});


//Attack Function for Hero//


$("#attack").click(function() {
    
    chosenEnemy.health -= chosenHero.attack

    if (chosenHero.health <= 180) {
        chosenHero.attack + 20;
        criticalHeroHit ();
        
    }

    if (chosenEnemy.health <= 0) {
        winnermessage ();
        $("#" + chosenEnemy.id).text("XXXDEADXXX")   //winning
        return
    };
    if (chosenHero.health <=0) {
        losermessage ();

        $("#" + chosenHero.id).text("XXDEADXX");   //losing
        $("#" + chosenEnemy.id).text("WINNER");
        return
    }

    $("#" + chosenEnemy.id).text(chosenEnemy.health);



   counterAttack();

    //chsosenEnemy.health = chosenEnemy.health - Chosen.atack
});



function counterAttack () {

    chosenHero.health -= chosenEnemy.attack

    $("#" + chosenHero.id).text(chosenHero.health);

}



function winnermessage () {
    alert ("WINNER!")
}

function losermessage () {
    alert ("YOU LOST! :- (")
}

function criticalHeroHit () {
    alert ("CRITICAL HERO HIT! ")
}


