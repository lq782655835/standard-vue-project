export const isDev = process.env.NODE_ENV === 'development'
export const rootURL = isDev ? 'https://cnodejs.org/api/v1' : '' // for axios
