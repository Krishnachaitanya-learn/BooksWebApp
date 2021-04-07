/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */
/*const express = require('express');
is converted to ES6 format as below
*/
const express = require('express');
const bookRouter = express.Router();

function router(nav) {
    const books = [
        {
            title: 'War and Peace',
            genre: 'Historical fiction',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
        },
        {
            title: 'My Experiments with Truth',
            genre: 'Auto Biography',
            author: 'M.K.Gandhi',
            read: false
        },
        {
            title: 'Discovery of India',
            genre: 'Historical',
            author: 'Pandit Jawaharlal Nehru',
            read: false
        },
        {
            title: 'Arthashastra',
            genre: 'Economics',
            author: 'Kautilya',
            read: false
        },
        {
            title: 'Animal Farm',
            genre: 'Historical iction',
            author: 'George Orwell',
            read: false
        },
        {
            title: 'Mein Kampf',
            genre: 'Auto Biography',
            author: 'Adolf Hitler',
            read: false
        },
        {
            title: 'The Decline and Fall of the Roman Empire',
            genre: 'History',
            author: 'Edward Gibbon',
            read: false
        },
        {
            title: 'Time Machine',
            genre: 'Science fiction',
            author: 'H.G. Wells',
            read: false
        }
    ];
    //routes
    bookRouter.route('/').get((req, res) => {

        res.render('booksListView',
            {
                nav,
                title: 'Library',
                books
            });
    });
    bookRouter.route('/:id').get((req, res) => {
        //or const id = req.params.id
        const { id } = req.params;

        res.render('bookView',
            {
                nav,
                title: 'Library',
                book: books[id]
            });
    });
    return bookRouter;
}


module.exports = router;