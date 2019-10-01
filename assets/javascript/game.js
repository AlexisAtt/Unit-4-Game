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
        health: 190,
        attack: 25,
        id: "queenHP"

},
    commander: {
        health: 280,
        attack: 45,
    
},
    priestess: {
        health: 140,
        attack: 25,
    },

    archer: {
        health: 195,
        attack: 35,
    },
}

var char2 = {
    willie: {
        health: 350,
        attack: 20,
        id: "willieHP"

    },
    smitherschar: {
        health: 400, 
        attack: 30,
    },
    jenkinsChar: {
        health: 480,
        attack: 60,
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

    chosenEnemy = char2.smitherschar
  
    $("#empty-space").replaceWith($("#smithers"));
   
});



$("#willieButton").click(function() {

    chosenEnemy = char2.willie
  
    $("#empty-space").replaceWith($("#willieButton"));
   
});


$("#jenkins").click(function() {

    chosenEnemy = char2.jenkinsChar

    $("#empty-space").replaceWith($("#jenkins"));
   
});





$("#attack").click(function() {
    
    chosenEnemy.health -= chosenHero.attack

    if (chosenEnemy.health <= 0) {
        winnermessage ();
        $("#" + chosenEnemy.id).text("XXXDEADXXX")
        return
    }

    $("#" + chosenEnemy.id).text(chosenEnemy.health);

    counterAttack();

    //chosenEnemy.health = chosenEnemy.health - Chosen.atack
});



function counterAttack () {
    chosenHero.health -= chosenEnemy.attack
    $("#" + chosenHero.id).text(chosenHero.health);

}



function winnermessage () {
    alert ("WINNER!")
}


