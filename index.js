
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
game();

//This function extracts first letter from playerSelection and stores it in str1. Str2 stores the rest string. It then joins the modified str1 and str2
function stringCompare(playerSelection)
{
    let str1 = playerSelection.charAt(0);
    let str2 = playerSelection.slice(1);
    str1 = str1.toUpperCase();
    str2 = str2.toLowerCase();
    playerSelection = str1.concat(str2);
    return playerSelection;
}
    

function singleRound(computerSelection, playerSelection)
{
    
    if(computerSelection === "Rock" && playerSelection === "Scissors")
    {
        return "You lose! Rock beats Scissors";
    }

    if(computerSelection === "Scissors" && playerSelection === "Paper")
    {
        return "You lose! Scissors cuts Paper";
    }

    if(computerSelection === "Paper" && playerSelection === "Rock")
    {
        return "You lose! Paper wraps Rock";
    }

    if(computerSelection === "Rock" && playerSelection === "Paper")
    {
        return "You win! Paper wraps Rock";
    }

    if(computerSelection === "Paper" &&  playerSelection === "Scissors")
    {
        return "You win! Scissors cuts Paper";
    }

    if(computerSelection === "Scissors" && playerSelection === "Rock")
    {
        return "You win! Rock beats Scissors";
    }

    if(playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors")
    {
        return "You illiterate dumbass!";
    }
}

//Generates a random number between 1 - 3 
function getComputerChoice()
{
    let randomChoice = randomNumber();

    if(randomChoice == 1)
    {
        return "Rock";
    }else if(randomChoice == 2)
    {
        return "Paper";
    }else if(randomChoice == 3)
    {
        return "Scissors";
    }
}


function game()
{
    
    for(let i = 1; i <= 5; i++)
    {
        computerSelection = getComputerChoice();
        console.log("This is computer's choice:", computerSelection); //a little cheating
        playerSelection = stringCompare(prompt("Enter your choice: "));
        let x = singleRound(computerSelection, playerSelection);
        console.log(x);
        if(x === "You win! Rock beats Scissors" || x === "You win! Scissors cuts Paper" || x === "You win! Paper wraps Rock")
        {
            ++playerScore;
        }
        else{
            ++computerScore;
        }
        console.log("Your wins: ", playerScore);
        console.log("Computer wins: ", computerScore);
    }
}

function randomNumber()
{
    return Math.floor(Math.random() * 3) + 1;
}
