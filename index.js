const socket = new WebSocket("ws://localhost:8765");

// Function to handle incoming messages from the server
socket.onmessage = function(event) {
    const messages = document.getElementById("messages");
    const message = document.createElement("div");
    message.textContent = event.data;
    messages.appendChild(message);
};

// Function to send a message to the server
document.getElementById("send-button").addEventListener("click", function() {
    const nameInput = document.getElementById("name-input");
    const messageInput = document.getElementById("message-input");
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    if (!name || !message) {
        alert("Please enter your name and message.");
        return;
    }
    socket.send(`${name}: ${message}`);
    messageInput.value = "";  // Clear the message input field
});
