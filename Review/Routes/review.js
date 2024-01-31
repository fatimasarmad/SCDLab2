
const express = require('express');
const router = express.Router();
const Book = require('../Models/book'); // Assuming you have a Book model defined

router.post('/review/:bookId', async (req, res) => {
    try {
        const { bookId } = req.params;
        const {rev} = req.body;
        const book = await Book.findById(bookId);
        const review = {
            rev,
            userId: req.user._id }

        
        book.reviews.push(review);
        await book.save();

        return res.status(201).json({ message: 'Book review added successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
