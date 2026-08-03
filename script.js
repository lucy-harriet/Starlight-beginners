
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

const uploadBtn = document.getElementById('uploadBtn');
const photoUpload = document.getElementById('photoUpload');
const photosDiv = document.getElementById('photos');

uploadBtn.addEventListener('click', async () => {
  const file = photoUpload.files[0];
  if (!file) return;

  const storageRef = storage.ref('photos/' + file.name);
  await storageRef.put(file);
  const url = await storageRef.getDownloadURL();

  await db.collection("photos").add({
    url: url,
    timestamp: Date.now()
  });
});

// Load photos
db.collection("photos").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
  photosDiv.innerHTML = "";
  snapshot.forEach((doc) => {
    const data = doc.data();
    const img = document.createElement('img');
    img.src = data.url;
    img.style.width = "200px";
    img.style.margin = "10px";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 0 10px #fff";
    photosDiv.appendChild(img);
  });
});

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

<script scr="script.js"></script>

