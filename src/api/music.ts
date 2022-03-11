import request from '../utils/request';

const KUWO_HOST = 'https://m.kuwo.cn'

export const getHotMusic = () => request(`${KUWO_HOST}/newh5app/api/mobile/v1/music/rank/16?pn=1&rn=24`);
export const getUpMusic = () => request(`${KUWO_HOST}/newh5app/api/mobile/v1/music/rank/93?pn=1&rn=24`);
export const getNewestMusic = () => request(`${KUWO_HOST}/newh5app/api/mobile/v1/music/rank/17?pn=1&rn=24`);
