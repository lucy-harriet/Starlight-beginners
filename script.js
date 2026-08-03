
const firebaseConfig = {
  apiKey: "AIzaSyByhH0eHPjM0f1pAcRk5_Q5v0t_iPylaH0",
  authDomain: "starlight-beginners.firebaseapp.com",
  projectId: "starlight-beginners",
  storageBucket: "starlight-beginners.firebasestorage.app",
  messagingSenderId: "481052339406",
  appId: "1:481052339406:web:f918a8116149d72f26749f",
  measurementId: "G-YK4LD36X0F"
};
firebaseConfig.initializeApp(firebaseConfig);

const db = firebase.firestore();
const stroage = firebase.storage();
const auth = firebase.auth();


// Fade-in effect on page load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Star generator
function createStars(count) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(star);
  }
}

createStars(150);

// Scroll reveal for boxes and sections
const revealElements = document.querySelectorAll('.box, h2, p, form, div');

window.addEventListener('scroll', () => {
  revealElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add('revealed');
    }
  });
});

<script scr="script.js"></script>

