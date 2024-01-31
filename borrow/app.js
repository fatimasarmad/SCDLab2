// app.js
const express = require('express');
const bookRoutes = require('./Routes/borrow'); // Corrected import path
const app = express();
const port = 3001;

app.use(express.json());
app.use('/books', bookRoutes); // Corrected route path

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
