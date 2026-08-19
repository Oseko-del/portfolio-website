/* ============================================================
   SYD-BOT — a tiny rule-based assistant that only knows about
   Sydney Oseko Juma. No API calls, pure pattern matching,
   with a bit of humor baked in. Edit SYD_BOT_KB to teach it more.
============================================================ */

const SYD_BOT_KB = [
  {
    keys: ["who are you", "who is sydney", "who's sydney", "about you", "about sydney", "introduce", "tell me about him", "tell me about sydney", "what is this", "what's this bot"],
    reply: "I'm Sydney's Bot 🤖  Sydney's biggest fan and unpaid intern. He's a third-year BSc IT student at Technical University of Mombasa, based in Mombasa, Kenya, grinding toward becoming an AI/ML Engineer.",
    suggest: ["What does he study?", "What are his skills?", "Tell me a joke"]
  },
  {
    keys: ["study", "studying", "university", "school", "course", "courses", "degree", "tum", "class", "student", "curriculum", "subjects"],
    reply: "Sydney studies Information Technology and Software Development, with a good bit of networking thrown in too  the classic 'a little bit of everything' IT degree.",
    suggest: ["What are his skills?", "Any freelance work?", "Tell me a joke"]
  },
  {
    keys: ["network", "networking", "cybersecurity", "cyber security", "security", "hacking", "ospf", "rip", "acl", "penetration test"],
    reply: "Networking and cybersecurity fundamentals are part of his studies routing, security basics, that kind of thing. All classroom legit, no shady stuff.",
    suggest: ["What does he study?", "What are his skills?", "Show me a project"]
  },
  {
    keys: ["skill", "skills", "tech stack", "technologies", "language", "languages", "know how to code", "programming", "coding", "developer", "dev skills", "what can he do"],
    reply: "HTML/CSS/JS, Python, Flask  mostly self taught, which around here we call 'YouTube University with a CS minor.' Also leveling up in n8n, Gemini API, Groq, plus video editing in Premiere & After Effects.",
    suggest: ["Show me a project", "What's his AI/ML goal?", "Tell me a joke"]
  },
  {
    keys: ["project", "projects", "kejanii", "housing", "app", "apps", "what has he built", "what did he build", "portfolio project"],
    reply: "Kejanii  a smart housing platform connecting landlords and tenants in Kenya. 5 microservices (Auth, Property, Booking, Payment, Notification) held together by Flask, Docker, and a healthy amount of caffeine.",
    suggest: ["Tell me about the payment gateway", "What's his tech stack?", "How do I contact him?"]
  },
  {
    keys: ["payment", "gateway", "daraja", "paystack", "mpesa", "m-pesa", "checkout", "billing api"],
    reply: "He built a reusable payment gateway wrapping M-Pesa Daraja and Paystack behind one unified Flask API  HMAC verification, idempotency, encrypted credentials. Basically, it takes your money very responsibly.",
    suggest: ["Tell me about Kejanii", "What else has he built?", "Tell me a joke"]
  },
  {
    keys: ["hackathon", "hackerrank", "damage claim", "damage claims", "orchestrate", "competition", "won", "competed"],
    reply: "He built a multi-modal damage claims verification system for the HackerRank Orchestrate hackathon  Gemini 2.0 Flash driving a six-module Python pipeline. Not bad for a side quest during a busy semester.",
    suggest: ["What are his skills?", "Show me a project", "Tell me a joke"]
  },
  {
    keys: ["flashcard", "study tool", "pymupdf", "sqlite project"],
    reply: "He's got an AI Flashcard Generator idea in the works  Flask, Gemini API, SQLite, and PyMuPDF for pulling text out of PDFs to auto-generate study cards. Very on-brand for a student building tools for students.",
    suggest: ["Show me a project", "What are his skills?", "Tell me a joke"]
  },
  {
    keys: ["ecommerce", "e-commerce", "pos system", "point of sale", "pharmacy", "chatbot project", "early project"],
    reply: "Early projects include a pharmacy chatbot built with the Gemini API, a POS system, and an Alpha E-commerce platform. Everyone's got to start somewhere  his 'somewhere' had a checkout flow.",
    suggest: ["Show me a project", "What's his tech stack?", "How do I contact him?"]
  },
  {
    keys: ["freelance", "freelancing", "client", "clients", "gig", "gigs", "side hustle", "hire", "work for", "job", "jobs", "career opportunities", "apply", "applied", "m-kopa", "accessowl"],
    reply: "Freelance work includes web dev, YouTube thumbnail design, and client projects  a pharmacy site, automation work with Gemini AI... the man does not sleep much. He's also applied to a few AI/automation roles while studying, so he's not shy about aiming high.",
    suggest: ["How do I hire him?", "What are his skills?", "Show me a project"]
  },
  {
    keys: ["video", "editing", "video editing", "premiere", "premiere pro", "after effects", "motion design", "motion graphics", "capcut", "color grade", "color grading", "lut"],
    reply: "Self-taught video editor  Adobe Premiere Pro and After Effects, with some CapCut in the mix too. He's done color grading work with LUTs and knows his way around a timeline. If it moves and needs a soundtrack, he's probably edited something like it.",
    suggest: ["What are his skills?", "Any freelance work?", "How do I contact him?"]
  },
  {
    keys: ["contact", "email", "reach", "hire you", "get in touch", "phone", "number", "message him", "reach out", "connect with him"],
    reply: "Reach Sydney at osekosydney@gmail.com or 0796096169  or scroll down to the Contact section. Faster reply rate than most group chats.",
    suggest: ["What are his skills?", "Show me a project", "Tell me a joke"]
  },
  {
    keys: ["github", "code", "repo", "repos", "repository", "source code", "open source"],
    reply: "All the code lives at github.com/Oseko-del  check the Projects section above for the highlight reel.",
    suggest: ["Show me a project", "What are his skills?", "How do I contact him?"]
  },
  {
    keys: ["goal", "goals", "future", "career goal", "ambition", "ambitions", "ai/ml", "machine learning", "ai engineer", "dream job", "plans"],
    reply: "Long-term goal: AI/ML Engineer. He's already building toward it with automation and AI-integration projects  I'm basically a very small, very biased proof of concept.",
    suggest: ["What are his skills?", "Show me a project", "Tell me a joke"]
  },
  {
    keys: ["laptop", "computer", "pc", "setup", "keyboard", "hardware", "device", "thinkpad", "linux", "kali", "ide", "editor", "tools he uses"],
    reply: "He runs a ThinkPad X1 Carbon, tinkers with a Kali Linux VM, and types away on a mechanical keyboard with blue switches  loud enough that everyone in the house knows when he's coding. Also into Claude Code and a few AI-assisted IDEs.",
    suggest: ["What are his skills?", "Show me a project", "Tell me a joke"]
  },
  {
    keys: ["hobby", "hobbies", "interest", "interests", "free time", "sports", "3d modeling", "3d art"],
    reply: "Outside of code, he's into Linux tinkering, 3D modeling, and AI-generated content  always tinkering with something new.",
    suggest: ["What are his skills?", "Tell me a joke", "Show me a project"]
  },
  {
    keys: ["joke", "jokes", "funny", "make me laugh", "humor", "humour", "roast him", "roast sydney"],
    reply: [
      "Why do programmers prefer dark mode? Because light attracts bugs 🐛  and Sydney's fixed enough of those for one lifetime.",
      "Sydney's code doesn't have bugs. It has 'undocumented features.' I stand by this.",
      "I asked Sydney to explain recursion. He told me to ask Sydney's Bot. I asked Sydney's Bot. It told me to ask Sydney.",
      "Sydney once debugged for 3 hours only to find a missing semicolon. We don't talk about that day."
    ],
    suggest: ["Tell me another one", "What are his skills?", "Show me a project"]
  },
  {
    keys: ["another one", "another joke", "one more", "got any more", "more jokes"],
    reply: [
      "Why did Sydney's payment gateway break up with bugs? Because it couldn't handle the 'exceptions.'",
      "Sydney's favorite HTTP status code is 200  everything else gives him anxiety.",
      "He says he's 'self-taught.' Translation: he has 47 browser tabs open and no memory of closing any of them."
    ],
    suggest: ["What are his skills?", "Show me a project", "How do I contact him?"]
  },
  {
    keys: ["hello", "hi", "hey", "sup", "yo", "hii", "helo", "good morning", "good afternoon", "good evening","ssup"],
    reply: "Hey there! I'm Sydney's Bot 👋  ask me about Sydney's projects, skills, background, or throw me a random question and watch me pretend I know the answer.",
    suggest: ["Tell me about Sydney", "Show me a project", "Tell me a joke"]
  },
  {
    keys: ["thanks", "thank you", "thnx", "thx", "cheers", "appreciate it"],
    reply: "Anytime! I run on curiosity and zero API costs. Anything else you want to know about Sydney?",
    suggest: ["Show me a project", "How do I contact him?", "Tell me a joke"]
  }
];

const SYD_BOT_FALLBACKS = [
  "I only know about Sydney  I'm not smart enough for anything else. Try asking about his projects, skills, or how to reach him.",
  "That one's above my pay grade (I'm a volunteer). I'm strictly here for Sydney Oseko trivia.",
  "Hmm, that's outside my tiny knowledge base. Ask me about Sydney's work, background, or contact info instead  or ask for a joke, I've got a few."
];

const SYD_BOT_DEFAULT_SUGGESTIONS = ["Tell me about Sydney", "Show me a project", "Tell me a joke"];

function sydBotPickReply(entry) {
  if (Array.isArray(entry.reply)) {
    return entry.reply[Math.floor(Math.random() * entry.reply.length)];
  }
  return entry.reply;
}

function sydBotFindEntry(input) {
  const text = input.toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const entry of SYD_BOT_KB) {
    const score = entry.keys.reduce((n, k) => n + (text.includes(k) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return best;
}

function sydBotAppendMessage(text, sender) {
  const log = document.getElementById('sydBotLog');
  const msg = document.createElement('div');
  msg.className = 'syd-bot-msg ' + sender;
  msg.textContent = text;
  log.appendChild(msg);
  log.scrollTop = log.scrollHeight;
}

function sydBotRenderSuggestions(suggestions) {
  const log = document.getElementById('sydBotLog');
  const old = log.querySelector('.syd-bot-suggestions');
  if (old) old.remove();

  const wrap = document.createElement('div');
  wrap.className = 'syd-bot-suggestions';
  suggestions.forEach(q => {
    const chip = document.createElement('button');
    chip.className = 'syd-bot-chip';
    chip.textContent = q;
    chip.onclick = () => sydBotSend(q);
    wrap.appendChild(chip);
  });
  log.appendChild(wrap);
  log.scrollTop = log.scrollHeight;
}

function sydBotSend(preset) {
  const input = document.getElementById('sydBotInput');
  const value = (preset !== undefined ? preset : input.value).trim();
  if (!value) return;

  const oldChips = document.querySelector('.syd-bot-suggestions');
  if (oldChips) oldChips.remove();

  sydBotAppendMessage(value, 'user');
  input.value = '';

  setTimeout(() => {
    const entry = sydBotFindEntry(value);
    const reply = entry ? sydBotPickReply(entry) : SYD_BOT_FALLBACKS[Math.floor(Math.random() * SYD_BOT_FALLBACKS.length)];
    sydBotAppendMessage(reply, 'bot');
    sydBotRenderSuggestions(entry && entry.suggest ? entry.suggest : SYD_BOT_DEFAULT_SUGGESTIONS);
  }, 400);
}

let sydBotGreeted = false;

function sydBotToggle() {
  const panel = document.getElementById('sydBotPanel');
  const isOpen = panel.classList.toggle('open');
  document.body.classList.toggle('syd-bot-panel-open', isOpen);
  if (isOpen) {
    document.getElementById('sydBotInput').focus();
    if (!sydBotGreeted) {
      sydBotAppendMessage("Hey! I'm Sydney's Bot 🤖 Ask me anything about Sydney  or tap a suggestion below.", 'bot');
      sydBotRenderSuggestions(SYD_BOT_DEFAULT_SUGGESTIONS);
      sydBotGreeted = true;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('sydBotInput');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sydBotSend();
    });
  }

  // Show the pill only once the hero section is mostly scrolled past
  const pill = document.getElementById('sydBotPill');
  const hero = document.getElementById('home');
  if (pill && hero) {
    window.addEventListener('scroll', () => {
      const heroBottom = hero.offsetTop + hero.offsetHeight - 200;
      pill.classList.toggle('visible', window.scrollY > heroBottom);
    });
  }
});