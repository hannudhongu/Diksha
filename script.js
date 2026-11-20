const questions = [
  "Do u love me? 🥺❤️",
  "Chlo bchs seggs kre 😞",
  "Aww bcha mnn gye ye lo ummmmh 💋",
  "Biyah kroge bcha 😞"
];

const messages = [
  ["Awww bchaaa! 🥺❤️", "Ummmmmmmmmh 💋💋"],
  ["Hehe bchaaa! 😘", "Aao pehle ek pyaari si kiss! 💋"],
  ["Awww bcha mnn gye! 🥺", "Ye lo ummmmmmh 💋💋💋"],
  ["Sachiii? 🥺💍", "Ab toh shaadi ki taiyari karni padegi! ❤️"]
];

let current = 0;

function show(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function checkPass() {
  const password = document.getElementById("pass").value;
  const error = document.getElementById("error");

  if (password === "1904") {
    error.textContent = "";
    show("wish");
    hearts();
  } else {
    error.textContent = "Wrong password bacha! 🥺";
  }
}

function startQuiz() {
  current = 0;
  loadQuestion();
  show("quiz");
}

function loadQuestion() {
  document.getElementById("number").textContent =
    `Question ${current + 1} of ${questions.length}`;
  document.getElementById("question").textContent = questions[current];

  const no = document.getElementById("noBtn");
  no.classList.remove("run");
  no.style.left = "";
  no.style.top = "";
}

function runAway(event) {
  event.preventDefault();

  const no = document.getElementById("noBtn");
  no.classList.add("run");

  const maxX = Math.max(10, window.innerWidth - no.offsetWidth - 15);
  const maxY = Math.max(10, window.innerHeight - no.offsetHeight - 15);
  const x = 10 + Math.random() * Math.max(0, maxX - 10);
  const y = 10 + Math.random() * Math.max(0, maxY - 10);

  no.style.left = `${x}px`;
  no.style.top = `${y}px`;
}

const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("pointerenter", runAway);
noBtn.addEventListener("touchstart", runAway, { passive: false });
noBtn.addEventListener("click", runAway);

function answerYes() {
  document.getElementById("popEmoji").textContent =
    current === 3 ? "💍❤️" : "💋❤️";
  document.getElementById("popTitle").textContent = messages[current][0];
  document.getElementById("popText").textContent = messages[current][1];
  document.getElementById("popup").style.display = "flex";
  hearts();
}

function nextQuestion() {
  document.getElementById("popup").style.display = "none";
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    show("final");
    hearts();
  }
}

function hearts() {
  const symbols = ["❤️", "💗", "💕", "💋", "🌹", "✨"];

  for (let i = 0; i < 22; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${18 + Math.random() * 25}px`;
    heart.style.animationDuration = `${3 + Math.random() * 4}s`;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7500);
  }
}

setInterval(() => {
  if (document.visibilityState === "visible") hearts();
}, 3500);
