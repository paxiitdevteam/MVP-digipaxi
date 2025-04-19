class ComponentLoader {
    static translations = {
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.services': 'Services',
            'nav.blog': 'Blog',
            'nav.certifications': 'Certifications',
            'nav.partners': 'Partners',
            'nav.products': 'Products',
            'nav.contact': 'Contact',
            'language.en': 'EN',
            'language.fr': 'FR',
            
            // Home Page
            'home.title': 'DigiPaxi - Digital Solutions & Affiliate Marketing',
            'home.hero.title': 'Transform Your Digital Presence',
            'home.hero.subtitle': 'Innovative solutions for modern businesses',
            'home.hero.cta': 'Explore Our Services',
            'home.hero.contact': 'Contact Us',
            'home.counter.clients': 'Happy Clients',
            'home.counter.projects': 'Projects Completed',
            'home.counter.experts': 'Industry Experts',
            'home.counter.satisfaction': 'Client Satisfaction %',
            'home.intro.title': 'Welcome to DigiPaxi',
            'home.intro.text': 'We specialize in digital transformation and affiliate marketing, helping businesses thrive in the digital age.',
            'home.services.title': 'Our Services',
            'home.services.webdev': 'Web Development',
            'home.services.webdev.desc': 'Custom websites and web applications tailored to your business needs.',
            'home.services.marketing': 'Digital Marketing',
            'home.services.marketing.desc': 'Strategic marketing solutions to increase your online visibility.',
            'home.services.ai': 'AI Integration',
            'home.services.ai.desc': 'Smart solutions powered by artificial intelligence for business automation.',
            'home.services.consulting': 'IT Consulting',
            'home.services.consulting.desc': 'Expert guidance on technology adoption and digital strategy.',
            'home.services.learn': 'Learn More',
            'home.casestudies.title': 'Success Stories',
            'home.casestudies.subtitle': 'See how we\'ve helped businesses achieve their digital goals',
            'home.casestudies.category1': 'E-commerce',
            'home.casestudies.title1': 'E-commerce Transformation',
            'home.casestudies.desc1': 'How we helped a traditional retailer increase online sales by 250% in 6 months.',
            'home.casestudies.stat1': 'Sales Increase',
            'home.casestudies.stat2': 'Months',
            'home.casestudies.category2': 'Marketing',
            'home.casestudies.title2': 'Digital Marketing Campaign',
            'home.casestudies.desc2': 'A comprehensive digital strategy that increased brand awareness by 300%.',
            'home.casestudies.stat3': 'Brand Awareness',
            'home.casestudies.stat4': 'ROI',
            'home.casestudies.read': 'Read Case Study',
            'home.tools.title': 'Featured Tools',
            'home.tools.coolors': 'The super fast color palette generator',
            'home.tools.envato': 'Unlimited downloads of premium digital assets',
            'home.tools.canva': 'Professional design tool for creating stunning visuals',
            'home.tools.learn': 'Learn More',
            'home.resources.title': 'Free Digital Resources',
            'home.resources.subtitle': 'Download our free guides and templates to kickstart your digital journey',
            'home.resources.guide1': 'Digital Marketing Guide',

            // Services Page
            'services.title': 'Our Services - DigiPaxi',
            'services.intro': 'At DigiPaxi, we offer a range of services designed to help businesses thrive in the digital age.',
            'services.webdev.title': '1. Web Development',
            'services.webdev.description': 'We create responsive, user-friendly websites tailored to your business needs.',
            'services.webdev.testimonial': 'DigiPaxi transformed our online presence with a website that perfectly represents our brand.',
            'services.webdev.testimonialAuthor': '- Sarah Johnson, Small Business Owner',
            'services.marketing.title': '2. Digital Marketing',
            'services.marketing.description': 'Our digital marketing strategies help you reach your target audience effectively.',
            'services.marketing.testimonial': 'Since implementing DigiPaxi\'s strategy, our online traffic has increased by 200%.',
            'services.marketing.testimonialAuthor': '- Michael Chen, Marketing Director',
            'services.consulting.title': '3. IT Consulting',
            'services.consulting.description': 'Our IT consulting services guide you in adopting the right technologies.',
            'services.consulting.testimonial': 'DigiPaxi\'s IT consulting helped us streamline our operations.',
            'services.consulting.testimonialAuthor': '- David Rodriguez, Operations Manager',

            // Contact Page
            'contact.title': 'Contact Us - DigiPaxi',
            'contact.subtitle': 'Get in touch with us for any inquiries or support.',
            'contact.form.name': 'Name:',
            'contact.form.email': 'Email:',
            'contact.form.subject': 'Subject:',
            'contact.form.message': 'Message:',
            'contact.form.submit': 'Send Message',
            'contact.info.title': 'Contact Information',
            'contact.social.title': 'Follow Us',

            // About Page
            'about.title': 'Excellence in Digital Innovation',
            'about.description': 'DigiPaxi is a premier digital transformation consultancy, combining cutting-edge technology with strategic expertise to drive business growth and innovation.',
            'about.expertise.title': 'Our Expertise',
            'about.expertise.description': 'With a proven track record of success, DigiPaxi specializes in delivering comprehensive digital solutions that transform businesses and drive sustainable growth.',
            'about.expertise.web': 'Advanced Web Development & Design',
            'about.expertise.marketing': 'Strategic Digital Marketing',
            'about.expertise.consulting': 'Enterprise IT Consulting',
            'about.expertise.ecommerce': 'E-commerce Solutions',
            'about.expertise.analytics': 'Data Analytics & Insights',
            'about.stats.projects': 'Projects Completed',
            'about.stats.satisfaction': 'Client Satisfaction',
            'about.stats.support': 'Support Available',
            'about.vision.title': 'Vision & Mission',
            'about.vision.text': 'We envision a digital landscape where businesses of all sizes can harness the power of technology to achieve unprecedented growth and success.',
            'about.values.innovation.title': 'Innovation',
            'about.values.innovation.desc': 'Pioneering digital solutions',
            'about.values.excellence.title': 'Excellence',
            'about.values.excellence.desc': 'Uncompromising quality',
            'about.values.integrity.title': 'Integrity',
            'about.values.integrity.desc': 'Trust & transparency',
            'about.approach.title': 'Our Approach',
            'about.approach.description': 'At DigiPaxi, we believe in a collaborative, results-driven approach that puts our clients\' success at the forefront.',
            'about.approach.strategy': 'Strategic Planning & Analysis',
            'about.approach.custom': 'Customized Solution Development',
            'about.approach.agile': 'Agile Implementation',
            'about.approach.monitoring': 'Continuous Monitoring & Optimization',
            'about.approach.support': 'Comprehensive Support & Training',
            'about.partnership.title': 'Strategic Partnerships',
            'about.partnership.description': 'We\'ve cultivated partnerships with industry leaders to provide our clients with access to premium tools and resources.',
            'about.partnership.coolors': 'Coolors.co - Professional Color Solutions',
            'about.partnership.envato': 'Envato Elements - Digital Asset Library',
            'about.partnership.canva': 'Canva Pro - Design Excellence',
            'about.partnership.gumroad': 'Gumroad - E-commerce Solutions',
            'about.partnership.namecheap': 'Namecheap - Domain & Hosting',

            // Blog Page
            'blog.title': 'Our Blog',
            'blog.subtitle': 'Insights, tutorials, and updates on digital solutions',
            'blog.post1.title': 'Getting Started with Digital Marketing',
            'blog.post1.excerpt': 'Learn the fundamentals of digital marketing and how to create a successful strategy for your business.',
            'blog.post2.title': 'Web Design Trends for 2024',
            'blog.post2.excerpt': 'Discover the latest web design trends that will dominate the digital landscape in 2024.',
            'blog.post3.title': 'Affiliate Marketing Strategies',
            'blog.post3.excerpt': 'Explore effective affiliate marketing strategies to boost your online revenue.',
            'blog.post4.title': 'SEO Best Practices',
            'blog.post4.excerpt': 'Learn the essential SEO techniques to improve your website\'s visibility in search engines.',
            'blog.post5.title': 'Digital Tools for Productivity',
            'blog.post5.excerpt': 'Discover the best digital tools to enhance your productivity and streamline your workflow.',
            'blog.post6.title': 'Content Marketing Guide',
            'blog.post6.excerpt': 'A comprehensive guide to creating and implementing an effective content marketing strategy.',
            'blog.readMore': 'Read More',
            'blog.categories.title': 'Categories',
            'blog.categories.design': 'Design',
            'blog.categories.development': 'Development',
            'blog.categories.marketing': 'Marketing',
            'blog.categories.tools': 'Tools',
            'blog.categories.tutorials': 'Tutorials',
            'blog.categories.reviews': 'Reviews',
            'blog.featured.title': 'Featured Products',
            'blog.featured.coolors': 'The super fast color palette generator',
            'blog.featured.learn': 'Learn More',
            'blog.pagination.prev': 'Previous',
            'blog.pagination.next': 'Next',

            // Certifications Page
            'certifications.title': 'Certifications & Standards - DigiPaxi',
            'certifications.main_title': 'Our Certifications & Standards',
            'certifications.certifications_title': 'Professional Certifications',
            'certifications.tools_title': 'Tools & Platforms',
            'certifications.compliance_title': 'Compliance & Frameworks',
            'certifications.description': 'Explore our professional certifications, tools, and compliance frameworks that demonstrate our commitment to excellence.',
            'certifications.filter.all': 'All',
            'certifications.filter.project': 'Project Management',
            'certifications.filter.security': 'Security',
            'certifications.filter.quality': 'Quality',
            'certifications.filter.tools': 'Tools',
            'certifications.pmp.title': 'Project Management Professional (PMP®)',
            'certifications.pmp.description': 'Global standard for project management excellence',
            'certifications.pspo.title': 'Professional Scrum Product Owner (PSPO I)',
            'certifications.pspo.description': 'Expert in agile product ownership and value delivery',
            'certifications.csm.title': 'Certified Scrum Master (CSM®)',
            'certifications.csm.description': 'Leading agile teams with Scrum framework expertise',
            'certifications.safe.title': 'SAFe® Scrum Practitioner',
            'certifications.safe.description': 'Scaled agile framework implementation specialist',
            'certifications.iso27001.title': 'ISO 27001',
            'certifications.iso27001.description': 'Information security management systems',
            'certifications.iso9001.title': 'ISO 9001',
            'certifications.iso9001.description': 'Quality management systems certification',
            'certifications.iso20000.title': 'ISO 20000',
            'certifications.iso20000.description': 'IT service management excellence',
            'certifications.agile.title': 'Agile Development',
            'certifications.agile.description': 'Modern software development methodologies',
            'certifications.github.title': 'GitHub',
            'certifications.github.description': 'Version control and collaboration platform',
            'certifications.vscode.title': 'Visual Studio Code',
            'certifications.vscode.description': 'Advanced development environment',
            'certifications.synology.title': 'Synology',
            'certifications.synology.description': 'Enterprise storage and infrastructure',
            'certifications.paypal.title': 'PayPal',
            'certifications.paypal.description': 'Secure payment processing integration',

            // Affiliate Products Page
            'affiliate.title': 'Affiliate Products - DigiPaxi',
            'affiliate.main_title': 'Featured Affiliate Products',
            'affiliate.description': 'Discover our curated selection of premium digital products and tools to enhance your workflow and boost productivity.',
            'affiliate.product1.title': 'Coolors - Color Palette Generator',
            'affiliate.product1.description': 'The super fast color palette generator for designers and developers. Create beautiful color schemes in seconds.',
            'affiliate.product1.button': 'Get Started',
            'affiliate.product2.title': 'Envato Elements',
            'affiliate.product2.description': 'Unlimited downloads of premium digital assets including templates, graphics, and more for your creative projects.',
            'affiliate.product2.button': 'Explore',
            'affiliate.product3.title': 'Canva Pro',
            'affiliate.product3.description': 'Professional design tool for creating stunning visuals, presentations, and marketing materials with ease.',
            'affiliate.product3.button': 'Design Now',
            'affiliate.product4.title': 'Gumroad',
            'affiliate.product4.description': 'Sell your digital products directly to your audience with this easy-to-use e-commerce platform for creators.',
            'affiliate.product4.button': 'Start Selling',
            'affiliate.product5.title': 'Namecheap',
            'affiliate.product5.description': 'Affordable domain registration and web hosting services with excellent customer support and security features.',
            'affiliate.product5.button': 'Get Domain',
            'affiliate.product6.title': 'Notion',
            'affiliate.product6.description': 'All-in-one workspace for notes, tasks, wikis, and databases. Organize your work and life in one place.',
            'affiliate.product6.button': 'Try Notion',

            // Partners Page
            'partners.title': 'Our Partners & Clients - DigiPaxi',
            'partners.main_title': 'Trusted By Industry Leaders',
            'partners.description': 'We are proud to collaborate with leading organizations across various industries, delivering innovative digital solutions and maintaining long-lasting partnerships.',
        },
        fr: {
            // Navigation
            'nav.home': 'Accueil',
            'nav.about': 'À propos',
            'nav.services': 'Services',
            'nav.blog': 'Blog',
            'nav.certifications': 'Certifications',
            'nav.partners': 'Partenaires',
            'nav.products': 'Produits',
            'nav.contact': 'Contact',
            'language.en': 'AN',
            'language.fr': 'FR',
            
            // Home Page
            'home.title': 'DigiPaxi - Solutions Numériques & Marketing d\'Affiliation',
            'home.hero.title': 'Transformez Votre Présence Numérique',
            'home.hero.subtitle': 'Solutions innovantes pour les entreprises modernes',
            'home.hero.cta': 'Découvrir Nos Services',
            'home.hero.contact': 'Contactez-nous',
            'home.counter.clients': 'Clients Satisfaits',
            'home.counter.projects': 'Projets Réalisés',
            'home.counter.experts': 'Experts du Secteur',
            'home.counter.satisfaction': 'Satisfaction Client %',
            'home.intro.title': 'Bienvenue chez DigiPaxi',
            'home.intro.text': 'Nous sommes spécialisés dans la transformation numérique et le marketing d\'affiliation.',
            'home.services.title': 'Nos Services',
            'home.services.webdev': 'Développement Web',
            'home.services.webdev.desc': 'Sites web et applications sur mesure adaptés à vos besoins.',
            'home.services.marketing': 'Marketing Digital',
            'home.services.marketing.desc': 'Solutions marketing stratégiques pour augmenter votre visibilité en ligne.',
            'home.services.ai': 'Intégration IA',
            'home.services.ai.desc': 'Solutions intelligentes alimentées par l\'IA pour l\'automatisation.',
            'home.services.consulting': 'Conseil IT',
            'home.services.consulting.desc': 'Conseils d\'experts en adoption technologique et stratégie numérique.',
            'home.services.learn': 'En Savoir Plus',
            'home.casestudies.title': 'Histoires de Réussite',
            'home.casestudies.subtitle': 'Découvrez comment nous aidons les entreprises à atteindre leurs objectifs',
            'home.casestudies.category1': 'E-commerce',
            'home.casestudies.title1': 'Transformation E-commerce',
            'home.casestudies.desc1': 'Comment nous avons aidé un détaillant à augmenter ses ventes de 250% en 6 mois.',
            'home.casestudies.stat1': 'Augmentation des Ventes',
            'home.casestudies.stat2': 'Mois',
            'home.casestudies.category2': 'Marketing',
            'home.casestudies.title2': 'Campagne Marketing Digital',
            'home.casestudies.desc2': 'Une stratégie digitale complète qui a augmenté la notoriété de 300%.',
            'home.casestudies.stat3': 'Notoriété de la Marque',
            'home.casestudies.stat4': 'Retour sur Investissement',
            'home.casestudies.read': 'Lire l\'Étude de Cas',
            'home.tools.title': 'Outils Recommandés',
            'home.tools.coolors': 'Le générateur de palettes de couleurs ultra rapide',
            'home.tools.envato': 'Téléchargements illimités de ressources numériques premium',
            'home.tools.canva': 'Outil de design professionnel pour créer des visuels impressionnants',
            'home.tools.learn': 'En Savoir Plus',
            'home.resources.title': 'Ressources Numériques Gratuites',
            'home.resources.subtitle': 'Téléchargez nos guides et modèles gratuits',
            'home.resources.guide1': 'Guide du Marketing Digital',

            // Services Page
            'services.title': 'Nos Services - DigiPaxi',
            'services.intro': 'Chez DigiPaxi, nous proposons une gamme de services conçus pour aider les entreprises.',
            'services.webdev.title': '1. Développement Web',
            'services.webdev.description': 'Nous créons des sites web réactifs et conviviaux adaptés à vos besoins.',
            'services.webdev.testimonial': 'DigiPaxi a transformé notre présence en ligne avec un site qui représente parfaitement notre marque.',
            'services.webdev.testimonialAuthor': '- Sarah Johnson, Chef d\'Entreprise',
            'services.marketing.title': '2. Marketing Digital',
            'services.marketing.description': 'Nos stratégies de marketing digital vous aident à atteindre votre audience.',
            'services.marketing.testimonial': 'Depuis la mise en place de la stratégie DigiPaxi, notre trafic a augmenté de 200%.',
            'services.marketing.testimonialAuthor': '- Michael Chen, Directeur Marketing',
            'services.consulting.title': '3. Conseil IT',
            'services.consulting.description': 'Nos services de conseil IT vous guident dans l\'adoption des technologies.',
            'services.consulting.testimonial': 'Le conseil IT de DigiPaxi nous a aidés à optimiser nos opérations.',
            'services.consulting.testimonialAuthor': '- David Rodriguez, Responsable des Opérations',

            // Contact Page
            'contact.title': 'Contactez-nous - DigiPaxi',
            'contact.subtitle': 'Contactez-nous pour toute demande ou assistance.',
            'contact.form.name': 'Nom:',
            'contact.form.email': 'Email:',
            'contact.form.subject': 'Sujet:',
            'contact.form.message': 'Message:',
            'contact.form.submit': 'Envoyer le Message',
            'contact.info.title': 'Informations de Contact',
            'contact.social.title': 'Suivez-nous',

            // About Page
            'about.title': 'Excellence en Innovation Numérique',
            'about.description': 'DigiPaxi est un cabinet de conseil en transformation numérique de premier plan, combinant technologie de pointe et expertise stratégique.',
            'about.expertise.title': 'Notre Expertise',
            'about.expertise.description': 'Avec un bilan éprouvé de succès, DigiPaxi est spécialisé dans la fourniture de solutions numériques complètes.',
            'about.expertise.web': 'Développement Web Avancé & Design',
            'about.expertise.marketing': 'Marketing Digital Stratégique',
            'about.expertise.consulting': 'Conseil IT Entreprise',
            'about.expertise.ecommerce': 'Solutions E-commerce',
            'about.expertise.analytics': 'Analyse de Données & Insights',
            'about.stats.projects': 'Projets Réalisés',
            'about.stats.satisfaction': 'Satisfaction Client',
            'about.stats.support': 'Support Disponible',
            'about.vision.title': 'Vision & Mission',
            'about.vision.text': 'Nous envisageons un paysage numérique où les entreprises de toutes tailles peuvent exploiter la puissance de la technologie.',
            'about.values.innovation.title': 'Innovation',
            'about.values.innovation.desc': 'Solutions numériques pionnières',
            'about.values.excellence.title': 'Excellence',
            'about.values.excellence.desc': 'Qualité sans compromis',
            'about.values.integrity.title': 'Intégrité',
            'about.values.integrity.desc': 'Confiance & transparence',
            'about.approach.title': 'Notre Approche',
            'about.approach.description': 'Chez DigiPaxi, nous croyons en une approche collaborative axée sur les résultats.',
            'about.approach.strategy': 'Planification & Analyse Stratégique',
            'about.approach.custom': 'Développement de Solutions Personnalisées',
            'about.approach.agile': 'Implémentation Agile',
            'about.approach.monitoring': 'Surveillance & Optimisation Continue',
            'about.approach.support': 'Support & Formation Complets',
            'about.partnership.title': 'Partenariats Stratégiques',
            'about.partnership.description': 'Nous avons développé des partenariats avec des leaders de l\'industrie.',
            'about.partnership.coolors': 'Coolors.co - Solutions Professionnelles de Couleurs',
            'about.partnership.envato': 'Envato Elements - Bibliothèque d\'Assets Numériques',
            'about.partnership.canva': 'Canva Pro - Excellence en Design',
            'about.partnership.gumroad': 'Gumroad - Solutions E-commerce',
            'about.partnership.namecheap': 'Namecheap - Domaine & Hébergement',

            // Blog Page
            'blog.title': 'Notre Blog',
            'blog.subtitle': 'Insights, tutoriels et actualités sur les solutions numériques',
            'blog.post1.title': 'Débuter avec le Marketing Digital',
            'blog.post1.excerpt': 'Apprenez les fondamentaux du marketing digital et comment créer une stratégie efficace.',
            'blog.post2.title': 'Tendances Web Design 2024',
            'blog.post2.excerpt': 'Découvrez les dernières tendances du web design qui domineront en 2024.',
            'blog.post3.title': 'Stratégies de Marketing d\'Affiliation',
            'blog.post3.excerpt': 'Explorez des stratégies efficaces pour augmenter vos revenus en ligne.',
            'blog.post4.title': 'Meilleures Pratiques SEO',
            'blog.post4.excerpt': 'Apprenez les techniques SEO essentielles pour améliorer la visibilité de votre site.',
            'blog.post5.title': 'Outils Numériques pour la Productivité',
            'blog.post5.excerpt': 'Découvrez les meilleurs outils pour améliorer votre productivité.',
            'blog.post6.title': 'Guide du Marketing de Contenu',
            'blog.post6.excerpt': 'Un guide complet pour créer et mettre en œuvre une stratégie de contenu efficace.',
            'blog.readMore': 'Lire Plus',
            'blog.categories.title': 'Catégories',
            'blog.categories.design': 'Design',
            'blog.categories.development': 'Développement',
            'blog.categories.marketing': 'Marketing',
            'blog.categories.tools': 'Outils',
            'blog.categories.tutorials': 'Tutoriels',
            'blog.categories.reviews': 'Avis',
            'blog.featured.title': 'Produits Vedettes',
            'blog.featured.coolors': 'Le générateur de palettes de couleurs ultra rapide',
            'blog.featured.learn': 'En Savoir Plus',
            'blog.pagination.prev': 'Précédent',
            'blog.pagination.next': 'Suivant',

            // Certifications Page
            'certifications.title': 'Certifications & Standards - PAXIIT',
            'certifications.main_title': 'Nos Certifications & Standards',
            'certifications.description': 'Découvrez nos certifications professionnelles, outils et cadres de conformité qui démontrent notre engagement envers l\'excellence.',
            'certifications.filter.all': 'Tout',
            'certifications.filter.project': 'Gestion de Projet',
            'certifications.filter.security': 'Sécurité',
            'certifications.filter.quality': 'Qualité',
            'certifications.filter.tools': 'Outils',
            'certifications.pmp.title': 'Project Management Professional (PMP®)',
            'certifications.pmp.description': 'Standard mondial pour l\'excellence en gestion de projet',
            'certifications.pspo.title': 'Professional Scrum Product Owner (PSPO I)',
            'certifications.pspo.description': 'Expert en propriété de produit agile et livraison de valeur',
            'certifications.csm.title': 'Certified Scrum Master (CSM®)',
            'certifications.csm.description': 'Direction d\'équipes agiles avec expertise du framework Scrum',
            'certifications.safe.title': 'SAFe® Scrum Practitioner',
            'certifications.safe.description': 'Spécialiste de l\'implémentation du framework agile à l\'échelle',
            'certifications.iso27001.title': 'ISO 27001',
            'certifications.iso27001.description': 'Systèmes de management de la sécurité de l\'information',
            'certifications.iso9001.title': 'ISO 9001',
            'certifications.iso9001.description': 'Certification des systèmes de management de la qualité',
            'certifications.iso20000.title': 'ISO 20000',
            'certifications.iso20000.description': 'Excellence en gestion des services informatiques',
            'certifications.agile.title': 'Développement Agile',
            'certifications.agile.description': 'Méthodologies modernes de développement logiciel',
            'certifications.github.title': 'GitHub',
            'certifications.github.description': 'Plateforme de contrôle de version et de collaboration',
            'certifications.vscode.title': 'Visual Studio Code',
            'certifications.vscode.description': 'Environnement de développement avancé',
            'certifications.synology.title': 'Synology',
            'certifications.synology.description': 'Infrastructure et stockage d\'entreprise',
            'certifications.paypal.title': 'PayPal',
            'certifications.paypal.description': 'Intégration de traitement de paiement sécurisé',

            // Affiliate Products Page
            'affiliate.title': 'Produits d\'Affiliation - DigiPaxi',
            'affiliate.main_title': 'Produits d\'Affiliation Vedettes',
            'affiliate.description': 'Découvrez notre sélection de produits numériques premium et d\'outils pour améliorer votre flux de travail et augmenter votre productivité.',
            'affiliate.product1.title': 'Coolors - Générateur de Palettes de Couleurs',
            'affiliate.product1.description': 'Le générateur de palettes de couleurs ultra rapide pour les designers et développeurs. Créez de beaux schémas de couleurs en quelques secondes.',
            'affiliate.product1.button': 'Commencer',
            'affiliate.product2.title': 'Envato Elements',
            'affiliate.product2.description': 'Téléchargements illimités de ressources numériques premium, y compris des modèles, des graphiques et plus encore pour vos projets créatifs.',
            'affiliate.product2.button': 'Explorer',
            'affiliate.product3.title': 'Canva Pro',
            'affiliate.product3.description': 'Outil de design professionnel pour créer des visuels, présentations et supports marketing impressionnants avec facilité.',
            'affiliate.product3.button': 'Designer Maintenant',
            'affiliate.product4.title': 'Gumroad',
            'affiliate.product4.description': 'Vendez vos produits numériques directement à votre audience avec cette plateforme e-commerce facile à utiliser pour les créateurs.',
            'affiliate.product4.button': 'Commencer à Vendre',
            'affiliate.product5.title': 'Namecheap',
            'affiliate.product5.description': 'Services d\'enregistrement de domaine et d\'hébergement web abordables avec un excellent support client et des fonctionnalités de sécurité.',
            'affiliate.product5.button': 'Obtenir un Domaine',
            'affiliate.product6.title': 'Notion',
            'affiliate.product6.description': 'Espace de travail tout-en-un pour les notes, tâches, wikis et bases de données. Organisez votre travail et votre vie en un seul endroit.',
            'affiliate.product6.button': 'Essayer Notion',

            // Partners Page
            'partners.title': 'Nos Partenaires & Clients - DigiPaxi',
            'partners.main_title': 'Fait Confiance par les Leaders de l\'Industrie',
            'partners.description': 'Nous sommes fiers de collaborer avec des organisations leaders dans divers secteurs, offrant des solutions numériques innovantes et maintenant des partenariats durables.',
        }
    };

    static async init() {
        await this.loadComponents();
        this.initializeLanguage();
        this.initializeHeader();
        this.initializeFooter();
    }

    static async loadComponents() {
        const components = {
            header: '/components/header.html',
            footer: '/components/footer.html',
            'chat-agent': '/components/chat-agent.html'
        };

        for (const [id, path] of Object.entries(components)) {
            try {
                const element = document.getElementById(`${id}-placeholder`);
                if (!element) {
                    console.error(`Placeholder for ${id} not found`);
                    continue;
                }
                const response = await fetch(path);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const html = await response.text();
                element.innerHTML = html;
            } catch (error) {
                console.error(`Failed to load ${id}:`, error);
            }
        }
    }

    static initializeLanguage() {
        const savedLang = localStorage.getItem('selectedLanguage') || 'en';
        this.updateLanguage(savedLang);
    }

    static updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[lang] && this.translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = this.translations[lang][key];
                } else {
                    element.textContent = this.translations[lang][key];
                }
            }
        });
    }

    static initializeHeader() {
        // Set active nav link
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath.split('/').pop() || 
                (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });

        // Initialize language switcher
        const langButtons = document.querySelectorAll('.lang-switch');
        const savedLang = localStorage.getItem('selectedLanguage') || 'en';
        
        // Set initial active state
        langButtons.forEach(btn => {
            if (btn.dataset.lang === savedLang) {
                btn.classList.add('active');
            }
            
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                localStorage.setItem('selectedLanguage', lang);
                
                // Update active state
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Update translations
                this.updateLanguage(lang);
                
                // Dispatch event for other components
                const event = new CustomEvent('languageChange', { 
                    detail: { language: lang } 
                });
                document.dispatchEvent(event);
            });
        });

        // Add scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        });
    }

    static initializeFooter() {
        const footer = document.querySelector('footer');
        if (!footer) return;

        // Initialize social media links
        const socialLinks = footer.querySelectorAll('.social-circle');
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const url = link.getAttribute('href');
                if (url) window.open(url, '_blank');
            });
        });

        // Initialize footer navigation
        const footerNav = footer.querySelector('.footer-nav');
        if (footerNav) {
            const currentPath = window.location.pathname;
            footerNav.querySelectorAll('a').forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                }
            });
        }
    }

    static initializeCertifications() {
        const grid = document.getElementById('certificationsGrid');
        if (!grid) return;

        const certifications = [
            {
                name: 'certifications.pmp.title',
                description: 'certifications.pmp.description',
                category: 'project',
                image: 'assets/certifications/pmp.svg'
            },
            {
                name: 'certifications.pspo.title',
                description: 'certifications.pspo.description',
                category: 'project',
                image: 'assets/certifications/pspo.svg'
            },
            {
                name: 'certifications.csm.title',
                description: 'certifications.csm.description',
                category: 'project',
                image: 'assets/certifications/csm.svg'
            },
            {
                name: 'certifications.safe.title',
                description: 'certifications.safe.description',
                category: 'project',
                image: 'assets/certifications/safe.svg'
            },
            {
                name: 'certifications.iso27001.title',
                description: 'certifications.iso27001.description',
                category: 'security',
                image: 'assets/certifications/iso27001.svg'
            },
            {
                name: 'certifications.iso9001.title',
                description: 'certifications.iso9001.description',
                category: 'quality',
                image: 'assets/certifications/iso9001.svg'
            },
            {
                name: 'certifications.iso20000.title',
                description: 'certifications.iso20000.description',
                category: 'quality',
                image: 'assets/certifications/iso20000.svg'
            },
            {
                name: 'certifications.agile.title',
                description: 'certifications.agile.description',
                category: 'tools',
                image: 'assets/certifications/agile.svg'
            },
            {
                name: 'certifications.github.title',
                description: 'certifications.github.description',
                category: 'tools',
                image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
            },
            {
                name: 'certifications.vscode.title',
                description: 'certifications.vscode.description',
                category: 'tools',
                image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg'
            },
            {
                name: 'certifications.synology.title',
                description: 'certifications.synology.description',
                category: 'tools',
                image: 'https://global.download.synology.com/download/Brand/Logo/Synology_Logo/Synology_Logo_1200.png'
            },
            {
                name: 'certifications.paypal.title',
                description: 'certifications.paypal.description',
                category: 'tools',
                image: 'https://www.paypalobjects.com/webstatic/icon/pp258.png'
            }
        ];

        certifications.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'certification-card';
            card.setAttribute('data-category', cert.category);
            
            card.innerHTML = `
                <div class="certification-logo">
                    <img src="${cert.image}" alt="${this.translations[this.currentLang][cert.name]}" loading="lazy">
                </div>
                <h3 class="certification-name" data-i18n="${cert.name}">${this.translations[this.currentLang][cert.name]}</h3>
                <p class="certification-description" data-i18n="${cert.description}">${this.translations[this.currentLang][cert.description]}</p>
            `;
            
            grid.appendChild(card);
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    ComponentLoader.init();
});

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter-number');
    const animationDuration = 2000; // 2 seconds
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / (animationDuration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.round(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start animation when counter is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}
