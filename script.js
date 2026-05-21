const socket = io();

function sendMessage() {
    const input = document.getElementById("messageInput");

    if (input.value.trim() !== "") {
        socket.emit("chat message", input.value);
        input.value = "";
    }
}

socket.on("chat message", (msg) => {
    const messages = document.getElementById("messages");

    const div = document.createElement("div");
    div.classList.add("message");
    div.textContent = msg;

    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;
});
