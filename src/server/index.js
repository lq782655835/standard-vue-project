import http from './http.js'

/**
 * 登录
 */
export const getAllTopic = data =>
    http({
        url: `/topics`,
        method: 'get',
        data
    })
