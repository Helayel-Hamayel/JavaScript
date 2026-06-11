// TASK 1
const likeButton = document.querySelector("#likeBtn")
const resetButton = document.querySelector("#resetBtn")
const likeCounter = document.querySelector("#likeCount")
let counter = 0

likeButton.addEventListener("click", function (){
    counter++;
    likeCounter.textContent = "Likes: "+counter;
})

resetButton.addEventListener("click", function (){
    counter = 0
    likeCounter.textContent = "Likes: 0"
})

// TASK 2
const nameInput = document.querySelector("#nameInput")
const greetButton = document.querySelector("#greetBtn")
const greetMessage = document.querySelector("#greetMsg")
let res = ""

greetButton.addEventListener("click", function (){

    if (nameInput.value.trim() === "") {
        res = "Please enter your name first."
    } else {
        res = `Hello, ${nameInput.value}`
    }
    greetMessage.textContent = res
    nameInput.value = ""
    nameInput.focus()
})

// TASK 3

//liveOutput liveInput
const liveIN = document.querySelector("#liveInput")
const liveOUT = document.querySelector("#liveOutput")

liveIN.addEventListener("input", function (event){
    const currentValue = event.target.value;
    console.log(liveIN.value.length);
    
    if (currentValue === "") {
        liveOUT.textContent = "Waiting..."
    } else if (liveIN.value.length > 20) {
        liveOUT.textContent = "Long!!!"
    }
    else {
        liveOUT.textContent = currentValue
    }
})

// TASK 4
//keyLog keyInput
const keyLog = document.querySelector("#keyLog")
const keyInput = document.querySelector("#keyInput")

keyInput.addEventListener("keydown", function (event) {
    console.log(event);

    if (event.key === "Escape") {
        keyLog.textContent = ""
        keyInput.value = ""
        return
    }

    let prefix = "";
    if (event.ctrlKey && event.key !== "Control") {
        prefix += "Ctrl + ";
    }
        
    if (event.shiftKey && event.key !== "Shift"){
        prefix += "Shift + ";
    }

    if (event.altKey && event.key !== "Alt") {
        prefix += "Alt + ";
    }

    keyLog.textContent = "You Pressed: "+prefix + event.key;
});

// TASK 5