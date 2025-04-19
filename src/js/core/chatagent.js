/**
 * ChatAgent.js
 * Handles the chat interface functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.querySelector('.chat-button');
    const chatWindow = document.querySelector('.chat-window');
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.querySelector('.chat-input input');
    const sendButton = document.querySelector('.chat-input button');
    
    // Get current language
    const currentLang = localStorage.getItem('language') || 'en';
    
    // Chat state
    let isTyping = false;
    let messageHistory = [];
    
    // Load message history from localStorage
    function loadMessageHistory() {
        const savedHistory = localStorage.getItem('chatHistory');
        if (savedHistory) {
            messageHistory = JSON.parse(savedHistory);
            messageHistory.forEach(msg => {
                addMessage(msg.text, msg.sender, false);
            });
        }
    }
    
    // Save message history to localStorage
    function saveMessageHistory() {
        localStorage.setItem('chatHistory', JSON.stringify(messageHistory));
    }
    
    // Toggle chat window
    chatButton.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
        
        // Show welcome message if no messages exist
        if (chatWindow.classList.contains('active') && chatMessages.children.length === 0) {
            loadMessageHistory();
            if (messageHistory.length === 0) {
                addMessage(translations[currentLang].chat.welcome, 'bot');
            }
        }
    });
    
    // Send message on button click
    sendButton.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Function to show typing indicator
    function showTypingIndicator() {
        if (isTyping) return;
        
        isTyping = true;
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('message', 'bot', 'typing');
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        return typingDiv;
    }
    
    // Function to remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = chatMessages.querySelector('.typing');
        if (typingIndicator) {
            typingIndicator.remove();
        }
        isTyping = false;
    }
    
    // Function to send message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add user message
            addMessage(message, 'user');
            
            // Clear input
            chatInput.value = '';
            
            // Show typing indicator
            const typingIndicator = showTypingIndicator();
            
            // Simulate bot response with typing delay
            setTimeout(() => {
                removeTypingIndicator();
                const botResponse = getBotResponse(message);
                addMessage(botResponse, 'bot');
            }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
        }
    }
    
    // Function to add message to chat
    function addMessage(text, sender, save = true) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        
        // Save to history if needed
        if (save) {
            messageHistory.push({ text, sender });
            saveMessageHistory();
        }
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to get bot response
    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Simple response logic
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return translations[currentLang].chat.welcome;
        } else if (lowerMessage.includes('help')) {
            return "I can help you with our services, pricing, or general inquiries. What would you like to know?";
        } else if (lowerMessage.includes('service')) {
            return "We offer web development, digital marketing, and IT consulting services. Which one interests you?";
        } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            return "Our pricing varies based on your specific needs. Would you like to schedule a consultation?";
        } else if (lowerMessage.includes('contact')) {
            return "You can reach us at tangongkp@yahoo.com or call +33 7 82 39 13 11";
        } else {
            return "I'm here to help! You can ask me about our services, pricing, or contact information.";
        }
    }
    
    // Add close button functionality
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-chat');
    closeButton.innerHTML = '&times;';
    chatWindow.querySelector('.chat-header').appendChild(closeButton);
    
    closeButton.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });
    
    // Add clear chat functionality
    const clearButton = document.createElement('button');
    clearButton.classList.add('clear-chat');
    clearButton.textContent = 'Clear Chat';
    chatWindow.querySelector('.chat-header').appendChild(clearButton);
    
    clearButton.addEventListener('click', () => {
        chatMessages.innerHTML = '';
        messageHistory = [];
        saveMessageHistory();
        addMessage(translations[currentLang].chat.welcome, 'bot');
    });
}); 