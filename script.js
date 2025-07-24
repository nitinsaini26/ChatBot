const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function appendMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


function getBotResponse(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return "Hello there! How can I assist you?";
    } else if (lowerInput.includes('how are you')) {
        return "I'm a program, but I'm doing great! Thanks for asking.";
    } else if (lowerInput.includes('what is your name')) {
        return "I am a simple chatbot. You can call me ChatBot!";
    } else if (lowerInput.includes('joke')) {
        const jokes = [
            "Why don't scientists trust atoms? Because they make up everything!",
            "Did you hear about the highly successful fertilizer business? It's growing!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "What do you call a fake noodle? An impasta!",
            "Why did the bicycle fall over? Because it was two-tired!",
            "What do you call a sleeping bull? A bulldozer!",
            "What's orange and sounds like a parrot? A carrot!",
            "What do you call a magic dog? A labracadabrador!",
            "Why did the computer go to the doctor? It had a virus!",
            "How do you make a tissue dance? You put a little boogie in it!",
            "Why did the cookie go to the hospital? Because it felt crummy!",
            "What's a ghost's favorite dessert? I-scream!",
            "What do you call a boomerang that won't come back? A stick!",
            "Why did the math book look sad? Because it had too many problems."
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
    } else if (lowerInput.includes('favourite color') || lowerInput.includes('favorite color')) {
        return "As a program, I don't have eyes or preferences, so I don't have a favorite color! but my favorite color is Black.";
    } else if (lowerInput.includes('favourite song') || lowerInput.includes('favorite song')) {
        return "I don't have ears to listen to music, so I don't have a favorite song. But I can help you find information about songs!";
    } else if (lowerInput.includes('bye') || lowerInput.includes('goodbye')) {
        return "Goodbye! Have a great day!";
    } else if (lowerInput.includes('help')) {
        return "I can respond to greetings, tell you my name, ask how I am, tell a joke, or discuss favorite colors/songs. Try one of those!";
    } else {
        return "I'm sorry, I don't understand that. Can you try rephrasing?";
    }
}

function sendMessage() {
    const userText = userInput.value.trim();
    if (userText === '') return;

    appendMessage(userText, 'user');
    userInput.value = '';

    setTimeout(() => {
        const botResponse = getBotResponse(userText);
        appendMessage(botResponse, 'bot');
    }, 500);
}

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

window.onload = () => {
    userInput.focus();
};