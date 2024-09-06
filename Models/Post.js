let posts = [
    { id: 1, title: 'First Post', content: 'This is the first post' },
    { id: 2, title: 'Second Post', content: 'This is the second post' }
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