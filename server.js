const express = require('express');
const articleRouter = require('./routes/articles'); // gives us access to the articleRouter from the server
const app = express();
const PORT = 4000; 

// set the view engine, so that it prints HTML to the screen instead of just text
app.set('view engine', 'ejs');

app.use('/articles', articleRouter); 

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: Date.now(),
        description: 'Test description'
    }]

    res.render('index', { articles: articles });
});

app.listen(PORT);