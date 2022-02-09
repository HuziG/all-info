import request from '../utils/request'

/**
 * 获取热点新闻
 * @returns {Promise<AxiosResponse<any>|{err, type: string}>}
 */
export const getWangYiYunComment = () =>
  request(`/wyy-comment`)
