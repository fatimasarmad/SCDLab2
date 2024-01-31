// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const Book = require('../Models/book'); // Assuming you have a Book model defined

router.post('/reserve/:bookId', async (req, res) => {
    try {
        const { bookId } = req.params;
        const book = await Book.findById(bookId);
        if (book.reserved) {
            return res.status(400).json({ error: 'already reserved' });
        }
        book.reserved = true;
        await book.save();

        return res.status(200).json({ message: 'Book reserved successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
