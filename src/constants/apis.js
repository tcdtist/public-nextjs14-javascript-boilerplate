export const API_ROOT = process.env.NEXT_PUBLIC_HOST
export const ROOT_URL = process.env.NEXT_PUBLIC_WEB_URL

export const TIMEOUT = 15000
export const STALE_TIME = 5000

export const API = {
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/register',
    RESET_PASSWORD: '/auth/reset_password',
  },
  ME: {},
}
