import request from '../utils/request';

/**
 * 获取妹子图
 * @returns {Promise<AxiosResponse<any>|{err, type: string}>}
 */
export const getMeiZi = () => request('/meizi');
