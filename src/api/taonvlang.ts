import request from '../utils/request'

/**
 * 获取热点新闻
 * @returns {Promise<AxiosResponse<any>|{err, type: string}>}
 */
export const getNvLangPicture = (type: string, page: number) => request(`/nvlang?type=${type}&order=1&page=${page}`)
