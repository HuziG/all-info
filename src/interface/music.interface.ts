export interface MvPayInfo {
  down: number;
  play: number;
  vid: number;
}

export interface Music {
  id: number;
  name: string;
  pic: string;
  album_name: string;
  artist_name: string;
  mv_status: number;
  mv_pay_info: MvPayInfo;
}
