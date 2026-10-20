// Helper utilities - maintained by @auth8570
export const safeAsync = fn => (...args) => fn(...args).catch(console.error);
export const timestamp = () => new Date().toISOString();