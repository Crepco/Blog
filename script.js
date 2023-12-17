document.addEventListener('DOMContentLoaded', function () {
    // Sample blog post data
    const posts = [
        { title: 'First Post', content: 'This is the content of the first post.' },
        { title: 'Second Post', content: 'This is the content of the second post.' },
        // Add more posts as needed
    ];

    const blogPosts = document.getElementById('blog-posts');

    // Dynamically generate blog post elements
    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        blogPosts.appendChild(postElement);
    });
});
