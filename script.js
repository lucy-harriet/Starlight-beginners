<script scr="script.js"></script>

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

const form = document.getElementById('storyForm');
const storiesDiv = document.getElementById('stories');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const story = document.getElementById('story').value;

    // Save story permanently in Firebase
    await db.collection("stories").add({
        name: name,
        story: story,
        timestamp: Date.now()
    });

    form.reset();
});

// Load stories when page opens 
db.collection("stories").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
    storiesDiv.innerHTML = "";
    snapshot.forEach((doc) => {
        const data = doc.data();
        const newStory = document.createElement('p');
        newStory.textContent = '${data.name}: ${data.story}';
        storiesDiv.appendChild(newStory);
    });
});





