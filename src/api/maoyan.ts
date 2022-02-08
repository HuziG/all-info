import request from '../utils/request'

/**
 * 获取热映电影
 * @returns {Promise<AxiosResponse<any>|{err, type: string}>}
 */
export const getHotFilm = () => request('/maoyan/hot')

/**
 * 获取即将上映电影
 * @returns {Promise<AxiosResponse<any>|{err, type: string}>}
 */
export const getComingFilm = () => request('/maoyan/coming')
