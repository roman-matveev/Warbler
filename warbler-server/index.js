require('dotenv').config();

const express      = require('express');
const bodyParser   = require('body-parser');
const cors         = require('cors');

const errorHandler = require('./handlers/error');
const authRoutes   = require('./routes/auth');

const app          = express();
const PORT         = 8000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.use(function(req, res, next) {
    let err = new Error("404 Not Found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
    console.log(`Starting server on port ${PORT}.\n`);
});
