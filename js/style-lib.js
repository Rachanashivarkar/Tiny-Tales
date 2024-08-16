  // Search function
  document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const stories = document.querySelectorAll('.story-card');
    stories.forEach(function(story) {
        const title = story.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            story.style.display = 'block';
        } else {
            story.style.display = 'none';
        }
    });
});

// Filter function
function filterStories(category) {
    const stories = document.querySelectorAll('.story-card');
    stories.forEach(function(story) {
        if (category === 'All' || story.dataset.category === category) {
            story.style.display = 'block';
        } else {
            story.style.display = 'none';
        }
    });
}