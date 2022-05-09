import request from '../utils/request';

export const getBingPic = () => request('/bing');

export const getUnsplashPic = () => request('/unsplash');

export const getMiYouPic = () => request('/xiaobai/miyoupic')
