const express = require('express');
const path = require('path');
const app = express();

const postRoutes = require('./routes/posts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.redirect('/posts');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});