document.addEventListener('DOMContentLoaded', function() {
    const stories = document.querySelectorAll('.story');
    const storyPreviewSection = document.getElementById('story-preview');
    const previewContent = document.getElementById('preview-content');
    const closePreviewButton = document.getElementById('close-preview');

    stories.forEach(story => {
        story.addEventListener('click', function() {
            const storyTitle = story.querySelector('p').textContent;
            const storyDescription = story.getAttribute('data-description');
            const storyImage = story.querySelector('img').src;

            previewContent.innerHTML = `
                <h3>${storyTitle}</h3>
                <img src="${storyImage}" alt="${storyTitle}">
                <p>${storyDescription}</p>
            `;

            storyPreviewSection.style.display = 'block';
        });
    });

    closePreviewButton.addEventListener('click', function() {
        storyPreviewSection.style.display = 'none';
    });
});
