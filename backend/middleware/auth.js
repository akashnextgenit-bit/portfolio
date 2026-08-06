import { Admin } from '../models/admin.js';
import { asyncHandler } from '../utils/async-handler.js';
import { AppError } from '../utils/app-error.js';
import { verifyAccessToken } from '../utils/tokens.js';
export const requireAuth = asyncHandler(async (req, res, next) => { const token = req.cookies.accessToken || req.get('authorization')?.replace(/^Bearer\s+/i, ''); if (!token) throw new AppError('Authentication required', 401); const payload = verifyAccessToken(token); const admin = await Admin.findById(payload.sub).select('-passwordHash'); if (!admin || !admin.isActive) throw new AppError('Authentication required', 401); req.admin = admin; next(); });
export const requireRole = (...roles) => (req, res, next) => roles.includes(req.admin?.role) ? next() : next(new AppError('Insufficient permissions', 403));
