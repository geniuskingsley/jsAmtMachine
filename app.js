
/**
 * WELCOME TO GENIUS ATM MACHINE.
 * 
 * @Genius
 */
 

//Basically the user's details... balance and pin.
let accountBalance = 10000;
let accountPin = 1234;

// HERE IS OUR WITHDRAWL FUNCTION. TO PERFORM ALL WITHDRAWL TASKS.
function withdrawal(){
    // ABOUT TO VALIDATE THE PIN.
    mainLoop : while(true){
        /**
         * Tthis code does the following.
         * 
         * 1. It asks its user to enter a pin
         * 2. it validates if it's correct.
         * 
         * IF its correct it basically proceed with other tasks...
         */
        let pinEnter = prompt("PLEASE ENTER YOUR PIN");
    
        //THIS EXECUTES WHEN THE PIN IS CORRECT...
        if(pinEnter == accountPin){
            while(true){
                let withdrawalAmount = prompt("HOW MUCH DO YOU WANT TO WITHDRAW ?", '');
                if(withdrawalAmount <= accountBalance){
                    alert("WITHDRAWL SUCCSSFUL");
                    while(true){
                        let performAnotherTransaction = prompt("DO YOU WANT TO PERFOROM ANOTHER TRANSCTION? \n \n 1.YES \n \n 2.NO");
                        if(performAnotherTransaction == 1){
                            App();
                            break mainLoop;
                        }
                        else if(performAnotherTransaction == 2){
                            alert("THANK YOU FOR BANKING WITH US");
                            break mainLoop;
                        }
                        else{
                            alert("PLEASE ENTER A VALID ANSWER")
                        }
                    } 
                }
                    //
            } 
        }

        //THIS EXECUTES WHEN THE PIN IS INCORRECT...
        else{
            alert()
        }
    }
    
}

function balance(){
    alert(`Your balance is ${accountBalance} `);
}

/***
 * OUR MAIN APP, BASICALLY WHERE FINAL VALIDATION -
 *  WILL BE DONE AND MAIN FUNCTION WILL BE CALLED
 */

 function App(){
    mainChecker : while(true){
        let option = Number(prompt("--- PLEASE SELECT ---- \n \n 1. WITHDRAW \n \n 2. CHECK BALANCE", ''));
        if(option == 1){
            withdrawal();
            break mainChecker;
        }
        else if(option == 2){
            balance();
            break mainChecker;
        }
        else{
            alert("PLEASE ENTER A VALID ANSWER!.");
        }
    }
 }
  

App();
