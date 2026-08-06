import { AppError } from '../utils/app-error.js';
export function notFound(req, res, next) { next(new AppError(`Route not found: ${req.method} ${req.originalUrl}`, 404)); }
export function errorHandler(error, req, res, next) { const status = error.statusCode || (error.name === 'ValidationError' ? 400 : 500); if (status >= 500) console.error(error); res.status(status).json({ error: { message: status >= 500 && !error.isOperational ? 'Internal server error' : error.message, ...(error.details ? { details: error.details } : {}) } }); }
