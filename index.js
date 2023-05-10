const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});