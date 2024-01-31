
const express = require('express');
const userRouter = require('./Routes/userroutes'); // Corrected import path
const app = express();
const port = 3001;

app.use(express.json());
app.use('/signup', userRouter); // Corrected route path

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
