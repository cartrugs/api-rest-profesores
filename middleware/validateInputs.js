const { validationResult } = require('express-validator');

const validateInputs = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors
        })
    }

    next()
}

module.exports = {
    validateInputs
}