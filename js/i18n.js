// ==========================================
// SISTEMA DE INTERNACIONALIZACIÓN (EMBEBIDO)
// ==========================================

const translations = {
    es: {
        nav: {
            caminos: "Caminos",
            agenda: "Agenda",
            galeria: "Galería",
            tienda: "Tienda",
            bio: "Bio",
            contacto: "Contacto",
            patreon: "Patreon →"
        },
        hero: {
            title: "KITSUNE",
            subtitle: "Disciplina · Movimiento · Comunidad"
        },
        about: {
            title: "Sobre",
            text: "Instructora de Shibari. Fotógrafa. Creo espacios de exploración corporal, seguridad, arte y espiritualidad a través de las cuerdas.",
            link: "Conocé más sobre mi trabajo →"
        },
        cards: {
            clases: { title: "Clases", desc: "Shibari desde los fundamentos. Contenido exclusivo, comunidad Discord, cine-debate, mentorías." },
            galeria: { title: "Galería", desc: "Sesiones privadas, performances, producciones fotográficas. Trabajo artístico y documental." },
            tienda: { title: "Tienda", desc: "Cuerdas de Shibari tratadas, kits para principiantes, accesorios y materiales seleccionados." }
        },
        caminos: {
            title: "Caminos de aprendizaje",
            subtitle: "Si la Vida es una escuela por qué no aprenderlo todo desde la psicomagia hasta la ciencia, desde el inconsciente a la manifestación. Acá rompemos los límites de lo conocido para que recuperes la memoria antigua. Solta las expectativas, flui con la intuición de tu corazón y preparate.",
            samurai: {
                title: "El camino del samurai",
                fundamentals: ["disciplina", "técnica", "precisión"],
                desc: "Perfecto para quien tiene ganas de sumarse a una disciplina que te permite jugar a ser el samurai que siempre quisiste mientras aprendes una habilidad manual nueva, compartis con tu pareja y aprendes historia y leyendas míticas!",
                cta: "¿A qué estás esperando?",
                button: "Más info"
            },
            serpiente: {
                title: "El camino de la serpiente",
                fundamentals: ["interpretación", "educación somática", "biomecánica"],
                desc: "Perfecto para quien viene de una rama de las artes y ve una danza, una pintura o una experiencia en lo que pasa entre mis cuerdas. Herramientas adaptadas para entender la técnica y disciplina desde un enfoque más flexible.",
                cta: "¿A qué estás esperando?",
                button: "Más info"
            },
            suspension: {
                title: "Yo suspendo sola!",
                fundamentals: ["propiocepción", "equilibrio", "fuerza"],
                desc: "Taller para rope bottoms donde enseñamos propiocepción, puntos de apoyo y equilibrio en el aire y piso. Mejora tu tono muscular y tu presencia en la sesión. Nos hace sentirnos las Diosas que somos al vernos tener avances en nuestro conocimiento corporal.",
                cta: "¿A qué estás esperando?",
                button: "Más info"
            }
        },
        agenda: {
            meta: { title: "Agenda | KITSUNE" },
            title: "Agenda",
            proximos: "Próximos eventos",
            pasados: "Eventos pasados",
            meses: { feb: "FEB", mar: "MAR", abr: "ABR" },
            ubicacion: { ba: "Buenos Aires", cordoba: "Córdoba", rosario: "Rosario" },
            estados: {
                agotado: "AGOTADO",
                confirmar: "A confirmar",
                finalizado: "✓ Finalizado",
                evento_finalizado: "Evento finalizado",
                grabado: "✓ Grabado"
            },
            botones: {
                inscribirse: "Inscribirse →",
                reservar: "Reservar entrada →",
                grabacion: "Ver grabación →"
            },
            eventos: [
                { titulo: "Taller: \"Ya sé hacer nudos! ...Y ahora qué? Biomecánica y Cadena cinética\"", desc: "Worktienda dirigido a conocer sobre la biomecánica del cuerpo, qué es la cadena cinética y cómo integrarlos al shibari." },
                { titulo: "Taller: El camino del samurai", desc: "Iniciación a la disciplina, técnica y precisión del Shibari tradicional." },
                { titulo: "Yo suspendo sola! - Edición especial", desc: "Taller intensivo para rope bottoms. Propiocepción, equilibrio y fuerza." },
                { titulo: "Performance: Rituales de primavera", desc: "Presentación en vivo con música en vivo. Espacio limitado." }
            ],
            pasados: [
                { titulo: "El camino de la serpiente", desc: "Taller de interpretación y educación somática. Completo." },
                { titulo: "Cine-debate: Shibari en el cine oriental", desc: "Sesión de Patreon presencial. Proyección y debate." }
            ]
        },
        bio: {
            meta: { title: "Bio | KITSUNE" },
            hero: { title: "KITSUNE", subtitle: "Trayectoria · Filosofía · Práctica" },
            quien: { title: "Quién soy", text: "Instructora de Shibari, fotógrafa y creadora de espacios. Mi trabajo habita en la intersección entre la disciplina técnica japonesa y la exploración contemporánea del cuerpo, el vínculo y la imagen." },
            trayectoria: {
                title: "Trayectoria",
                "2022": "Inicio de formación en Shibari tradicional.",
                "2023": "Apertura de espacio propio. Inicio dictado de talleres y clases regulares.",
                "2024": "Comienzo de especialización en Seikubaku, biomecánica y neurociencia aplicada a la práctica del Shibari.",
                "2025_1": "Certificación de Sekibaku por Shibari Dojo con Señor Interior. Bogotá, Colombia.",
                "2025_2": "Publicación del libro \"El cuerpo como mapa: la cosmovisión andina explicando el shibari como herramienta de autoconocimiento\".",
                "2026": "Lanzamiento de KITSUNE como plataforma integrada: Marca AylluRyu, Enseñanza, Producción y Comunidad."
            },
            filosofia: {
                title: "Filosofía de trabajo",
                seguridad: { title: "Seguridad", text: "Toda práctica parte del consentimiento informado, la comunicación clara y el conocimiento técnico riguroso del cuerpo." },
                presencia: { title: "Presencia", text: "La atadura como meditación. El tiempo suspendido en la tensión de la cuerda como espacio de encuentro." },
                comunidad: { title: "Comunidad", text: "El aprendizaje no es individual. Crear redes de apoyo, intercambio y cuidado mutuo entre practicantes." }
            },
            formacion: {
                title: "Formación y maestros",
                "0": "Estudio intensivo con Señor Interior, Bogotá, 2025",
                "1": "Profesorado en disciplinas acrobáticas, Buenos Aires, 2025",
                "2": "Certificación en primeros auxilios y seguridad en prácticas de riesgo, 2022",
                "3": "Formación en fotografía, edición y diseño gráfico, Da Vinci, 2019"
            },
            actualidad: {
                title: "Actualidad",
                "1": "Actualmente coordino clases regulares tanto individuales como grupales, mentorías personalizadas, talleres y producciones fotográficas. A través de Patreon comparto material didáctico, organizo cine-debates y construyo una comunidad de aprendizaje continuo.",
                "2": "También ofrezco sesiones privadas de Shibari como experiencia, documentación fotográfica de performances y producción de contenido audiovisual."
            },
            volver: "← Volver al inicio"
        },
        contacto: {
            meta: { title: "Contacto | KITSUNE" },
            page: { title: "Contacto" },
            title: "Conectá",
            follow: "Seguime",
            intro: "¿Tenés preguntas? ¿Querés coordinar una sesión privada o un taller para tu espacio?",
            nota: { "1": "Respuesta en 24-48hs. Para consultas sobre clases, revisá primero la sección", "2": "Caminos" }
        },
        galeria: {
    sesiones: [
        { 
            titulo: "Kitsession #1 - Bizarrope", 
            desc: "A veces (siempre) el shibari nos ofrece la posibilidad de jugar y en lo lúdico podemos dejarnos interpretar lo que sentimos de manera genuina. Es sólo cuestión de estar presentes." 
        },
        { 
            titulo: "Kitsession #2 - Sol y Aire", 
            desc: "El aire libre, la luz del sol y la primavera pueden ser el contexto ideal para experimentar la conexión con lo sagrado de la naturaleza y entre nosotras, dejando que las cuerdas sean canal." 
        }
    ]
},
        tienda: {
            meta: { title: "Tienda | KITSUNE" },
            title: "Tienda",
            subtitle: "Todo lo que necesitás para tu práctica y mucho más",
            ver_publicacion: "Ver publicación →",
            productos: [
                { nombre: "Cuerda de Yute", desc: "Cuerda de fibras naturales de 8 metro de longitud x 6mm de espesor. Ideal tanto para atar en piso como suspensiones. Envíos dentro de Argentina", precio: "$30.000 ARS" },
                { nombre: "Libro \"El cuerpo como mapa\" por Kitsune, Ed. 2025 (Español)", desc: "La cosmovisión andina explicando al shibari como herramienta de autoconocimiento. Envíos a todo el mundo", precio: "$19.99 USD" }
            ]
        },
        footer: { copyright: "© 2026 KITSUNE. Todos los derechos reservados." }
    },
    
    en: {
        nav: {
            caminos: "Paths",
            agenda: "Schedule",
            galeria: "Gallery",
            tienda: "Shop",
            bio: "Bio",
            contacto: "Contact",
            patreon: "Patreon →"
        },
        hero: {
            title: "KITSUNE",
            subtitle: "Discipline · Movement · Community"
        },
        about: {
            title: "About",
            text: "Shibari instructor. Photographer. I create spaces for body exploration, safety, and art.",
            link: "Learn more about my work →"
        },
        cards: {
            clases: { title: "Classes", desc: "Shibari from the fundamentals. Exclusive content, Discord community, film debates, mentorships." },
            galeria: { title: "Gallery", desc: "Private sessions, performances, photographic productions. Artistic and documentary work." },
            tienda: { title: "Shop", desc: "Treated Shibari ropes, beginner kits, accessories and selected materials." }
        },
        caminos: {
            title: "Learning Paths",
            subtitle: "If Life is a school, why not learn everything from psychomagic to science, from the unconscious to manifestation. Here we break the limits of the known so you can recover ancient memory. Drop expectations, flow with your heart's intuition, and get ready.",
            samurai: {
                title: "The Way of the Samurai",
                fundamentals: ["discipline", "technique", "precision"],
                desc: "Perfect for those who want to join a discipline that allows you to play at being the samurai you always wanted to be while learning a new manual skill, sharing with your partner, and learning history and mythical legends!",
                cta: "What are you waiting for?",
                button: "More info"
            },
            serpiente: {
                title: "The Way of the Serpent",
                fundamentals: ["interpretation", "somatic education", "biomechanics"],
                desc: "Perfect for those coming from the arts who see dance, painting, or an experience in what happens between my ropes. Tools adapted to understand technique and discipline from a more flexible approach.",
                cta: "What are you waiting for?",
                button: "More info"
            },
            suspension: {
                title: "I Suspend Alone!",
                fundamentals: ["proprioception", "balance", "strength"],
                desc: "Workshop for rope bottoms where we teach proprioception, support points, and balance in air and floor. Improve your muscle tone and presence in session. It makes us feel like the Goddesses we are as we see advances in our body knowledge.",
                cta: "What are you waiting for?",
                button: "More info"
            }
        },
        agenda: {
            meta: { title: "Schedule | KITSUNE" },
            title: "Schedule",
            proximos: "Upcoming events",
            pasados: "Past events",
            meses: { feb: "FEB", mar: "MAR", abr: "APR" },
            ubicacion: { ba: "Buenos Aires", cordoba: "Córdoba", rosario: "Rosario" },
            estados: {
                agotado: "SOLD OUT",
                confirmar: "To be confirmed",
                finalizado: "✓ Finished",
                evento_finalizado: "Event finished",
                grabado: "✓ Recorded"
            },
            botones: {
                inscribirse: "Register →",
                reservar: "Reserve ticket →",
                grabacion: "Watch recording →"
            },
            eventos: [
                { titulo: "Workshop: \"I already know knots! ...Now what? Biomechanics and Kinetic Chain\"", desc: "Workshop aimed at learning about body biomechanics, what the kinetic chain is, and how to integrate them into shibari." },
                { titulo: "Workshop: The Way of the Samurai", desc: "Introduction to the discipline, technique, and precision of traditional Shibari." },
                { titulo: "I Suspend Alone! - Special Edition", desc: "Intensive workshop for rope bottoms. Proprioception, balance, and strength." },
                { titulo: "Performance: Spring Rituals", desc: "Live performance with live music. Limited space." }
            ],
            pasados: [
                { titulo: "The Way of the Serpent", desc: "Workshop on interpretation and somatic education. Completed." },
                { titulo: "Film-debate: Shibari in Oriental Cinema", desc: "In-person Patreon session. Screening and debate." }
            ]
        },
        bio: {
            meta: { title: "Bio | KITSUNE" },
            hero: { title: "KITSUNE", subtitle: "Trajectory · Philosophy · Practice" },
            quien: { title: "Who I am", text: "Shibari instructor, photographer, and creator of spaces. My work inhabits the intersection between Japanese technical discipline and contemporary exploration of the body, bond, and image." },
            trayectoria: {
                title: "Trajectory",
                "2022": "Beginning of training in traditional Shibari.",
                "2023": "Opening of own space. Start of teaching workshops and regular classes.",
                "2024": "Beginning of training in Seikubaku, biomechanics and neuroscience applied to the discipline",
                "2025_1": "Certification in Sekibaku by Shibari Dojo with Señor Interior. Bogotá, Colombia.",
                "2025_2": "Publication of the book \"The Body as Map: Andean cosmovision explaining shibari as a tool for self-knowledge\".",
                "2026": "Launch of KITSUNE as an integrated platform: Teaching, Production, and Community."
            },
            filosofia: {
                title: "Work Philosophy",
                seguridad: { title: "Safety", text: "Every practice starts from informed consent, clear communication, and rigorous technical knowledge of the body." },
                presencia: { title: "Presence", text: "The tie as meditation. Time suspended in the tension of the rope as a space of encounter." },
                comunidad: { title: "Community", text: "Learning is not individual. Creating networks of support, exchange, and mutual care among practitioners." }
            },
            formacion: {
                title: "Training and Teachers",
                "0": "Intensive study with Señor Interior, Bogotá, 2025",
                "1": "Teaching degree in acrobatic disciplines, Buenos Aires, 2025",
                "2": "Certification in first aid and safety in risk practices, 2022",
                "3": "Training in photography, editing, and graphic design, Da Vinci, 2019"
            },
            actualidad: {
                title: "Present",
                "1": "I currently coordinate regular classes both individual and group, personalized mentorships, workshops, and photographic productions. Through Patreon I share teaching material, organize film-debates, and build a continuous learning community.",
                "2": "I also offer private Shibari sessions as an experience, photographic documentation of performances, and audiovisual content production."
            },
            volver: "← Back to home"
        },
        contacto: {
            meta: { title: "Contact | KITSUNE" },
            page: { title: "Contact" },
            title: "Connect",
            follow: "Follow",
            intro: "Do you have questions? Want to coordinate a private session or a workshop for your space?",
            nota: { "1": "Response in 24-48hs. For questions about classes, please check the", "2": "Paths" }
        },
        galeria: {
            meta: { title: "Gallery | KITSUNE" },
            title: "Gallery",
            subtitle: "Sessions, performances, and productions",
            ver_sesion: "View full session →",
            modal: { titulo: "Session title", desc: "Full description of the session.", patreon: "View full session" },
            sesiones: [{ titulo: "Session #1 - Sekibaku 101", desc: "Brief description of the session, the concept, participants, and context. Can be 2-3 lines." }]
        },
        tienda: {
            meta: { title: "Shop | KITSUNE" },
            title: "Shop",
            subtitle: "Everything you need for your practice and more",
            ver_publicacion: "View listing →",
            productos: [
                { nombre: "Jute Rope", desc: "Natural fiber rope 8 meters long x 6mm thick. Ideal for both floor tying and suspensions. Shipping within Argentina", precio: "$30.000 ARS" },
                { nombre: "Book \"The Body as Map\" by Kitsune, Ed. 2025 (Spanish)", desc: "Andean cosmovision explaining shibari as a tool for self-knowledge. Worldwide shipping", precio: "$19.99 USD" }
            ]
        },
        footer: { copyright: "© 2026 KITSUNE. All rights reserved." }
    },

    pt: {
        nav: {
            caminos: "Caminhos",
            agenda: "Agenda",
            galeria: "Galeria",
            tienda: "Loja",
            bio: "Bio",
            contacto: "Contato",
            patreon: "Patreon →"
        },
        hero: {
            title: "KITSUNE",
            subtitle: "Disciplina · Movimento · Comunidade"
        },
        about: {
            title: "Sobre",
            text: "Instrutora de Shibari. Fotógrafa. Crio espaços de exploração corporal, segurança e arte.",
            link: "Conheça mais sobre meu trabalho →"
        },
        cards: {
            clases: { title: "Aulas", desc: "Shibari desde os fundamentos. Conteúdo exclusivo, comunidade Discord, cine-debates, mentorias." },
            galeria: { title: "Galeria", desc: "Sessões privadas, performances, produções fotográficas. Trabalho artístico e documental." },
            tienda: { title: "Loja", desc: "Cordas de Shibari tratadas, kits para iniciantes, acessórios e materiais selecionados." }
        },
        caminos: {
            title: "Caminhos de Aprendizagem",
            subtitle: "Se a Vida é uma escola, por que não aprender tudo desde a psicomagia até a ciência, do inconsciente à manifestação. Aqui quebramos os limites do conhecido para que você recupere a memória antiga. Solte as expectativas, flua com a intuição do seu coração e prepare-se.",
            samurai: {
                title: "O Caminho do Samurai",
                fundamentals: ["disciplina", "técnica", "precisão"],
                desc: "Perfeito para quem quer se juntar a uma disciplina que permite brincar de ser o samurai que sempre quis ser enquanto aprende uma nova habilidade manual, compartilha com seu parceiro e aprende história e lendas míticas!",
                cta: "O que você está esperando?",
                button: "Mais info"
            },
            serpiente: {
                title: "O Caminho da Serpente",
                fundamentals: ["interpretação", "educação somática", "biomecânica"],
                desc: "Perfeito para quem vem das artes e vê dança, pintura ou uma experiência no que acontece entre minhas cordas. Ferramentas adaptadas para entender técnica e disciplina de uma abordagem mais flexível.",
                cta: "O que você está esperando?",
                button: "Mais info"
            },
            suspension: {
                title: "Eu Suspendo Sozinha!",
                fundamentals: ["propriocepção", "equilíbrio", "força"],
                desc: "Oficina para rope bottoms onde ensinamos propriocepção, pontos de apoio e equilíbrio no ar e no chão. Melhore seu tônus muscular e presença na sessão. Nos faz sentir como as Deusas que somos ao vermos avanços em nosso conhecimento corporal.",
                cta: "O que você está esperando?",
                button: "Mais info"
            }
        },
        agenda: {
            meta: { title: "Agenda | KITSUNE" },
            title: "Agenda",
            proximos: "Próximos eventos",
            pasados: "Eventos passados",
            meses: { feb: "FEV", mar: "MAR", abr: "ABR" },
            ubicacion: { ba: "Buenos Aires", cordoba: "Córdoba", rosario: "Rosario" },
            estados: {
                agotado: "ESGOTADO",
                confirmar: "A confirmar",
                finalizado: "✓ Finalizado",
                evento_finalizado: "Evento finalizado",
                grabado: "✓ Gravado"
            },
            botones: {
                inscribirse: "Inscrever-se →",
                reservar: "Reservar ingresso →",
                grabacion: "Ver gravação →"
            },
            eventos: [
                { titulo: "Oficina: \"Já sei fazer nós! ...E agora? Biomecânica e Cadeia Cinética\"", desc: "Oficina destinada a conhecer a biomecânica do corpo, o que é a cadeia cinética e como integrá-los ao shibari." },
                { titulo: "Oficina: O Caminho do Samurai", desc: "Iniciação à disciplina, técnica e precisão do Shibari tradicional." },
                { titulo: "Eu Suspendo Sozinha! - Edição especial", desc: "Oficina intensiva para rope bottoms. Propriocepção, equilíbrio e força." },
                { titulo: "Performance: Rituais de Primavera", desc: "Apresentação ao vivo com música ao vivo. Espaço limitado." }
            ],
            pasados: [
                { titulo: "O Caminho da Serpente", desc: "Oficina de interpretação e educação somática. Completo." },
                { titulo: "Cine-debate: Shibari no Cinema Oriental", desc: "Sessão presencial do Patreon. Projeção e debate." }
            ]
        },
        bio: {
            meta: { title: "Bio | KITSUNE" },
            hero: { title: "KITSUNE", subtitle: "Trajetória · Filosofia · Prática" },
            quien: { title: "Quem sou", text: "Instrutora de Shibari, fotógrafa e criadora de espaços. Meu trabalho habita a interseção entre a disciplina técnica japonesa e a exploração contemporânea do corpo, do vínculo e da imagem." },
            trayectoria: {
                title: "Trajetória",
                "2022": "Início da formação em Shibari tradicional.",
                "2023": "Abertura de espaço próprio. Início do ensino de oficinas e aulas regulares.",
                "2024": "Início da formação em Seikubaku",
                "2025_1": "Certificação em Sekibaku pelo Shibari Dojo com Señor Interior. Bogotá, Colômbia.",
                "2025_2": "Publicação do livro \"O Corpo como Mapa: A cosmovisão andina explicando o shibari como ferramenta de autoconhecimento\".",
                "2026": "Lançamento da KITSUNE como plataforma integrada: Ensino, Produção e Comunidade."
            },
            filosofia: {
                title: "Filosofia de Trabalho",
                seguridad: { title: "Segurança", text: "Toda prática parte do consentimento informado, da comunicação clara e do conhecimento técnico rigoroso do corpo." },
                presencia: { title: "Presença", text: "A atadura como meditação. O tempo suspenso na tensão da corda como espaço de encontro." },
                comunidad: { title: "Comunidade", text: "A aprendizagem não é individual. Criar redes de apoio, intercâmbio e cuidado mútuo entre praticantes." }
            },
            formacion: {
                title: "Formação e Mestres",
                "0": "Estudo intensivo com Señor Interior, Bogotá, 2025",
                "1": "Licenciatura em disciplinas acrobáticas, Buenos Aires, 2025",
                "2": "Certificação em primeiros socorros e segurança em práticas de risco, 2022",
                "3": "Formação em fotografia, edição e design gráfico, Da Vinci, 2019"
            },
            actualidad: {
                title: "Atualidade",
                "1": "Atualmente coordeno aulas regulares tanto individuais quanto em grupo, mentorias personalizadas, oficinas e produções fotográficas. Através do Patreon compartilho material didático, organizo cine-debates e construo uma comunidade de aprendizado contínuo.",
                "2": "Também ofereço sessões privadas de Shibari como experiência, documentação fotográfica de performances e produção de conteúdo audiovisual."
            },
            volver: "← Voltar ao início"
        },
        contacto: {
            meta: { title: "Contato | KITSUNE" },
            page: { title: "Contato" },
            title: "Conecte",
            follow: "Siga",
            intro: "Tem perguntas? Quer coordenar uma sessão privada ou uma oficina para seu espaço?",
            nota: { "1": "Resposta em 24-48hs. Para perguntas sobre aulas, por favor verifique os", "2": "Caminhos" }
        },
        galeria: {
            meta: { title: "Galeria | KITSUNE" },
            title: "Galeria",
            subtitle: "Sessões, performances e produções",
            ver_sesion: "Ver sessão completa →",
            modal: { titulo: "Título da sessão", desc: "Descrição completa da sessão.", patreon: "Ver sessão completa" },
            sesiones: [{ titulo: "Sessão #1 - Sekibaku 101", desc: "Descrição breve da sessão, o conceito, os participantes e o contexto. Pode ser de 2-3 linhas." }]
        },
        tienda: {
            meta: { title: "Loja | KITSUNE" },
            title: "Loja",
            subtitle: "Tudo que você precisa para sua prática e muito mais",
            ver_publicacion: "Ver anúncio →",
            productos: [
                { nombre: "Corda de Juta", desc: "Corda de fibras naturais de 8 metros de comprimento x 6mm de espessura. Ideal tanto para amarração no chão quanto suspensões. Envios dentro da Argentina", precio: "$30.000 ARS" },
                { nombre: "Livro \"O Corpo como Mapa\" por Kitsune, Ed. 2025 (Espanhol)", desc: "A cosmovisão andina explicando o shibari como ferramenta de autoconhecimento. Envios para todo o mundo", precio: "$19.99 USD" }
            ]
        },
        footer: { copyright: "© 2026 KITSUNE. Todos os direitos reservados." }
    },

    ja: {
        nav: {
            caminos: "道",
            agenda: "予定",
            galeria: "ギャラリー",
            tienda: "店",
            bio: "経歴",
            contacto: "連絡",
            patreon: "Patreon →"
        },
        hero: {
            title: "KITSUNE",
            subtitle: "規律 · 動き · 共同体"
        },
        about: {
            title: "について",
            text: "縛りの指導者。写真家。身体の探求、安全性、芸術の空間を創造します。",
            link: "作品についてもっと知る →"
        },
        cards: {
            clases: { title: "クラス", desc: "縛りの基礎から。独占コンテンツ、Discordコミュニティ、映画ディベート、メンタリング。" },
            galeria: { title: "ギャラリー", desc: "プライベートセッション、パフォーマンス、写真制作。芸術的かつ記録的な作品。" },
            tienda: { title: "店", desc: "処理された縛りの縄、初心者キット、アクセサリー、厳選された材料。" }
        },
        caminos: {
            title: "学びの道",
            subtitle: "人生が学校なら、サイコマジックから科学まで、無意識から顕現まで、すべてを学ばない理由は何でしょうか。ここでは、既知の限界を破り、古い記憶を取り戻します。期待を手放し、心の直感に従って流れ、準備をしてください。",
            samurai: {
                title: "サムライの道",
                fundamentals: ["規律", "技術", "精密"],
                desc: "新しい手技を学びながら、常に憧れていた侍になるふりをでき、パートナーと共有し、歴史と神話的な伝説を学べる規律に参加したい人に最適です！",
                cta: "何を待っていますか？",
                button: "詳細"
            },
            serpiente: {
                title: "蛇の道",
                fundamentals: ["解釈", "身体教育", "生体力学"],
                desc: "私の縄の間で何が起こるかにダンス、絵画、または経験を見る芸術から来る人に最適。より柔軟なアプローチから技術と規律を理解するための適応ツール。",
                cta: "何を待っていますか？",
                button: "詳細"
            },
            suspension: {
                title: "私は一人で浮かぶ！",
                fundamentals: ["固有受容", "バランス", "力"],
                desc: "ロープボトム向けのワークショップで、固有受容、支点、空中および床でのバランスを教えます。筋緊張とセッションでの存在感を向上させます。身体知識の進歩を見て、私たちが女神であることを実感させてくれます。",
                cta: "何を待っていますか？",
                button: "詳細"
            }
        },
        agenda: {
            meta: { title: "予定 | KITSUNE" },
            title: "予定",
            proximos: "今後のイベント",
            pasados: "過去のイベント",
            meses: { feb: "2月", mar: "3月", abr: "4月" },
            ubicacion: { ba: "ブエノスアイレス", cordoba: "コルドバ", rosario: "ロサリオ" },
            estados: {
                agotado: "売り切れ",
                confirmar: "確認待ち",
                finalizado: "✓ 終了",
                evento_finalizado: "イベント終了",
                grabado: "✓ 録画あり"
            },
            botones: {
                inscribirse: "登録する →",
                reservar: "チケット予約 →",
                grabacion: "録画を見る →"
            },
            eventos: [
                { titulo: "ワークショップ：「結び方は知っている！…で、次は？生体力学と運動連鎖」", desc: "身体の生体力学、運動連鎖とは何か、そしてそれを縛りにどう統合するかを学ぶためのワークショップ。" },
                { titulo: "ワークショップ：サムライの道", desc: "伝統的な縛りの規律、技術、精密さへの入門。" },
                { titulo: "私は一人で浮かぶ！ - 特別版", desc: "ロープボトム向けの集中ワークショップ。固有受容、バランス、力。" },
                { titulo: "パフォーマンス：春の儀式", desc: "生演奏付きのライブパフォーマンス。限定スペース。" }
            ],
            pasados: [
                { titulo: "蛇の道", desc: "解釈と身体教育のワークショップ。完了。" },
                { titulo: "映画ディベート：東洋映画における縛り", desc: "対面型Patreonセッション。上映とディベート。" }
            ]
        },
        bio: {
            meta: { title: "経歴 | KITSUNE" },
            hero: { title: "KITSUNE", subtitle: "軌跡 · 哲学 · 実践" },
            quien: { title: "私は誰", text: "縛りの指導者、写真家、空間の創造者。私の仕事は、日本の技術的規律と身体、絆、イメージの現代的探求との交差点にあります。" },
            trayectoria: {
                title: "軌跡",
                "2022": "伝統的な縛りのトレーニングを開始。",
                "2023": "独自のスペースを開設。ワークショップと定期クラスの指導を開始。",
                "2024": "矢神流の正縛のトレーニングを開始。",
                "2025_1": "矢神流縛り道場による正縛の認定をセニョール・インテリアより取得。ボゴタ、コロンビア。",
                "2025_2": "著書「身体 as 地図：アンデスの宇宙観が説く自己認識の道具としての縛り」を出版。",
                "2026": "統合プラットフォームとしてのKITSUNEを発足：教育、制作、共同体。"
            },
            filosofia: {
                title: "仕事の哲学",
                seguridad: { title: "安全性", text: "あらゆる実践は、告知された同意、明確なコミュニケーション、そして身体の厳密な技術的知識から始まります。" },
                presencia: { title: "臨在", text: "縛りとしての瞑想。出会いの空間としての縄の緊張の中で停止した時間。" },
                comunidad: { title: "共同体", text: "学びは個人のものではありません。実践者間の相互支援、交流、相互ケアのネットワークを作る。" }
            },
            formacion: {
                title: "トレーニングと師匠",
                "0": "セニョール・インテリアとの集中研究、ボゴタ、2025",
                "1": "曲技ディシプリンの教員免許、ブエノスアイレス、2025",
                "2": "救急処置とリスク実践の安全性の認定、2022",
                "3": "写真、編集、グラフィックデザインのトレーニング、ダ・ヴィンチ、2019"
            },
            actualidad: {
                title: "現在",
                "1": "現在、個人およびグループの定期クラス、パーソナライズされたメンタリング、ワークショップ、写真制作を調整しています。Patreonを通じて教材を共有し、映画ディベートを組織し、継続的な学習共同体を構築しています。",
                "2": "また、体験としてのプライベート縛りセッション、パフォーマンスの写真記録、映像コンテンツの制作も提供しています。"
            },
            volver: "← ホームに戻る"
        },
        contacto: {
            meta: { title: "連絡 | KITSUNE" },
            page: { title: "連絡" },
            title: "接続",
            follow: "フォロー",
            intro: "質問はありますか？プライベートセッションやスペースでのワークショップの調整をご希望ですか？",
            nota: { "1": "24-48時間以内に返信。クラスについての質問は、まず", "2": "道" }
        },
        galeria: {
            meta: { title: "ギャラリー | KITSUNE" },
            title: "ギャラリー",
            subtitle: "セッション、パフォーマンス、制作",
            ver_sesion: "セッションを見る →",
            modal: { titulo: "セッションのタイトル", desc: "セッションの完全な説明。", patreon: "セッションを見る" },
            sesiones: [{ titulo: "セッション #1 - 正縛 101", desc: "セッション、コンセプト、参加者、コンテキストの簡単な説明。2-3行で。" }]
        },
        tienda: {
            meta: { title: "店 | KITSUNE" },
            title: "店",
            subtitle: "あなたの実践に必要なすべて、それ以上のもの",
            ver_publicacion: "商品を見る →",
            productos: [
                { nombre: "麻縄", desc: "長さ8メートル×太さ6mmの天然繊維の縄。床での縛りと吊りの両方に最適。アルゼンチ国内配送", precio: "$30.000 ARS" },
                { nombre: "著書「身体 as 地図」Kitsune著、2025年版（スペイン語）", desc: "自己認識の道具としての縛りを説くアンデスの宇宙観。世界中に配送", precio: "$19.99 USD" }
            ]
        },
        footer: { copyright: "© 2026 KITSUNE. 全著作権所有。" }
    },

    zh: {
        nav: {
            caminos: "路径",
            agenda: "日程",
            galeria: "画廊",
            tienda: "商店",
            bio: "简介",
            contacto: "联系",
            patreon: "Patreon →"
        },
        hero: {
            title: "KITSUNE",
            subtitle: "纪律 · 运动 · 社群"
        },
        about: {
            title: "关于",
            text: "绳缚导师。摄影师。我创造身体探索、安全与艺术的空間。",
            link: "了解更多关于我的作品 →"
        },
        cards: {
            clases: { title: "课程", desc: "从基础开始的绳缚。独家内容、Discord社群、电影辩论、指导。" },
            galeria: { title: "画廊", desc: "私人课程、表演、摄影制作。艺术与纪录片作品。" },
            tienda: { title: "商店", desc: "处理过的绳缚绳索、初学者套装、配件和精选材料。" }
        },
        caminos: {
            title: "学习路径",
            subtitle: "如果生命是一所学校，为什么不从心理魔法到科学，从无意识到显化，学习一切呢？在这里，我们打破已知的界限，让你恢复古老的记忆。放下期待，跟随心灵的直觉流动，做好准备。",
            samurai: {
                title: "武士之道",
                fundamentals: ["纪律", "技术", "精准"],
                desc: "非常适合想要加入一门纪律的人，让你在学习新手工技能的同时，扮演你一直想成为的武士，与伴侣分享，并学习历史和神话传说！",
                cta: "你还在等什么？",
                button: "更多信息"
            },
            serpiente: {
                title: "蛇之道",
                fundamentals: ["诠释", "身体教育", "生物力学"],
                desc: "非常适合来自艺术领域的人，他们在我的绳索之间看到舞蹈、绘画或体验。适应于从更灵活的方法理解技术和纪律的工具。",
                cta: "你还在等什么？",
                button: "更多信息"
            },
            suspension: {
                title: "我独自悬浮！",
                fundamentals: ["本体感觉", "平衡", "力量"],
                desc: "为绳缚接受者举办的研讨会，教授本体感觉、支点和空中及地面平衡。改善你的肌肉张力和在场感。当我们看到身体知识的进步时，它让我们感受到我们是女神。",
                cta: "你还在等什么？",
                button: "更多信息"
            }
        },
        agenda: {
            meta: { title: "日程 | KITSUNE" },
            title: "日程",
            proximos: "即将举行的活动",
            pasados: "过往活动",
            meses: { feb: "2月", mar: "3月", abr: "4月" },
            ubicacion: { ba: "布宜诺斯艾利斯", cordoba: "科尔多瓦", rosario: "罗萨里奥" },
            estados: {
                agotado: "售罄",
                confirmar: "待确认",
                finalizado: "✓ 已结束",
                evento_finalizado: "活动已结束",
                grabado: "✓ 已录制"
            },
            botones: {
                inscribirse: "报名 →",
                reservar: "预订门票 →",
                grabacion: "观看录像 →"
            },
            eventos: [
                { titulo: "工作坊：\"我已经会打结了！…然后呢？生物力学和运动链\"", desc: "旨在了解身体生物力学、什么是运动链以及如何将它们融入绳缚的工作坊。" },
                { titulo: "工作坊：武士之道", desc: "传统绳缚的纪律、技术和精准度入门。" },
                { titulo: "我独自悬浮！ - 特别版", desc: "绳缚接受者强化工作坊。本体感觉、平衡和力量。" },
                { titulo: "表演：春之仪式", desc: "现场音乐伴奏的现场表演。空间有限。" }
            ],
            pasados: [
                { titulo: "蛇之道", desc: "诠释和身体教育工作坊。已完成。" },
                { titulo: "电影辩论：东方电影中的绳缚", desc: "线下Patreon会议。放映和辩论。" }
            ]
        },
        bio: {
            meta: { title: "简介 | KITSUNE" },
            hero: { title: "KITSUNE", subtitle: "轨迹 · 哲学 · 实践" },
            quien: { title: "我是谁", text: "绳缚导师、摄影师和空间创造者。我的工作栖息于日本技术纪律与身体、纽带和图像的当代探索的交汇处。" },
            trayectoria: {
                title: "轨迹",
                "2022": "开始传统绳缚培训。",
                "2023": "开设自己的空间。开始教授工作坊和常规课程。",
                "2024": "开始在矢神流学校接受正缚培训。",
                "2025_1": "获得矢神流缚道场的正缚认证，由Señor Interior颁发。波哥大，哥伦比亚。",
                "2025_2": "出版著作《身体作为地图：安第斯宇宙观解释绳缚作为自我认知的工具》。",
                "2026": "推出KITSUNE作为综合平台：教育、制作和社群。"
            },
            filosofia: {
                title: "工作哲学",
                seguridad: { title: "安全", text: "每一次实践都从知情同意、清晰沟通和严谨的身体技术知识开始。" },
                presencia: { title: "临在", text: "作为冥想的束缚。作为相遇空间的绳索张力中暂停的时间。" },
                comunidad: { title: "社群", text: "学习不是个人的。在实践者之间建立支持、交流和相互关怀的网络。" }
            },
            formacion: {
                title: "培训与导师",
                "0": "与Señor Interior的密集学习，波哥大，2025",
                "1": "杂技学科教学学位，布宜诺斯艾利斯，2025",
                "2": "急救和风险实践安全认证，2022",
                "3": "摄影、编辑和平面设计培训，达芬奇，2019"
            },
            actualidad: {
                title: "現在",
                "1": "現在、個人およびグループの定期クラス、パーソナライズされたメンタリング、ワークショップ、写真制作を調整しています。Patreonを通じて教材を共有し、映画ディベートを組織し、継続的な学習共同体を構築しています。",
                "2": "また、体験としてのプライベート縛りセッション、パフォーマンスの写真記録、映像コンテンツの制作も提供しています。"
            },
            volver: "← ホームに戻る"
        },
        contacto: {
            meta: { title: "連絡 | KITSUNE" },
            page: { title: "連絡" },
            title: "接続",
            follow: "フォロー",
            intro: "質問はありますか？プライベートセッションやスペースでのワークショップの調整をご希望ですか？",
            nota: { "1": "24-48時間以内に返信。クラスについての質問は、まず", "2": "道" }
        },
        galeria: {
            meta: { title: "ギャラリー | KITSUNE" },
            title: "ギャラリー",
            subtitle: "セッション、パフォーマンス、制作",
            ver_sesion: "セッションを見る →",
            modal: { titulo: "セッションのタイトル", desc: "セッションの完全な説明。", patreon: "セッションを見る" },
            sesiones: [{ titulo: "セッション #1 - 正縛 101", desc: "セッション、コンセプト、参加者、コンテキストの簡単な説明。2-3行で。" }]
        },
        tienda: {
            meta: { title: "店 | KITSUNE" },
            title: "店",
            subtitle: "あなたの実践に必要なすべて、それ以上のもの",
            ver_publicacion: "商品を見る →",
            productos: [
                { nombre: "麻縄", desc: "長さ8メートル×太さ6mmの天然繊維の縄。床での縛りと吊りの両方に最適。アルゼンチ国内配送", precio: "$30.000 ARS" },
                { nombre: "著書「身体 as 地図」Kitsune著、2025年版（スペイン語）", desc: "自己認識の道具としての縛りを説くアンデスの宇宙観。世界中に配送", precio: "$19.99 USD" }
            ]
        },
        footer: { copyright: "© 2026 KITSUNE. 全著作権所有。" }
    },
}
const i18n = {
    currentLang: localStorage.getItem('lang') || 'es',
    
    init() {
        this.updateContent();
        this.initSwitcher();
        this.setHtmlLang();
    },
    
    updateContent() {
        const t = translations[this.currentLang];
        if (!t) return;
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const value = this.getNestedValue(t, key);
            if (value) {
                if (Array.isArray(value)) {
                    // Para arrays (fundamentals), reemplazamos los spans internos
                    const spans = element.querySelectorAll('span');
                    value.forEach((val, idx) => {
                        if (spans[idx]) spans[idx].textContent = val;
                    });
                } else {
                    element.textContent = value;
                }
            }
        });
    },
    
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    },
    
    changeLang(lang) {
        if (!translations[lang]) return;
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        this.updateContent();
        this.setHtmlLang();
        this.updateSwitcherUI();
    },
    
    setHtmlLang() {
        document.documentElement.lang = this.currentLang;
    },
    
    initSwitcher() {
        const switcher = document.querySelector('.lang-switcher');
        const current = switcher?.querySelector('.lang-current');
        
        if (current) {
            current.addEventListener('click', (e) => {
                e.stopPropagation();
                switcher.classList.toggle('active');
            });
            
            document.addEventListener('click', () => {
                switcher.classList.remove('active');
            });
        }
        
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                this.changeLang(lang);
            });
        });
        
        this.updateSwitcherUI();
    },
    
    updateSwitcherUI() {
        const current = document.querySelector('.lang-current');
        if (!current) return;
        
        const langData = {
            es: { flag: '🇦🇷', code: 'ES' },
            en: { flag: '🇬🇧', code: 'EN' },
            pt: { flag: '🇧🇷', code: 'PT' },
            ja: { flag: '🇯🇵', code: '日本語' },
            zh: { flag: '🇨🇳', code: '中文' }
        };
        
        const data = langData[this.currentLang];
        if (data) {
            current.innerHTML = `<span class="lang-flag">${data.flag}</span>`;
            current.setAttribute('data-lang', this.currentLang);
        }
        
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.toggle('active', option.getAttribute('data-lang') === this.currentLang);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
