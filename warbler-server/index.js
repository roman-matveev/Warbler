require('dotenv').config();

const express      = require('express');
const bodyParser   = require('body-parser');
const cors         = require('cors');

const db           = require('./models');
const errorHandler = require('./handlers/error');
const authRoutes   = require('./routes/auth');
const msgRoutes    = require('./routes/messages');

const {loginRequired, ensureCorrectUser} = require('./middleware/auth');

const app          = express();
const PORT         = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/users/:id/messages', loginRequired, ensureCorrectUser, msgRoutes);

app.get('/api/messages', loginRequired, async function(req, res, next) {
    try {
        let messages = await db.Message.find()
            .sort({createdAt: 'desc'})
            .populate('user', {
                username: true,
                profileImageUrl: true
        });

        return res.status(200).json(messages);

    } catch (err) {
        return next(err);
    }
});

app.use(function(req, res, next) {
    let err = new Error("404 Not Found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
    console.log(`Starting server on port ${PORT}.\n`);
});
