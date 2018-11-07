require('dotenv').load();

const jwt = require('jsonwebtoken');

exports.loginRequired = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];  // Bearer ______
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if (decoded) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: "Please log in first."
                });
            }
        });

    } catch (err) {
        return next({
            status: 401,
            message: "Please log in first."
        });
    }
}

exports.ensureCorrectUser = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];  // Bearer ______
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if (decoded && decoded.id === req.params.id) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: "Unauthorized access."
                });
            }
        });

    } catch (err) {
        return next({
            status: 401,
            message: "Unauthorized access."
        });
    }
}
