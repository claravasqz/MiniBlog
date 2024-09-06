let posts = [
    { id: 1, title: 'Snake Plant: The Air-Purifying Powerhouse', content: 'Looking for a low-maintenance plant that not only looks stunning but also improves the air quality in your home? The Snake Plant (Sansevieria) is a perfect choice! Known for its striking, upright leaves, this hardy plant is a natural air purifier. It absorbs toxins such as formaldehyde and benzene from the air, making it a great addition to bedrooms or living spaces. Plus, it thrives on neglect—requiring little water and low light—making it ideal for both beginners and seasoned plant enthusiasts. Keep a Snake Plant near your bedside for a breath of fresh air, literally!', image: '/images/snakePlant.jpeg'},
    { id: 2, title: 'Aloe Vera: Your Natural Healing Companion', content: 'If you are looking for a plant that’s both beautiful and beneficial, Aloe Vera is the one for you! Known for its soothing gel, Aloe Vera is a must-have in your home, especially for minor cuts, burns, and skin irritations. Just snap off a leaf, extract the gel, and apply it directly to your skin for instant relief. This hardy plant thrives in bright, indirect sunlight and only needs watering every few weeks, making it easy to care for. Aloe Vera isn’t just a healing remedy—its fleshy green leaves add a refreshing touch to any space', image: '/images/aloe-vera.jpeg'}
];

class Post {
    static getAllPosts() {
        return posts;
    }

    static getPostById(id) {
        return posts.find(post => post.id === parseInt(id));
    }

    static createPost(title, content) {
        const newPost = { id: posts.length + 1, title, content };
        posts.push(newPost);
        return newPost;
    }

    static deletePost(id) {
        posts = posts.filter(post => post.id !== parseInt(id));
    }
}

module.exports = Post;