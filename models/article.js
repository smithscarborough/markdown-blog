// note: models is where we will store our articles

const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    // In here is where we pass a set of options for all of the different columns our article has:
    title: {
        type: String,
        required: true // (means we want to always require this)
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now // this tells our DB that if no date is specified for a new article, to go ahead and give it the current date as a default.
    }
});

// Now we export this schema in order to start using it:
module.exports = mongoose.model('Article', articleSchema)
// So now we have a table in our DB called 'Article' with all of the above columns specified for it!