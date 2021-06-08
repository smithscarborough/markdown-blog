const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles'); // gives us access to the articleRouter from the server
const app = express();
const PORT = 4000; 

// this allows us to connect to the mongoDB database (note: here we are calling our DB "blog," but you can call it whatever you want"):
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true });

// set the view engine, so that it prints HTML to the screen instead of just text
// app.set lets us configure the app's settings
// So here, we are telling the app to use EJS as a our view engine, to create our templates
app.set('view engine', 'ejs');

app.use('/articles', articleRouter); 

app.get('/', (req, res) => {
    const articles = [
        {
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test description 2'
    }
]

    res.render('articles/index', { articles: articles });
});

app.listen(PORT);