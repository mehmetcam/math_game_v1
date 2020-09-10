let reponse;
let resultat = 0;
let input = document.getElementById("myinput");
let score = 0;
let counter = 60;
let operator;



input.addEventListener("keyup",function(chiffres){
    if(chiffres.keyCode == 13){
        chiffres.preventDefault();
        document.getElementById("mybutton").click();
    }
} );

function selected(){
    input.setSelectionRange(0, input.value.length);
}



function chiffres(){

        operator = Math.floor(Math.random()*2);
        console.log(operator);

        

        reponse = document.getElementById("myinput").value;
        // console.log(resultat);
        // console.log(reponse);

        if(resultat != reponse){
            alert('Votre score est ' + score);
                    //counter = 60;
                    //score = 0;
                    document.location.reload(true);
                }
        

        else{
            counter = counter + 1;
        }

        chiffre1 = Math.ceil(Math.random()*20);
        chiffre2 = Math.ceil(Math.random()*20);

        if(operator == 0){
            document.getElementById("operator").innerHTML = "-"
            resultat = chiffre1 - chiffre2;

        }

        else{
            document.getElementById("operator").innerHTML = "+"   
            resultat = chiffre1 + chiffre2; 
        }

        //resultat = chiffre1 + chiffre2;
        


        document.getElementById("chiffre1").innerHTML = chiffre1;
        document.getElementById("chiffre2").innerHTML = chiffre2;

        // console.log(chiffre1);
        // console.log(chiffre2);

        score = score + 1;
        document.getElementById("score").innerHTML = score;

        
             
}



let intervalID = null;

function timer() {
    if (intervalID){
        return;
    }

    intervalID = setInterval(function timer(){

        counter = counter - 1;
        document.getElementById('counter').innerHTML = counter;

        if(counter == 0){
            alert('Votre score est ' + score);
            //counter = 60;
            //score = 0;
            document.location.reload(true);
        }



    },1000);

};