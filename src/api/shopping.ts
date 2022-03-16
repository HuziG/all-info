import request from '../utils/request';

export const getTaoQiangGou = ({ page, materialid }: { page: number, materialid: number }) => request(`/dianshang/tb?page=${page}&materialid=${materialid}`);
