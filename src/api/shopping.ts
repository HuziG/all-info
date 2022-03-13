import request from '../utils/request';

export const getTaoQiangGou = ({ page }: { page: number }) => request(`/dianshang/tb?page=${page}`);
