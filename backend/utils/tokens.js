import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
export const createAccessToken = (admin) => jwt.sign({ sub: admin.id, role: admin.role }, env.accessSecret, { expiresIn: env.accessExpires });
export const createRefreshToken = (admin) => jwt.sign({ sub: admin.id, tokenVersion: admin.tokenVersion }, env.refreshSecret, { expiresIn: env.refreshExpires });
export const verifyAccessToken = (token) => jwt.verify(token, env.accessSecret);
export const verifyRefreshToken = (token) => jwt.verify(token, env.refreshSecret);
