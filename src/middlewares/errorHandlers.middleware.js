import { BadRequest } from "../util/errors";

export default (app) => {
    app.use(function (req, res, next) {
        res.status(404).send('not found');
    });

    app.use(function (err, req, res, next) {
        console.error(err.stack);
        if (err.name === 'ValidationError') err = new BadRequest(err.message);
        if (err.status) {
            res.status(err.status).json({
                message: err.message,
            });
        }
        else {
            res.status(500).json({
                message: 'Internal Server Error',
            });
        }

    });
}

export const handlePromiseRejection = (handler) =>
    (...args) => handler(...args).catch(args[2])