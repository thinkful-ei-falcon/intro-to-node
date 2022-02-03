
function getRandomIndex(max){
    return Math.floor(Math.random() * max);
}

function getFortune(){
    let responses = ["Yes", "No", "Unsure at this time","Try again later","Maybe", "Ask again", "Never happening!"];
    let randomIndex = getRandomIndex(responses.length);
    return responses[randomIndex]
}

function getTask(){
    let todos = ["Go to the beach", "Volleyball", "Skydiving", "Backpack Zion Nation Park", "Cave Diving","Deep Sea Diving","Sew an outfit"];
    let randomIndex = getRandomIndex(todos.length);
   return todos[randomIndex];
}


module.exports={getFortune, getTask};