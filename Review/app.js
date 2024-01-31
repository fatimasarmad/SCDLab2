
const express = require('express');
const bookRoutes = require('./Routes/review'); 
const app = express();
const port = 3002;

app.use(express.json());
app.use('/books', bookRoutes); 

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
