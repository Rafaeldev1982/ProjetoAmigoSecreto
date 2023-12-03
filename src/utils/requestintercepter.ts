import { RequestHandler } from "express";

export const requestintercepter: RequestHandler = (req, res, next) => {
    console.log(`==> ${req.method} ${req.originalUrl} ${JSON.stringify(req.body)}`)
    next();
}