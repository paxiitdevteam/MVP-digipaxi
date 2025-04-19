class ChatAgent {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.initializeUI();
        this.bindEvents();
        this.showWelcomeMessage();
    }

    initializeUI() {
        // Create chat container
        this.container = document.createElement('div');
        this.container.className = 'chat-agent-container';
        this.container.innerHTML = `
            <div class="chat-toggle-btn">
                <i class="fas fa-comments"></i>
            </div>
            <div class="chat-window">
                <div class="chat-header">
                    <h3>DigiPaxi Support</h3>
                    <button class="close-btn"><i class="fas fa-times"></i></button>
                </div>
                <div class="chat-messages"></div>
                <div class="chat-input">
                    <input type="text" placeholder="Type your message...">
                    <button class="send-btn"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        `;
        document.body.appendChild(this.container);

        // Cache DOM elements
        this.toggleBtn = this.container.querySelector('.chat-toggle-btn');
        this.chatWindow = this.container.querySelector('.chat-window');
        this.closeBtn = this.container.querySelector('.close-btn');
        this.messagesContainer = this.container.querySelector('.chat-messages');
        this.input = this.container.querySelector('input');
        this.sendBtn = this.container.querySelector('.send-btn');
    }

    bindEvents() {
        this.toggleBtn.addEventListener('click', () => this.toggle());
        this.closeBtn.addEventListener('click', () => this.toggle(false));
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    toggle(force = null) {
        this.isOpen = force !== null ? force : !this.isOpen;
        this.container.classList.toggle('open', this.isOpen);
        if (this.isOpen) {
            this.input.focus();
        }
    }

    sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        this.input.value = '';

        // Simulate agent response after a delay
        setTimeout(() => {
            this.addMessage(this.generateResponse(message), 'agent');
        }, 1000);
    }

    addMessage(text, sender) {
        const messageEl = document.createElement('div');
        messageEl.className = `chat-message ${sender}-message`;
        messageEl.innerHTML = `
            <div class="message-content">
                ${text}
            </div>
            <div class="message-timestamp">
                ${new Date().toLocaleTimeString()}
            </div>
        `;
        this.messagesContainer.appendChild(messageEl);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        this.messages.push({ text, sender, timestamp: new Date() });
    }

    showWelcomeMessage() {
        setTimeout(() => {
            this.addMessage('Hello! How can I help you today?', 'agent');
        }, 500);
    }

    generateResponse(message) {
        // Simple response generation - can be enhanced with AI/API integration
        const responses = [
            "Thank you for your message. A team member will get back to you shortly.",
            "I understand your query. Let me help you with that.",
            "Could you please provide more details about your request?",
            "I'm looking into this for you.",
            "Thank you for reaching out. We'll handle your request as soon as possible."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Initialize chat agent when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.chatAgent = new ChatAgent();
}); 