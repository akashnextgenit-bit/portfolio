# Akash NextGen IT API

Production-oriented Express and MongoDB backend for the Akash NextGen IT website. It contains no seeded content or accounts.

## Architecture

- `config/` — validated environment configuration and MongoDB connection.
- `models/` — Mongoose models for enquiries, projects, blog posts, jobs, applications, newsletter subscribers, admins, and site settings.
- `controllers/` and `routes/` — public API, authentication, and protected admin workflows.
- `middleware/` — authentication, validation, uploads, errors, and security controls.
- `services/` — Nodemailer integration.
- `uploads/` — runtime upload storage. Use object storage/CDN in multi-instance production.

## Setup

1. Copy `.env.example` to `.env` and set every required secret and service value.
2. Run `npm install`.
3. Create the first admin with `ADMIN_EMAIL` and a 12+ character `ADMIN_PASSWORD`, then run `npm run create-admin`.
4. Run `npm start` locally or deploy with the start command `node server.js`.

Never commit `.env`, admin passwords, SMTP credentials, or MongoDB credentials.

## API

Public endpoints:

- `POST /api/v1/enquiries`
- `POST /api/v1/newsletter`
- `GET /api/v1/projects`, `GET /api/v1/projects/:slug`
- `GET /api/v1/posts`, `GET /api/v1/posts/:slug`
- `GET /api/v1/jobs`
- `POST /api/v1/jobs/:jobId/applications` (multipart field: `resume`)

Authentication:

- `POST /api/v1/auth/login`, `/refresh`, `/logout`
- `POST /api/v1/auth/forgot-password`, `/reset-password`

Protected admin endpoints begin with `/api/v1/admin`: dashboard, projects, posts, jobs, enquiries, applications, newsletter, settings, and image uploads. Authenticate using secure cookies or `Authorization: Bearer <token>`.

## Frontend connection

Set `window.AKASH_API_URL` in `js/runtime-config.js` to the deployed API base URL, such as `https://api.example.com/api/v1`. Set `CLIENT_URL` on the API to the exact Vercel frontend origin. The contact form posts to `POST /enquiries`; it no longer sends data through a third-party form service.

## Deployment

Deploy `backend/` to Render or Railway. Configure all `.env.example` variables, MongoDB Atlas network access, SMTP credentials, and a persistent object storage replacement for `uploads/` before horizontal scaling. On Vercel, deploy the repository root as the static frontend and set its runtime API URL. The backend exposes `/health` for platform health checks.

## Verification

Run `npm test`. The included tests cover health, structured 404 handling, and contact validation without requiring a real database. Use a configured MongoDB Atlas test database and SMTP sandbox to exercise authenticated, upload, and email flows before production release.
