const {validationResult} = require('express-validator');
const CustomError =require('../helpers/customError')
require('express-async-errors');

module.exports = (...validationChecks)=> async (req, res, next) => {
    await Promise.all(
        validationChecks.map(
            check => check.run(req)
        )
    );
    const {errors} = validationResult(req);
    if (!errors.length) {
        return next();
    }
    throw CustomError('ValidationError', 422, errors)

}