document.addEventListener('DOMContentLoaded', function () {
    // Sample blog post data
    const posts = [
        { title: 'Post Coming soon!', content: 'TComing Soon' },
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
