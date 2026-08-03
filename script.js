<script scr="script.js"></script>

const form = document.getElementById('storyFrom');
const StoriesDiv = document.getElementById('stories');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const name = document.getElementById('name').value; 
    const story = document.getElementById('story').value;

    const newStroy = Document.createElement('p');
    newStroy.textContent = '${name}: ${stroy}';
    StoriesDiv.appendChild(newStory);

    form.reset();
});