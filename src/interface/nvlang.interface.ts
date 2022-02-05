export interface NvLangItemData {
  avatarUrl: string;
  cardUrl: string;
  city: string;
  height: number;
  imgList: string[];
  realName: string;
  totalFanNum: number;
  totalFavorNum: number;
  weight: number;
  type: string;
  userId: string;
  link: string;
}

export interface NvLangData {
  showapi_res_error: string;
  showapi_res_id: string;
  showapi_res_code: number;
  showapi_fee_num: number;
  showapi_res_body: {
    ret_code: number,
    pagebean: {
      contentlist: NvLangItemData[];
      "allNum": number;
      "allPages": number;
      "currentPage": number;
    }
  };
}

export interface StyleMenuParams {
  style: string;
}

export interface StylePageMenuParams {
  page: number;
}
