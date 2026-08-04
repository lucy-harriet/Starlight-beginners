// -----------------------------
// Firebase Setup
// -----------------------------
const firebaseConfig = {
  apiKey: "AIzaSyBybH0eHPjM0f1pAcRk5_Q5v0t_iPylaH0",
  authDomain: "starlight-beginners.firebaseapp.com",
  projectId: "starlight-beginners",
  storageBucket: "starlight-beginners.appspot.com",
  messagingSenderId: "48105239406",
  appId: "1:48105239406:web:f918a8116149d72f67491d",
  measurementId: "G-YK4LD36X0F"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();


// -----------------------------
// Fade-in effect on page load
// -----------------------------
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});


// -----------------------------
// Star Generator
// -----------------------------
function createStars(count) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * 3 + 'px';
    star.style.width = size;
    star.style.height = size;

    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';

    star.style.animationDelay = Math.random() * 2 + 's';

    document.body.appendChild(star);
  }
}

createStars(150);


