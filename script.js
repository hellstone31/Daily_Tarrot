// Star hover functions in the global scope
function glowStar1() {
    let s1 = document.getElementById("star1");
    s1.style.color = "#ff1cc2";
}
function resetStar1() {
    let s1 = document.getElementById("star1");
    s1.style.color = "#fff126";
}

function glowStar2() {
    let s2 = document.getElementById("star2");
    s2.style.color = "#049ff9";
}
function resetStar2() {
    let s2 = document.getElementById("star2");
    s2.style.color = "#fff126";
} 

function glowStar3() {
    let s3 = document.getElementById("star3");
    s3.style.color = "#49f427";
}
function resetStar3() {
    let s3 = document.getElementById("star3");
    s3.style.color = "#fff126";
}

function glowStar4() {
    let s4 = document.getElementById("star4");
    s4.style.color = "#c21cff";
}
function resetStar4() {
    let s4 = document.getElementById("star4");
    s4.style.color = "#fff126";
} 

// Main card drawing function
function drawCard() {
    // Using the prompt function to greet user by name
    let userName = prompt ("Hi, what is your name?");
    let heading = document.getElementById("welcome-heading");
    if (userName){
        heading.innerText = `✨ Welcome, ${userName}, to your daily tarot reading! ✨`;
    } 

    // Asking to pick a number between 1 & 3
    let cardChoice = prompt("Take a deep breath, center yourself and choose a card number between 1 & 3:");

    let cardDiv = document.getElementById("tarrotCard");
    
    if (cardChoice === "1") {
         cardDiv.innerHTML = `
        <h2 style="color: #d4af37; margin-top: 0;"> 🌟 The Star 🌟 </h2>
        <p><strong>Energy:</strong> Hope, faith and renewal.</p>
        <p><em>"The universe is aligning to bring you inspiration and peace after a challenging period. Trust the process."</em></p>`;
    }
    else if (cardChoice === "2") {
         cardDiv.innerHTML = `
        <h2 style="color: #e56b67; margin-top: 0;"> ☀️ The Sun ☀️ </h2>
        <p><strong>Energy:</strong> Joy, success, and vitality.</p>
        <p><em>"Brilliant clarity and warmth are heading your way today, ${userName || 'friend'}. Shine your light!"</em></p>  
        `;
    }
    else if (cardChoice === "3") {
        cardDiv.innerHTML = `
            <h2 style="color: #e56b6f; margin-top: 0;"> 🧙‍♂️ The Magician 🧙‍♂️ </h2>
            <p><strong>Energy:</strong> Manifestation and resourcefulness.</p>
            <p><em>"You have all the tools you need right now to make things happen, ${userName || 'friend'}. Take action!"</em></p>  
        `;
    }
    else {
        cardDiv.innerHTML = `
            <h2 style="color: #e56b6f; margin-top: 0;">Invalid Choice</h2>
            <p><em>"Please enter a valid number between 1 and 3 when drawing your card!"</em></p>  
        `;
    }
}
// Function to reset the app back to the starting state
function resetApp() {
    // 1. Reset the welcome heading back to the default text
    let heading = document.getElementById("welcome-heading");
    heading.innerText = "✨ Welcome to your daily tarot reading! ✨";

    // 2. Put your original Virgo card image back into the card box
    let cardDiv = document.getElementById("tarrotCard");
    cardDiv.innerHTML = `<img src="virgo_card_back.png" alt="Virgo Tarot Card" class="tarot-image">`;
}