// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const Book = require('../Models/book'); // Corrected import path

// Add a book
router.post('/addbook', async (req, res) => {
    try {
        const { name, author } = req.body;

        // Create a new book instance
        const newBook = new Book({
            name,
            author
        });

        // Save the book to the database
        await newBook.save();

        return res.status(201).json({ message: 'Book added to store successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// Retrieve all books
router.get('/viewallbooks', async (req, res) => {
    try {
        const books = await Book.find({});

        res.status(200).json({ books });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
