// Business Knowledge Base
const businessKnowledge = {
    services: {
        webDevelopment: {
            title: 'Web Development',
            description: 'Custom website and web application development',
            features: [
                'Responsive Design',
                'E-commerce Solutions',
                'Content Management Systems',
                'Progressive Web Apps',
                'API Integration'
            ],
            pricing: 'Starting from €2,000'
        },
        digitalMarketing: {
            title: 'Digital Marketing',
            description: 'Comprehensive digital marketing solutions',
            features: [
                'SEO Optimization',
                'Social Media Marketing',
                'Content Strategy',
                'Email Marketing',
                'PPC Campaigns'
            ],
            pricing: 'Starting from €800/month'
        },
        aiIntegration: {
            title: 'AI Integration',
            description: 'Smart AI solutions for business automation',
            features: [
                'Chatbot Development',
                'Process Automation',
                'Data Analysis',
                'Machine Learning Integration',
                'AI Consulting'
            ],
            pricing: 'Starting from €3,000'
        },
        itConsulting: {
            title: 'IT Consulting',
            description: 'Expert technology guidance and solutions',
            features: [
                'Technology Assessment',
                'Digital Transformation',
                'Security Consulting',
                'Cloud Migration',
                'IT Strategy'
            ],
            pricing: 'Starting from €150/hour'
        }
    },

    faqs: {
        'what services do you offer': () => {
            return 'We offer Web Development, Digital Marketing, AI Integration, and IT Consulting services. Would you like to know more about any specific service?';
        },
        'pricing': () => {
            return 'Our pricing varies by service:\n' +
                   '- Web Development: Starting from €2,000\n' +
                   '- Digital Marketing: Starting from €800/month\n' +
                   '- AI Integration: Starting from €3,000\n' +
                   '- IT Consulting: Starting from €150/hour\n' +
                   'Would you like a detailed quote for any specific service?';
        },
        'contact': () => {
            return 'You can reach us at:\nEmail: tangongkp@yahoo.com\nPhone: +33 7 82 39 13 11\nAddress: 49 Avenue Lucie Aubrac, 94380, Bonneuil Sur Marne, France';
        }
    },

    // Intent recognition patterns
    intents: {
        pricing: /\b(price|pricing|cost|rate|package|packages)\b/i,
        contact: /\b(contact|email|phone|reach|location|address)\b/i,
        services: /\b(services|offer|provide|solutions)\b/i,
        webdev: /\b(website|web development|web app|webapp)\b/i,
        marketing: /\b(marketing|seo|social media|advertising)\b/i,
        ai: /\b(ai|artificial intelligence|machine learning|automation)\b/i,
        consulting: /\b(consulting|consultant|advice|guidance)\b/i
    }
};

class BusinessChatBot {
    constructor() {
        this.context = {};
        this.lastQuery = '';
    }

    processMessage(message) {
        this.lastQuery = message.toLowerCase();
        
        // Check direct FAQ matches
        for (let key in businessKnowledge.faqs) {
            if (this.lastQuery.includes(key)) {
                return businessKnowledge.faqs[key]();
            }
        }

        // Intent matching
        if (businessKnowledge.intents.pricing.test(message)) {
            return this.handlePricingQuery();
        }
        if (businessKnowledge.intents.contact.test(message)) {
            return businessKnowledge.faqs['contact']();
        }
        if (businessKnowledge.intents.services.test(message)) {
            return this.handleServicesQuery();
        }

        // Service-specific queries
        if (businessKnowledge.intents.webdev.test(message)) {
            return this.getServiceInfo('webDevelopment');
        }
        if (businessKnowledge.intents.marketing.test(message)) {
            return this.getServiceInfo('digitalMarketing');
        }
        if (businessKnowledge.intents.ai.test(message)) {
            return this.getServiceInfo('aiIntegration');
        }
        if (businessKnowledge.intents.consulting.test(message)) {
            return this.getServiceInfo('itConsulting');
        }

        // Default response
        return this.getDefaultResponse();
    }

    handlePricingQuery() {
        return businessKnowledge.faqs['pricing']();
    }

    handleServicesQuery() {
        return businessKnowledge.faqs['what services do you offer'];
    }

    getServiceInfo(serviceKey) {
        const service = businessKnowledge.services[serviceKey];
        return `${service.title}: ${service.description}\n\nKey Features:\n${service.features.map(f => '- ' + f).join('\n')}\n\nPricing: ${service.pricing}`;
    }

    getDefaultResponse() {
        return "I'm here to help you with information about our services, pricing, and business solutions. Could you please specify what information you're looking for?";
    }
}

// Initialize chat functionality
document.addEventListener('DOMContentLoaded', () => {
    const chatBot = new BusinessChatBot();
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatClose = document.getElementById('chat-close');

    // Toggle chat window
    chatToggle.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
    });

    // Close chat window
    chatClose.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });

    // Handle message submission
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage('user', message);

        // Get bot response
        const response = chatBot.processMessage(message);
        
        // Add bot response with typing effect
        setTimeout(() => {
            addMessage('agent', response);
        }, 500);

        // Clear input
        chatInput.value = '';
        chatInput.focus();
    });

    function addMessage(type, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = content;
        
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Add welcome message
    addMessage('agent', "Hello! I'm Malory, your AI business assistant. How can I help you today? Feel free to ask about our services, pricing, or any other business-related questions.");
}); 