const translations = {
  ru: {
    navAbout:"ОБО МНЕ",navProjects:"ПРОЕКТЫ",navContact:"КОНТАКТЫ",heroEyebrow:"AI AUTOMATION · PORTFOLIO",firstName:"НИК",lastName:"ПЕТРОВ",
    heroDescription:"Разрабатываю AI-решения, автоматизирую процессы и превращаю идеи в работающие цифровые продукты.",seeProjects:"СМОТРЕТЬ ПРОЕКТЫ",remote:"REMOTE · OPEN TO OPPORTUNITIES",
    aboutKicker:"ПРОФИЛЬ",aboutTitle:"От идеи<br>к <em>работающему</em><br>решению.",aboutText:"Начинающий специалист в области AI Automation. Создаю автоматизированные workflow, изучаю интеграции AI-моделей и разрабатываю прикладные цифровые решения.",
    aboutText2:"В работе использую ChatGPT, n8n, Python и инструменты разработки. Самостоятельно определяю задачи и логику продукта, применяю AI-assisted development для реализации, проверки и улучшения решений.",readResume:"ПЕРЕЙТИ К РЕЗЮМЕ",
    projectsKicker:"ИЗБРАННЫЕ ПРОЕКТЫ",projectsTitle:"Практика.<br><em>Эксперименты.</em><br>Решения.",projectsLead:"Три проекта на разных этапах — от работающей автоматизации до проектирования цифрового продукта.",
    statusPaused:"ТЕСТИРОВАЛСЯ · ПРИОСТАНОВЛЕН",statusProgress:"В РАЗРАБОТКЕ",statusConcept:"КОНЦЕПЦИЯ",screensHint:"Скриншоты проекта можно добавить самостоятельно",conceptHint:"Визуальная заглушка концепции — не скриншот готового приложения",
    tradingShort:"Автоматизация анализа криптовалютного рынка с помощью n8n и AI. Система отбирала ликвидные инструменты на нескольких биржах и отправляла торговые сигналы в Telegram.",
    analystShort:"Разработка аналитического ядра для автоматического поиска торговых ситуаций на рынке фьючерсов и подготовки сигналов.",
    nannyShort:"Концепция сервиса, который помогает родителям находить нянь, а няням — подходящие предложения работы. С акцентом на индивидуальный подбор.",
    moreDetails:"ПОДРОБНЕЕ О ПРОЕКТЕ",taskLabel:"ЗАДАЧА",solutionLabel:"РЕШЕНИЕ",roleLabel:"МОЯ РОЛЬ",stackLabel:"ТЕХНОЛОГИИ",conceptLabel:"КОНЦЕПЦИЯ",
    tradingTask:"Сократить время, которое трейдер тратит на ручной просмотр рынка, и автоматизировать первичный анализ большого количества торговых инструментов.",
    tradingSolution:"Workflow в n8n запускался по расписанию, получал данные через API Binance, MEXC и Bybit, предварительно фильтровал монеты по объёму и ликвидности, а затем передавал отобранные данные в AI-анализ по заданной стратегии. Результатом становились сигналы в Telegram.",
    tradingRole:"Я придумал концепцию, определил стратегию, параметры и логику работы системы. ChatGPT помогал с технической реализацией, интеграциями и настройкой.",
    analystTask:"Создать основу аналитического приложения, которое получает рыночные данные, отбирает подходящие инструменты и помогает находить торговые ситуации по заданным правилам.",
    analystSolution:"Подключение к публичному MEXC USDT-M Futures API, фильтрация контрактов по ликвидности и спреду, обработка свечных данных, расчёт ATR, анализ локальных экстремумов и сохранение кандидатов в SQLite.",
    analystRole:"Определяю назначение и архитектуру проекта, формулирую задачи для компонентов, использую ChatGPT для генерации и доработки кода, самостоятельно запускаю систему, проверяю результаты, анализирую ошибки и уточняю требования.",
    analystNote:"Проект находится в разработке. Это аналитический инструмент, а не готовая торговая система; приватные торговые API не используются.",
    nannyTask:"Упростить поиск няни для родителей и поиск работы для нянь, сделав процесс более адресным, чем обычный каталог анкет.",
    nannySolution:"Няни самостоятельно создают профили. Родители используют фильтры по возрасту ребёнка, опыту и рейтингу, отправляют заявку, а няня подтверждает её. Дополнительно предусмотрен индивидуальный подбор под запрос семьи.",
    nannyRole:"Самостоятельно придумал концепцию и определил функциональность сервиса. ChatGPT помогал прорабатывать бизнес-модель, пользовательские сценарии и структуру приложения.",
    nannyStatus:"Стадия концепции и проектирования. Программная реализация ещё не начата.",
    resumeKicker:"РЕЗЮМЕ",resumeTitle:"Инструменты<br><em>и компетенции.</em>",automationLabel:"АВТОМАТИЗАЦИЯ",educationLabel:"ОБРАЗОВАНИЕ",
    educationText:"Среднее профессиональное образование<br>Строительство и эксплуатация зданий и сооружений",languagesLabel:"ЯЗЫКИ",languagesText:"Русский — родной<br>Английский — A2",formatLabel:"ФОРМАТ",formatText:"Удалённая работа<br>Полная / частичная занятость",
    contactKicker:"СВЯЗЬ",contactTitle:"Есть задача?<br><em>Давайте обсудим.</em>",backTop:"НАВЕРХ ↑"
  },
  en: {
    navAbout:"ABOUT",navProjects:"PROJECTS",navContact:"CONTACT",heroEyebrow:"AI AUTOMATION · PORTFOLIO",firstName:"NIK",lastName:"PETROV",
    heroDescription:"I build AI-powered solutions, automate workflows, and turn ideas into practical digital products.",seeProjects:"EXPLORE PROJECTS",remote:"REMOTE · OPEN TO OPPORTUNITIES",
    aboutKicker:"PROFILE",aboutTitle:"From an idea<br>to a <em>working</em><br>solution.",aboutText:"An aspiring AI Automation specialist building automated workflows, exploring AI model integrations, and developing practical digital solutions.",
    aboutText2:"I work with ChatGPT, n8n, Python, and development tools. I define product requirements and logic, then use AI-assisted development to implement, test, and improve solutions.",readResume:"VIEW SKILLS",
    projectsKicker:"SELECTED PROJECTS",projectsTitle:"Practice.<br><em>Experiments.</em><br>Solutions.",projectsLead:"Three projects at different stages — from a tested automation workflow to a digital product concept.",
    statusPaused:"TESTED · PAUSED",statusProgress:"IN DEVELOPMENT",statusConcept:"CONCEPT",screensHint:"Project screenshots can be added here later",conceptHint:"Concept placeholder — not a screenshot of a finished app",
    tradingShort:"Crypto market analysis automation built with n8n and AI. The system filtered liquid assets across multiple exchanges and sent trading signals to Telegram.",
    analystShort:"Development of an analytical core designed to identify futures market setups and prepare trading signals.",
    nannyShort:"A service concept helping parents find nannies and nannies find suitable work, with a focus on personalized matching.",
    moreDetails:"EXPLORE CASE",taskLabel:"CHALLENGE",solutionLabel:"SOLUTION",roleLabel:"MY ROLE",stackLabel:"TECHNOLOGIES",conceptLabel:"CONCEPT",
    tradingTask:"Reduce the time a trader spends manually reviewing the market and automate the initial analysis of a large number of trading instruments.",
    tradingSolution:"An n8n workflow ran on a schedule, fetched data through Binance, MEXC, and Bybit APIs, filtered assets by trading volume and liquidity, then passed selected data to an AI analysis based on a defined strategy. The output was delivered as Telegram signals.",
    tradingRole:"I developed the concept and defined the strategy, parameters, and system logic. ChatGPT assisted with technical implementation, integrations, and configuration.",
    analystTask:"Build the foundation of an analytical application that retrieves market data, filters instruments, and helps identify trading setups using defined rules.",
    analystSolution:"Connected to the public MEXC USDT-M Futures API, filtered contracts by liquidity and spread, processed candle data, calculated ATR, analyzed local swing points, and stored candidates in SQLite.",
    analystRole:"I define the product purpose and architecture, break work into components, use ChatGPT to generate and refine code, then run the system, verify results, investigate errors, and refine requirements.",
    analystNote:"The project is under development. It is an analytical tool, not a finished trading system; no private trading endpoints are used.",
    nannyTask:"Make it easier for parents to find a nanny and for nannies to find work, with a more tailored process than a standard profile directory.",
    nannySolution:"Nannies create their own profiles. Parents filter by child age, experience, and rating, then send a request for the nanny to confirm. The concept also includes personalized matching for family requirements.",
    nannyRole:"I came up with the concept and defined the service functionality. ChatGPT helped develop the business model, user scenarios, and application structure.",
    nannyStatus:"Concept and planning stage. Software implementation has not started.",
    resumeKicker:"RESUME",resumeTitle:"Tools<br><em>& capabilities.</em>",automationLabel:"AUTOMATION",educationLabel:"EDUCATION",
    educationText:"Vocational education<br>Construction and operation of buildings and structures",languagesLabel:"LANGUAGES",languagesText:"Russian — native<br>English — A2",formatLabel:"WORK FORMAT",formatText:"Remote work<br>Full-time / part-time",
    contactKicker:"CONTACT",contactTitle:"Have a project?<br><em>Let's talk.</em>",backTop:"BACK TO TOP ↑"
  }
};

let currentLang = "ru";
const langSwitch = document.getElementById("langSwitch");
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  langSwitch.innerHTML = lang === "ru" ? "RU <span>/</span> EN" : "RU <span>/</span> EN";
}
langSwitch.addEventListener("click", () => setLanguage(currentLang === "ru" ? "en" : "ru"));

document.querySelectorAll(".details-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.closest(".project-card").querySelector(".project-details");
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    details.hidden = open;
  });
});

// Image manifests are intentionally simple to edit. Add filenames to images.json.
// Example: "trading": ["01-main-screen.jpg", "02-signal.png"]
fetch("images.json").then(r => r.json()).then(manifest => {
  Object.entries(manifest).forEach(([project, files]) => {
    const card = document.querySelector(`[data-project="${project}"]`);
    if (!card || !Array.isArray(files) || files.length === 0) return;
    const visual = card.querySelector(".project-visual");
    const placeholder = visual.querySelector(".visual-placeholder");
    const controls = visual.querySelector(".carousel-controls");
    let index = 0;
    const img = document.createElement("img");
    img.className = "project-image";
    img.alt = `${project} project screenshot`;
    img.src = `images/${projectFolder(project)}/${files[0]}`;
    placeholder.replaceWith(img);
    controls.hidden = files.length < 2;
    const count = controls.querySelector(".slide-count");
    function show(i) {
      index = (i + files.length) % files.length;
      img.src = `images/${projectFolder(project)}/${files[index]}`;
      count.textContent = `${String(index + 1).padStart(2,"0")} / ${String(files.length).padStart(2,"0")}`;
    }
    show(0);
    controls.querySelector(".prev").addEventListener("click", () => show(index - 1));
    controls.querySelector(".next").addEventListener("click", () => show(index + 1));
    img.addEventListener("click", () => window.open(img.src, "_blank", "noopener"));
  });
}).catch(() => {});
function projectFolder(key) {
  return ({trading:"trading-bot",analyst:"cr13-analyst",nanny:"nanny-app"})[key];
}
