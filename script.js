function getComputerChoice(){
    number = Math.random()

    if(number >= 0 && number < 0.33){
        return "rock"
    }
    else if(number >= 0.33 && number < 0.66){
        return "paper"
    }
    else if(number >= 0.66){
        return "scissors"
    }
}

function getHumanChoice(){
    answer = prompt("Enter rock , paper or scissors to play")
    return answer
}

console.log(getComputerChoice())
console.log(getHumanChoice())