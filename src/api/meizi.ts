import request from '../utils/request';

/**
 * 获取妹子图
 * @returns {Promise<AxiosResponse<any>|{err, type: string}>}
 */
export const getMeiZi = () => request('/meizi');

export const getMeiZiList = () => request('https://xiaobai.klizi.cn/API/img/beauty1.php?lx=侧颜')
