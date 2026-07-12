import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const files = [
  "/Users/gerardburgues/Downloads/data-a1.js",
  "/Users/gerardburgues/Downloads/data-a2.js"
];

const topicMeta = {
  "Pierwsze zwroty": ["first-phrases", "First phrases", "Greetings and week-one survival Catalan"],
  "Liczby i ceny": ["numbers-prices", "Numbers and prices", "Numbers, euros, cents and paying"],
  "W kawiarni": ["cafe", "At the cafe", "Ordering coffee, snacks and drinks"],
  "Orientacja": ["finding-your-way", "Finding your way", "Asking directions and locating places"],
  "O mnie": ["about-me", "About me", "Introducing yourself and getting understood"],
  "Poranna rutyna": ["morning-routine", "Morning routine", "Getting up, washing, dressing and breakfast"],
  "Komunikacja miejska": ["public-transport", "Public transport", "Metro, buses, tickets and getting around"],
  "W aptece": ["pharmacy", "At the pharmacy", "Symptoms, medicines and safe questions"],
  "Sprawy urzędowe": ["paperwork", "Paperwork", "Appointments, documents and civic errands"],
  "W restauracji": ["restaurant", "At the restaurant", "Booking, ordering and paying"],
  "Mieszkanie": ["housing", "Housing", "Renting a flat and fixing everyday problems"],
  "Życie codzienne i rutyna": ["daily-routine", "Daily life and routine", "Habits, chores and frequency"],
  "Dom i rodzina": ["home-family", "Home and family", "Family relations, rooms and furniture"],
  "Zdrowie i ciało": ["health-body", "Health and body", "Body parts, health and doctor visits"],
  "Jedzenie i zakupy": ["food-shopping", "Food and shopping", "Catalan food, recipes and grocery shopping"],
  "Podróże i wakacje": ["travel-holidays", "Travel and holidays", "Transport, accommodation and weather"],
  "Praca i edukacja": ["work-education", "Work and education", "Professions, studying and the workplace"],
  "Czas wolny i kultura": ["free-time-culture", "Free time and culture", "Hobbies, sports and going out"],
  "Pogoda i klimat": ["weather-climate", "Weather and climate", "Forecasts, climate and natural events"],
  "Cechy charakteru": ["personality", "Personality", "Useful traits for social life and work"],
  "Ekologia": ["ecology", "Ecology", "Recycling, saving resources and the environment"],
  "Wygląd i ubrania": ["appearance-clothes", "Appearance and clothes", "Describing people, clothing and style"],
  "Opisywanie przeszłości": ["past-events", "Talking about the past", "Past forms, dates and memories"],
  "Ilości i pieniądze": ["quantities-money", "Quantities and money", "Weights, prices, packets and amounts"],
  "Kierunki i orientacja": ["directions-orientation", "Directions and orientation", "Places, movement and spatial language"]
};

const culturalReplacements = [
  [/Poland/gi, "Catalonia"],
  [/Polish/gi, "Catalan"],
  [/zloty|zlotys|złoty|złotych|PLN/gi, "euro"],
  [/grosz|groszy/gi, "cent"],
  [/PESEL/gi, "NIE"],
  [/Kraków|Krakow|Warsaw/gi, "Barcelona"],
  [/Main Square/gi, "city centre"],
  [/Russian dumplings/gi, "Catalan spinach pastries"]
];

const catalanFixes = [
  [/polonès/gi, "català"],
  [/Polònia/gi, "Catalunya"],
  [/zloty|złoty|PLN/gi, "euro"],
  [/grosz/gi, "cèntim"],
  [/PESEL/gi, "NIE"],
  [/Varsòvia|Cracòvia/gi, "Barcelona"],
  [/pierogi/gi, "canelons"],
  [/schabowy/gi, "botifarra amb mongetes"],
  [/ruskie/gi, "catalans"],
  [/Długiej/gi, "de Mallorca"],
  [/Rynek/gi, "Catalunya"]
];

function loadLevels() {
  const context = { window: { PP_LEVELS: [] } };
  vm.createContext(context);
  for (const file of files) {
    vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
  }
  return context.window.PP_LEVELS;
}

async function translate(text) {
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    const url = new URL("https://translate.googleapis.com/translate_a/single");
    url.searchParams.set("client", "gtx");
    url.searchParams.set("sl", "pl");
    url.searchParams.set("tl", "ca");
    url.searchParams.set("dt", "t");
    url.searchParams.set("q", text);
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      return json[0].map((part) => part[0]).join("");
    }
    await new Promise((resolve) => setTimeout(resolve, attempt * 650));
  }
  throw new Error(`Translation failed after retries: ${text}`);
}

function cleanEnglish(text) {
  let next = text;
  for (const [pattern, replacement] of culturalReplacements) {
    next = next.replace(pattern, replacement);
  }
  return next;
}

function cleanCatalan(text) {
  let next = text;
  for (const [pattern, replacement] of catalanFixes) {
    next = next.replace(pattern, replacement);
  }
  return next
    .replace(/\bsi us plau\b/gi, "si us plau")
    .replace(/\s+/g, " ")
    .trim();
}

function makeHint(card, ca, topicName) {
  const lower = ca.toLowerCase();
  const notes = [];
  if (/\/| o | i /.test(ca)) notes.push("When two forms are shown, learn both and choose the one that fits the context.");
  if (/(el|un) [a-zà-ÿ]/i.test(ca)) notes.push("Masculine nouns usually take el or un.");
  if (/(la|una|l') [a-zà-ÿ]/i.test(ca)) notes.push("Feminine nouns usually take la or una; l' appears before many vowel sounds.");
  if (/si us plau|voldria|podria|em pot/i.test(lower)) notes.push("This is a polite everyday form in Catalonia.");
  if (/vaig|era|tenia|ahir|setmana passada|fa /i.test(lower)) notes.push("Notice the Catalan past-time wording used for simple stories.");
  if (/euro|cèntim|targeta|pagar/i.test(lower)) notes.push("Use euros and cèntims for prices in Catalonia.");
  if (/nie|dni|padró|cita prèvia|ajuntament|targeta sanitària/i.test(lower)) notes.push("Useful in Catalonia/Spain administrative contexts; requirements vary by situation.");
  if (notes.length === 0) notes.push(`Useful ${topicName.toLowerCase()} vocabulary in standard Central Catalan.`);
  return `${notes[0]} Meaning: ${cleanEnglish(card.en)}.`;
}

function adaptCard(source, topicId, index, topicName) {
  const ca = cleanCatalan(source.ca);
  return {
    id: `${topicId}-${String(index + 1).padStart(3, "0")}`,
    ca,
    en: cleanEnglish(source.en),
    hint: makeHint(source, ca, topicName),
    ex: cleanCatalan(source.ex),
    exEn: cleanEnglish(source.exEn)
  };
}

async function main() {
  const levels = loadLevels();
  const translated = [];
  for (const level of levels) {
    const outLevel = {
      level: level.level,
      blurb: level.level === "A1" ? "Survival Catalan" : "Everyday life in Catalonia",
      topics: []
    };
    for (const topic of level.topics) {
      const meta = topicMeta[topic.name];
      if (!meta) throw new Error(`Missing topic metadata: ${topic.name}`);
      const [topicId, name, description] = meta;
      const cards = [];
      for (let i = 0; i < topic.cards.length; i += 1) {
        const card = topic.cards[i];
        const [ca, ex] = await Promise.all([translate(card.pl), translate(card.ex)]);
        cards.push(adaptCard({ ...card, ca, ex }, topicId, i, name));
        await new Promise((resolve) => setTimeout(resolve, 90));
      }
      outLevel.topics.push({
        id: `${level.level.toLowerCase()}-${topicId}`,
        name,
        emoji: topic.emoji,
        description,
        cards
      });
      console.log(`${level.level} ${name}: ${cards.length}`);
    }
    translated.push(outLevel);
  }

  const content = `import type { Level } from "@/types/lessons";\n\nexport const levels = ${JSON.stringify(translated, null, 2)} satisfies Level[];\n`;
  fs.mkdirSync(path.join(root, "src/data"), { recursive: true });
  fs.writeFileSync(path.join(root, "src/data/levels.ts"), content);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
