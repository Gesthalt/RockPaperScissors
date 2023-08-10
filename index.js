game();

//This function extracts first letter from playerSelection and stores it in str1. Str2 stores the rest string. It then joins the modified str1 and str2
function stringCompare(playerSelection)
{
    let str1 = playerSelection.charAt(0);
    let str2 = playerSelection.slice(1);
    str1 = str1.toUpperCase();
    str2 = str2.toLowerCase();
    return str1.concat(str2);
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

    if(playerSelection === computerSelection)
    {
        return "Tie";
    }
}


function getComputerChoice()
{
    let randomChoice = randomNumber();

    switch(randomChoice)
    {
        case 1:
            randomChoice = "Rock";
            return "Rock"
            break;
        case 2:
            randomChoice = "Paper";
            return "Paper"
            break;
        case 3:
            randomChoice = "Scissors";
            return "Scissors"
            break;
    }
}

//main function
function game()
{
    let computerSelection;
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++)
    {
        computerSelection = getComputerChoice();
        console.log("This is computer's choice:", computerSelection); //a little cheating
        
        playerSelection = stringCompare(prompt("Enter your choice: "));

        let roundResult = singleRound(computerSelection, playerSelection);
        console.log(roundResult);

        if(roundResult === "You win! Rock beats Scissors" || roundResult === "You win! Scissors cuts Paper" || roundResult === "You win! Paper wraps Rock")
        {
            ++playerScore;
            console.log("Your wins: ", playerScore);
            console.log("Computer wins: ", computerScore);
        }
        else if(roundResult === "Tie"){
            --i;
            continue;
        }else {
            ++computerScore;
            console.log("Your wins: ", playerScore);
            console.log("Computer wins: ", computerScore);
        }
        
    }
}

//Generates a random number between 1 - 3 
function randomNumber()
{
    return Math.floor(Math.random() * 3) + 1;
}
