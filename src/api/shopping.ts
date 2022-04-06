import request from '../utils/request';

export const getTaoQiangGou = ({ page, materialid }: { page: number, materialid: number }) => request(`/dianshang/tb?page=${page}&materialid=${materialid}`);

export const getJdJingXuan = ({ pageIndex, eliteId }: { pageIndex: number, eliteId: number }) => 
  request(`/dianshang/jdjx?pageIndex=${pageIndex}&eliteId=${eliteId}`);
