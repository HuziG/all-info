export interface TaoQiangGouItem {
  item_id: number;
  small_images: string[];
  user_type: string; // 	0为淘宝店铺，1为天猫店铺
  shop_title: string; //  店铺名
  title: string;
  num_iid: string;
  pict_url: string;
  volume: string; // 销量
  item_description: string;
  zk_final_price: string; // 在售价
  quanhoujia: string; // 券后价
  click_url: string; // 跳转链接
}

export interface QiangGouComponentProps {
  params: {
    hideVolume: boolean,
    titleText: string;
    titleTextColor: string;
    titleBgColor: string;
    materialid: number;
  }
}
