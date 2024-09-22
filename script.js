const messages = JSON.parse(localStorage.getItem('messages')) || [];

function addMessage(name, mobile, subject, content) {
    const newMessage = {
        id: messages.length + 1,
        name: name,
        mobile: mobile,
        subject: subject,
        content: content,
        timestamp: new Date().toISOString()
    };
    messages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(messages)); // Store messages in localStorage
    displayMessages();
}

function displayMessages() {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = '';
    messages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `
            <strong>Name:</strong> ${msg.name}<br>
            <strong>Mobile:</strong> ${msg.mobile}<br>
            <strong>Subject:</strong> ${msg.subject}<br>
            <strong>Message:</strong> ${msg.content}<br>
            <small>${new Date(msg.timestamp).toLocaleString()}</small>
            <hr>
        `;
        messageContainer.appendChild(messageElement);
    });
}

// Load messages on startup
document.addEventListener('DOMContentLoaded', displayMessages);

function sendMessage() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const subject = document.getElementById('subject').value;
    const content = document.getElementById('messageInput').value;

    if (name && mobile && subject && content) {
        addMessage(name, mobile, subject, content);
        document.getElementById('name').value = ''; // Clear input
        document.getElementById('mobile').value = ''; // Clear input
        document.getElementById('subject').value = ''; // Clear input
        document.getElementById('messageInput').value = ''; // Clear input
    } else {
        alert('Please fill in all fields.');
    }
}

function clearMessagesContainer() {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = ''; // Clear the content of the message container
}
