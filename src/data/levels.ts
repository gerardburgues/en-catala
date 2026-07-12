import type { Level } from "@/types/lessons";

export const levels = [
  {
    "level": "A1",
    "blurb": "Survival Catalan",
    "topics": [
      {
        "id": "a1-first-phrases",
        "name": "First phrases",
        "emoji": "👋",
        "description": "Greetings and week-one survival Catalan",
        "cards": [
          {
            "id": "first-phrases-001",
            "ca": "Bon dia",
            "en": "Good morning / Hello",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: Good morning / Hello.",
            "ex": "Bon dia, voldria un bitllet.",
            "exEn": "Hello, one ticket please."
          },
          {
            "id": "first-phrases-002",
            "ca": "Bona tarda",
            "en": "Good evening",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: Good evening.",
            "ex": "Bona tarda, taula per a dos.",
            "exEn": "Good evening, a table for two."
          },
          {
            "id": "first-phrases-003",
            "ca": "Hola",
            "en": "Hi / Bye",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: Hi / Bye.",
            "ex": "Hola, fa temps que no ens veiem!",
            "exEn": "Hi, long time no see!"
          },
          {
            "id": "first-phrases-004",
            "ca": "Adéu",
            "en": "Goodbye",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: Goodbye.",
            "ex": "Adéu, fins demà!",
            "exEn": "Goodbye, see you tomorrow!"
          },
          {
            "id": "first-phrases-005",
            "ca": "De moment",
            "en": "See you / Bye for now",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: See you / Bye for now.",
            "ex": "De moment, m'he d'anar.",
            "exEn": "See you, I have to go now."
          },
          {
            "id": "first-phrases-006",
            "ca": "Gràcies",
            "en": "Thank you",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: Thank you.",
            "ex": "Gràcies per la vostra ajuda.",
            "exEn": "Thank you for your help."
          },
          {
            "id": "first-phrases-007",
            "ca": "si us plau",
            "en": "Please / Here you go / You're welcome",
            "hint": "This is a polite everyday form in Catalonia. Meaning: Please / Here you go / You're welcome.",
            "ex": "Aquí, això és per a tu.",
            "exEn": "Here you go, this is for you."
          },
          {
            "id": "first-phrases-008",
            "ca": "Ho sento",
            "en": "Sorry / Excuse me",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: Sorry / Excuse me.",
            "ex": "Disculpeu, on és la sortida?",
            "exEn": "Excuse me, where is the exit?"
          },
          {
            "id": "first-phrases-009",
            "ca": "Sí/No",
            "en": "Yes / No",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: Yes / No.",
            "ex": "Sí, si us plau. No, gràcies.",
            "exEn": "Yes, please. No, thank you."
          },
          {
            "id": "first-phrases-010",
            "ca": "No ho entenc",
            "en": "I don't understand",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: I don't understand.",
            "ex": "Ho sento, no ho entenc.",
            "exEn": "Sorry, I don't understand."
          },
          {
            "id": "first-phrases-011",
            "ca": "No ho sé",
            "en": "I don't know",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: I don't know.",
            "ex": "No sé on és.",
            "exEn": "I don't know where it is."
          },
          {
            "id": "first-phrases-012",
            "ca": "Parles anglès?",
            "en": "Do you speak English?",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: Do you speak English?.",
            "ex": "Disculpeu, parleu anglès?",
            "exEn": "Excuse me, do you speak English?"
          },
          {
            "id": "first-phrases-013",
            "ca": "Com et dius?",
            "en": "What's your name?",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: What's your name?.",
            "ex": "Hola, com et dius?",
            "exEn": "Hi, what's your name?"
          },
          {
            "id": "first-phrases-014",
            "ca": "El meu nom és...",
            "en": "My name is...",
            "hint": "Masculine nouns usually take el or un. Meaning: My name is....",
            "ex": "Em dic Anna.",
            "exEn": "My name is Anna."
          },
          {
            "id": "first-phrases-015",
            "ca": "Encantat de conèixer-te",
            "en": "Nice to meet you",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: Nice to meet you.",
            "ex": "Encantat de conèixer-te.",
            "exEn": "Nice to meet you."
          },
          {
            "id": "first-phrases-016",
            "ca": "Com estàs?",
            "en": "How are you?",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: How are you?.",
            "ex": "Hola Marek, com estàs?",
            "exEn": "Hi Marek, how are you?"
          },
          {
            "id": "first-phrases-017",
            "ca": "Què passa?",
            "en": "What's up? / How's it going?",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: What's up? / How's it going?.",
            "ex": "Ei, com estàs?",
            "exEn": "Hey, how's it going with you?"
          },
          {
            "id": "first-phrases-018",
            "ca": "Què passa?",
            "en": "What's up? (very casual)",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: What's up? (very casual).",
            "ex": "Què passa, Kasia?",
            "exEn": "What's up, Kasia?"
          },
          {
            "id": "first-phrases-019",
            "ca": "Tot està bé",
            "en": "Everything's fine / All good",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: Everything's fine / All good.",
            "ex": "Tot està bé, gràcies.",
            "exEn": "Everything's fine, thanks."
          },
          {
            "id": "first-phrases-020",
            "ca": "si us plau...",
            "en": "I'd like... (ordering)",
            "hint": "This is a polite everyday form in Catalonia. Meaning: I'd like... (ordering).",
            "ex": "M'agradaria una mica de cafè i aigua.",
            "exEn": "A coffee and a water, please."
          },
          {
            "id": "first-phrases-021",
            "ca": "Quant és?",
            "en": "How much is it?",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: How much is it?.",
            "ex": "Ho sento, quant costa?",
            "exEn": "Excuse me, how much is it?"
          },
          {
            "id": "first-phrases-022",
            "ca": "On és el lavabo?",
            "en": "Where is the toilet?",
            "hint": "Masculine nouns usually take el or un. Meaning: Where is the toilet?.",
            "ex": "Disculpeu, on és el lavabo?",
            "exEn": "Excuse me, where is the toilet?"
          },
          {
            "id": "first-phrases-023",
            "ca": "De benvingut",
            "en": "You're welcome / Don't mention it",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: You're welcome / Don't mention it.",
            "ex": "Gràcies! - De benvingut.",
            "exEn": "Thank you! - You're welcome."
          },
          {
            "id": "first-phrases-024",
            "ca": "Gaudeix del teu àpat!",
            "en": "Enjoy your meal!",
            "hint": "Masculine nouns usually take el or un. Meaning: Enjoy your meal!.",
            "ex": "Aquí tens, bona gana!",
            "exEn": "Here you are, enjoy your meal!"
          },
          {
            "id": "first-phrases-025",
            "ca": "Salut!",
            "en": "Cheers! / Bless you!",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: Cheers! / Bless you!.",
            "ex": "Salut! Per la reunió!",
            "exEn": "Cheers! To our meeting!"
          },
          {
            "id": "first-phrases-026",
            "ca": "Molta sort!",
            "en": "Good luck!",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: Good luck!.",
            "ex": "Molta sort en el teu examen!",
            "exEn": "Good luck on the exam!"
          },
          {
            "id": "first-phrases-027",
            "ca": "Ens veiem",
            "en": "See you (soon)",
            "hint": "Useful first phrases vocabulary in standard Central Catalan. Meaning: See you (soon).",
            "ex": "Gràcies per avui, fins aviat!",
            "exEn": "Thanks for today, see you!"
          }
        ]
      },
      {
        "id": "a1-numbers-prices",
        "name": "Numbers and prices",
        "emoji": "🔢",
        "description": "Numbers, euros, cents and paying",
        "cards": [
          {
            "id": "numbers-prices-001",
            "ca": "un",
            "en": "one",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: one.",
            "ex": "Un bitllet, si us plau.",
            "exEn": "One ticket, please."
          },
          {
            "id": "numbers-prices-002",
            "ca": "dos",
            "en": "two",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: two.",
            "ex": "Tinc dos gats.",
            "exEn": "I have two cats."
          },
          {
            "id": "numbers-prices-003",
            "ca": "Tres",
            "en": "three",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: three.",
            "ex": "Tres cafès, si us plau.",
            "exEn": "Three coffees, please."
          },
          {
            "id": "numbers-prices-004",
            "ca": "quatre",
            "en": "four",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: four.",
            "ex": "Taula per a quatre persones.",
            "exEn": "A table for four."
          },
          {
            "id": "numbers-prices-005",
            "ca": "cinc",
            "en": "five",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: five.",
            "ex": "Costa cinc euros.",
            "exEn": "It costs five euros."
          },
          {
            "id": "numbers-prices-006",
            "ca": "sis",
            "en": "six",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: six.",
            "ex": "Tinc sis pomes.",
            "exEn": "I have six apples."
          },
          {
            "id": "numbers-prices-007",
            "ca": "set",
            "en": "seven",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: seven.",
            "ex": "Autobús número set.",
            "exEn": "Bus number seven."
          },
          {
            "id": "numbers-prices-008",
            "ca": "vuit",
            "en": "eight",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: eight.",
            "ex": "Treballo vuit hores.",
            "exEn": "I work eight hours."
          },
          {
            "id": "numbers-prices-009",
            "ca": "nou",
            "en": "nine",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: nine.",
            "ex": "Nou euros per bitllet.",
            "exEn": "Nine euro for a ticket."
          },
          {
            "id": "numbers-prices-010",
            "ca": "deu",
            "en": "ten",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: ten.",
            "ex": "Deu minuts fins al tramvia.",
            "exEn": "Ten minutes until the tram."
          },
          {
            "id": "numbers-prices-011",
            "ca": "vint",
            "en": "twenty",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: twenty.",
            "ex": "Costa vint euros.",
            "exEn": "It costs twenty euros."
          },
          {
            "id": "numbers-prices-012",
            "ca": "cent",
            "en": "a hundred",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: a hundred.",
            "ex": "Cent euros, si us plau.",
            "exEn": "A hundred euros, please."
          },
          {
            "id": "numbers-prices-013",
            "ca": "daurat",
            "en": "euro (the currency)",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: euro (the currency).",
            "ex": "Pago cinquanta euros.",
            "exEn": "I'm paying fifty euros."
          },
          {
            "id": "numbers-prices-014",
            "ca": "cèntim",
            "en": "cent (a penny)",
            "hint": "Use euros and cèntims for prices in Catalonia. Meaning: cent (a penny).",
            "ex": "Costa dos euros i cinquanta cèntims.",
            "exEn": "It costs two euros fifty."
          },
          {
            "id": "numbers-prices-015",
            "ca": "Quant pago?",
            "en": "How much do I pay?",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: How much do I pay?.",
            "ex": "Quant pago per tot?",
            "exEn": "How much do I pay for everything?"
          },
          {
            "id": "numbers-prices-016",
            "ca": "Puc pagar amb targeta?",
            "en": "Can I pay by card?",
            "hint": "Use euros and cèntims for prices in Catalonia. Meaning: Can I pay by card?.",
            "ex": "Puc pagar amb targeta?",
            "exEn": "Can I pay by card?"
          },
          {
            "id": "numbers-prices-017",
            "ca": "diners en efectiu",
            "en": "cash",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: cash.",
            "ex": "Pago en efectiu.",
            "exEn": "I'm paying in cash."
          },
          {
            "id": "numbers-prices-018",
            "ca": "Junts",
            "en": "together / in total",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: together / in total.",
            "ex": "Quants en total?",
            "exEn": "How much in total?"
          },
          {
            "id": "numbers-prices-019",
            "ca": "descansar",
            "en": "change (money back)",
            "hint": "Useful numbers and prices vocabulary in standard Central Catalan. Meaning: change (money back).",
            "ex": "Mantingueu el canvi.",
            "exEn": "Keep the change."
          },
          {
            "id": "numbers-prices-020",
            "ca": "car/barat",
            "en": "expensive / cheap",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: expensive / cheap.",
            "ex": "Això és massa car.",
            "exEn": "That's too expensive."
          }
        ]
      },
      {
        "id": "a1-cafe",
        "name": "At the cafe",
        "emoji": "☕",
        "description": "Ordering coffee, snacks and drinks",
        "cards": [
          {
            "id": "cafe-001",
            "ca": "cafè",
            "en": "coffee",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: coffee.",
            "ex": "M'agradaria un cafè amb llet, si us plau.",
            "exEn": "A coffee with milk, please."
          },
          {
            "id": "cafe-002",
            "ca": "te",
            "en": "tea",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: tea.",
            "ex": "Prefereixo el te que el cafè.",
            "exEn": "I prefer tea to coffee."
          },
          {
            "id": "cafe-003",
            "ca": "aigua",
            "en": "water",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: water.",
            "ex": "Aigua tranquil·la, si us plau.",
            "exEn": "Still water, please."
          },
          {
            "id": "cafe-004",
            "ca": "llet",
            "en": "milk",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: milk.",
            "ex": "Cafè amb llet, si us plau.",
            "exEn": "Coffee with milk, please."
          },
          {
            "id": "cafe-005",
            "ca": "sucre",
            "en": "sugar",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: sugar.",
            "ex": "Sense sucre, gràcies.",
            "exEn": "No sugar, thank you."
          },
          {
            "id": "cafe-006",
            "ca": "suc",
            "en": "juice",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: juice.",
            "ex": "M'agradaria un suc de taronja.",
            "exEn": "An orange juice, please."
          },
          {
            "id": "cafe-007",
            "ca": "pastís",
            "en": "cake",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: cake.",
            "ex": "Un tros de pastís, si us plau.",
            "exEn": "A slice of cake, please."
          },
          {
            "id": "cafe-008",
            "ca": "entrepà",
            "en": "sandwich",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: sandwich.",
            "ex": "M'agradaria un entrepà de formatge, si us plau.",
            "exEn": "A cheese sandwich, please."
          },
          {
            "id": "cafe-009",
            "ca": "Què em recomaneu?",
            "en": "What do you recommend?",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: What do you recommend?.",
            "ex": "No sé què triar. Què em recomaneu?",
            "exEn": "I don't know what to pick. What do you recommend?"
          },
          {
            "id": "cafe-010",
            "ca": "Per mi...",
            "en": "For me... (ordering)",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: For me... (ordering).",
            "ex": "Té per a mi, si us plau.",
            "exEn": "A tea for me, please."
          },
          {
            "id": "cafe-011",
            "ca": "per anar",
            "en": "to take away",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: to take away.",
            "ex": "Per emportar, si us plau.",
            "exEn": "To take away, please."
          },
          {
            "id": "cafe-012",
            "ca": "al lloc",
            "en": "to have here / dine in",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: to have here / dine in.",
            "ex": "Al lloc o per emportar?",
            "exEn": "To have here or take away?"
          },
          {
            "id": "cafe-013",
            "ca": "Gaudeix del teu àpat!",
            "en": "Enjoy your meal!",
            "hint": "Masculine nouns usually take el or un. Meaning: Enjoy your meal!.",
            "ex": "Gaudeix del teu àpat!",
            "exEn": "Enjoy your meal!"
          },
          {
            "id": "cafe-014",
            "ca": "taula",
            "en": "table",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: table.",
            "ex": "Està disponible aquesta taula?",
            "exEn": "Is this table free?"
          },
          {
            "id": "cafe-015",
            "ca": "targeta/menú",
            "en": "menu",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: menu.",
            "ex": "M'agradaria una targeta, si us plau.",
            "exEn": "The menu, please."
          },
          {
            "id": "cafe-016",
            "ca": "Hi ha Wi-Fi?",
            "en": "Is there wi-fi?",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: Is there wi-fi?.",
            "ex": "Disculpeu, hi ha wi-fi aquí?",
            "exEn": "Excuse me, is there wi-fi here?"
          },
          {
            "id": "cafe-017",
            "ca": "calent/fred",
            "en": "hot / cold",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: hot / cold.",
            "ex": "M'agradaria una mica d'aigua freda.",
            "exEn": "Cold water, please."
          },
          {
            "id": "cafe-018",
            "ca": "gran/petit",
            "en": "big / small",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: big / small.",
            "ex": "M'agradaria un gran cafè, si us plau.",
            "exEn": "A large coffee, please."
          },
          {
            "id": "cafe-019",
            "ca": "Alguna cosa més?",
            "en": "Anything else?",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: Anything else?.",
            "ex": "Alguna cosa més per beure?",
            "exEn": "Anything else to drink?"
          },
          {
            "id": "cafe-020",
            "ca": "Això és tot",
            "en": "That's all",
            "hint": "Useful at the cafe vocabulary in standard Central Catalan. Meaning: That's all.",
            "ex": "No, gràcies, això és tot.",
            "exEn": "No thanks, that's all."
          }
        ]
      },
      {
        "id": "a1-finding-your-way",
        "name": "Finding your way",
        "emoji": "🧭",
        "description": "Asking directions and locating places",
        "cards": [
          {
            "id": "finding-your-way-001",
            "ca": "On és...?",
            "en": "Where is...?",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: Where is...?.",
            "ex": "On és la farmàcia?",
            "exEn": "Where is the pharmacy?"
          },
          {
            "id": "finding-your-way-002",
            "ca": "a l'esquerra",
            "en": "to the left",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: to the left.",
            "ex": "si us plau, gireu a l'esquerra.",
            "exEn": "Turn left, please."
          },
          {
            "id": "finding-your-way-003",
            "ca": "a la dreta",
            "en": "to the right",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: to the right.",
            "ex": "La botiga és a la dreta.",
            "exEn": "The shop is on the right."
          },
          {
            "id": "finding-your-way-004",
            "ca": "recte",
            "en": "straight ahead",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: straight ahead.",
            "ex": "si us plau, seguiu recte.",
            "exEn": "Go straight ahead."
          },
          {
            "id": "finding-your-way-005",
            "ca": "tancar",
            "en": "near / close",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: near / close.",
            "ex": "Això està molt a prop.",
            "exEn": "It's very close."
          },
          {
            "id": "finding-your-way-006",
            "ca": "lluny",
            "en": "far",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: far.",
            "ex": "Està lluny d'aquí?",
            "exEn": "Is it far from here?"
          },
          {
            "id": "finding-your-way-007",
            "ca": "aquí / aquí",
            "en": "here",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: here.",
            "ex": "si us plau, atureu-vos aquí.",
            "exEn": "Please stop here."
          },
          {
            "id": "finding-your-way-008",
            "ca": "allà",
            "en": "there",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: there.",
            "ex": "La botiga hi és.",
            "exEn": "The shop is over there."
          },
          {
            "id": "finding-your-way-009",
            "ca": "A prop",
            "en": "next to / beside",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: next to / beside.",
            "ex": "La farmàcia està al costat del banc.",
            "exEn": "The pharmacy is next to the bank."
          },
          {
            "id": "finding-your-way-010",
            "ca": "a la volta de la cantonada",
            "en": "around the corner",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: around the corner.",
            "ex": "La fleca és a la volta de la cantonada.",
            "exEn": "The bakery is around the corner."
          },
          {
            "id": "finding-your-way-011",
            "ca": "carrer",
            "en": "street",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: street.",
            "ex": "Visc al carrer de Mallorca.",
            "exEn": "I live on Carrer de Mallorca."
          },
          {
            "id": "finding-your-way-012",
            "ca": "centre",
            "en": "the centre / downtown",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: the centre / downtown.",
            "ex": "Vaig al centre de la ciutat.",
            "exEn": "I'm going to the centre."
          },
          {
            "id": "finding-your-way-013",
            "ca": "botiga",
            "en": "shop",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: shop.",
            "ex": "On és la botiga més propera?",
            "exEn": "Where's the nearest shop?"
          },
          {
            "id": "finding-your-way-014",
            "ca": "estació",
            "en": "station (train / bus)",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: station (train / bus).",
            "ex": "Com arribar a l'estació?",
            "exEn": "How do I get to the station?"
          },
          {
            "id": "finding-your-way-015",
            "ca": "banc",
            "en": "bank",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: bank.",
            "ex": "Estic buscant un banc.",
            "exEn": "I'm looking for a bank."
          },
          {
            "id": "finding-your-way-016",
            "ca": "Com arribar a...?",
            "en": "How do I get to...? (on foot)",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: How do I get to...? (on foot).",
            "ex": "Com arribar al mercat?",
            "exEn": "How do I get to the market square?"
          },
          {
            "id": "finding-your-way-017",
            "ca": "mapa",
            "en": "map",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: map.",
            "ex": "Tinc un mapa al telèfon.",
            "exEn": "I have a map on my phone."
          },
          {
            "id": "finding-your-way-018",
            "ca": "torn",
            "en": "to turn",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: to turn.",
            "ex": "si us plau, gireu a la dreta.",
            "exEn": "Turn right, please."
          },
          {
            "id": "finding-your-way-019",
            "ca": "cantonada",
            "en": "corner",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: corner.",
            "ex": "Hi ha una cafeteria a la cantonada.",
            "exEn": "There's a café on the corner."
          },
          {
            "id": "finding-your-way-020",
            "ca": "a prop",
            "en": "nearby / in the area",
            "hint": "Useful finding your way vocabulary in standard Central Catalan. Meaning: nearby / in the area.",
            "ex": "Hi ha un caixer automàtic a prop?",
            "exEn": "Is there an ATM nearby?"
          }
        ]
      },
      {
        "id": "a1-about-me",
        "name": "About me",
        "emoji": "🙋",
        "description": "Introducing yourself and getting understood",
        "cards": [
          {
            "id": "about-me-001",
            "ca": "El meu nom és...",
            "en": "My name is... (full name)",
            "hint": "Masculine nouns usually take el or un. Meaning: My name is... (full name).",
            "ex": "Em dic Anna Puig.",
            "exEn": "My name is Anna Puig."
          },
          {
            "id": "about-me-002",
            "ca": "sóc de...",
            "en": "I'm from...",
            "hint": "Useful about me vocabulary in standard Central Catalan. Meaning: I'm from....",
            "ex": "Sóc d'Espanya.",
            "exEn": "I'm from Spain."
          },
          {
            "id": "about-me-003",
            "ca": "visc a...",
            "en": "I live in...",
            "hint": "Useful about me vocabulary in standard Central Catalan. Meaning: I live in....",
            "ex": "Visc a Barcelona.",
            "exEn": "I live in Barcelona."
          },
          {
            "id": "about-me-004",
            "ca": "Estic aprenent català",
            "en": "I'm learning Catalan",
            "hint": "Useful about me vocabulary in standard Central Catalan. Meaning: I'm learning Catalan.",
            "ex": "Fa un any que aprenc català.",
            "exEn": "I've been learning Catalan for a year."
          },
          {
            "id": "about-me-005",
            "ca": "Jo treballo com...",
            "en": "I work as...",
            "hint": "Useful about me vocabulary in standard Central Catalan. Meaning: I work as....",
            "ex": "Treballo com a programador.",
            "exEn": "I work as a programmer."
          },
          {
            "id": "about-me-006",
            "ca": "Tinc... anys",
            "en": "I'm ... years old",
            "hint": "Useful about me vocabulary in standard Central Catalan. Meaning: I'm ... years old.",
            "ex": "Tinc trenta anys.",
            "exEn": "I'm thirty years old."
          },
          {
            "id": "about-me-007",
            "ca": "No parlo bé el català",
            "en": "I don't speak Catalan well",
            "hint": "Masculine nouns usually take el or un. Meaning: I don't speak Catalan well.",
            "ex": "Ho sento, no parlo bé el català.",
            "exEn": "Sorry, I don't speak Catalan well."
          },
          {
            "id": "about-me-008",
            "ca": "Parlo una mica català",
            "en": "I speak a little Catalan",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: I speak a little Catalan.",
            "ex": "Parlo una mica català.",
            "exEn": "I speak a little Catalan."
          },
          {
            "id": "about-me-009",
            "ca": "Pots repetir això?",
            "en": "Can you repeat that?",
            "hint": "Useful about me vocabulary in standard Central Catalan. Meaning: Can you repeat that?.",
            "ex": "Ho sento, ho pots repetir?",
            "exEn": "Sorry, can you repeat that?"
          },
          {
            "id": "about-me-010",
            "ca": "si us plau, parla més lentament",
            "en": "Please speak more slowly",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: Please speak more slowly.",
            "ex": "si us plau, parla més lentament.",
            "exEn": "Please speak more slowly."
          },
          {
            "id": "about-me-011",
            "ca": "No sóc d'aquí",
            "en": "I'm not from here",
            "hint": "Useful about me vocabulary in standard Central Catalan. Meaning: I'm not from here.",
            "ex": "No sóc d'aquí, sóc un turista.",
            "exEn": "I'm not from here, I'm a tourist."
          },
          {
            "id": "about-me-012",
            "ca": "Com s'escriu?",
            "en": "How do you spell it?",
            "hint": "Useful about me vocabulary in standard Central Catalan. Meaning: How do you spell it?.",
            "ex": "Com s'escriu el teu cognom?",
            "exEn": "How do you spell your surname?"
          },
          {
            "id": "about-me-013",
            "ca": "Tinc una pregunta",
            "en": "I have a question",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: I have a question.",
            "ex": "Ho sento, tinc una pregunta.",
            "exEn": "Excuse me, I have a question."
          },
          {
            "id": "about-me-014",
            "ca": "ho veig",
            "en": "I understand",
            "hint": "Useful about me vocabulary in standard Central Catalan. Meaning: I understand.",
            "ex": "Sí, ara ho entenc.",
            "exEn": "Yes, now I understand."
          },
          {
            "id": "about-me-015",
            "ca": "Em pots ajudar?",
            "en": "Can you help me?",
            "hint": "This is a polite everyday form in Catalonia. Meaning: Can you help me?.",
            "ex": "Disculpeu, em podeu ajudar?",
            "exEn": "Excuse me, can you help me?"
          },
          {
            "id": "about-me-016",
            "ca": "D'on ets?",
            "en": "Where are you from?",
            "hint": "Useful about me vocabulary in standard Central Catalan. Meaning: Where are you from?.",
            "ex": "I tu d'on ets?",
            "exEn": "And where are you from?"
          },
          {
            "id": "about-me-017",
            "ca": "el meu/el meu",
            "en": "my (m / f)",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: my (m / f).",
            "ex": "Aquest és el meu telèfon.",
            "exEn": "This is my phone."
          },
          {
            "id": "about-me-018",
            "ca": "Que tingueu un bon dia!",
            "en": "Have a nice day!",
            "hint": "Masculine nouns usually take el or un. Meaning: Have a nice day!.",
            "ex": "Gràcies, que tingueu un bon dia!",
            "exEn": "Thanks, have a nice day!"
          },
          {
            "id": "about-me-019",
            "ca": "Ens veiem",
            "en": "See you (later)",
            "hint": "Useful about me vocabulary in standard Central Catalan. Meaning: See you (later).",
            "ex": "Ens veiem demà.",
            "exEn": "See you tomorrow."
          },
          {
            "id": "about-me-020",
            "ca": "Cap problema",
            "en": "No problem",
            "hint": "Useful about me vocabulary in standard Central Catalan. Meaning: No problem.",
            "ex": "Cap problema!",
            "exEn": "No problem!"
          }
        ]
      },
      {
        "id": "a1-morning-routine",
        "name": "Morning routine",
        "emoji": "⏰",
        "description": "Getting up, washing, dressing and breakfast",
        "cards": [
          {
            "id": "morning-routine-001",
            "ca": "alarma",
            "en": "alarm clock",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: alarm clock.",
            "ex": "El meu despertador sona a les set del matí.",
            "exEn": "My alarm clock rings at seven in the morning."
          },
          {
            "id": "morning-routine-002",
            "ca": "despertar",
            "en": "to wake up",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: to wake up.",
            "ex": "Em llevo d'hora al matí.",
            "exEn": "I wake up early in the morning."
          },
          {
            "id": "morning-routine-003",
            "ca": "aixecar-se",
            "en": "to get up",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: to get up.",
            "ex": "Em llevo a les sis, però em llevo a dos quarts de set.",
            "exEn": "I wake up at six, but I get up at half past six."
          },
          {
            "id": "morning-routine-004",
            "ca": "bany",
            "en": "bathroom",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: bathroom.",
            "ex": "Primer vaig al bany.",
            "exEn": "First, I go to the bathroom."
          },
          {
            "id": "morning-routine-005",
            "ca": "prendre una dutxa",
            "en": "to take a shower",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: to take a shower.",
            "ex": "Al matí acostumo a prendre una dutxa ràpida.",
            "exEn": "In the morning, I usually take a quick shower."
          },
          {
            "id": "morning-routine-006",
            "ca": "raspallar-se les dents",
            "en": "to brush teeth",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: to brush teeth.",
            "ex": "Després d'esmorzar em rento les dents.",
            "exEn": "I brush my teeth after breakfast."
          },
          {
            "id": "morning-routine-007",
            "ca": "tovallola",
            "en": "towel",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: towel.",
            "ex": "On és la meva tovallola neta?",
            "exEn": "Where is my clean towel?"
          },
          {
            "id": "morning-routine-008",
            "ca": "vestit",
            "en": "to get dressed",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: to get dressed.",
            "ex": "Em dutxo i em vesteixo ràpidament.",
            "exEn": "I take a shower and get dressed quickly."
          },
          {
            "id": "morning-routine-009",
            "ca": "roba",
            "en": "clothes",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: clothes.",
            "ex": "Em poso roba neta.",
            "exEn": "I put on clean clothes."
          },
          {
            "id": "morning-routine-010",
            "ca": "esmorzar",
            "en": "breakfast",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: breakfast.",
            "ex": "Què menges per esmorzar?",
            "exEn": "What do you eat for breakfast?"
          },
          {
            "id": "morning-routine-011",
            "ca": "fer l'esmorzar",
            "en": "to make breakfast",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: to make breakfast.",
            "ex": "Estic fent l'esmorzar per a la meva família.",
            "exEn": "I am making breakfast for my family."
          },
          {
            "id": "morning-routine-012",
            "ca": "esmorzar",
            "en": "to eat breakfast",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: to eat breakfast.",
            "ex": "Esmorzo a casa cada dia.",
            "exEn": "I eat breakfast at home every day."
          },
          {
            "id": "morning-routine-013",
            "ca": "tinc gana",
            "en": "I am hungry",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: I am hungry.",
            "ex": "Sempre tinc molta gana al matí.",
            "exEn": "I am always very hungry in the morning."
          },
          {
            "id": "morning-routine-014",
            "ca": "en primer lloc",
            "en": "first",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: first.",
            "ex": "Primer bec cafè i després menjo.",
            "exEn": "First I drink coffee, and then I eat."
          },
          {
            "id": "morning-routine-015",
            "ca": "aleshores",
            "en": "then / later",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: then / later.",
            "ex": "Esmorzo i després em vesteixo.",
            "exEn": "I eat breakfast, and then I get dressed."
          },
          {
            "id": "morning-routine-016",
            "ca": "pressa",
            "en": "to be in a hurry",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: to be in a hurry.",
            "ex": "No tinc temps per esmorzar, tinc pressa per anar a treballar.",
            "exEn": "I don't have time for breakfast, I am in a hurry to work."
          },
          {
            "id": "morning-routine-017",
            "ca": "sortir de casa",
            "en": "to leave the house",
            "hint": "Useful morning routine vocabulary in standard Central Catalan. Meaning: to leave the house.",
            "ex": "Surto de casa a les vuit i quart.",
            "exEn": "I leave the house at eight fifteen."
          }
        ]
      }
    ]
  },
  {
    "level": "A2",
    "blurb": "Everyday life in Catalonia",
    "topics": [
      {
        "id": "a2-public-transport",
        "name": "Public transport",
        "emoji": "🚋",
        "description": "Metro, buses, tickets and getting around",
        "cards": [
          {
            "id": "public-transport-001",
            "ca": "parar",
            "en": "stop (bus / tram)",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: stop (bus / tram).",
            "ex": "Baixo a la següent parada.",
            "exEn": "I'm getting off at the next stop."
          },
          {
            "id": "public-transport-002",
            "ca": "bitllet",
            "en": "ticket",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: ticket.",
            "ex": "Vaig comprar un bitllet a la màquina.",
            "exEn": "I bought a ticket at the machine."
          },
          {
            "id": "public-transport-003",
            "ca": "M'agradaria un bitllet de 20 minuts",
            "en": "A 20-minute ticket, please",
            "hint": "Masculine nouns usually take el or un. Meaning: A 20-minute ticket, please.",
            "ex": "Bon dia, voldria un bitllet de 20 minuts.",
            "exEn": "Hello, a 20-minute ticket, please."
          },
          {
            "id": "public-transport-004",
            "ca": "Aquest tramvia va al centre?",
            "en": "Does this tram go to the centre?",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: Does this tram go to the centre?.",
            "ex": "Disculpeu, aquest tramvia va al centre?",
            "exEn": "Excuse me, does this tram go to the centre?"
          },
          {
            "id": "public-transport-005",
            "ca": "Quin autobús va a l'estació?",
            "en": "Which bus goes to the station?",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: Which bus goes to the station?.",
            "ex": "Disculpeu, quin autobús va a l'estació?",
            "exEn": "Excuse me, which bus goes to the station?"
          },
          {
            "id": "public-transport-006",
            "ca": "On he de baixar?",
            "en": "Where should I get off?",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: Where should I get off?.",
            "ex": "On he de baixar a l'estació?",
            "exEn": "Where should I get off for the station?"
          },
          {
            "id": "public-transport-007",
            "ca": "Pròxima parada",
            "en": "Next stop",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: Next stop.",
            "ex": "Propera parada: Plaça del Mercat.",
            "exEn": "Next stop: the city centre."
          },
          {
            "id": "public-transport-008",
            "ca": "Ho sento, me'n vaig",
            "en": "Excuse me, I'm getting off",
            "hint": "Notice the Catalan past-time wording used for simple stories. Meaning: Excuse me, I'm getting off.",
            "ex": "Ho sento, baixaré a la següent.",
            "exEn": "Excuse me, I'm getting off at the next one."
          },
          {
            "id": "public-transport-009",
            "ca": "Puc passar?",
            "en": "Can I get through?",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: Can I get through?.",
            "ex": "Disculpeu, puc passar?",
            "exEn": "Excuse me, can I get through?"
          },
          {
            "id": "public-transport-010",
            "ca": "metro",
            "en": "metro / underground",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: metro / underground.",
            "ex": "Agafo el metro a la feina cada dia.",
            "exEn": "I take the metro to work every day."
          },
          {
            "id": "public-transport-011",
            "ca": "M'he de transferir",
            "en": "I have to change lines",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: I have to change lines.",
            "ex": "He de canviar a un altre tramvia.",
            "exEn": "I have to change to another tram."
          },
          {
            "id": "public-transport-012",
            "ca": "He de validar el meu bitllet?",
            "en": "Do I need to validate the ticket?",
            "hint": "Masculine nouns usually take el or un. Meaning: Do I need to validate the ticket?.",
            "ex": "Disculpeu, he de validar el meu bitllet?",
            "exEn": "Excuse me, do I need to validate the ticket?"
          },
          {
            "id": "public-transport-013",
            "ca": "El tramvia es retarda",
            "en": "The tram is delayed",
            "hint": "Masculine nouns usually take el or un. Meaning: The tram is delayed.",
            "ex": "El meu tramvia fa tard avui.",
            "exEn": "My tram is delayed today."
          },
          {
            "id": "public-transport-014",
            "ca": "horari",
            "en": "timetable",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: timetable.",
            "ex": "Consulteu l'horari a l'aplicació.",
            "exEn": "I'm checking the timetable in the app."
          },
          {
            "id": "public-transport-015",
            "ca": "Quan és el proper autobús?",
            "en": "When is the next bus?",
            "hint": "Masculine nouns usually take el or un. Meaning: When is the next bus?.",
            "ex": "Disculpeu, quan és el proper autobús?",
            "exEn": "Excuse me, when is the next bus?"
          },
          {
            "id": "public-transport-016",
            "ca": "Abonament mensual",
            "en": "Monthly ticket",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: Monthly ticket.",
            "ex": "Tinc un abonament mensual de metro.",
            "exEn": "I have a monthly ticket for the metro."
          },
          {
            "id": "public-transport-017",
            "ca": "Estic entrant/Estic sortint",
            "en": "I'm getting on / getting off",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: I'm getting on / getting off.",
            "ex": "Pujo al tramvia número 10.",
            "exEn": "I get on tram number 10."
          },
          {
            "id": "public-transport-018",
            "ca": "plataforma",
            "en": "platform",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: platform.",
            "ex": "El tren surt de l'andana dos.",
            "exEn": "The train leaves from platform two."
          },
          {
            "id": "public-transport-019",
            "ca": "És aquesta la direcció correcta?",
            "en": "Is this the right direction?",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: Is this the right direction?.",
            "ex": "Disculpeu, és aquesta la direcció correcta cap al centre?",
            "exEn": "Excuse me, is this the right direction for the centre?"
          },
          {
            "id": "public-transport-020",
            "ca": "Em vaig perdre",
            "en": "I'm lost",
            "hint": "Notice the Catalan past-time wording used for simple stories. Meaning: I'm lost.",
            "ex": "Crec que estic perdut, on és la parada?",
            "exEn": "I think I'm lost, where's the stop?"
          },
          {
            "id": "public-transport-021",
            "ca": "demanar aturada",
            "en": "request stop",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: request stop.",
            "ex": "És una petició d'aturada, premeu el botó.",
            "exEn": "It's a request stop, press the button."
          },
          {
            "id": "public-transport-022",
            "ca": "Atenció, canvi de ruta",
            "en": "Attention, the route has changed",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: Attention, the route has changed.",
            "ex": "Atenció: canvi de ruta per reforma.",
            "exEn": "Attention, route change due to roadworks."
          },
          {
            "id": "public-transport-023",
            "ca": "parada final",
            "en": "the last stop / terminus",
            "hint": "Useful public transport vocabulary in standard Central Catalan. Meaning: the last stop / terminus.",
            "ex": "Última parada, si us plau, baixeu.",
            "exEn": "Last stop, everyone please get off."
          }
        ]
      },
      {
        "id": "a2-pharmacy",
        "name": "At the pharmacy",
        "emoji": "💊",
        "description": "Symptoms, medicines and safe questions",
        "cards": [
          {
            "id": "pharmacy-001",
            "ca": "farmàcia",
            "en": "pharmacy",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: pharmacy.",
            "ex": "On és la farmàcia més propera?",
            "exEn": "Where's the nearest pharmacy?"
          },
          {
            "id": "pharmacy-002",
            "ca": "medicament/medicina",
            "en": "medicine",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: medicine.",
            "ex": "Necessito medicaments per a la meva gola.",
            "exEn": "I need medicine for my throat."
          },
          {
            "id": "pharmacy-003",
            "ca": "prescripció",
            "en": "prescription",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: prescription.",
            "ex": "Això està amb recepta?",
            "exEn": "Is this prescription-only?"
          },
          {
            "id": "pharmacy-004",
            "ca": "sense recepta mèdica",
            "en": "over the counter",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: over the counter.",
            "ex": "Puc aconseguir-ho al taulell?",
            "exEn": "Can I get this without a prescription?"
          },
          {
            "id": "pharmacy-005",
            "ca": "Tinc una recepta",
            "en": "I have a prescription",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: I have a prescription.",
            "ex": "Bon dia, tinc una recepta: el codi és 1234.",
            "exEn": "Hello, I have a prescription - the code is 1234."
          },
          {
            "id": "pharmacy-006",
            "ca": "Alguna cosa per a un mal de cap",
            "en": "Something for a headache",
            "hint": "Masculine nouns usually take el or un. Meaning: Something for a headache.",
            "ex": "M'agradaria alguna cosa per al mal de cap.",
            "exEn": "Something for a headache, please."
          },
          {
            "id": "pharmacy-007",
            "ca": "mal de coll",
            "en": "sore throat",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: sore throat.",
            "ex": "Des d'ahir tinc mal de coll.",
            "exEn": "I've had a sore throat since yesterday."
          },
          {
            "id": "pharmacy-008",
            "ca": "febre",
            "en": "fever",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: fever.",
            "ex": "Tinc febre i mal de cap.",
            "exEn": "I have a fever and a headache."
          },
          {
            "id": "pharmacy-009",
            "ca": "fred",
            "en": "a cold",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: a cold.",
            "ex": "Crec que tinc un refredat.",
            "exEn": "I think I have a cold."
          },
          {
            "id": "pharmacy-010",
            "ca": "tos",
            "en": "cough",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: cough.",
            "ex": "Tinc tos seca.",
            "exEn": "I have a dry cough."
          },
          {
            "id": "pharmacy-011",
            "ca": "rinitis",
            "en": "runny / blocked nose",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: runny / blocked nose.",
            "ex": "Tinc secreció nasal i tos.",
            "exEn": "I have a runny nose and a cough."
          },
          {
            "id": "pharmacy-012",
            "ca": "pastilles",
            "en": "tablets / pills",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: tablets / pills.",
            "ex": "Quantes pastilles al dia?",
            "exEn": "How many tablets a day?"
          },
          {
            "id": "pharmacy-013",
            "ca": "xarop",
            "en": "syrup",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: syrup.",
            "ex": "M'agradaria una mica de xarop per a la tos.",
            "exEn": "Cough syrup, please."
          },
          {
            "id": "pharmacy-014",
            "ca": "llesca",
            "en": "plaster / band-aid",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: plaster / band-aid.",
            "ex": "Tens guixos?",
            "exEn": "Do you have any plasters?"
          },
          {
            "id": "pharmacy-015",
            "ca": "Fa mal...",
            "en": "My ... hurts",
            "hint": "Notice the Catalan past-time wording used for simple stories. Meaning: My ... hurts.",
            "ex": "Em fa mal l'estómac.",
            "exEn": "My stomach hurts."
          },
          {
            "id": "pharmacy-016",
            "ca": "Amb quina freqüència?",
            "en": "How often?",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: How often?.",
            "ex": "Amb quina freqüència hauríeu de prendre aquest medicament?",
            "exEn": "How often should I take this medicine?"
          },
          {
            "id": "pharmacy-017",
            "ca": "després de menjar",
            "en": "after meals",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: after meals.",
            "ex": "Prendre després de dinar.",
            "exEn": "Take after meals."
          },
          {
            "id": "pharmacy-018",
            "ca": "dosi",
            "en": "dose",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: dose.",
            "ex": "Quina és la dosi per a adults?",
            "exEn": "What's the dose for adults?"
          },
          {
            "id": "pharmacy-019",
            "ca": "És segur?",
            "en": "Is it safe?",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: Is it safe?.",
            "ex": "És segur per als nens?",
            "exEn": "Is it safe for children?"
          },
          {
            "id": "pharmacy-020",
            "ca": "antibiòtic",
            "en": "antibiotic",
            "hint": "Useful at the pharmacy vocabulary in standard Central Catalan. Meaning: antibiotic.",
            "ex": "Necessito un antibiòtic?",
            "exEn": "Do I need an antibiotic?"
          },
          {
            "id": "pharmacy-021",
            "ca": "M'agradaria demanar un rebut",
            "en": "A receipt, please",
            "hint": "Masculine nouns usually take el or un. Meaning: A receipt, please.",
            "ex": "M'agradaria demanar un rebut.",
            "exEn": "A receipt, please."
          }
        ]
      },
      {
        "id": "a2-paperwork",
        "name": "Paperwork",
        "emoji": "🏛️",
        "description": "Appointments, documents and civic errands",
        "cards": [
          {
            "id": "paperwork-001",
            "ca": "oficina",
            "en": "office (government)",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: office (government).",
            "ex": "He d'anar a l'oficina.",
            "exEn": "I have to go to the office."
          },
          {
            "id": "paperwork-002",
            "ca": "Número NIE",
            "en": "NIE (national ID number)",
            "hint": "Useful in Catalonia/Spain administrative contexts; requirements vary by situation. Meaning: NIE (national ID number).",
            "ex": "Necessito un número NIE.",
            "exEn": "I need a NIE number."
          },
          {
            "id": "paperwork-003",
            "ca": "aplicació",
            "en": "application",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: application.",
            "ex": "He de presentar una sol·licitud.",
            "exEn": "I have to submit an application."
          },
          {
            "id": "paperwork-004",
            "ca": "presentar una sol·licitud",
            "en": "to submit an application",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: to submit an application.",
            "ex": "On puc sol·licitar?",
            "exEn": "Where can I submit the application?"
          },
          {
            "id": "paperwork-005",
            "ca": "document",
            "en": "document",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: document.",
            "ex": "si us plau, mostra el document.",
            "exEn": "Please show some ID."
          },
          {
            "id": "paperwork-006",
            "ca": "carnet d'identitat",
            "en": "ID card",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: ID card.",
            "ex": "No tinc DNI.",
            "exEn": "I don't have an ID card."
          },
          {
            "id": "paperwork-007",
            "ca": "passaport",
            "en": "passport",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: passport.",
            "ex": "Estic demanant un passaport.",
            "exEn": "Your passport, please."
          },
          {
            "id": "paperwork-008",
            "ca": "targeta de residència",
            "en": "residence card",
            "hint": "Use euros and cèntims for prices in Catalonia. Meaning: residence card.",
            "ex": "Estic esperant la meva targeta de residència.",
            "exEn": "I'm waiting for my residence card."
          },
          {
            "id": "paperwork-009",
            "ca": "forma",
            "en": "form",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: form.",
            "ex": "Com omplir aquest formulari?",
            "exEn": "How do I fill in this form?"
          },
          {
            "id": "paperwork-010",
            "ca": "per omplir",
            "en": "to fill in",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: to fill in.",
            "ex": "si us plau, omple el formulari.",
            "exEn": "Please fill in the form."
          },
          {
            "id": "paperwork-011",
            "ca": "signatura",
            "en": "signature",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: signature.",
            "ex": "si us plau, signa aquí.",
            "exEn": "Your signature here, please."
          },
          {
            "id": "paperwork-012",
            "ca": "signe",
            "en": "to sign",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: to sign.",
            "ex": "On he de signar?",
            "exEn": "Where do I sign?"
          },
          {
            "id": "paperwork-013",
            "ca": "termini",
            "en": "deadline / appointment date",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: deadline / appointment date.",
            "ex": "Quin és el termini?",
            "exEn": "What's the deadline?"
          },
          {
            "id": "paperwork-014",
            "ca": "concertar una cita",
            "en": "to book an appointment",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: to book an appointment.",
            "ex": "M'agradaria concertar una cita.",
            "exEn": "I'd like to book an appointment."
          },
          {
            "id": "paperwork-015",
            "ca": "cua",
            "en": "queue / line",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: queue / line.",
            "ex": "He de fer cua.",
            "exEn": "I have to stand in the queue."
          },
          {
            "id": "paperwork-016",
            "ca": "bitllet",
            "en": "queue ticket (number)",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: queue ticket (number).",
            "ex": "si us plau, agafeu el número.",
            "exEn": "Please take a queue ticket."
          },
          {
            "id": "paperwork-017",
            "ca": "finestra",
            "en": "service window / counter",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: service window / counter.",
            "ex": "si us plau, aneu a la finestra número tres.",
            "exEn": "Please go to window number three."
          },
          {
            "id": "paperwork-018",
            "ca": "quota",
            "en": "fee / charge",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: fee / charge.",
            "ex": "Quina és la quota?",
            "exEn": "What's the fee?"
          },
          {
            "id": "paperwork-019",
            "ca": "certificat",
            "en": "certificate / official confirmation",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: certificate / official confirmation.",
            "ex": "Necessito un certificat de treball.",
            "exEn": "I need a certificate from work."
          },
          {
            "id": "paperwork-020",
            "ca": "Necessito...?",
            "en": "Do I need...?",
            "hint": "Useful paperwork vocabulary in standard Central Catalan. Meaning: Do I need...?.",
            "ex": "Necessito traducció?",
            "exEn": "Do I need a translation?"
          }
        ]
      },
      {
        "id": "a2-restaurant",
        "name": "At the restaurant",
        "emoji": "🍽️",
        "description": "Booking, ordering and paying",
        "cards": [
          {
            "id": "restaurant-001",
            "ca": "taula per a dues persones",
            "en": "a table for two",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: a table for two.",
            "ex": "M'agradaria una taula per a dos, si us plau.",
            "exEn": "A table for two, please."
          },
          {
            "id": "restaurant-002",
            "ca": "reserva",
            "en": "reservation",
            "hint": "Useful at the restaurant vocabulary in standard Central Catalan. Meaning: reservation.",
            "ex": "Tinc una reserva a nom de Puig.",
            "exEn": "I have a reservation under Puig."
          },
          {
            "id": "restaurant-003",
            "ca": "targeta/menú",
            "en": "menu",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: menu.",
            "ex": "M'agradaria una targeta, si us plau.",
            "exEn": "The menu, please."
          },
          {
            "id": "restaurant-004",
            "ca": "aperitiu",
            "en": "starter / appetiser",
            "hint": "Useful at the restaurant vocabulary in standard Central Catalan. Meaning: starter / appetiser.",
            "ex": "Per un aperitiu, m'agradaria una mica de sopa.",
            "exEn": "For a starter, I'll have soup."
          },
          {
            "id": "restaurant-005",
            "ca": "plat principal",
            "en": "main course",
            "hint": "Useful at the restaurant vocabulary in standard Central Catalan. Meaning: main course.",
            "ex": "Què recomanes per al plat principal?",
            "exEn": "What do you recommend for the main?"
          },
          {
            "id": "restaurant-006",
            "ca": "sopa",
            "en": "soup",
            "hint": "Useful at the restaurant vocabulary in standard Central Catalan. Meaning: soup.",
            "ex": "M'agradaria una mica de sopa de tomàquet.",
            "exEn": "Tomato soup, please."
          },
          {
            "id": "restaurant-007",
            "ca": "postres",
            "en": "dessert",
            "hint": "Useful at the restaurant vocabulary in standard Central Catalan. Meaning: dessert.",
            "ex": "De postres, m'agradaria un gelat.",
            "exEn": "For dessert, I'll have ice cream."
          },
          {
            "id": "restaurant-008",
            "ca": "Per mi...",
            "en": "For me... (ordering)",
            "hint": "Useful at the restaurant vocabulary in standard Central Catalan. Meaning: For me... (ordering).",
            "ex": "Pollastre per a mi, si us plau.",
            "exEn": "The chicken for me, please."
          },
          {
            "id": "restaurant-009",
            "ca": "Sóc vegetarià",
            "en": "I'm vegetarian",
            "hint": "Useful at the restaurant vocabulary in standard Central Catalan. Meaning: I'm vegetarian.",
            "ex": "Sóc vegetarià.",
            "exEn": "I'm vegetarian."
          },
          {
            "id": "restaurant-010",
            "ca": "Aquest plat és picant?",
            "en": "Is this dish spicy?",
            "hint": "Useful at the restaurant vocabulary in standard Central Catalan. Meaning: Is this dish spicy?.",
            "ex": "Aquest plat és picant?",
            "exEn": "Is this dish spicy?"
          },
          {
            "id": "restaurant-011",
            "ca": "Hi ha taula disponible?",
            "en": "Is there a free table?",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: Is there a free table?.",
            "ex": "Bon dia, hi ha taula disponible?",
            "exEn": "Hello, is there a free table?"
          },
          {
            "id": "restaurant-012",
            "ca": "Puc demanar...?",
            "en": "Could I have...?",
            "hint": "Useful at the restaurant vocabulary in standard Central Catalan. Meaning: Could I have...?.",
            "ex": "Puc prendre una mica d'aigua si us plau?",
            "exEn": "Could I have some water?"
          },
          {
            "id": "restaurant-013",
            "ca": "forquilla/ganivet/cullera",
            "en": "fork / knife / spoon",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: fork / knife / spoon.",
            "ex": "Trobo a faltar la forquilla.",
            "exEn": "I'm missing a fork."
          },
          {
            "id": "restaurant-014",
            "ca": "Estava deliciós",
            "en": "It was delicious",
            "hint": "Useful at the restaurant vocabulary in standard Central Catalan. Meaning: It was delicious.",
            "ex": "Gràcies, estava deliciós!",
            "exEn": "Thank you, it was delicious!"
          },
          {
            "id": "restaurant-015",
            "ca": "Bill, si us plau",
            "en": "The bill, please",
            "hint": "This is a polite everyday form in Catalonia. Meaning: The bill, please.",
            "ex": "M'agradaria la factura, si us plau.",
            "exEn": "The bill, please."
          },
          {
            "id": "restaurant-016",
            "ca": "Paguem junts",
            "en": "We're paying together",
            "hint": "Useful at the restaurant vocabulary in standard Central Catalan. Meaning: We're paying together.",
            "ex": "Paguem junts.",
            "exEn": "We're paying together."
          },
          {
            "id": "restaurant-017",
            "ca": "Paguem per separat",
            "en": "We're paying separately",
            "hint": "Useful at the restaurant vocabulary in standard Central Catalan. Meaning: We're paying separately.",
            "ex": "Podem pagar per separat?",
            "exEn": "Can we pay separately?"
          },
          {
            "id": "restaurant-018",
            "ca": "propina",
            "en": "tip",
            "hint": "Useful at the restaurant vocabulary in standard Central Catalan. Meaning: tip.",
            "ex": "Deixaré una propina.",
            "exEn": "I'll leave a tip."
          },
          {
            "id": "restaurant-019",
            "ca": "per anar",
            "en": "to take away",
            "hint": "Useful at the restaurant vocabulary in standard Central Catalan. Meaning: to take away.",
            "ex": "Puc portar això per anar?",
            "exEn": "Can I take this away?"
          },
          {
            "id": "restaurant-020",
            "ca": "Gaudeix del teu àpat",
            "en": "Enjoy your meal",
            "hint": "Masculine nouns usually take el or un. Meaning: Enjoy your meal.",
            "ex": "Gaudeix del teu àpat!",
            "exEn": "Enjoy your meal!"
          }
        ]
      },
      {
        "id": "a2-housing",
        "name": "Housing",
        "emoji": "🏠",
        "description": "Renting a flat and fixing everyday problems",
        "cards": [
          {
            "id": "housing-001",
            "ca": "apartament",
            "en": "flat / apartment",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: flat / apartment.",
            "ex": "Llogo un pis al centre.",
            "exEn": "I rent a flat in the centre."
          },
          {
            "id": "housing-002",
            "ca": "lloguer",
            "en": "rent / rental",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: rent / rental.",
            "ex": "Quant costa el lloguer?",
            "exEn": "How much is the rent?"
          },
          {
            "id": "housing-003",
            "ca": "lloguer",
            "en": "building service charge",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: building service charge.",
            "ex": "El lloguer és separat.",
            "exEn": "The service charge is separate."
          },
          {
            "id": "housing-004",
            "ca": "dipòsit",
            "en": "deposit",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: deposit.",
            "ex": "Quant és el dipòsit?",
            "exEn": "How much is the deposit?"
          },
          {
            "id": "housing-005",
            "ca": "acord",
            "en": "contract",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: contract.",
            "ex": "He de signar un contracte.",
            "exEn": "I have to sign the contract."
          },
          {
            "id": "housing-006",
            "ca": "propietari",
            "en": "owner / landlord",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: owner / landlord.",
            "ex": "Trucaré al propietari.",
            "exEn": "I'll call the landlord."
          },
          {
            "id": "housing-007",
            "ca": "factures",
            "en": "bills / utilities",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: bills / utilities.",
            "ex": "S'inclouen les factures?",
            "exEn": "Are the bills included?"
          },
          {
            "id": "housing-008",
            "ca": "actual",
            "en": "electricity",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: electricity.",
            "ex": "No tinc electricitat a la cuina.",
            "exEn": "There's no electricity in the kitchen."
          },
          {
            "id": "housing-009",
            "ca": "aigua",
            "en": "water (utility)",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: water (utility).",
            "ex": "No hi ha aigua calenta.",
            "exEn": "There's no hot water."
          },
          {
            "id": "housing-010",
            "ca": "calefacció",
            "en": "heating",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: heating.",
            "ex": "La calefacció no funciona.",
            "exEn": "The heating isn't working."
          },
          {
            "id": "housing-011",
            "ca": "Internet",
            "en": "internet",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: internet.",
            "ex": "Internet està inclòs en el preu?",
            "exEn": "Is internet included in the price?"
          },
          {
            "id": "housing-012",
            "ca": "claus",
            "en": "keys",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: keys.",
            "ex": "He perdut les claus.",
            "exEn": "I've lost my keys."
          },
          {
            "id": "housing-013",
            "ca": "Alguna cosa no funciona",
            "en": "Something isn't working",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: Something isn't working.",
            "ex": "Ho sento, alguna cosa no funciona.",
            "exEn": "Sorry, something isn't working."
          },
          {
            "id": "housing-014",
            "ca": "es va trencar",
            "en": "it broke / is broken",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: it broke / is broken.",
            "ex": "El forn està trencat.",
            "exEn": "The oven has broken."
          },
          {
            "id": "housing-015",
            "ca": "arreglar",
            "en": "to repair / fix",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: to repair / fix.",
            "ex": "Pots arreglar això?",
            "exEn": "Can you fix this?"
          },
          {
            "id": "housing-016",
            "ca": "cuina",
            "en": "kitchen",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: kitchen.",
            "ex": "La cuina és petita però còmoda.",
            "exEn": "The kitchen is small but comfortable."
          },
          {
            "id": "housing-017",
            "ca": "bany",
            "en": "bathroom",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: bathroom.",
            "ex": "El bany està a l'esquerra.",
            "exEn": "The bathroom is on the left."
          },
          {
            "id": "housing-018",
            "ca": "dormitori",
            "en": "bedroom",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: bedroom.",
            "ex": "L'apartament té dos dormitoris.",
            "exEn": "The flat has two bedrooms."
          },
          {
            "id": "housing-019",
            "ca": "veí",
            "en": "neighbour",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: neighbour.",
            "ex": "El meu veí és agradable.",
            "exEn": "My neighbour is nice."
          },
          {
            "id": "housing-020",
            "ca": "moblat",
            "en": "furnished",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: furnished.",
            "ex": "L'apartament està moblat?",
            "exEn": "Is the flat furnished?"
          },
          {
            "id": "housing-021",
            "ca": "habitació",
            "en": "room",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: room.",
            "ex": "Busco un apartament de dues habitacions.",
            "exEn": "I'm looking for a two-room flat."
          },
          {
            "id": "housing-022",
            "ca": "sala d'estar",
            "en": "living room",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: living room.",
            "ex": "Al vespre mirem una pel·lícula a la sala d'estar.",
            "exEn": "In the evening we watch a film in the living room."
          },
          {
            "id": "housing-023",
            "ca": "sala",
            "en": "hallway / entrance hall",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: hallway / entrance hall.",
            "ex": "Deixa les teves sabates al passadís.",
            "exEn": "Leave your shoes in the hallway."
          },
          {
            "id": "housing-024",
            "ca": "balcó",
            "en": "balcony",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: balcony.",
            "ex": "A l'estiu esmorzo al balcó.",
            "exEn": "In summer I eat breakfast on the balcony."
          },
          {
            "id": "housing-025",
            "ca": "mobles",
            "en": "furniture",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: furniture.",
            "ex": "Hem comprat mobles nous per a la sala d'estar.",
            "exEn": "We bought new furniture for the living room."
          },
          {
            "id": "housing-026",
            "ca": "llit",
            "en": "bed",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: bed.",
            "ex": "El llit del dormitori és còmode.",
            "exEn": "The bed in the bedroom is comfortable."
          },
          {
            "id": "housing-027",
            "ca": "taula",
            "en": "table",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: table.",
            "ex": "El sopar és a taula.",
            "exEn": "Dinner is on the table."
          },
          {
            "id": "housing-028",
            "ca": "cadira",
            "en": "chair",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: chair.",
            "ex": "A la taula hi ha quatre cadires.",
            "exEn": "There are four chairs at the table."
          },
          {
            "id": "housing-029",
            "ca": "sofà",
            "en": "sofa / couch",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: sofa / couch.",
            "ex": "El gat dorm al sofà.",
            "exEn": "The cat is sleeping on the sofa."
          },
          {
            "id": "housing-030",
            "ca": "Armari",
            "en": "wardrobe",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: wardrobe.",
            "ex": "Penja l'abric a l'armari.",
            "exEn": "Hang your coat in the wardrobe."
          },
          {
            "id": "housing-031",
            "ca": "nevera",
            "en": "fridge",
            "hint": "Notice the Catalan past-time wording used for simple stories. Meaning: fridge.",
            "ex": "La llet està a la nevera.",
            "exEn": "The milk is in the fridge."
          },
          {
            "id": "housing-032",
            "ca": "estufa",
            "en": "cooker / stove",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: cooker / stove.",
            "ex": "Encenem el fogó i cuinaré la pasta.",
            "exEn": "Turn on the stove, I'll cook pasta."
          },
          {
            "id": "housing-033",
            "ca": "rentadora",
            "en": "washing machine",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: washing machine.",
            "ex": "La rentadora és al bany.",
            "exEn": "The washing machine is in the bathroom."
          },
          {
            "id": "housing-034",
            "ca": "rentavaixelles",
            "en": "dishwasher",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: dishwasher.",
            "ex": "Posaré els plats al rentavaixelles.",
            "exEn": "I'll put the plates in the dishwasher."
          },
          {
            "id": "housing-035",
            "ca": "finestra",
            "en": "window",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: window.",
            "ex": "Obre la finestra, està atapeït.",
            "exEn": "Open the window, it's stuffy."
          },
          {
            "id": "housing-036",
            "ca": "llum",
            "en": "lamp / light",
            "hint": "Useful housing vocabulary in standard Central Catalan. Meaning: lamp / light.",
            "ex": "El llum del dormitori es va cremar.",
            "exEn": "The lamp in the bedroom has burnt out."
          }
        ]
      },
      {
        "id": "a2-daily-routine",
        "name": "Daily life and routine",
        "emoji": "🔄",
        "description": "Habits, chores and frequency",
        "cards": [
          {
            "id": "daily-routine-001",
            "ca": "normalment",
            "en": "usually",
            "hint": "Useful daily life and routine vocabulary in standard Central Catalan. Meaning: usually.",
            "ex": "Normalment em llevo a les set del matí.",
            "exEn": "I usually get up at seven in the morning."
          },
          {
            "id": "daily-routine-002",
            "ca": "cada dia",
            "en": "every day",
            "hint": "Useful daily life and routine vocabulary in standard Central Catalan. Meaning: every day.",
            "ex": "Bec dos cafès cada dia.",
            "exEn": "I drink two coffees every day."
          },
          {
            "id": "daily-routine-003",
            "ca": "sovint / poques vegades",
            "en": "often / rarely",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: often / rarely.",
            "ex": "Llegeixo molt, però rarament veig la televisió.",
            "exEn": "I often read, but I rarely watch TV."
          },
          {
            "id": "daily-routine-004",
            "ca": "anar a casa",
            "en": "to return home",
            "hint": "Useful daily life and routine vocabulary in standard Central Catalan. Meaning: to return home.",
            "ex": "Normalment torno a casa després de les 4 de la tarda.",
            "exEn": "I usually return home after 4 PM."
          },
          {
            "id": "daily-routine-005",
            "ca": "per netejar",
            "en": "to clean",
            "hint": "Useful daily life and routine vocabulary in standard Central Catalan. Meaning: to clean.",
            "ex": "Dissabte neto tot l'apartament.",
            "exEn": "On Saturday I clean the whole flat."
          },
          {
            "id": "daily-routine-006",
            "ca": "rentar",
            "en": "to do laundry",
            "hint": "Useful daily life and routine vocabulary in standard Central Catalan. Meaning: to do laundry.",
            "ex": "He de rentar la roba avui.",
            "exEn": "I have to wash clothes today."
          },
          {
            "id": "daily-routine-007",
            "ca": "descansar",
            "en": "to rest",
            "hint": "Useful daily life and routine vocabulary in standard Central Catalan. Meaning: to rest.",
            "ex": "Al vespre per fi puc descansar.",
            "exEn": "In the evening I can finally rest."
          },
          {
            "id": "daily-routine-008",
            "ca": "anar a dormir",
            "en": "to go to sleep",
            "hint": "Useful daily life and routine vocabulary in standard Central Catalan. Meaning: to go to sleep.",
            "ex": "Me'n vaig al llit cap a la mitjanit.",
            "exEn": "I go to sleep around midnight."
          },
          {
            "id": "daily-routine-009",
            "ca": "adormir-se",
            "en": "to fall asleep",
            "hint": "Useful daily life and routine vocabulary in standard Central Catalan. Meaning: to fall asleep.",
            "ex": "M'adormo molt ràpidament.",
            "exEn": "I fall asleep very fast."
          },
          {
            "id": "daily-routine-010",
            "ca": "els dies laborables",
            "en": "on weekdays",
            "hint": "Useful daily life and routine vocabulary in standard Central Catalan. Meaning: on weekdays.",
            "ex": "Estic molt ocupat els dies feiners.",
            "exEn": "On weekdays I am very busy."
          },
          {
            "id": "daily-routine-011",
            "ca": "horari",
            "en": "schedule",
            "hint": "Useful daily life and routine vocabulary in standard Central Catalan. Meaning: schedule.",
            "ex": "La meva agenda és molt ajustada.",
            "exEn": "My schedule is very tight."
          },
          {
            "id": "daily-routine-012",
            "ca": "tasques domèstiques",
            "en": "chores",
            "hint": "Useful daily life and routine vocabulary in standard Central Catalan. Meaning: chores.",
            "ex": "No m'agraden les tasques de casa.",
            "exEn": "I don't like household chores."
          }
        ]
      },
      {
        "id": "a2-home-family",
        "name": "Home and family",
        "emoji": "🛋️",
        "description": "Family relations, rooms and furniture",
        "cards": [
          {
            "id": "home-family-001",
            "ca": "pares",
            "en": "parents",
            "hint": "Useful home and family vocabulary in standard Central Catalan. Meaning: parents.",
            "ex": "Els meus pares viuen al camp.",
            "exEn": "My parents live in the countryside."
          },
          {
            "id": "home-family-002",
            "ca": "germans",
            "en": "siblings",
            "hint": "Useful home and family vocabulary in standard Central Catalan. Meaning: siblings.",
            "ex": "Tens algun germà?",
            "exEn": "Do you have any siblings?"
          },
          {
            "id": "home-family-003",
            "ca": "oncle/tia",
            "en": "uncle / aunt",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: uncle / aunt.",
            "ex": "Aquest cap de setmana vaig a visitar la meva tia.",
            "exEn": "I am visiting my aunt this weekend."
          },
          {
            "id": "home-family-004",
            "ca": "avis",
            "en": "grandparents",
            "hint": "Useful home and family vocabulary in standard Central Catalan. Meaning: grandparents.",
            "ex": "Els meus avis tenen un gos petit.",
            "exEn": "My grandparents have a small dog."
          },
          {
            "id": "home-family-005",
            "ca": "matrimoni",
            "en": "married couple / marriage",
            "hint": "Useful home and family vocabulary in standard Central Catalan. Meaning: married couple / marriage.",
            "ex": "Són una parella feliçment casada.",
            "exEn": "They are a happy married couple."
          },
          {
            "id": "home-family-006",
            "ca": "sala d'estar",
            "en": "living room",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: living room.",
            "ex": "Al vespre ens asseiem a la sala d'estar.",
            "exEn": "In the evening we sit in the living room."
          },
          {
            "id": "home-family-007",
            "ca": "mobles",
            "en": "furniture",
            "hint": "Useful home and family vocabulary in standard Central Catalan. Meaning: furniture.",
            "ex": "Hem comprat mobles de dormitori nous.",
            "exEn": "We bought new furniture for the bedroom."
          },
          {
            "id": "home-family-008",
            "ca": "Armari",
            "en": "wardrobe",
            "hint": "Useful home and family vocabulary in standard Central Catalan. Meaning: wardrobe.",
            "ex": "El meu armari està ple de roba.",
            "exEn": "My wardrobe is full of clothes."
          },
          {
            "id": "home-family-009",
            "ca": "sofà",
            "en": "sofa",
            "hint": "Useful home and family vocabulary in standard Central Catalan. Meaning: sofa.",
            "ex": "Aquest sofà és molt còmode.",
            "exEn": "This sofa is very comfortable."
          },
          {
            "id": "home-family-010",
            "ca": "nevera",
            "en": "fridge",
            "hint": "Notice the Catalan past-time wording used for simple stories. Meaning: fridge.",
            "ex": "No hi ha llet a la nevera.",
            "exEn": "There is no milk in the fridge."
          },
          {
            "id": "home-family-011",
            "ca": "rentadora",
            "en": "washing machine",
            "hint": "Useful home and family vocabulary in standard Central Catalan. Meaning: washing machine.",
            "ex": "La rentadora es va trencar de nou.",
            "exEn": "The washing machine broke again."
          },
          {
            "id": "home-family-012",
            "ca": "rentavaixelles",
            "en": "dishwasher",
            "hint": "Useful home and family vocabulary in standard Central Catalan. Meaning: dishwasher.",
            "ex": "He de descarregar el rentavaixelles.",
            "exEn": "I have to unload the dishwasher."
          },
          {
            "id": "home-family-013",
            "ca": "aspiradora",
            "en": "vacuum cleaner",
            "hint": "Useful home and family vocabulary in standard Central Catalan. Meaning: vacuum cleaner.",
            "ex": "On vas amagar l'aspiradora?",
            "exEn": "Where did you hide the vacuum?"
          },
          {
            "id": "home-family-014",
            "ca": "moure's",
            "en": "moving house",
            "hint": "Useful home and family vocabulary in standard Central Catalan. Meaning: moving house.",
            "ex": "Moure's és molt estrès.",
            "exEn": "Moving house is a big stress."
          }
        ]
      },
      {
        "id": "a2-health-body",
        "name": "Health and body",
        "emoji": "🩺",
        "description": "Body parts, health and doctor visits",
        "cards": [
          {
            "id": "health-body-001",
            "ca": "metge",
            "en": "doctor",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: doctor.",
            "ex": "He de demanar cita amb el metge.",
            "exEn": "I need to make an appointment with a doctor."
          },
          {
            "id": "health-body-002",
            "ca": "dentista",
            "en": "dentist",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: dentist.",
            "ex": "Em fa mal la dent, vaig al dentista.",
            "exEn": "My tooth hurts, I'm going to the dentist."
          },
          {
            "id": "health-body-003",
            "ca": "clínica",
            "en": "clinic / health centre",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: clinic / health centre.",
            "ex": "La clínica està oberta fins a les 6 de la tarda.",
            "exEn": "The clinic is open until 6 PM."
          },
          {
            "id": "health-body-004",
            "ca": "prova",
            "en": "examination / test",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: examination / test.",
            "ex": "El metge va ordenar proves addicionals.",
            "exEn": "The doctor ordered additional tests."
          },
          {
            "id": "health-body-005",
            "ca": "derivació",
            "en": "referral",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: referral.",
            "ex": "Tinc una derivació a un especialista.",
            "exEn": "I have a referral to a specialist."
          },
          {
            "id": "health-body-006",
            "ca": "cap",
            "en": "head",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: head.",
            "ex": "Em fa molt mal el cap.",
            "exEn": "My head hurts terribly."
          },
          {
            "id": "health-body-007",
            "ca": "Panxa",
            "en": "stomach / belly",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: stomach / belly.",
            "ex": "No puc menjar, em fa mal la panxa.",
            "exEn": "I can't eat, my stomach hurts."
          },
          {
            "id": "health-body-008",
            "ca": "enrere",
            "en": "back",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: back.",
            "ex": "Em fa mal l'esquena d'estar assegut.",
            "exEn": "My back hurts from sitting."
          },
          {
            "id": "health-body-009",
            "ca": "mà",
            "en": "arm / hand",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: arm / hand.",
            "ex": "Em vaig trencar el braç dret.",
            "exEn": "I broke my right arm."
          },
          {
            "id": "health-body-010",
            "ca": "cama",
            "en": "leg",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: leg.",
            "ex": "Em fa mal la cama esquerra.",
            "exEn": "My left leg hurts."
          },
          {
            "id": "health-body-011",
            "ca": "ull/ulls",
            "en": "eye / eyes",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: eye / eyes.",
            "ex": "Tinc els ulls blaus.",
            "exEn": "I have blue eyes."
          },
          {
            "id": "health-body-012",
            "ca": "sang",
            "en": "blood",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: blood.",
            "ex": "Tinc por que em treguin sang.",
            "exEn": "I'm afraid of drawing blood."
          },
          {
            "id": "health-body-013",
            "ca": "gola",
            "en": "throat",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: throat.",
            "ex": "Em fa mal la gola i em costa empassar.",
            "exEn": "My throat hurts and it's hard to swallow."
          },
          {
            "id": "health-body-014",
            "ca": "dent/dents",
            "en": "tooth / teeth",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: tooth / teeth.",
            "ex": "Em rento les dents dues vegades al dia.",
            "exEn": "I brush my teeth twice a day."
          },
          {
            "id": "health-body-015",
            "ca": "orella/orelles",
            "en": "ear / ears",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: ear / ears.",
            "ex": "Em fa mal l'orella des del matí.",
            "exEn": "My ear has been hurting since morning."
          },
          {
            "id": "health-body-016",
            "ca": "nas",
            "en": "nose",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: nose.",
            "ex": "Tinc secreció nasal i un nas tapat.",
            "exEn": "I have a runny and blocked nose."
          },
          {
            "id": "health-body-017",
            "ca": "cor",
            "en": "heart",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: heart.",
            "ex": "El meu cor batega ràpid després de córrer.",
            "exEn": "After running my heart beats fast."
          },
          {
            "id": "health-body-018",
            "ca": "estómac",
            "en": "stomach (the organ)",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: stomach (the organ).",
            "ex": "Tinc problemes estomacals després de menjar aliments grassos.",
            "exEn": "I have stomach problems after greasy food."
          },
          {
            "id": "health-body-019",
            "ca": "os/ossos",
            "en": "bone / bones",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: bone / bones.",
            "ex": "Vaig caure, però no em vaig trencar cap os.",
            "exEn": "I fell, but I didn't break any bones."
          },
          {
            "id": "health-body-020",
            "ca": "genoll",
            "en": "knee",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: knee.",
            "ex": "Em fa mal el genoll quan corro.",
            "exEn": "My knee hurts when I run."
          },
          {
            "id": "health-body-021",
            "ca": "peu",
            "en": "foot",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: foot.",
            "ex": "Tinc una ferida al peu.",
            "exEn": "I have a cut on my foot."
          },
          {
            "id": "health-body-022",
            "ca": "dit",
            "en": "finger / toe",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: finger / toe.",
            "ex": "Em vaig tallar el dit.",
            "exEn": "I cut my finger."
          },
          {
            "id": "health-body-023",
            "ca": "coll",
            "en": "neck",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: neck.",
            "ex": "Em feia mal el coll al matí.",
            "exEn": "My neck hurt this morning."
          },
          {
            "id": "health-body-024",
            "ca": "braç",
            "en": "shoulder",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: shoulder.",
            "ex": "Porto la meva bossa a una espatlla.",
            "exEn": "I carry the bag on one shoulder."
          },
          {
            "id": "health-body-025",
            "ca": "pell",
            "en": "skin",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: skin.",
            "ex": "Tinc la pell seca a l'hivern.",
            "exEn": "In winter I have dry skin."
          },
          {
            "id": "health-body-026",
            "ca": "Com et sents?",
            "en": "How are you feeling?",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: How are you feeling?.",
            "ex": "Com et sents avui?",
            "exEn": "How are you feeling today?"
          },
          {
            "id": "health-body-027",
            "ca": "emmalaltir",
            "en": "to be sick / ill",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: to be sick / ill.",
            "ex": "Sovint em poso malalt a l'hivern.",
            "exEn": "I am often sick in winter."
          },
          {
            "id": "health-body-028",
            "ca": "millorar",
            "en": "to get well",
            "hint": "Useful health and body vocabulary in standard Central Catalan. Meaning: to get well.",
            "ex": "Preneu els vostres medicaments i milloreu ràpidament!",
            "exEn": "Take your medicine and get well soon!"
          }
        ]
      },
      {
        "id": "a2-food-shopping",
        "name": "Food and shopping",
        "emoji": "🥟",
        "description": "Catalan food, recipes and grocery shopping",
        "cards": [
          {
            "id": "food-shopping-001",
            "ca": "canelons",
            "en": "cannelloni",
            "hint": "A familiar Catalan dish, especially around Sant Esteve. Meaning: cannelloni.",
            "ex": "Els canelons són el meu plat preferit.",
            "exEn": "Cannelloni are my favorite dish."
          },
          {
            "id": "food-shopping-002",
            "ca": "botifarra amb mongetes",
            "en": "Catalan sausage with beans",
            "hint": "A common Catalan dish; botifarra is a traditional sausage. Meaning: Catalan sausage with beans.",
            "ex": "Per dinar hi ha botifarra amb mongetes.",
            "exEn": "For lunch there is Catalan sausage with beans."
          },
          {
            "id": "food-shopping-003",
            "ca": "recepta",
            "en": "recipe",
            "hint": "Useful food and shopping vocabulary in standard Central Catalan. Meaning: recipe.",
            "ex": "Tens una recepta fantàstica per a aquest pastís.",
            "exEn": "You have a great recipe for this cake."
          },
          {
            "id": "food-shopping-004",
            "ca": "ingredients",
            "en": "ingredients",
            "hint": "Useful food and shopping vocabulary in standard Central Catalan. Meaning: ingredients.",
            "ex": "He de comprar tots els ingredients per a la sopa.",
            "exEn": "I need to buy all the ingredients for the soup."
          },
          {
            "id": "food-shopping-005",
            "ca": "per cuinar",
            "en": "to cook",
            "hint": "Useful food and shopping vocabulary in standard Central Catalan. Meaning: to cook.",
            "ex": "M'encanta cuinar els caps de setmana.",
            "exEn": "I love to cook on weekends."
          },
          {
            "id": "food-shopping-006",
            "ca": "fregir",
            "en": "to fry",
            "hint": "Useful food and shopping vocabulary in standard Central Catalan. Meaning: to fry.",
            "ex": "Heu de sofregir la ceba en una paella.",
            "exEn": "You need to fry the onion in a pan."
          },
          {
            "id": "food-shopping-007",
            "ca": "cinc",
            "en": "to bake",
            "hint": "Useful food and shopping vocabulary in standard Central Catalan. Meaning: to bake.",
            "ex": "Sovint faig pa a casa.",
            "exEn": "I often bake bread at home."
          },
          {
            "id": "food-shopping-008",
            "ca": "mercat/mercat",
            "en": "farmer's market",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: farmer's market.",
            "ex": "Compro verdures al mercat.",
            "exEn": "I buy vegetables at the market."
          },
          {
            "id": "food-shopping-009",
            "ca": "verduleria",
            "en": "greengrocer's",
            "hint": "Useful food and shopping vocabulary in standard Central Catalan. Meaning: greengrocer's.",
            "ex": "Vaig a la botiga de queviures a comprar tomàquets.",
            "exEn": "I'm going to the greengrocer for tomatoes."
          },
          {
            "id": "food-shopping-010",
            "ca": "fleca",
            "en": "bakery",
            "hint": "Useful food and shopping vocabulary in standard Central Catalan. Meaning: bakery.",
            "ex": "El pa fresc de la fleca fa una bona olor.",
            "exEn": "Fresh bread from the bakery smells beautiful."
          },
          {
            "id": "food-shopping-011",
            "ca": "fresc",
            "en": "fresh",
            "hint": "Useful food and shopping vocabulary in standard Central Catalan. Meaning: fresh.",
            "ex": "Aquestes fruites són molt fresques.",
            "exEn": "These fruits are very fresh."
          },
          {
            "id": "food-shopping-012",
            "ca": "llauna/pot",
            "en": "can / jar",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: can / jar.",
            "ex": "Vaig comprar una llauna de mongetes i un pot de melmelada.",
            "exEn": "I bought a can of beans and a jar of jam."
          }
        ]
      },
      {
        "id": "a2-travel-holidays",
        "name": "Travel and holidays",
        "emoji": "✈️",
        "description": "Transport, accommodation and weather",
        "cards": [
          {
            "id": "travel-holidays-001",
            "ca": "aeroport",
            "en": "airport",
            "hint": "Useful travel and holidays vocabulary in standard Central Catalan. Meaning: airport.",
            "ex": "Estem agafant un taxi fins a l'aeroport.",
            "exEn": "We are taking a taxi to the airport."
          },
          {
            "id": "travel-holidays-002",
            "ca": "avió",
            "en": "airplane",
            "hint": "Useful travel and holidays vocabulary in standard Central Catalan. Meaning: airplane.",
            "ex": "L'avió s'enlaira a les vuit.",
            "exEn": "The plane takes off at eight."
          },
          {
            "id": "travel-holidays-003",
            "ca": "tren",
            "en": "train",
            "hint": "Useful travel and holidays vocabulary in standard Central Catalan. Meaning: train.",
            "ex": "Prefereixo viatjar amb tren que no pas amb autobús.",
            "exEn": "I prefer traveling by train rather than by bus."
          },
          {
            "id": "travel-holidays-004",
            "ca": "maleta",
            "en": "suitcase",
            "hint": "Useful travel and holidays vocabulary in standard Central Catalan. Meaning: suitcase.",
            "ex": "La meva maleta és molt pesada.",
            "exEn": "My suitcase is very heavy."
          },
          {
            "id": "travel-holidays-005",
            "ca": "equipatge",
            "en": "luggage",
            "hint": "Useful travel and holidays vocabulary in standard Central Catalan. Meaning: luggage.",
            "ex": "On puc deixar el meu equipatge?",
            "exEn": "Where can I leave my luggage?"
          },
          {
            "id": "travel-holidays-006",
            "ca": "bitllet d'avió",
            "en": "flight ticket",
            "hint": "Useful travel and holidays vocabulary in standard Central Catalan. Meaning: flight ticket.",
            "ex": "Vaig comprar bitllets d'avió a Espanya.",
            "exEn": "I bought flight tickets to Spain."
          },
          {
            "id": "travel-holidays-007",
            "ca": "llibre",
            "en": "to book / reserve",
            "hint": "Useful travel and holidays vocabulary in standard Central Catalan. Meaning: to book / reserve.",
            "ex": "Vull reservar una habitació per dues nits.",
            "exEn": "I want to book a room for two nights."
          },
          {
            "id": "travel-holidays-008",
            "ca": "allotjament",
            "en": "accommodation",
            "hint": "Useful travel and holidays vocabulary in standard Central Catalan. Meaning: accommodation.",
            "ex": "Busquem allotjament econòmic al centre.",
            "exEn": "We are looking for cheap accommodation in the center."
          },
          {
            "id": "travel-holidays-009",
            "ca": "hotel",
            "en": "hotel",
            "hint": "Useful travel and holidays vocabulary in standard Central Catalan. Meaning: hotel.",
            "ex": "Aquest hotel té cinc estrelles.",
            "exEn": "This hotel has five stars."
          },
          {
            "id": "travel-holidays-010",
            "ca": "muntanyes",
            "en": "mountains",
            "hint": "Useful travel and holidays vocabulary in standard Central Catalan. Meaning: mountains.",
            "ex": "A l'estiu anem a la muntanya.",
            "exEn": "In the summer we are going to the mountains."
          },
          {
            "id": "travel-holidays-011",
            "ca": "mar",
            "en": "sea",
            "hint": "Useful travel and holidays vocabulary in standard Central Catalan. Meaning: sea.",
            "ex": "M'encanten les vacances al costat del mar.",
            "exEn": "I love holidays by the sea."
          },
          {
            "id": "travel-holidays-012",
            "ca": "calor",
            "en": "heatwave",
            "hint": "Useful travel and holidays vocabulary in standard Central Catalan. Meaning: heatwave.",
            "ex": "Avui fa una calor terrible.",
            "exEn": "There is a terrible heatwave today."
          },
          {
            "id": "travel-holidays-013",
            "ca": "tempesta",
            "en": "storm",
            "hint": "Useful travel and holidays vocabulary in standard Central Catalan. Meaning: storm.",
            "ex": "Em temo que hi haurà una tempesta.",
            "exEn": "I'm afraid there will be a storm."
          },
          {
            "id": "travel-holidays-014",
            "ca": "vent",
            "en": "wind",
            "hint": "Useful travel and holidays vocabulary in standard Central Catalan. Meaning: wind.",
            "ex": "Avui fa vent fort.",
            "exEn": "A strong wind is blowing today."
          }
        ]
      },
      {
        "id": "a2-work-education",
        "name": "Work and education",
        "emoji": "🎓",
        "description": "Professions, studying and the workplace",
        "cards": [
          {
            "id": "work-education-001",
            "ca": "professor",
            "en": "teacher (m/f)",
            "hint": "Useful work and education vocabulary in standard Central Catalan. Meaning: teacher (m/f).",
            "ex": "El meu germà és professor d'història.",
            "exEn": "My brother is a history teacher."
          },
          {
            "id": "work-education-002",
            "ca": "alumne/alumnat",
            "en": "pupil / university student",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: pupil / university student.",
            "ex": "Sóc estudiant de primer any.",
            "exEn": "I am a first-year student."
          },
          {
            "id": "work-education-003",
            "ca": "escola",
            "en": "school",
            "hint": "Useful work and education vocabulary in standard Central Catalan. Meaning: school.",
            "ex": "Els nens estan a l'escola.",
            "exEn": "The children are at school."
          },
          {
            "id": "work-education-004",
            "ca": "universitat",
            "en": "university",
            "hint": "Useful work and education vocabulary in standard Central Catalan. Meaning: university.",
            "ex": "Estudio a la universitat.",
            "exEn": "I study at the university."
          },
          {
            "id": "work-education-005",
            "ca": "conferència",
            "en": "lecture",
            "hint": "Useful work and education vocabulary in standard Central Catalan. Meaning: lecture.",
            "ex": "La conferència d'economia va ser molt avorrida.",
            "exEn": "The economics lecture was very boring."
          },
          {
            "id": "work-education-006",
            "ca": "examen",
            "en": "exam",
            "hint": "Useful work and education vocabulary in standard Central Catalan. Meaning: exam.",
            "ex": "Tinc un examen difícil demà al matí.",
            "exEn": "I have a difficult exam tomorrow morning."
          },
          {
            "id": "work-education-007",
            "ca": "per aprendre",
            "en": "to study / learn",
            "hint": "Useful work and education vocabulary in standard Central Catalan. Meaning: to study / learn.",
            "ex": "He d'estudiar per l'examen.",
            "exEn": "I have to study for the exam."
          },
          {
            "id": "work-education-008",
            "ca": "ocupació",
            "en": "profession",
            "hint": "Useful work and education vocabulary in standard Central Catalan. Meaning: profession.",
            "ex": "Quina és la teva professió?",
            "exEn": "What is your profession?"
          },
          {
            "id": "work-education-009",
            "ca": "enginyer",
            "en": "engineer",
            "hint": "Useful work and education vocabulary in standard Central Catalan. Meaning: engineer.",
            "ex": "Treballa com a enginyera de programari.",
            "exEn": "She works as a software engineer."
          },
          {
            "id": "work-education-010",
            "ca": "buscar feina",
            "en": "to look for a job",
            "hint": "Useful work and education vocabulary in standard Central Catalan. Meaning: to look for a job.",
            "ex": "Fa un mes que busco feina.",
            "exEn": "I have been looking for a new job for a month."
          },
          {
            "id": "work-education-011",
            "ca": "entrevista",
            "en": "job interview",
            "hint": "Useful work and education vocabulary in standard Central Catalan. Meaning: job interview.",
            "ex": "Demà tinc una entrevista de feina.",
            "exEn": "I have a job interview tomorrow."
          },
          {
            "id": "work-education-012",
            "ca": "experiència",
            "en": "experience",
            "hint": "Useful work and education vocabulary in standard Central Catalan. Meaning: experience.",
            "ex": "Es requereix experiència en el sector.",
            "exEn": "Experience in the industry is required."
          },
          {
            "id": "work-education-013",
            "ca": "remuneració",
            "en": "salary",
            "hint": "Notice the Catalan past-time wording used for simple stories. Meaning: salary.",
            "ex": "Espero un bon sou.",
            "exEn": "I expect a good salary."
          },
          {
            "id": "work-education-014",
            "ca": "promoció",
            "en": "promotion",
            "hint": "Useful work and education vocabulary in standard Central Catalan. Meaning: promotion.",
            "ex": "Tinc un ascens i un augment!",
            "exEn": "I got a promotion and a raise!"
          }
        ]
      },
      {
        "id": "a2-free-time-culture",
        "name": "Free time and culture",
        "emoji": "🎭",
        "description": "Hobbies, sports and going out",
        "cards": [
          {
            "id": "free-time-culture-001",
            "ca": "afició",
            "en": "hobby",
            "hint": "Useful free time and culture vocabulary in standard Central Catalan. Meaning: hobby.",
            "ex": "La meva afició principal és la fotografia.",
            "exEn": "My main hobby is photography."
          },
          {
            "id": "free-time-culture-002",
            "ca": "estar interessat",
            "en": "to be interested in",
            "hint": "Useful free time and culture vocabulary in standard Central Catalan. Meaning: to be interested in.",
            "ex": "M'interessa la política i els esports.",
            "exEn": "I am interested in politics and sports."
          },
          {
            "id": "free-time-culture-003",
            "ca": "cinema",
            "en": "cinema",
            "hint": "Useful free time and culture vocabulary in standard Central Catalan. Meaning: cinema.",
            "ex": "Avui anem al cinema a veure una comèdia.",
            "exEn": "We are going to the cinema for a comedy today."
          },
          {
            "id": "free-time-culture-004",
            "ca": "teatre",
            "en": "theater",
            "hint": "Useful free time and culture vocabulary in standard Central Catalan. Meaning: theater.",
            "ex": "Tinc entrades per al teatre per dissabte.",
            "exEn": "I have theater tickets for Saturday."
          },
          {
            "id": "free-time-culture-005",
            "ca": "exposició",
            "en": "exhibition",
            "hint": "Useful free time and culture vocabulary in standard Central Catalan. Meaning: exhibition.",
            "ex": "Aquesta és una exposició d'art molt interessant.",
            "exEn": "This is a very interesting art exhibition."
          },
          {
            "id": "free-time-culture-006",
            "ca": "concert",
            "en": "concert",
            "hint": "Useful free time and culture vocabulary in standard Central Catalan. Meaning: concert.",
            "ex": "Les entrades per a aquest concert estan exhaurides.",
            "exEn": "Tickets for this concert are sold out."
          },
          {
            "id": "free-time-culture-007",
            "ca": "per fer esport",
            "en": "to do sports",
            "hint": "Useful free time and culture vocabulary in standard Central Catalan. Meaning: to do sports.",
            "ex": "Cal fer esport per estar saludable.",
            "exEn": "You need to do sports to be healthy."
          },
          {
            "id": "free-time-culture-008",
            "ca": "per córrer",
            "en": "to run / jog",
            "hint": "Useful free time and culture vocabulary in standard Central Catalan. Meaning: to run / jog.",
            "ex": "Corro al parc tres cops per setmana.",
            "exEn": "I run in the park three times a week."
          },
          {
            "id": "free-time-culture-009",
            "ca": "gimnàs",
            "en": "gym",
            "hint": "Useful free time and culture vocabulary in standard Central Catalan. Meaning: gym.",
            "ex": "Després de la feina vaig al gimnàs.",
            "exEn": "After work, I go to the gym."
          },
          {
            "id": "free-time-culture-010",
            "ca": "piscina",
            "en": "swimming pool",
            "hint": "Useful free time and culture vocabulary in standard Central Catalan. Meaning: swimming pool.",
            "ex": "Diumenge al matí vaig a la piscina.",
            "exEn": "I go to the swimming pool on Sunday morning."
          },
          {
            "id": "free-time-culture-011",
            "ca": "conèixer",
            "en": "to meet up",
            "hint": "Useful free time and culture vocabulary in standard Central Catalan. Meaning: to meet up.",
            "ex": "Sovint em trobo amb amics al pub.",
            "exEn": "I often meet with friends at the pub."
          },
          {
            "id": "free-time-culture-012",
            "ca": "amics",
            "en": "acquaintances / friends",
            "hint": "Useful free time and culture vocabulary in standard Central Catalan. Meaning: acquaintances / friends.",
            "ex": "Vaig convidar uns amics de la feina.",
            "exEn": "I invited a few friends from work."
          },
          {
            "id": "free-time-culture-013",
            "ca": "caminar",
            "en": "walk / stroll",
            "hint": "Useful free time and culture vocabulary in standard Central Catalan. Meaning: walk / stroll.",
            "ex": "Anem a fer una llarga caminada pel bosc.",
            "exEn": "Let's go for a long walk to the forest."
          }
        ]
      },
      {
        "id": "a2-weather-climate",
        "name": "Weather and climate",
        "emoji": "⛅",
        "description": "Forecasts, climate and natural events",
        "cards": [
          {
            "id": "weather-climate-001",
            "ca": "calor",
            "en": "heatwave, scorching heat",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: heatwave, scorching heat.",
            "ex": "Avui fa una calor terrible.",
            "exEn": "Today it's terribly hot."
          },
          {
            "id": "weather-climate-002",
            "ca": "inundació",
            "en": "flood",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: flood.",
            "ex": "Després dels xàfecs hi va haver una riuada.",
            "exEn": "After the downpours there was a flood."
          },
          {
            "id": "weather-climate-003",
            "ca": "remolí",
            "en": "tornado, whirlwind",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: tornado, whirlwind.",
            "ex": "El tornado va destruir el bosc.",
            "exEn": "A tornado destroyed the forest."
          },
          {
            "id": "weather-climate-004",
            "ca": "sequera",
            "en": "drought",
            "hint": "Notice the Catalan past-time wording used for simple stories. Meaning: drought.",
            "ex": "Sovint hi ha sequera a l'estiu.",
            "exEn": "In summer there is often a drought."
          },
          {
            "id": "weather-climate-005",
            "ca": "aiguat",
            "en": "downpour, heavy rain",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: downpour, heavy rain.",
            "ex": "Ahir hi va haver un fort xàfec.",
            "exEn": "Yesterday there was a heavy downpour."
          },
          {
            "id": "weather-climate-006",
            "ca": "huracà",
            "en": "hurricane",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: hurricane.",
            "ex": "S'acosta un huracà.",
            "exEn": "A hurricane is coming."
          },
          {
            "id": "weather-climate-007",
            "ca": "tempesta",
            "en": "(thunder)storm",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: (thunder)storm.",
            "ex": "Al vespre hi haurà una tempesta.",
            "exEn": "In the evening there will be a storm."
          },
          {
            "id": "weather-climate-008",
            "ca": "calamarsa",
            "en": "hail",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: hail.",
            "ex": "Hi va haver calamarsa durant la tempesta.",
            "exEn": "During the storm it was hailing."
          },
          {
            "id": "weather-climate-009",
            "ca": "tornado",
            "en": "tornado",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: tornado.",
            "ex": "Hi ha tornados freqüents als EUA.",
            "exEn": "In the USA there are often tornadoes."
          },
          {
            "id": "weather-climate-010",
            "ca": "el temps",
            "en": "weather",
            "hint": "Masculine nouns usually take el or un. Meaning: weather.",
            "ex": "Quin temps fa avui?",
            "exEn": "What's the weather like today?"
          },
          {
            "id": "weather-climate-011",
            "ca": "clima",
            "en": "climate",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: climate.",
            "ex": "El clima està canviant.",
            "exEn": "The climate is changing."
          },
          {
            "id": "weather-climate-012",
            "ca": "temporada",
            "en": "season (of the year)",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: season (of the year).",
            "ex": "Quina és la teva temporada preferida?",
            "exEn": "What's your favourite season?"
          },
          {
            "id": "weather-climate-013",
            "ca": "precipitacions",
            "en": "precipitation, rainfall",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: precipitation, rainfall.",
            "ex": "Demà plourà.",
            "exEn": "Tomorrow there will be rainfall."
          },
          {
            "id": "weather-climate-014",
            "ca": "pluja",
            "en": "rain",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: rain.",
            "ex": "Agafa un paraigua perquè plou.",
            "exEn": "Take an umbrella, because it's raining."
          },
          {
            "id": "weather-climate-015",
            "ca": "neu",
            "en": "snow",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: snow.",
            "ex": "Neva a l'hivern.",
            "exEn": "In winter it snows."
          },
          {
            "id": "weather-climate-016",
            "ca": "vent",
            "en": "wind",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: wind.",
            "ex": "A fora bufa un fort vent.",
            "exEn": "Outside a strong wind is blowing."
          },
          {
            "id": "weather-climate-017",
            "ca": "aigua",
            "en": "water",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: water.",
            "ex": "No hi ha aigua a l'estiu.",
            "exEn": "In summer there is a shortage of water."
          },
          {
            "id": "weather-climate-018",
            "ca": "velocitat",
            "en": "speed",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: speed.",
            "ex": "El vent bufa a una velocitat de 100 km/h.",
            "exEn": "The wind blows at a speed of 100 km/h."
          },
          {
            "id": "weather-climate-019",
            "ca": "càlid",
            "en": "warm (warmer)",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: warm (warmer).",
            "ex": "El maig serà més càlid que l'abril.",
            "exEn": "May will be warmer than April."
          },
          {
            "id": "weather-climate-020",
            "ca": "fresc",
            "en": "cool (cooler)",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: cool (cooler).",
            "ex": "Els hiverns seran més freds que ara.",
            "exEn": "Winters will be cooler than now."
          },
          {
            "id": "weather-climate-021",
            "ca": "fred",
            "en": "cold (colder)",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: cold (colder).",
            "ex": "Aquest hivern és més fred que l'anterior.",
            "exEn": "This winter is colder than the previous one."
          },
          {
            "id": "weather-climate-022",
            "ca": "sec",
            "en": "dry",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: dry.",
            "ex": "L'estiu serà més sec.",
            "exEn": "The summer will be drier."
          },
          {
            "id": "weather-climate-023",
            "ca": "humit",
            "en": "wet",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: wet.",
            "ex": "Després de la pluja, l'herba està mullada.",
            "exEn": "After the rain the grass is wet."
          },
          {
            "id": "weather-climate-024",
            "ca": "plujós",
            "en": "rainy",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: rainy.",
            "ex": "La tardor és plujosa.",
            "exEn": "Autumn is rainy."
          },
          {
            "id": "weather-climate-025",
            "ca": "fort",
            "en": "strong (stronger)",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: strong (stronger).",
            "ex": "Les tempestes seran més fortes que ara.",
            "exEn": "Storms will be stronger than now."
          },
          {
            "id": "weather-climate-026",
            "ca": "feble",
            "en": "weak (weaker)",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: weak (weaker).",
            "ex": "La pluja serà més feble que ahir.",
            "exEn": "The rain will be weaker than yesterday."
          },
          {
            "id": "weather-climate-027",
            "ca": "abocant",
            "en": "torrential",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: torrential.",
            "ex": "Estava plovent molt.",
            "exEn": "Torrential rain was falling."
          },
          {
            "id": "weather-climate-028",
            "ca": "abrasador",
            "en": "sweltering, boiling hot",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: sweltering, boiling hot.",
            "ex": "Va ser un dia calorós.",
            "exEn": "It was a sweltering day."
          },
          {
            "id": "weather-climate-029",
            "ca": "Canviar",
            "en": "change",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: change.",
            "ex": "El canvi climàtic és un gran problema.",
            "exEn": "Climate change is a big problem."
          },
          {
            "id": "weather-climate-030",
            "ca": "agricultura",
            "en": "agriculture",
            "hint": "Useful weather and climate vocabulary in standard Central Catalan. Meaning: agriculture.",
            "ex": "El canvi climàtic afecta l'agricultura.",
            "exEn": "Climate changes affect agriculture."
          }
        ]
      },
      {
        "id": "a2-personality",
        "name": "Personality",
        "emoji": "🙂",
        "description": "Useful traits for social life and work",
        "cards": [
          {
            "id": "personality-001",
            "ca": "treballador",
            "en": "hardworking",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: hardworking.",
            "ex": "El meu amic és molt treballador.",
            "exEn": "My colleague is very hardworking."
          },
          {
            "id": "personality-002",
            "ca": "mandrós",
            "en": "lazy",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: lazy.",
            "ex": "Estic mandrós el cap de setmana.",
            "exEn": "At the weekend I'm lazy."
          },
          {
            "id": "personality-003",
            "ca": "precís",
            "en": "meticulous, accurate",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: meticulous, accurate.",
            "ex": "Un bon comptable és minuciós.",
            "exEn": "A good accountant is meticulous."
          },
          {
            "id": "personality-004",
            "ca": "persistent",
            "en": "persistent, persevering",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: persistent, persevering.",
            "ex": "Has de ser persistent per aprendre català.",
            "exEn": "You have to be persistent to learn Catalan."
          },
          {
            "id": "personality-005",
            "ca": "organitzat",
            "en": "organized",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: organized.",
            "ex": "Estic ben organitzat.",
            "exEn": "I'm well organized."
          },
          {
            "id": "personality-006",
            "ca": "dispersat",
            "en": "scatterbrained",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: scatterbrained.",
            "ex": "De vegades em descobreixo i perdo les meves claus.",
            "exEn": "Sometimes I'm scatterbrained and lose my keys."
          },
          {
            "id": "personality-007",
            "ca": "ambiciós",
            "en": "ambitious",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: ambitious.",
            "ex": "És una persona molt ambiciosa.",
            "exEn": "That's a very ambitious person."
          },
          {
            "id": "personality-008",
            "ca": "exigent",
            "en": "demanding",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: demanding.",
            "ex": "El meu cap és exigent.",
            "exEn": "My boss is demanding."
          },
          {
            "id": "personality-009",
            "ca": "creatiu",
            "en": "creative",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: creative.",
            "ex": "Els artistes són creatius.",
            "exEn": "Artists are creative."
          },
          {
            "id": "personality-010",
            "ca": "honest",
            "en": "honest, sincere",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: honest, sincere.",
            "ex": "Sigues honest amb mi.",
            "exEn": "Be honest with me."
          },
          {
            "id": "personality-011",
            "ca": "xerraire",
            "en": "talkative",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: talkative.",
            "ex": "El meu veí és xerraire.",
            "exEn": "My neighbour is talkative."
          },
          {
            "id": "personality-012",
            "ca": "directe",
            "en": "direct, straightforward",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: direct, straightforward.",
            "ex": "Prefereixo les persones directes.",
            "exEn": "I prefer direct people."
          },
          {
            "id": "personality-013",
            "ca": "obert",
            "en": "open",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: open.",
            "ex": "Està obert a gent nova.",
            "exEn": "He's open to new people."
          },
          {
            "id": "personality-014",
            "ca": "retirat",
            "en": "reserved, withdrawn",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: reserved, withdrawn.",
            "ex": "De petit, es va retirar.",
            "exEn": "As a child he was withdrawn."
          },
          {
            "id": "personality-015",
            "ca": "tímid",
            "en": "shy",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: shy.",
            "ex": "No siguis tan tímid!",
            "exEn": "Don't be so shy!"
          },
          {
            "id": "personality-016",
            "ca": "socials",
            "en": "sociable",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: sociable.",
            "ex": "És molt sociable i té molts amics.",
            "exEn": "She's very sociable and has lots of friends."
          },
          {
            "id": "personality-017",
            "ca": "barallador",
            "en": "quarrelsome",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: quarrelsome.",
            "ex": "No m'agrada la gent argumentada.",
            "exEn": "I don't like quarrelsome people."
          },
          {
            "id": "personality-018",
            "ca": "protectora",
            "en": "caring, protective",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: caring, protective.",
            "ex": "És un pare solidari.",
            "exEn": "He's a caring father."
          },
          {
            "id": "personality-019",
            "ca": "bonic",
            "en": "nice, kind, pleasant",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: nice, kind, pleasant.",
            "ex": "El nostre nou veí és molt agradable.",
            "exEn": "Our new neighbour is very nice."
          },
          {
            "id": "personality-020",
            "ca": "tranquil",
            "en": "calm",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: calm.",
            "ex": "Després del ioga em sento tranquil.",
            "exEn": "After yoga I'm calm."
          },
          {
            "id": "personality-021",
            "ca": "nerviós",
            "en": "nervous, edgy",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: nervous, edgy.",
            "ex": "Estic nerviós abans de l'examen.",
            "exEn": "Before an exam I'm nervous."
          },
          {
            "id": "personality-022",
            "ca": "assolellat",
            "en": "cheerful",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: cheerful.",
            "ex": "Té un caràcter alegre.",
            "exEn": "She has a cheerful disposition."
          },
          {
            "id": "personality-023",
            "ca": "alegre",
            "en": "merry, happy",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: merry, happy.",
            "ex": "Sempre està alegre.",
            "exEn": "He's always cheerful."
          },
          {
            "id": "personality-024",
            "ca": "seriós",
            "en": "serious",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: serious.",
            "ex": "Per què ets tan seriós?",
            "exEn": "Why are you so serious?"
          },
          {
            "id": "personality-025",
            "ca": "pacient",
            "en": "patient",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: patient.",
            "ex": "El professor ha de tenir paciència.",
            "exEn": "A teacher must be patient."
          },
          {
            "id": "personality-026",
            "ca": "impacient",
            "en": "impatient",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: impatient.",
            "ex": "Estic impacient quan espero.",
            "exEn": "I'm impatient when I'm waiting."
          },
          {
            "id": "personality-027",
            "ca": "fresc",
            "en": "cold, aloof",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: cold, aloof.",
            "ex": "Tenia fred amb mi.",
            "exEn": "He was cold towards me."
          },
          {
            "id": "personality-028",
            "ca": "tossut",
            "en": "stubborn",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: stubborn.",
            "ex": "Ets tossut com un ruc!",
            "exEn": "You're as stubborn as a mule!"
          },
          {
            "id": "personality-029",
            "ca": "agosarat",
            "en": "brave, courageous",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: brave, courageous.",
            "ex": "Sigues valent i prova-ho!",
            "exEn": "Be brave and try!"
          },
          {
            "id": "personality-030",
            "ca": "confiat",
            "en": "self-confident",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: self-confident.",
            "ex": "Tenir confiança durant una entrevista de treball.",
            "exEn": "At a job interview, be self-confident."
          },
          {
            "id": "personality-031",
            "ca": "independent",
            "en": "independent",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: independent.",
            "ex": "És independent econòmicament.",
            "exEn": "She's financially independent."
          },
          {
            "id": "personality-032",
            "ca": "dominant",
            "en": "domineering",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: domineering.",
            "ex": "Té un caràcter dominant.",
            "exEn": "He has a domineering character."
          },
          {
            "id": "personality-033",
            "ca": "sensible",
            "en": "sensitive",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: sensitive.",
            "ex": "És sensible a les crítiques.",
            "exEn": "He's sensitive to criticism."
          },
          {
            "id": "personality-034",
            "ca": "frugal",
            "en": "thrifty, economical",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: thrifty, economical.",
            "ex": "Els meus pares són frugals.",
            "exEn": "My parents are thrifty."
          },
          {
            "id": "personality-035",
            "ca": "barat",
            "en": "stingy, miserly",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: stingy, miserly.",
            "ex": "No siguis avar, compra un cafè!",
            "exEn": "Don't be stingy, buy a coffee!"
          },
          {
            "id": "personality-036",
            "ca": "luxós",
            "en": "wasteful, extravagant",
            "hint": "Useful personality vocabulary in standard Central Catalan. Meaning: wasteful, extravagant.",
            "ex": "És extravagant i gasta massa.",
            "exEn": "He's wasteful and spends too much."
          }
        ]
      },
      {
        "id": "a2-ecology",
        "name": "Ecology",
        "emoji": "🌿",
        "description": "Recycling, saving resources and the environment",
        "cards": [
          {
            "id": "ecology-001",
            "ca": "retornar/retornar",
            "en": "to give back, return",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to give back, return.",
            "ex": "Tornaré les ampolles a la botiga.",
            "exEn": "I'll return the bottles at the shop."
          },
          {
            "id": "ecology-002",
            "ca": "tornar / tornar",
            "en": "to return, give back",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to return, give back.",
            "ex": "Tornaré les ampolles i aconseguiré els diners.",
            "exEn": "I'll return the bottles and get money back."
          },
          {
            "id": "ecology-003",
            "ca": "recollir / recollir",
            "en": "to collect, gather",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to collect, gather.",
            "ex": "Recolliré ampolles per reciclar-les.",
            "exEn": "I will collect bottles for recycling."
          },
          {
            "id": "ecology-004",
            "ca": "llençar / llençar",
            "en": "to throw out",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to throw out.",
            "ex": "Vaig a treure les escombraries al vespre.",
            "exEn": "I'll take out the rubbish in the evening."
          },
          {
            "id": "ecology-005",
            "ca": "segregar",
            "en": "to sort, segregate",
            "hint": "Useful ecology vocabulary in standard Central Catalan. Meaning: to sort, segregate.",
            "ex": "Triaré les escombraries a casa.",
            "exEn": "I will sort the rubbish at home."
          },
          {
            "id": "ecology-006",
            "ca": "sistema de dipòsit",
            "en": "deposit-return system",
            "hint": "Useful ecology vocabulary in standard Central Catalan. Meaning: deposit-return system.",
            "ex": "Hi ha un sistema de dipòsit d'ampolles a Catalunya.",
            "exEn": "In Catalonia there's a deposit-return system for bottles."
          },
          {
            "id": "ecology-007",
            "ca": "ampolla retornable",
            "en": "returnable (deposit) bottle",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: returnable (deposit) bottle.",
            "ex": "Aquesta és una ampolla retornable.",
            "exEn": "This is a returnable bottle."
          },
          {
            "id": "ecology-008",
            "ca": "embalatge",
            "en": "packaging",
            "hint": "Useful ecology vocabulary in standard Central Catalan. Meaning: packaging.",
            "ex": "Aquest envàs és reciclable.",
            "exEn": "This packaging is recyclable."
          },
          {
            "id": "ecology-009",
            "ca": "vidre",
            "en": "glass (the material)",
            "hint": "Useful ecology vocabulary in standard Central Catalan. Meaning: glass (the material).",
            "ex": "Tiro el vidre al recipient verd.",
            "exEn": "I throw glass into the green container."
          },
          {
            "id": "ecology-010",
            "ca": "vidre",
            "en": "(drinking) glass, tumbler",
            "hint": "Useful ecology vocabulary in standard Central Catalan. Meaning: (drinking) glass, tumbler.",
            "ex": "Vaig beure un got d'aigua.",
            "exEn": "I drank a glass of water."
          },
          {
            "id": "ecology-011",
            "ca": "escombraries",
            "en": "rubbish, trash",
            "hint": "Useful ecology vocabulary in standard Central Catalan. Meaning: rubbish, trash.",
            "ex": "Traieu les escombraries, si us plau.",
            "exEn": "Take out the rubbish, please."
          },
          {
            "id": "ecology-012",
            "ca": "residus",
            "en": "waste",
            "hint": "Useful ecology vocabulary in standard Central Catalan. Meaning: waste.",
            "ex": "Separem els residus a casa.",
            "exEn": "We sort waste at home."
          },
          {
            "id": "ecology-013",
            "ca": "guardar/desar",
            "en": "to save (water, power)",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to save (water, power).",
            "ex": "Estalviaré aigua i electricitat.",
            "exEn": "I will save water and electricity."
          },
          {
            "id": "ecology-014",
            "ca": "apagar/apagar",
            "en": "to switch off, turn off",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to switch off, turn off.",
            "ex": "Apagaré l'ordinador per la nit.",
            "exEn": "I'll switch off the computer for the night."
          },
          {
            "id": "ecology-015",
            "ca": "gir / girar",
            "en": "to turn off (a tap)",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to turn off (a tap).",
            "ex": "Tanca l'aigua mentre et renta les dents.",
            "exEn": "Turn off the tap while brushing your teeth."
          },
          {
            "id": "ecology-016",
            "ca": "malgastar / malgastar",
            "en": "to waste",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to waste.",
            "ex": "No malgastaré menjar.",
            "exEn": "I won't waste food."
          },
          {
            "id": "ecology-017",
            "ca": "estalvi d'energia",
            "en": "energy-efficient",
            "hint": "Useful ecology vocabulary in standard Central Catalan. Meaning: energy-efficient.",
            "ex": "Compraré equips d'estalvi d'energia.",
            "exEn": "I'll buy energy-efficient appliances."
          },
          {
            "id": "ecology-018",
            "ca": "aigua dura",
            "en": "hard water",
            "hint": "Useful ecology vocabulary in standard Central Catalan. Meaning: hard water.",
            "ex": "La nostra aigua de l'aixeta és dura.",
            "exEn": "Our tap has hard water."
          },
          {
            "id": "ecology-019",
            "ca": "bany",
            "en": "bathtub",
            "hint": "Useful ecology vocabulary in standard Central Catalan. Meaning: bathtub.",
            "ex": "Prefereixo una dutxa en lloc d'un bany a la banyera.",
            "exEn": "I prefer a shower to a bath in the tub."
          },
          {
            "id": "ecology-020",
            "ca": "prendre/dutxar-se",
            "en": "to take a shower",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to take a shower.",
            "ex": "Em dutxaré en comptes de banyar-me.",
            "exEn": "I'll take a shower instead of a bath."
          },
          {
            "id": "ecology-021",
            "ca": "comprar / comprar",
            "en": "to buy",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to buy.",
            "ex": "No compraré roba nova.",
            "exEn": "I won't buy new clothes."
          },
          {
            "id": "ecology-022",
            "ca": "intercanvi/intercanvi",
            "en": "to swap, exchange",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to swap, exchange.",
            "ex": "Intercanvi de roba amb els meus amics.",
            "exEn": "I swap clothes with friends."
          },
          {
            "id": "ecology-023",
            "ca": "paquet / paquet",
            "en": "to pack",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to pack.",
            "ex": "Faré les meves queviures a la meva pròpia bossa.",
            "exEn": "I'll pack the shopping into my own bag."
          },
          {
            "id": "ecology-024",
            "ca": "utilitzar/utilitzar",
            "en": "to use",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to use.",
            "ex": "Faré servir embalatges reutilitzables.",
            "exEn": "I'll use reusable packaging."
          },
          {
            "id": "ecology-025",
            "ca": "transport públic",
            "en": "public transport",
            "hint": "Useful ecology vocabulary in standard Central Catalan. Meaning: public transport.",
            "ex": "Jo faig servir el transport públic en lloc del cotxe.",
            "exEn": "I travel by public transport instead of by car."
          },
          {
            "id": "ecology-026",
            "ca": "invertir / invertir",
            "en": "to invest",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to invest.",
            "ex": "Invertiré en energia verda.",
            "exEn": "I will invest in green energy."
          },
          {
            "id": "ecology-027",
            "ca": "reduir / reduir",
            "en": "to reduce",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to reduce.",
            "ex": "Hem de reduir les emissions de CO2.",
            "exEn": "We must reduce CO2 emissions."
          },
          {
            "id": "ecology-028",
            "ca": "retallar / retallar",
            "en": "to cut down",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to cut down.",
            "ex": "No hem de talar arbres.",
            "exEn": "We shouldn't cut down trees."
          },
          {
            "id": "ecology-029",
            "ca": "escalfament global",
            "en": "global warming",
            "hint": "Useful ecology vocabulary in standard Central Catalan. Meaning: global warming.",
            "ex": "L'escalfament global és un gran problema.",
            "exEn": "Global warming is a big problem."
          },
          {
            "id": "ecology-030",
            "ca": "medi ambient",
            "en": "environment",
            "hint": "Useful ecology vocabulary in standard Central Catalan. Meaning: environment.",
            "ex": "Vull protegir el medi ambient.",
            "exEn": "I want to protect the environment."
          }
        ]
      },
      {
        "id": "a2-appearance-clothes",
        "name": "Appearance and clothes",
        "emoji": "👕",
        "description": "Describing people, clothing and style",
        "cards": [
          {
            "id": "appearance-clothes-001",
            "ca": "semblar",
            "en": "to look (a certain way)",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: to look (a certain way).",
            "ex": "Et veus cansat.",
            "exEn": "You look tired."
          },
          {
            "id": "appearance-clothes-002",
            "ca": "ser semblant a",
            "en": "to look like / resemble",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: to look like / resemble.",
            "ex": "Ets molt semblant al teu germà.",
            "exEn": "You look a lot like your brother."
          },
          {
            "id": "appearance-clothes-003",
            "ca": "desgast",
            "en": "to have on / be wearing",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: to have on / be wearing.",
            "ex": "Porta un vestit vermell.",
            "exEn": "She's wearing a red dress."
          },
          {
            "id": "appearance-clothes-004",
            "ca": "portar",
            "en": "to wear (habitually)",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: to wear (habitually).",
            "ex": "A l'hivern porto un barret d'abric.",
            "exEn": "In winter I wear a warm hat."
          },
          {
            "id": "appearance-clothes-005",
            "ca": "posar-se / posar-se",
            "en": "to put on",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to put on.",
            "ex": "Posa't una jaqueta, fa fred.",
            "exEn": "Put a jacket on, it's cold."
          },
          {
            "id": "appearance-clothes-006",
            "ca": "prova-ho",
            "en": "to try on",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: to try on.",
            "ex": "Vull provar-me aquestes sabates.",
            "exEn": "I'd like to try on these shoes."
          },
          {
            "id": "appearance-clothes-007",
            "ca": "encaixar en",
            "en": "to match / suit",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: to match / suit.",
            "ex": "Aquest color s'adapta als teus ulls.",
            "exEn": "This colour matches your eyes."
          },
          {
            "id": "appearance-clothes-008",
            "ca": "encaixar",
            "en": "to fit well",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: to fit well.",
            "ex": "Aquests pantalons et queden molt bé.",
            "exEn": "Those trousers fit you great."
          },
          {
            "id": "appearance-clothes-009",
            "ca": "vestit",
            "en": "dress",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: dress.",
            "ex": "Em vaig comprar un vestit nou per al casament.",
            "exEn": "I bought a new dress for the wedding."
          },
          {
            "id": "appearance-clothes-010",
            "ca": "Camisa",
            "en": "shirt",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: shirt.",
            "ex": "Em poso una camisa blanca per treballar.",
            "exEn": "I wear a white shirt to work."
          },
          {
            "id": "appearance-clothes-011",
            "ca": "Pantalons",
            "en": "trousers",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: trousers.",
            "ex": "Aquests pantalons són massa llargs.",
            "exEn": "These trousers are too long."
          },
          {
            "id": "appearance-clothes-012",
            "ca": "jaqueta",
            "en": "jacket (outdoor)",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: jacket (outdoor).",
            "ex": "No surto sense jaqueta a l'hivern.",
            "exEn": "In winter I don't go out without a jacket."
          },
          {
            "id": "appearance-clothes-013",
            "ca": "Sabates",
            "en": "shoes",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: shoes.",
            "ex": "Necessito sabates noves per a l'hivern.",
            "exEn": "I need new shoes for winter."
          },
          {
            "id": "appearance-clothes-014",
            "ca": "Barret",
            "en": "(winter/casual) hat, cap",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: (winter/casual) hat, cap.",
            "ex": "Posa't un barret o passaràs fred.",
            "exEn": "Put a hat on or you'll freeze."
          },
          {
            "id": "appearance-clothes-015",
            "ca": "creixement",
            "en": "height",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: height.",
            "ex": "És d'alçada mitjana.",
            "exEn": "He's of medium height."
          },
          {
            "id": "appearance-clothes-016",
            "ca": "prim",
            "en": "slim",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: slim.",
            "ex": "És alta i prima.",
            "exEn": "She's tall and slim."
          },
          {
            "id": "appearance-clothes-017",
            "ca": "calb",
            "en": "bald",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: bald.",
            "ex": "El meu avi és calb.",
            "exEn": "My grandfather is bald."
          },
          {
            "id": "appearance-clothes-018",
            "ca": "barba",
            "en": "beard",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: beard.",
            "ex": "Es va fer créixer la barba per a l'hivern.",
            "exEn": "He grew a beard for the winter."
          },
          {
            "id": "appearance-clothes-019",
            "ca": "ros / ros",
            "en": "blond man / woman",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: blond man / woman.",
            "ex": "El meu germà és ros i jo soc morena.",
            "exEn": "My brother is blond and I'm a brunette."
          },
          {
            "id": "appearance-clothes-020",
            "ca": "de moda",
            "en": "fashionable",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: fashionable.",
            "ex": "Aquesta jaqueta està molt de moda.",
            "exEn": "This jacket is very fashionable."
          },
          {
            "id": "appearance-clothes-021",
            "ca": "còmode",
            "en": "comfortable",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: comfortable.",
            "ex": "Prefereixo les sabates còmodes a les de moda.",
            "exEn": "I prefer comfortable shoes to fashionable ones."
          },
          {
            "id": "appearance-clothes-022",
            "ca": "a quadres",
            "en": "checked / plaid",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: checked / plaid.",
            "ex": "M'agraden les samarretes a quadres.",
            "exEn": "I like checked shirts."
          },
          {
            "id": "appearance-clothes-023",
            "ca": "mida",
            "en": "size",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: size.",
            "ex": "Quina talla portes?",
            "exEn": "What size do you wear, sir?"
          },
          {
            "id": "appearance-clothes-024",
            "ca": "Això et convé",
            "en": "That suits you",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: That suits you.",
            "ex": "Aquest color et va bé!",
            "exEn": "That colour really suits you!"
          },
          {
            "id": "appearance-clothes-025",
            "ca": "elegant",
            "en": "elegant, smart",
            "hint": "Useful appearance and clothes vocabulary in standard Central Catalan. Meaning: elegant, smart.",
            "ex": "Em vaig vestir elegantment per a l'entrevista de feina.",
            "exEn": "I dressed smartly for the job interview."
          }
        ]
      },
      {
        "id": "a2-past-events",
        "name": "Talking about the past",
        "emoji": "⏰",
        "description": "Past forms, dates and memories",
        "cards": [
          {
            "id": "past-events-001",
            "ca": "jo era/estava",
            "en": "I was",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: I was.",
            "ex": "Ahir vaig anar al cinema.",
            "exEn": "Yesterday I was at the cinema."
          },
          {
            "id": "past-events-002",
            "ca": "tenia/he tingut",
            "en": "I had",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: I had.",
            "ex": "Ahir no vaig tenir temps.",
            "exEn": "I didn't have time yesterday."
          },
          {
            "id": "past-events-003",
            "ca": "ho vaig fer / vaig fer",
            "en": "I was doing / I did",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: I was doing / I did.",
            "ex": "Vaig fer la tasca durant dues hores i finalment ho vaig fer.",
            "exEn": "I was doing the task for two hours and finally finished it."
          },
          {
            "id": "past-events-004",
            "ca": "Vaig anar / vaig anar",
            "en": "I went (on foot)",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: I went (on foot).",
            "ex": "Al matí vaig anar a la botiga.",
            "exEn": "In the morning I went to the shop."
          },
          {
            "id": "past-events-005",
            "ca": "vaig veure / vaig veure",
            "en": "I saw",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: I saw.",
            "ex": "Ahir vaig veure la teva germana.",
            "exEn": "I saw your sister yesterday."
          },
          {
            "id": "past-events-006",
            "ca": "vaig dir / vaig dir",
            "en": "I was saying / I said",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: I was saying / I said.",
            "ex": "Ja t'he dit que no puc.",
            "exEn": "I already told you I can't."
          },
          {
            "id": "past-events-007",
            "ca": "jo volia / volia",
            "en": "I wanted",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: I wanted.",
            "ex": "Et volia preguntar alguna cosa.",
            "exEn": "I wanted to ask you something."
          },
          {
            "id": "past-events-008",
            "ca": "havia de/he de",
            "en": "I had to",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: I had to.",
            "ex": "Vaig haver de llevar-me d'hora.",
            "exEn": "I had to get up early."
          },
          {
            "id": "past-events-009",
            "ca": "podria/podria",
            "en": "I could / was able to",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: I could / was able to.",
            "ex": "No vaig poder dormir tota la nit.",
            "exEn": "I couldn't sleep all night."
          },
          {
            "id": "past-events-010",
            "ca": "Ahir",
            "en": "yesterday",
            "hint": "Notice the Catalan past-time wording used for simple stories. Meaning: yesterday.",
            "ex": "Ahir va ploure.",
            "exEn": "It rained yesterday."
          },
          {
            "id": "past-events-011",
            "ca": "la setmana passada",
            "en": "last week",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: last week.",
            "ex": "Vaig estar malalt la setmana passada.",
            "exEn": "Last week I was ill."
          },
          {
            "id": "past-events-012",
            "ca": "quan era nen",
            "en": "when I was a child",
            "hint": "Notice the Catalan past-time wording used for simple stories. Meaning: when I was a child.",
            "ex": "Quan jo era petit, vivíem al camp.",
            "exEn": "When I was a child, we lived in the countryside."
          },
          {
            "id": "past-events-013",
            "ca": "Vaig néixer",
            "en": "I was born",
            "hint": "Notice the Catalan past-time wording used for simple stories. Meaning: I was born.",
            "ex": "Vaig néixer a Geòrgia.",
            "exEn": "I was born in Georgia."
          },
          {
            "id": "past-events-014",
            "ca": "Vaig acabar els meus estudis",
            "en": "I graduated",
            "hint": "Notice the Catalan past-time wording used for simple stories. Meaning: I graduated.",
            "ex": "Em vaig graduar fa dos anys.",
            "exEn": "I graduated two years ago."
          },
          {
            "id": "past-events-015",
            "ca": "fa dos anys",
            "en": "two years ago",
            "hint": "Notice the Catalan past-time wording used for simple stories. Meaning: two years ago.",
            "ex": "Em vaig mudar aquí fa dos anys.",
            "exEn": "I moved here two years ago."
          },
          {
            "id": "past-events-016",
            "ca": "primer de maig",
            "en": "on the first of May",
            "hint": "Useful talking about the past vocabulary in standard Central Catalan. Meaning: on the first of May.",
            "ex": "L'1 de maig tenim un dia lliure.",
            "exEn": "On the first of May we have a day off."
          },
          {
            "id": "past-events-017",
            "ca": "en mil nou-cents vuitanta-cinc",
            "en": "in 1985",
            "hint": "Useful talking about the past vocabulary in standard Central Catalan. Meaning: in 1985.",
            "ex": "Va néixer l'any mil nou-cents vuitanta-cinc.",
            "exEn": "He was born in 1985."
          },
          {
            "id": "past-events-018",
            "ca": "aleshores",
            "en": "then, at that time",
            "hint": "Useful talking about the past vocabulary in standard Central Catalan. Meaning: then, at that time.",
            "ex": "En aquell moment encara no sabia català.",
            "exEn": "Back then I didn't know Catalan yet."
          },
          {
            "id": "past-events-019",
            "ca": "al principi",
            "en": "at the beginning / at first",
            "hint": "Useful talking about the past vocabulary in standard Central Catalan. Meaning: at the beginning / at first.",
            "ex": "Al principi va ser difícil.",
            "exEn": "At first it was hard."
          },
          {
            "id": "past-events-020",
            "ca": "aleshores",
            "en": "then, afterwards",
            "hint": "Useful talking about the past vocabulary in standard Central Catalan. Meaning: then, afterwards.",
            "ex": "Vaig esmorzar i després vaig anar a treballar.",
            "exEn": "I ate breakfast and then went to work."
          },
          {
            "id": "past-events-021",
            "ca": "de sobte",
            "en": "suddenly",
            "hint": "Useful talking about the past vocabulary in standard Central Catalan. Meaning: suddenly.",
            "ex": "De sobte va començar a ploure.",
            "exEn": "Suddenly it started to rain."
          },
          {
            "id": "past-events-022",
            "ca": "Ho vaig fer",
            "en": "I managed to",
            "hint": "Notice the Catalan past-time wording used for simple stories. Meaning: I managed to.",
            "ex": "Finalment vaig aconseguir trobar un apartament.",
            "exEn": "I finally managed to find a flat."
          },
          {
            "id": "past-events-023",
            "ca": "Recordo com",
            "en": "I remember how / when",
            "hint": "Useful talking about the past vocabulary in standard Central Catalan. Meaning: I remember how / when.",
            "ex": "Recordo la primera vegada que vaig venir a Catalunya.",
            "exEn": "I remember when I first came to Catalonia."
          },
          {
            "id": "past-events-024",
            "ca": "m'he oblidat / m'he oblidat",
            "en": "I forgot",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: I forgot.",
            "ex": "Ho sento, m'he oblidat de la reunió.",
            "exEn": "Sorry, I forgot about the meeting."
          }
        ]
      },
      {
        "id": "a2-quantities-money",
        "name": "Quantities and money",
        "emoji": "💰",
        "description": "Weights, prices, packets and amounts",
        "cards": [
          {
            "id": "quantities-money-001",
            "ca": "quant val?",
            "en": "how much does it cost?",
            "hint": "Useful quantities and money vocabulary in standard Central Catalan. Meaning: how much does it cost?.",
            "ex": "Quant costa aquest bitllet?",
            "exEn": "How much does this ticket cost?"
          },
          {
            "id": "quantities-money-002",
            "ca": "cost",
            "en": "to cost",
            "hint": "Useful quantities and money vocabulary in standard Central Catalan. Meaning: to cost.",
            "ex": "El cafè costa quinze euros.",
            "exEn": "The coffee costs fifteen euros."
          },
          {
            "id": "quantities-money-003",
            "ca": "euro (euro)",
            "en": "euro (currency used in Catalonia)",
            "hint": "Use euros and cèntims for prices in Catalonia. Meaning: euro (currency used in Catalonia).",
            "ex": "Seran vint euros.",
            "exEn": "That'll be twenty euros."
          },
          {
            "id": "quantities-money-004",
            "ca": "cèntim",
            "en": "cent (1/100 of a euro)",
            "hint": "Use euros and cèntims for prices in Catalonia. Meaning: cent (1/100 of a euro).",
            "ex": "Costa cinc euros i cinquanta cèntims.",
            "exEn": "It costs five euros fifty."
          },
          {
            "id": "quantities-money-005",
            "ca": "Benvolgut",
            "en": "expensive",
            "hint": "Useful quantities and money vocabulary in standard Central Catalan. Meaning: expensive.",
            "ex": "Aquest restaurant és massa car.",
            "exEn": "This restaurant is too expensive."
          },
          {
            "id": "quantities-money-006",
            "ca": "barat",
            "en": "cheap",
            "hint": "Useful quantities and money vocabulary in standard Central Catalan. Meaning: cheap.",
            "ex": "La fruita és més barata al mercat.",
            "exEn": "At the market fruit is cheaper."
          },
          {
            "id": "quantities-money-007",
            "ca": "quilogram (quilo)",
            "en": "kilogram",
            "hint": "Useful quantities and money vocabulary in standard Central Catalan. Meaning: kilogram.",
            "ex": "M'agradaria un quilo de tomàquets.",
            "exEn": "A kilo of tomatoes, please."
          },
          {
            "id": "quantities-money-008",
            "ca": "deco (gram)",
            "en": "10 grams (Catalan 'deka')",
            "hint": "Useful quantities and money vocabulary in standard Central Catalan. Meaning: 10 grams (Catalan 'deka').",
            "ex": "M'agradaria vint pernils deco.",
            "exEn": "200 grams of ham, please."
          },
          {
            "id": "quantities-money-009",
            "ca": "litre",
            "en": "litre",
            "hint": "Useful quantities and money vocabulary in standard Central Catalan. Meaning: litre.",
            "ex": "Vaig comprar dos litres d'aigua.",
            "exEn": "I bought two litres of water."
          },
          {
            "id": "quantities-money-010",
            "ca": "paquet",
            "en": "packet, pack",
            "hint": "Useful quantities and money vocabulary in standard Central Catalan. Meaning: packet, pack.",
            "ex": "M'agradaria un paquet de mantega, si us plau.",
            "exEn": "A pack of butter, please."
          },
          {
            "id": "quantities-money-011",
            "ca": "ampolla",
            "en": "bottle",
            "hint": "Useful quantities and money vocabulary in standard Central Catalan. Meaning: bottle.",
            "ex": "Vam beure tota l'ampolla d'aigua.",
            "exEn": "We drank the whole bottle of water."
          },
          {
            "id": "quantities-money-012",
            "ca": "pot",
            "en": "jar",
            "hint": "Useful quantities and money vocabulary in standard Central Catalan. Meaning: jar.",
            "ex": "Hi ha un pot d'escabetx a la nevera.",
            "exEn": "There's a jar of pickles in the fridge."
          },
          {
            "id": "quantities-money-013",
            "ca": "peça",
            "en": "a piece / slice",
            "hint": "Useful quantities and money vocabulary in standard Central Catalan. Meaning: a piece / slice.",
            "ex": "Em menjaré una altra llesca de pizza.",
            "exEn": "I'll have one more slice of pizza."
          },
          {
            "id": "quantities-money-014",
            "ca": "parella",
            "en": "a pair",
            "hint": "Useful quantities and money vocabulary in standard Central Catalan. Meaning: a pair.",
            "ex": "Vaig comprar dos parells de sabates.",
            "exEn": "I bought two pairs of shoes."
          },
          {
            "id": "quantities-money-015",
            "ca": "molt / poc",
            "en": "a lot / a little",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: a lot / a little.",
            "ex": "Tinc poc temps i molta feina.",
            "exEn": "I have little time and a lot of work."
          },
          {
            "id": "quantities-money-016",
            "ca": "diversos",
            "en": "a few, several",
            "hint": "Useful quantities and money vocabulary in standard Central Catalan. Meaning: a few, several.",
            "ex": "Queden unes quantes pomes.",
            "exEn": "A few apples are left."
          },
          {
            "id": "quantities-money-017",
            "ca": "Una mica",
            "en": "a bit, some",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: a bit, some.",
            "ex": "Afegiu una mica de sal.",
            "exEn": "Add a bit of salt."
          },
          {
            "id": "quantities-money-018",
            "ca": "la meitat",
            "en": "half",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: half.",
            "ex": "Em vaig menjar la meitat del pastís.",
            "exEn": "I ate half the cake."
          },
          {
            "id": "quantities-money-019",
            "ca": "una poma, dues pomes, cinc pomes",
            "en": "1 apple, 2 apples, 5 apples",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: 1 apple, 2 apples, 5 apples.",
            "ex": "Tinc cinc pomes i tres plàtans.",
            "exEn": "I have five apples and three bananas."
          },
          {
            "id": "quantities-money-020",
            "ca": "una moneda d'euro",
            "en": "one-euro coin / 'a euro' (colloq.)",
            "hint": "Use una moneda d'euro for the coin; un euro is the amount. Meaning: one-euro coin / 'a euro' (colloq.).",
            "ex": "Tens una moneda d'euro?",
            "exEn": "Do you have a euro coin by any chance?"
          },
          {
            "id": "quantities-money-021",
            "ca": "canvi",
            "en": "change (money returned)",
            "hint": "Canvi is the money returned after paying; also means change more generally. Meaning: change (money returned).",
            "ex": "Es va oblidar de donar-me el canvi.",
            "exEn": "He forgot to give me the change."
          },
          {
            "id": "quantities-money-022",
            "ca": "pagar amb targeta/efectiu",
            "en": "to pay by card / in cash",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to pay by card / in cash.",
            "ex": "Prefereixo pagar amb targeta abans que en efectiu.",
            "exEn": "I prefer to pay by card than in cash."
          },
          {
            "id": "quantities-money-023",
            "ca": "descompte / rebaixes",
            "en": "markdown / sale",
            "hint": "Descompte is a discount; rebaixes are the seasonal sales. Meaning: markdown / sale.",
            "ex": "Vaig comprar aquesta jaqueta a les rebaixes.",
            "exEn": "I bought this jacket on sale."
          },
          {
            "id": "quantities-money-024",
            "ca": "monedes",
            "en": "small change / coins",
            "hint": "Monedes are coins; canvi can mean the change you get back. Meaning: small change / coins.",
            "ex": "Ho sento, no tinc monedes.",
            "exEn": "Sorry, I don't have any change."
          }
        ]
      },
      {
        "id": "a2-directions-orientation",
        "name": "Directions and orientation",
        "emoji": "🧭",
        "description": "Places, movement and spatial language",
        "cards": [
          {
            "id": "directions-orientation-001",
            "ca": "Com arribar a...?",
            "en": "How do I get to...? (by transport)",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: How do I get to...? (by transport).",
            "ex": "Disculpeu, com arribar a l'estació?",
            "exEn": "Excuse me, how do I get to the station?"
          },
          {
            "id": "directions-orientation-002",
            "ca": "Com arribar a...?",
            "en": "How do I get to...? (on foot)",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: How do I get to...? (on foot).",
            "ex": "Com arribar al museu des d'aquí?",
            "exEn": "How do I walk to the museum from here?"
          },
          {
            "id": "directions-orientation-003",
            "ca": "On és...?",
            "en": "Where is...?",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: Where is...?.",
            "ex": "On és la farmàcia més propera?",
            "exEn": "Where is the nearest pharmacy?"
          },
          {
            "id": "directions-orientation-004",
            "ca": "recte",
            "en": "straight ahead",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: straight ahead.",
            "ex": "si us plau, aneu directament als llums.",
            "exEn": "Go straight ahead to the traffic lights."
          },
          {
            "id": "directions-orientation-005",
            "ca": "girar a l'esquerra/dreta",
            "en": "to turn left / right",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: to turn left / right.",
            "ex": "A la cantonada, gireu a la dreta.",
            "exEn": "At the corner, turn right."
          },
          {
            "id": "directions-orientation-006",
            "ca": "caminar",
            "en": "to go along",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: to go along.",
            "ex": "si us plau, camina pel riu.",
            "exEn": "Go along the river."
          },
          {
            "id": "directions-orientation-007",
            "ca": "passar",
            "en": "to pass / go past",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: to pass / go past.",
            "ex": "Passeu el parc i gireu a l'esquerra.",
            "exEn": "Go past the park and turn left."
          },
          {
            "id": "directions-orientation-008",
            "ca": "A prop",
            "en": "next to, beside",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: next to, beside.",
            "ex": "La botiga està al costat de la farmàcia.",
            "exEn": "The shop is next to the pharmacy."
          },
          {
            "id": "directions-orientation-009",
            "ca": "contrari",
            "en": "opposite, across from",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: opposite, across from.",
            "ex": "L'hotel està davant del parc.",
            "exEn": "The hotel is opposite the park."
          },
          {
            "id": "directions-orientation-010",
            "ca": "entre",
            "en": "between",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: between.",
            "ex": "La cafeteria està entre el banc i la llibreria.",
            "exEn": "The cafe is between the bank and the bookshop."
          },
          {
            "id": "directions-orientation-011",
            "ca": "per",
            "en": "behind / beyond",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: behind / beyond.",
            "ex": "L'aparcament es troba darrere de l'edifici.",
            "exEn": "The car park is behind the building."
          },
          {
            "id": "directions-orientation-012",
            "ca": "Abans",
            "en": "in front of",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: in front of.",
            "ex": "Ens trobem davant del cinema.",
            "exEn": "Let's meet in front of the cinema."
          },
          {
            "id": "directions-orientation-013",
            "ca": "a la cantonada",
            "en": "on the corner",
            "hint": "Feminine nouns usually take la or una; l' appears before many vowel sounds. Meaning: on the corner.",
            "ex": "La floristeria és a la cantonada.",
            "exEn": "The florist is on the corner."
          },
          {
            "id": "directions-orientation-014",
            "ca": "intersecció",
            "en": "intersection, crossroads",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: intersection, crossroads.",
            "ex": "A la intersecció, gireu a l'esquerra.",
            "exEn": "At the intersection, turn left."
          },
          {
            "id": "directions-orientation-015",
            "ca": "llums",
            "en": "traffic lights",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: traffic lights.",
            "ex": "si us plau, gireu al segon semàfor.",
            "exEn": "Turn at the second set of lights."
          },
          {
            "id": "directions-orientation-016",
            "ca": "pas de vianants",
            "en": "pedestrian crossing",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: pedestrian crossing.",
            "ex": "Travessar el pas de vianants.",
            "exEn": "Cross at the pedestrian crossing."
          },
          {
            "id": "directions-orientation-017",
            "ca": "prop / lluny",
            "en": "near / far",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: near / far.",
            "ex": "És molt a prop, a cinc minuts d'aquí.",
            "exEn": "It's very close, five minutes from here."
          },
          {
            "id": "directions-orientation-018",
            "ca": "al costat esquerre/dret",
            "en": "on the left / right side",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: on the left / right side.",
            "ex": "El restaurant és a l'esquerra.",
            "exEn": "The restaurant is on the left side."
          },
          {
            "id": "directions-orientation-019",
            "ca": "per tant",
            "en": "from here",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: from here.",
            "ex": "A quina distància d'aquí al centre?",
            "exEn": "How far is it from here to the centre?"
          },
          {
            "id": "directions-orientation-020",
            "ca": "perdre's",
            "en": "to get lost",
            "hint": "Useful directions and orientation vocabulary in standard Central Catalan. Meaning: to get lost.",
            "ex": "Crec que m'he perdut, on sóc?",
            "exEn": "I think I'm lost - where am I?"
          },
          {
            "id": "directions-orientation-021",
            "ca": "a peu / a peu",
            "en": "on foot",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: on foot.",
            "ex": "Prefereixo caminar que agafar l'autobús.",
            "exEn": "I prefer to walk than take the bus."
          },
          {
            "id": "directions-orientation-022",
            "ca": "mapa/navegació",
            "en": "map / (GPS) navigation",
            "hint": "When two forms are shown, learn both and choose the one that fits the context. Meaning: map / (GPS) navigation.",
            "ex": "Sense navegació definitivament em perdria.",
            "exEn": "Without the GPS I'd definitely get lost."
          }
        ]
      }
    ]
  }
] satisfies Level[];
