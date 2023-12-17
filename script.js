document.addEventListener('DOMContentLoaded', function () {
    const posts = [
        { title: 'Comign Soon', content: 'Coming Soon' },

    ];

    const blogPosts = document.getElementById('blog-posts');
    const blogNavigation = document.getElementById('blog-navigation');

    // Dynamically generate blog post elements and navigation links
    posts.forEach((post, index) => {
        const postElement = document.createElement('article');
        postElement.id = `post-${index + 1}`;
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        blogPosts.appendChild(postElement);

        const navLink = document.createElement('a');
        navLink.href = `#post-${index + 1}`;
        navLink.textContent = post.title;
        blogNavigation.appendChild(navLink);

        // Add click event to scroll to the corresponding post
        navLink.addEventListener('click', function (event) {
            event.preventDefault();
            postElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
