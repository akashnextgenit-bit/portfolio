import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import morgan from 'morgan';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { rateLimit } from 'express-rate-limit';

import { env, validateEnv } from './config/env.js';
import { connectDatabase } from './config/db.js';

import publicRoutes from './routes/public-routes.js';
import authRoutes from './routes/auth-routes.js';
import adminRoutes from './routes/admin-routes.js';

import { errorHandler, notFound } from './middleware/error-handler.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const app = express();

app.set('trust proxy', 1);

/* ---------------------------------------------------- */
/* Allowed Origins */
/* ---------------------------------------------------- */

const allowedOrigins = [
  env.clientUrl,
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'http://127.0.0.1:3000'
];

/* ---------------------------------------------------- */

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: 'cross-origin'
    }
  })
);

app.use(
  cors({
    origin(origin, callback) {

      // Allow Postman / Curl / Server Requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.error('Blocked CORS Origin:', origin);

      return callback(new Error(`CORS origin denied: ${origin}`));
    },

    credentials: true,

    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

    allowedHeaders: [
      'Origin',
      'Content-Type',
      'Accept',
      'Authorization',
      'X-Requested-With'
    ]
  })
);

app.use(compression());

app.use(morgan(env.nodeEnv === 'production' ? 'combined' : 'dev'));

app.use(express.json({ limit: '100kb' }));

app.use(express.urlencoded({
  extended: false,
  limit: '100kb'
}));

app.use(cookieParser());

app.use(
  mongoSanitize({
    replaceWith: '_'
  })
);

app.use(hpp());

app.use(
  '/uploads',
  express.static(path.join(__dirname, 'uploads'), {
    maxAge: '7d',
    index: false
  })
);

app.use(
  '/api',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: 'draft-7',
    legacyHeaders: false
  })
);

app.use(
  '/api/v1/auth',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: 'draft-7',
    legacyHeaders: false
  }),
  authRoutes
);

app.use('/api/v1', publicRoutes);
app.use('/api/v1/admin', adminRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'ok',
    message: 'Akash NextGen IT API Running'
  });
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'admin.html'));
});

app.use(notFound);

app.use(errorHandler);

if (process.env.NODE_ENV !== 'test') {
  validateEnv();

  connectDatabase()
    .then(() => {
      app.listen(env.port, () => {
        console.log(`🚀 API listening on port ${env.port}`);
      });
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}