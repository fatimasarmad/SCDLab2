
const express = require('express');
const router = express.Router();
const books = require('../Models/book'); 

router.post('/borrow', (req, res) => {
    const { name } = req.body;
    const book = books.find((b) => b.name === name); 

    if (!book || !book.available) {
        return res.status(404).json({ error: 'Book unavailable' });
    }
    book.available = false;
    res.json({ message: 'Book borrowed', book });
});


router.post('/return', (req, res) => {
    const { name } = req.body; 
    const book = books.find((b) => b.name === name); 

    if (!book || book.available) {
        return res.status(404).json({ error: 'Book not borrowed' });
    }
    book.available = true;
    res.json({ message: 'Book returned successfully', book });
});


router.get('/user/:userId', (req, res) => {
    const { userId } = req.params;
    const borrowedBooks = books.filter((book) => book.borrowedBy === userId);
    res.json(borrowedBooks);
});

module.exports = router;
