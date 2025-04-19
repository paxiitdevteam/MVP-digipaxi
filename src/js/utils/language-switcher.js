/**
 * PAXIIT Language Switcher
 * Handles switching between English and French
 */

// Language translations
const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            blog: "Blog",
            contact: "Contact",
            certifications: "Certifications",
            partners: "Partners",
            products: "Products"
        },
        home: {
            title: "DigiPaxi - Digital Solutions & Affiliate Marketing",
            subtitle: "This is a test page to verify our implementation.",
            hero: {
                title: "Transform Your Digital Presence",
                subtitle: "Innovative solutions for modern businesses",
                cta: "Explore Our Services",
                contact: "Contact Us"
            },
            intro: {
                title: "Welcome to DigiPaxi",
                text: "We specialize in digital transformation and affiliate marketing, helping businesses thrive in the digital age."
            },
            services: {
                title: "Our Services",
                webdev: "Web Development",
                "webdev.desc": "Custom websites and web applications tailored to your business needs.",
                marketing: "Digital Marketing",
                "marketing.desc": "Strategic marketing solutions to increase your online visibility.",
                consulting: "IT Consulting",
                "consulting.desc": "Expert guidance on technology adoption and digital strategy.",
                learn: "Learn More"
            },
            tools: {
                title: "Featured Tools",
                coolors: "The super fast color palette generator",
                envato: "Unlimited downloads of premium digital assets",
                canva: "Professional design tool for creating stunning visuals",
                learn: "Learn More"
            },
            testimonials: {
                title: "What Our Clients Say",
                quote1: "DigiPaxi transformed our online presence completely. Their expertise in digital marketing helped us reach new heights.",
                author1: "Sarah Johnson, CEO",
                quote2: "The web development services provided by DigiPaxi were exceptional. Our new website has significantly improved our conversion rates.",
                author2: "Michael Chen, Marketing Director",
                quote3: "DigiPaxi's IT consulting helped us streamline our operations and implement the right tools for our growing business.",
                author3: "David Rodriguez, Operations Manager"
            },
            newsletter: {
                title: "Stay Updated",
                text: "Subscribe to our newsletter for the latest digital insights and tips.",
                placeholder: "Enter your email",
                submit: "Subscribe"
            },
            chatagent: {
                title: "Chat with Malory",
                placeholder: "Type your message...",
                send: "Send",
                welcome: "Hello! I'm Malory, your digital solutions assistant. I can help you with web development, digital marketing, IT consulting, and our featured tools. How can I assist you today?",
                responses: {
                    services: "We offer comprehensive digital services including web development, digital marketing, and IT consulting. Would you like to know more about any specific service?",
                    webdev: "Our web development services include custom websites, web applications, and e-commerce solutions. We ensure responsive, user-friendly designs that drive results.",
                    marketing: "Our digital marketing services help businesses increase their online visibility through SEO, social media marketing, and content strategy.",
                    consulting: "Our IT consulting services guide businesses in adopting the right technologies and digital strategies for growth.",
                    tools: "We recommend several premium digital tools including Coolors.co for design, Envato Elements for assets, and Canva Pro for visual creation.",
                    pricing: "Our pricing varies based on your specific needs. Would you like to schedule a consultation to discuss your requirements?",
                    contact: "You can reach us at tangongkp@yahoo.com or call +33 7 82 39 13 11. We're located at 49 Avenue Lucie Aubrac, 94380, Bonneuil Sur Marne, France.",
                    default: "I understand you're interested in our services. Would you like to know more about our web development, digital marketing, or IT consulting services?"
                }
            }
        },
        footer: {
            quickLinks: "Quick Links",
            contact: "Contact Info",
            social: "Follow Us",
            rights: "All rights reserved."
        },
        about: {
            title: 'About DigiPaxi',
            description: 'DigiPaxi is a forward-thinking initiative by Paxi iTechnologies, designed to empower businesses and individuals through innovative digital solutions and affiliate marketing strategies. Our mission is to bridge the gap between technology and business growth by offering tools, resources, and expertise that drive success in the digital age.',
            vision: {
                title: 'Our Vision',
                text: 'We envision a world where businesses of all sizes can harness the power of digital tools to achieve their goals, streamline operations, and create meaningful connections with their audiences. DigiPaxi aims to be a trusted partner in this journey, providing solutions that are both effective and accessible.'
            },
            mission: {
                title: 'Our Mission',
                text: 'Our mission is twofold:',
                point1: 'To deliver cutting-edge digital services, including web development, digital marketing, and IT consulting, tailored to the unique needs of our clients.',
                point2: 'To promote high-quality digital products through affiliate marketing, helping businesses and individuals discover tools that enhance productivity and creativity.'
            },
            affiliate: {
                title: 'Our Affiliate Marketing Initiative',
                description: 'As part of our commitment to innovation, DigiPaxi has launched an affiliate marketing program that features top-tier digital products such as:',
                coolors: 'Coolors.co',
                envato: 'Envato Elements',
                canva: 'Canva Pro',
                gumroad: 'Gumroad',
                namecheap: 'Namecheap',
                goal: 'Through this initiative, we aim to generate passive income while providing value to our audience by recommending tools that we trust and use ourselves.'
            },
            team: {
                title: 'Our Team',
                description: 'Our team is a diverse group of professionals with expertise in technology, marketing, and design. We are passionate about helping businesses succeed and are committed to delivering exceptional results for our clients and partners.'
            }
        },
        services: {
            title: 'Our Services',
            intro: 'At DigiPaxi, we offer a range of services designed to help businesses thrive in the digital age. Our expertise spans multiple domains to ensure comprehensive solutions for our clients.',
            webdev: {
                title: '1. Web Development',
                description: 'We create responsive, user-friendly websites tailored to your business needs, ensuring a seamless online presence.',
                testimonial: '"DigiPaxi transformed our online presence with a website that perfectly represents our brand and converts visitors into customers."',
                testimonialAuthor: '- Sarah Johnson, Small Business Owner'
            },
            marketing: {
                title: '2. Digital Marketing',
                description: 'Our digital marketing strategies help you reach your target audience effectively through SEO, social media, and email campaigns.',
                testimonial: '"Since implementing DigiPaxi\'s digital marketing strategy, our online traffic has increased by 200% and our conversion rate has improved significantly."',
                testimonialAuthor: '- Michael Chen, Marketing Director'
            },
            ai: {
                title: '3. AI Integration & Smart Solutions',
                description: 'We help businesses leverage artificial intelligence to automate processes, enhance customer service, and make data-driven decisions.',
                products: {
                    chatbolt: {
                        title: 'ChatBolt',
                        description: 'AI-powered chatbot for service management, HR, and customer support.',
                        features: [
                            '24/7 automated customer support',
                            'HR process automation',
                            'Service request management',
                            'Multi-language support',
                            'Analytics and reporting'
                        ]
                    },
                    chatagent: {
                        title: 'ChatAgent',
                        description: 'Intelligent website chatbot for lead generation and customer engagement.',
                        features: [
                            'Natural language processing',
                            'Lead qualification',
                            'Appointment scheduling',
                            'FAQ automation',
                            'Seamless handoff to human agents'
                        ]
                    }
                },
                testimonial: '"The AI solutions provided by DigiPaxi have revolutionized our customer service operations, reducing response times by 80% while maintaining high satisfaction rates."',
                testimonialAuthor: '- Emily Thompson, Customer Service Director'
            },
            affiliate: {
                title: '4. Recommended Digital Products',
                description: 'We\'ve carefully selected these high-quality digital products to enhance your creative and business workflows. Each product has been tested and approved by our team.',
                coolors: 'Coolors.co',
                coolorsDesc: 'A color palette generator for design and branding.',
                coolorsFeature1: 'Generate beautiful color combinations instantly',
                coolorsFeature2: 'Export palettes to various formats',
                coolorsFeature3: 'Access thousands of community palettes',
                envato: 'Envato Elements',
                envatoDesc: 'Unlimited downloads of premium digital assets.',
                envatoFeature1: 'Access millions of high-quality assets',
                envatoFeature2: 'Unlimited downloads with a single subscription',
                envatoFeature3: 'Regular updates with new content',
                canva: 'Canva Pro',
                canvaDesc: 'An online design tool for creating stunning visuals.',
                canvaFeature1: 'Access premium templates and elements',
                canvaFeature2: 'Advanced design features and tools',
                canvaFeature3: 'Brand kit and team collaboration',
                gumroad: 'Gumroad',
                gumroadDesc: 'A platform for selling digital products.',
                gumroadFeature1: 'Sell digital products with minimal setup',
                gumroadFeature2: 'Built-in audience and marketing tools',
                gumroadFeature3: 'Direct payments and analytics',
                namecheap: 'Namecheap',
                namecheapDesc: 'Affordable domains and hosting solutions.',
                namecheapFeature1: 'Competitive domain pricing',
                namecheapFeature2: 'Free WhoisGuard protection',
                namecheapFeature3: 'Reliable hosting services',
                cta: 'Try Now',
                comparison: {
                    title: 'Product Comparison',
                    feature: 'Feature',
                    price: 'Price',
                    bestFor: 'Best For',
                    value: 'Value Rating',
                    coolorsPrice: '$3.99/month',
                    envatoPrice: '$16.50/month',
                    canvaPrice: '$12.99/month',
                    coolorsBestFor: 'Color Selection',
                    envatoBestFor: 'Asset Library',
                    canvaBestFor: 'Design Creation',
                    coolorsValue: '★★★★☆',
                    envatoValue: '★★★★★',
                    canvaValue: '★★★★★'
                }
            },
            consulting: {
                title: '5. IT Consulting',
                description: 'Our IT consulting services guide you in adopting the right technologies to optimize your business operations.',
                testimonial: '"DigiPaxi\'s IT consulting helped us streamline our operations and implement the right tools for our growing business."',
                testimonialAuthor: '- David Rodriguez, Operations Manager'
            }
        },
        footer: {
            privacy: 'Privacy Policy',
            terms: 'Terms and Conditions',
            address: 'Address: 49 Avenue Lucie Aubrac, 94380, Bonneuil Sur Marne, France',
            follow: 'Follow Us',
            disclaimer: 'Disclaimer: The information provided on this website is for general informational purposes only.'
        },
        contact: {
            title: "Contact Us",
            intro: "We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.",
            form: {
                name: "Name:",
                namePlaceholder: "Your Name",
                email: "Email:",
                emailPlaceholder: "Your Email",
                subject: "Subject:",
                subjectPlaceholder: "Subject",
                message: "Message:",
                messagePlaceholder: "Your Message",
                submit: "Send Message",
                success: "Thank you! Your message has been sent successfully."
            },
            info: {
                title: "Contact Information",
                address: "Address: 49 Avenue Lucie Aubrac, 94380, Bonneuil Sur Marne, France",
                phone: "Phone: +33 7 82 39 13 11",
                email: "Email: tangongkp@yahoo.com",
                social: "Follow Us"
            }
        },
        test: {
            sections: 'Test Sections',
            header: {
                title: 'Header Test',
                description: 'Verify that the header is properly styled and responsive.'
            },
            navigation: {
                title: 'Navigation Test',
                description: 'Verify that all navigation links work correctly.'
            },
            language: {
                title: 'Language Selector Test',
                description: 'Verify that the language selector is properly styled and functional.'
            },
            footer: {
                title: 'Footer Test',
                description: 'Verify that the footer is properly styled and responsive.'
            },
            title: 'DigiPaxi Test Page'
        },
        contactPage: {
            title: 'Contact Us',
            subtitle: 'Get in touch with us for any inquiries or support.',
            form: {
                name: 'Name:',
                email: 'Email:',
                subject: 'Subject:',
                message: 'Message:',
                submit: 'Send Message'
            },
            info: {
                title: 'Contact Information',
                address: 'Address: 49 Avenue Lucie Aubrac, 94380, Bonneuil Sur Marne, France',
                social: 'Follow Us'
            }
        },
        blog: {
            title: 'DigiPaxi Blog',
            subtitle: 'Discover the latest insights, tutorials, and recommendations for digital products and tools.',
            category: {
                design: 'Design',
                development: 'Development',
                marketing: 'Marketing',
                tools: 'Tools',
                tutorials: 'Tutorials',
                reviews: 'Reviews'
            },
            post1: {
                title: 'Getting Started with Web Design',
                date: 'May 15, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Learn the fundamentals of web design and how to create beautiful, responsive websites.'
            },
            post2: {
                title: 'Digital Marketing Strategies for 2024',
                date: 'May 10, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Discover the latest digital marketing trends and strategies to grow your business.'
            },
            post3: {
                title: 'Essential Tools for Developers',
                date: 'May 5, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'A comprehensive guide to the must-have tools for modern web development.'
            },
            post4: {
                title: 'Color Theory in Web Design',
                date: 'April 28, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Understanding color psychology and how to use it effectively in your designs.'
            },
            post5: {
                title: 'SEO Best Practices',
                date: 'April 20, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Learn how to optimize your website for search engines and improve your rankings.'
            },
            post6: {
                title: 'UI/UX Design Principles',
                date: 'April 15, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Master the principles of user interface and user experience design.'
            },
            post7: {
                title: 'Content Marketing Strategies',
                date: 'May 15, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Discover effective content marketing strategies to attract and engage your target audience.'
            },
            post8: {
                title: 'Web Accessibility Guidelines',
                date: 'May 10, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Learn how to make your website accessible to all users, following WCAG guidelines.'
            },
            post9: {
                title: 'SEO Best Practices',
                date: 'May 5, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Essential SEO techniques to improve your website\'s visibility in search engines.'
            },
            post10: {
                title: 'Cloud Computing Basics',
                date: 'April 28, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'An introduction to cloud computing concepts and services for beginners.'
            },
            post11: {
                title: 'Digital Security Tips',
                date: 'April 20, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Essential security practices to protect your digital assets and personal information.'
            },
            post12: {
                title: 'E-commerce Trends 2024',
                date: 'April 15, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Explore the latest trends shaping the future of e-commerce and online retail.'
            },
            post13: {
                title: 'Content Marketing Strategies',
                date: 'May 15, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Discover effective content marketing strategies to attract and engage your target audience.'
            },
            post14: {
                title: 'Web Accessibility Guidelines',
                date: 'May 10, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Learn how to make your website accessible to all users, following WCAG guidelines.'
            },
            post15: {
                title: 'SEO Best Practices',
                date: 'May 5, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Essential SEO techniques to improve your website\'s visibility in search engines.'
            },
            post16: {
                title: 'Cloud Computing Basics',
                date: 'April 28, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'An introduction to cloud computing concepts and services for beginners.'
            },
            post17: {
                title: 'Digital Security Tips',
                date: 'April 20, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Essential security practices to protect your digital assets and personal information.'
            },
            post18: {
                title: 'E-commerce Trends 2024',
                date: 'April 15, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Explore the latest trends shaping the future of e-commerce and online retail.'
            },
            readMore: 'Read More',
            sidebar: {
                categories: 'Categories',
                featured: 'Featured Products'
            },
            pagination: {
                prev: 'Previous',
                next: 'Next',
                page: 'Page'
            }
        },
        chat: {
            welcome: "Hello! How can I help you today?",
            placeholder: "Type your message...",
            send: "Send",
            agent: {
                name: "DigiPaxi Assistant",
                status: "Online"
            }
        },
        // Client Counter Section
        counter: {
            happyClients: "Happy Clients",
            projectsCompleted: "Projects Completed",
            industryExperts: "Industry Experts",
            satisfactionRate: "Client Satisfaction %"
        },
        
        // Case Studies Section
        caseStudies: {
            title: "Case Studies",
            subtitle: "Discover how we've helped businesses achieve their digital goals",
            ecommerce: {
                title: "E-commerce Transformation",
                description: "How we helped a retail client increase their online sales by 200%",
                stats: {
                    sales: "200%",
                    salesLabel: "Sales Increase",
                    conversion: "45%",
                    conversionLabel: "Conversion Rate",
                    roi: "300%",
                    roiLabel: "ROI"
                }
            },
            marketing: {
                title: "Digital Marketing Campaign",
                description: "A comprehensive digital marketing strategy that doubled lead generation",
                stats: {
                    leads: "100%",
                    leadsLabel: "Lead Increase",
                    engagement: "85%",
                    engagementLabel: "Engagement Rate",
                    growth: "150%",
                    growthLabel: "Growth"
                }
            },
            viewCase: "View Case Study"
        },
        
        // Free Resources Section
        resources: {
            title: "Free Resources",
            subtitle: "Download our free guides and templates to help grow your business",
            marketingGuide: {
                title: "Digital Marketing Guide",
                description: "A comprehensive guide to digital marketing strategies",
                download: "Download Guide"
            },
            contentCalendar: {
                title: "Content Calendar Template",
                description: "Plan your content strategy with our customizable template",
                download: "Download Template"
            },
            websiteAudit: {
                title: "Website Audit Checklist",
                description: "Evaluate your website's performance with our detailed checklist",
                download: "Download Checklist"
            }
        },
        
        // Trust Indicators Section
        trust: {
            title: "Trusted by Industry Leaders",
            subtitle: "Join hundreds of successful businesses who trust our expertise"
        },
        certifications: {
            title: "Certifications - DigiPaxi",
            hero: {
                title: "Professional Certifications",
                subtitle: "Explore our professional certifications and technical expertise"
            },
            PMP: {
                title: "PMP® Certification",
                description: "Project Management Institute (PMI)®",
                alt: "PMP Certification Logo"
            },
            PSPO: {
                title: "PSPO I",
                description: "Professional Scrum Product Owner",
                alt: "PSPO Certification Logo"
            },
            CSM: {
                title: "CSM®",
                description: "Certified Scrum Master",
                alt: "CSM Certification Logo"
            },
            SAFe: {
                title: "SAFe® SP",
                description: "SAFe Scrum Practitioner",
                alt: "SAFe Certification Logo"
            },
            ISO27001: {
                title: "ISO 27001",
                description: "Information Security Management",
                alt: "ISO 27001 Certification Logo"
            },
            ISO9001: {
                title: "ISO 9001",
                description: "Quality Management Systems",
                alt: "ISO 9001 Certification Logo"
            },
            ISO20000: {
                title: "ISO 20000",
                description: "IT Service Management",
                alt: "ISO 20000 Certification Logo"
            },
            industry: {
                title: "Industry Standards",
                description: "Internationally recognized certifications that ensure quality and compliance"
            },
            professional: {
                title: "Professional Expertise",
                description: "Professional certifications demonstrating our expertise in project and product management"
            }
        },
        language: {
            en: "EN",
            fr: "FR"
        }
    },
    fr: {
        // Navigation
        nav: {
            home: "Accueil",
            about: "À propos",
            services: "Services",
            blog: "Blog",
            contact: "Contact",
            certifications: "Certifications",
            partners: "Partenaires",
            products: "Produits"
        },
        home: {
            title: "DigiPaxi - Solutions Numériques & Marketing d'Affiliation",
            subtitle: "Ceci est une page de test pour vérifier notre implémentation.",
            hero: {
                title: "Transformez Votre Présence Numérique",
                subtitle: "Solutions innovantes pour les entreprises modernes",
                cta: "Découvrir Nos Services",
                contact: "Contactez-nous"
            },
            intro: {
                title: "Bienvenue chez DigiPaxi",
                text: "Nous sommes spécialisés dans la transformation numérique et le marketing d'affiliation, aidant les entreprises à prospérer à l'ère numérique."
            },
            services: {
                title: "Nos Services",
                webdev: "Développement Web",
                "webdev.desc": "Sites web et applications personnalisés adaptés à vos besoins commerciaux.",
                marketing: "Marketing Digital",
                "marketing.desc": "Solutions marketing stratégiques pour augmenter votre visibilité en ligne.",
                consulting: "Conseil en Informatique",
                "consulting.desc": "Conseils d'experts sur l'adoption de technologies et la stratégie numérique.",
                learn: "En Savoir Plus"
            },
            tools: {
                title: "Outils Vedettes",
                coolors: "Le générateur de palettes de couleurs ultra rapide",
                envato: "Téléchargements illimités d'actifs numériques premium",
                canva: "Outil de design professionnel pour créer des visuels impressionnants",
                learn: "En Savoir Plus"
            },
            testimonials: {
                title: "Ce Que Disent Nos Clients",
                quote1: "DigiPaxi a complètement transformé notre présence en ligne. Leur expertise en marketing numérique nous a permis d'atteindre de nouveaux sommets.",
                author1: "Sarah Johnson, PDG",
                quote2: "Les services de développement web fournis par DigiPaxi étaient exceptionnels. Notre nouveau site web a considérablement amélioré nos taux de conversion.",
                author2: "Michael Chen, Directeur Marketing",
                quote3: "Le conseil en informatique de DigiPaxi nous a aidés à rationaliser nos opérations et à mettre en œuvre les bons outils pour notre entreprise en croissance.",
                author3: "David Rodriguez, Gestionnaire des Opérations"
            },
            newsletter: {
                title: "Restez Informé",
                text: "Abonnez-vous à notre newsletter pour les dernières informations et conseils numériques.",
                placeholder: "Entrez votre email",
                submit: "S'abonner"
            },
            chatagent: {
                title: "Discutez avec Malory",
                placeholder: "Tapez votre message...",
                send: "Envoyer",
                welcome: "Bonjour! Je suis Malory, votre assistante en solutions numériques. Je peux vous aider avec le développement web, le marketing digital, le conseil en informatique et nos outils recommandés. Comment puis-je vous aider aujourd'hui?",
                responses: {
                    services: "Nous proposons des services numériques complets incluant le développement web, le marketing digital et le conseil en informatique. Souhaitez-vous en savoir plus sur un service spécifique?",
                    webdev: "Nos services de développement web incluent des sites web personnalisés, des applications web et des solutions e-commerce. Nous garantissons des designs réactifs et conviviaux qui donnent des résultats.",
                    marketing: "Nos services de marketing digital aident les entreprises à augmenter leur visibilité en ligne grâce au référencement, au marketing sur les réseaux sociaux et à la stratégie de contenu.",
                    consulting: "Nos services de conseil en informatique guident les entreprises dans l'adoption des bonnes technologies et stratégies numériques pour la croissance.",
                    tools: "Nous recommandons plusieurs outils numériques premium dont Coolors.co pour le design, Envato Elements pour les assets, et Canva Pro pour la création visuelle.",
                    pricing: "Nos tarifs varient selon vos besoins spécifiques. Souhaitez-vous planifier une consultation pour discuter de vos besoins?",
                    contact: "Vous pouvez nous joindre à tangongkp@yahoo.com ou appeler le +33 7 82 39 13 11. Nous sommes situés au 49 Avenue Lucie Aubrac, 94380, Bonneuil Sur Marne, France.",
                    default: "Je comprends que vous êtes intéressé par nos services. Souhaitez-vous en savoir plus sur nos services de développement web, de marketing digital ou de conseil en informatique?"
                }
            }
        },
        footer: {
            quickLinks: "Liens Rapides",
            contact: "Coordonnées", 
            social: "Suivez-nous",
            rights: "Tous droits réservés."
        },
        about: {
            title: 'À propos de DigiPaxi',
            description: 'DigiPaxi est une initiative visionnaire de Paxi iTechnologies, conçue pour autonomiser les entreprises et les particuliers grâce à des solutions numériques innovantes et des stratégies de marketing d\'affiliation. Notre mission est de combler le fossé entre la technologie et la croissance des entreprises en offrant des outils, des ressources et une expertise qui favorisent le succès à l\'ère numérique.',
            vision: {
                title: 'Notre Vision',
                text: 'Nous envisageons un monde où les entreprises de toutes tailles peuvent exploiter la puissance des outils numériques pour atteindre leurs objectifs, rationaliser leurs opérations et créer des connexions significatives avec leurs audiences. DigiPaxi vise à être un partenaire de confiance dans ce parcours, fournissant des solutions à la fois efficaces et accessibles.'
            },
            mission: {
                title: 'Notre Mission',
                text: 'Notre mission est double :'
            },
            affiliate: {
                title: 'Notre Initiative de Marketing d\'Affiliation',
                description: 'Dans le cadre de notre engagement envers l\'innovation, DigiPaxi a lancé un programme de marketing d\'affiliation qui présente des produits numériques haut de gamme tels que :',
                coolors: 'Coolors.co',
                envato: 'Envato Elements',
                canva: 'Canva Pro',
                gumroad: 'Gumroad',
                namecheap: 'Namecheap',
                goal: 'Grâce à cette initiative, nous visons à générer un revenu passif tout en apportant de la valeur à notre audience en recommandant des outils que nous faisons confiance et utilisons nous-mêmes.'
            },
            team: {
                title: 'Notre Équipe',
                description: 'Notre équipe est un groupe diversifié de professionnels ayant une expertise en technologie, marketing et design. Nous sommes passionnés par l\'aide aux entreprises à réussir et nous nous engageons à fournir des résultats exceptionnels à nos clients et partenaires.'
            }
        },
        services: {
            title: 'Nos Services',
            intro: 'Chez DigiPaxi, nous proposons une gamme de services conçus pour aider les entreprises à prospérer à l\'ère numérique. Notre expertise couvre plusieurs domaines pour assurer des solutions complètes à nos clients.',
            webdev: {
                title: '1. Développement Web',
                description: 'Nous créons des sites web réactifs et conviviaux adaptés à vos besoins commerciaux, garantissant une présence en ligne fluide.',
                testimonial: '"DigiPaxi a transformé notre présence en ligne avec un site web qui représente parfaitement notre marque et convertit les visiteurs en clients."',
                testimonialAuthor: '- Sarah Johnson, Propriétaire de Petite Entreprise'
            },
            marketing: {
                title: '2. Marketing Digital',
                description: 'Nos stratégies de marketing digital vous aident à atteindre efficacement votre public cible grâce au référencement, aux réseaux sociaux et aux campagnes par email.',
                testimonial: '"Depuis l\'implémentation de la stratégie de marketing digital de DigiPaxi, notre trafic en ligne a augmenté de 200% et notre taux de conversion s\'est amélioré de manière significative."',
                testimonialAuthor: '- Michael Chen, Directeur Marketing'
            },
            ai: {
                title: '3. AI Integration & Smart Solutions',
                description: 'Nous aidons les entreprises à exploiter l\'intelligence artificielle pour automatiser les processus, améliorer le service client, et prendre des décisions basées sur les données.',
                products: {
                    chatbolt: {
                        title: 'ChatBolt',
                        description: 'Bot conversationnel IA pour la gestion de service, le recrutement et le support client.',
                        features: [
                            'Support client automatisé 24/7',
                            'Automatisation du processus de recrutement',
                            'Gestion des demandes de service',
                            'Support multilingue',
                            'Analyse et suivi des performances'
                        ]
                    },
                    chatagent: {
                        title: 'ChatAgent',
                        description: 'Bot conversationnel IA pour générer des prospects et engager les clients.',
                        features: [
                            'Traitement du langage naturel',
                            'Qualification des prospects',
                            'Planification des rendez-vous',
                            'Automatisation des FAQ',
                            'Transfert fluide vers les agents humains'
                        ]
                    }
                },
                testimonial: '"Les solutions IA fournies par DigiPaxi ont révolutionné nos opérations de service client, réduisant les temps de réponse de 80% tout en maintenant des taux de satisfaction élevés."',
                testimonialAuthor: '- Emily Thompson, Directeur du Service Client'
            },
            affiliate: {
                title: '4. Produits Numériques Recommandés',
                description: 'Nous avons soigneusement sélectionné ces produits numériques de haute qualité pour améliorer vos flux de travail créatifs et professionnels. Chaque produit a été testé et approuvé par notre équipe.',
                coolors: 'Coolors.co',
                coolorsDesc: 'Un générateur de palettes de couleurs pour le design et la marque.',
                coolorsFeature1: 'Générez instantanément de belles combinaisons de couleurs',
                coolorsFeature2: 'Exportez les palettes dans différents formats',
                coolorsFeature3: 'Accédez à des milliers de palettes communautaires',
                envato: 'Envato Elements',
                envatoDesc: 'Téléchargements illimités d\'actifs numériques premium.',
                envatoFeature1: 'Accédez à des millions d\'actifs de haute qualité',
                envatoFeature2: 'Téléchargements illimités avec un seul abonnement',
                envatoFeature3: 'Mises à jour régulières avec de nouveaux contenus',
                canva: 'Canva Pro',
                canvaDesc: 'Un outil de design en ligne pour créer des visuels impressionnants.',
                canvaFeature1: 'Accédez à des modèles et éléments premium',
                canvaFeature2: 'Fonctionnalités et outils de design avancés',
                canvaFeature3: 'Kit de marque et collaboration d\'équipe',
                gumroad: 'Gumroad',
                gumroadDesc: 'Une plateforme pour vendre des produits numériques.',
                gumroadFeature1: 'Vendez des produits numériques avec une configuration minimale',
                gumroadFeature2: 'Outils d\'audience et de marketing intégrés',
                gumroadFeature3: 'Paiements directs et analyses',
                namecheap: 'Namecheap',
                namecheapDesc: 'Solutions d\'hébergement et de noms de domaine abordables.',
                namecheapFeature1: 'Tarification compétitive des domaines',
                namecheapFeature2: 'Protection WhoisGuard gratuite',
                namecheapFeature3: 'Services d\'hébergement fiables',
                cta: 'Essayer Maintenant',
                comparison: {
                    title: 'Comparaison des Produits',
                    feature: 'Fonctionnalité',
                    price: 'Prix',
                    bestFor: 'Idéal Pour',
                    value: 'Note de Valeur',
                    coolorsPrice: '3,99€/mois',
                    envatoPrice: '16,50€/mois',
                    canvaPrice: '12,99€/mois',
                    coolorsBestFor: 'Sélection de Couleurs',
                    envatoBestFor: 'Bibliothèque d\'Actifs',
                    canvaBestFor: 'Création de Design',
                    coolorsValue: '★★★★☆',
                    envatoValue: '★★★★★',
                    canvaValue: '★★★★★'
                }
            },
            consulting: {
                title: '5. Conseil en Informatique',
                description: 'Nos services de conseil en informatique vous guident dans l\'adoption des bonnes technologies pour optimiser vos opérations commerciales.',
                testimonial: '"Le conseil en informatique de DigiPaxi nous a aidés à rationaliser nos opérations et à mettre en œuvre les bons outils pour notre entreprise en croissance."',
                testimonialAuthor: '- David Rodriguez, Gestionnaire des Opérations'
            }
        },
        footer: {
            privacy: 'Politique de Confidentialité',
            terms: 'Conditions Générales',
            address: 'Adresse: 49 Avenue Lucie Aubrac, 94380, Bonneuil Sur Marne, France',
            follow: 'Suivez-nous',
            disclaimer: 'Avis de non-responsabilité: Les informations fournies sur ce site web sont uniquement à des fins d\'information générale.'
        },
        contact: {
            title: "Contactez-nous",
            intro: "Nous aimerions avoir de vos nouvelles ! Veuillez remplir le formulaire ci-dessous, et nous vous répondrons dans les plus brefs délais.",
            form: {
                name: "Nom:",
                namePlaceholder: "Votre Nom",
                email: "E-mail:",
                emailPlaceholder: "Votre E-mail",
                subject: "Sujet:",
                subjectPlaceholder: "Sujet",
                message: "Message:",
                messagePlaceholder: "Votre Message",
                submit: "Envoyer le Message",
                success: "Merci ! Votre message a été envoyé avec succès."
            },
            info: {
                title: "Informations de Contact",
                address: "Adresse: 49 Avenue Lucie Aubrac, 94380, Bonneuil Sur Marne, France",
                phone: "Téléphone: +33 7 82 39 13 11",
                email: "E-mail: tangongkp@yahoo.com",
                social: "Suivez-nous"
            }
        },
        test: {
            sections: 'Sections de Test',
            header: {
                title: 'Test de l\'En-tête',
                description: 'Vérifiez que l\'en-tête est correctement stylé et réactif.'
            },
            navigation: {
                title: 'Test de Navigation',
                description: 'Vérifiez que tous les liens de navigation fonctionnent correctement.'
            },
            language: {
                title: 'Test du Sélecteur de Langue',
                description: 'Vérifiez que le sélecteur de langue est correctement stylé et fonctionnel.'
            },
            footer: {
                title: 'Test du Pied de Page',
                description: 'Vérifiez que le pied de page est correctement stylé et réactif.'
            },
            title: 'Page de Test DigiPaxi'
        },
        contactPage: {
            title: 'Contactez-nous',
            subtitle: 'Contactez-nous pour toute demande ou assistance.',
            form: {
                name: 'Nom:',
                email: 'Email:',
                subject: 'Sujet:',
                message: 'Message:',
                submit: 'Envoyer le Message'
            },
            info: {
                title: 'Informations de Contact',
                address: 'Adresse: 49 Avenue Lucie Aubrac, 94380, Bonneuil Sur Marne, France',
                social: 'Suivez-nous'
            }
        },
        blog: {
            title: 'Blog DigiPaxi',
            subtitle: 'Découvrez les derniers conseils, tutoriels et recommandations pour les produits et outils numériques.',
            category: {
                design: 'Design',
                development: 'Développement',
                marketing: 'Marketing',
                tools: 'Outils',
                tutorials: 'Tutoriels',
                reviews: 'Avis'
            },
            post1: {
                title: 'Débuter avec le Design Web',
                date: '15 Mai 2025',
                author: 'Par l\'équipe DigiPaxi',
                excerpt: 'Apprenez les fondamentaux du design web et comment créer de beaux sites web responsifs.'
            },
            post2: {
                title: 'Stratégies de Marketing Digital pour 2024',
                date: '10 Mai 2025',
                author: 'Par l\'équipe DigiPaxi',
                excerpt: 'Découvrez les dernières tendances et stratégies de marketing digital pour développer votre entreprise.'
            },
            post3: {
                title: 'Outils Essentiels pour les Développeurs',
                date: '5 Mai 2025',
                author: 'Par l\'équipe DigiPaxi',
                excerpt: 'Un guide complet des outils indispensables pour le développement web moderne.'
            },
            post4: {
                title: 'La Théorie des Couleurs dans le Design Web',
                date: '28 Avril 2025',
                author: 'Par l\'équipe DigiPaxi',
                excerpt: 'Comprendre la psychologie des couleurs et comment l\'utiliser efficacement dans vos designs.'
            },
            post5: {
                title: 'Meilleures Pratiques SEO',
                date: '20 Avril 2025',
                author: 'Par l\'équipe DigiPaxi',
                excerpt: 'Apprenez à optimiser votre site web pour les moteurs de recherche et améliorer votre classement.'
            },
            post6: {
                title: 'Principes de Design UI/UX',
                date: '15 Avril 2025',
                author: 'Par l\'équipe DigiPaxi',
                excerpt: 'Maîtrisez les principes du design d\'interface utilisateur et d\'expérience utilisateur.'
            },
            post7: {
                title: 'Stratégies de Marketing de Contenu',
                date: 'May 15, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Discover effective content marketing strategies to attract and engage your target audience.'
            },
            post8: {
                title: 'Directives d\'Accessibilité Web',
                date: 'May 10, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Learn how to make your website accessible to all users, following WCAG guidelines.'
            },
            post9: {
                title: 'SEO Best Practices',
                date: 'May 5, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Essential SEO techniques to improve your website\'s visibility in search engines.'
            },
            post10: {
                title: 'Bases du Cloud Computing',
                date: 'April 28, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'An introduction to cloud computing concepts and services for beginners.'
            },
            post11: {
                title: 'Digital Security Tips',
                date: 'April 20, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Essential security practices to protect your digital assets and personal information.'
            },
            post12: {
                title: 'E-commerce Trends 2024',
                date: 'April 15, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Explore the latest trends shaping the future of e-commerce and online retail.'
            },
            post13: {
                title: 'Stratégies de Marketing de Contenu',
                date: 'May 15, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Discover effective content marketing strategies to attract and engage your target audience.'
            },
            post14: {
                title: 'Directives d\'Accessibilité Web',
                date: 'May 10, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Learn how to make your website accessible to all users, following WCAG guidelines.'
            },
            post15: {
                title: 'SEO Best Practices',
                date: 'May 5, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Essential SEO techniques to improve your website\'s visibility in search engines.'
            },
            post16: {
                title: 'Bases du Cloud Computing',
                date: 'April 28, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'An introduction to cloud computing concepts and services for beginners.'
            },
            post17: {
                title: 'Digital Security Tips',
                date: 'April 20, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Essential security practices to protect your digital assets and personal information.'
            },
            post18: {
                title: 'E-commerce Trends 2024',
                date: 'April 15, 2025',
                author: 'By DigiPaxi Team',
                excerpt: 'Explore the latest trends shaping the future of e-commerce and online retail.'
            },
            readMore: 'Lire Plus',
            sidebar: {
                categories: 'Catégories',
                featured: 'Produits Vedettes'
            },
            pagination: {
                prev: 'Précédent',
                next: 'Suivant',
                page: 'Page'
            }
        },
        chat: {
            welcome: "Bonjour! Comment puis-je vous aider aujourd'hui?",
            placeholder: "Tapez votre message...",
            send: "Envoyer",
            agent: {
                name: "Assistant DigiPaxi",
                status: "En ligne"
            }
        },
        // Client Counter Section
        counter: {
            happyClients: "Clients Satisfaits",
            projectsCompleted: "Projets Terminés",
            industryExperts: "Experts du Secteur",
            satisfactionRate: "Taux de Satisfaction %"
        },
        
        // Case Studies Section
        caseStudies: {
            title: "Études de Cas",
            subtitle: "Découvrez comment nous aidons les entreprises à atteindre leurs objectifs numériques",
            ecommerce: {
                title: "Transformation E-commerce",
                description: "Comment nous avons aidé un client retail à augmenter ses ventes en ligne de 200%",
                stats: {
                    sales: "200%",
                    salesLabel: "Augmentation des Ventes",
                    conversion: "45%",
                    conversionLabel: "Taux de Conversion",
                    roi: "300%",
                    roiLabel: "ROI"
                }
            },
            marketing: {
                title: "Campagne Marketing Digital",
                description: "Une stratégie marketing digital complète qui a doublé la génération de leads",
                stats: {
                    leads: "100%",
                    leadsLabel: "Augmentation des Leads",
                    engagement: "85%",
                    engagementLabel: "Taux d'Engagement",
                    growth: "150%",
                    growthLabel: "Croissance"
                }
            },
            viewCase: "Voir l'Étude de Cas"
        },
        
        // Free Resources Section
        resources: {
            title: "Ressources Gratuites",
            subtitle: "Téléchargez nos guides et modèles gratuits pour développer votre entreprise",
            marketingGuide: {
                title: "Guide du Marketing Digital",
                description: "Un guide complet des stratégies de marketing digital",
                download: "Télécharger le Guide"
            },
            contentCalendar: {
                title: "Modèle de Calendrier Éditorial",
                description: "Planifiez votre stratégie de contenu avec notre modèle personnalisable",
                download: "Télécharger le Modèle"
            },
            websiteAudit: {
                title: "Liste de Vérification d'Audit de Site Web",
                description: "Évaluez la performance de votre site web avec notre liste détaillée",
                download: "Télécharger la Liste"
            }
        },
        
        // Trust Indicators Section
        trust: {
            title: "Approuvé par les Leaders du Secteur",
            subtitle: "Rejoignez des centaines d'entreprises prospères qui font confiance à notre expertise"
        },
        certifications: {
            title: "Certifications Professionnelles - DigiPaxi",
            hero: {
                title: "Certifications Professionnelles",
                subtitle: "Découvrez nos certifications professionnelles et notre expertise technique"
            },
            PMP: {
                title: "Certification PMP®",
                description: "Project Management Institute (PMI)®",
                alt: "Logo Certification PMP"
            },
            PSPO: {
                title: "PSPO I",
                description: "Professional Scrum Product Owner",
                alt: "Logo Certification PSPO"
            },
            CSM: {
                title: "CSM®",
                description: "Certified Scrum Master",
                alt: "Logo Certification CSM"
            },
            SAFe: {
                title: "SAFe® SP",
                description: "SAFe Scrum Practitioner",
                alt: "Logo Certification SAFe"
            },
            ISO27001: {
                title: "ISO 27001",
                description: "Gestion de la Sécurité de l'Information",
                alt: "Logo Certification ISO 27001"
            },
            ISO9001: {
                title: "ISO 9001",
                description: "Systèmes de Management de la Qualité",
                alt: "Logo Certification ISO 9001"
            },
            ISO20000: {
                title: "ISO 20000",
                description: "Gestion des Services Informatiques",
                alt: "Logo Certification ISO 20000"
            },
            industry: {
                title: "Normes Industrielles",
                description: "Certifications internationalement reconnues garantissant la qualité et la conformité"
            },
            professional: {
                title: "Expertise Professionnelle",
                description: "Certifications professionnelles démontrant notre expertise en gestion de projet et de produit"
            }
        },
        language: {
            en: "EN",
            fr: "FR"
        }
    }
};

// Get the user's preferred language from localStorage or default to 'en'
let currentLang = localStorage.getItem('language') || 'en';

// Function to update active language button
function updateActiveButton() {
    document.querySelectorAll('.lang-switch').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

// Function to translate the page
function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.dataset.i18n.split('.');
        let value = translations[currentLang];
        
        // Traverse the translations object using the keys
        for (const key of keys) {
            if (value && value[key]) {
                value = value[key];
            } else {
                console.warn(`Translation missing for key: ${element.dataset.i18n}`);
                return;
            }
        }
        
        if (element.tagName === 'INPUT' && element.type === 'email') {
            element.placeholder = value;
        } else {
            element.textContent = value;
        }
    });

    // Update title if it has a translation
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.dataset.i18n) {
        const keys = titleElement.dataset.i18n.split('.');
        let value = translations[currentLang];
        for (const key of keys) {
            value = value[key];
        }
        titleElement.textContent = value;
    }
}

// Add click event listeners to language buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-switch').forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.dataset.lang;
            localStorage.setItem('language', currentLang);
            updateActiveButton();
            translatePage();
        });
    });

    // Initial translation
    updateActiveButton();
    translatePage();
}); 