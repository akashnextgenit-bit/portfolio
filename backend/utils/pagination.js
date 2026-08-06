export function pagination(query) { const page = Math.max(Number.parseInt(query.page, 10) || 1, 1); const limit = Math.min(Math.max(Number.parseInt(query.limit, 10) || 20, 1), 100); return { page, limit, skip: (page - 1) * limit }; }
export function pageResult(items, total, { page, limit }) { return { items, pagination: { page, limit, total, pages: Math.ceil(total / limit) } }; }
