import request from '../utils/request';

export const getBingPic = () => request('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1');
