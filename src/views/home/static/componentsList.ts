export const components = [
  {
    label: '砖块',
    name: 'BlockTest',
    params: {},
    grid: {x: 0, y: 0, w: 3, h: 6},
    style: {color: '#333333'},
  },
  {
    label: '知乎热榜',
    name: 'YiWeiReBang',
    key: 'zhihurebang',
    params: {
      yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100015&css=card&select='
    },
    grid: {x: 0, y: 0, w: 3, h: 6},
    style: {color: '#0366FE'},
  },
  {
    label: '微信财经榜',
    name: 'YiWeiReBang',
    key: 'weixinrebang',
    params: {
      yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100009&css=card&select='
    },
    grid: {x: 0, y: 0, w: 3, h: 6},
    style: {color: '#40B035'},
  },
  {
    label: '新浪实时新闻',
    name: 'HotNews',
    grid: {x: 0, y: 0, w: 3, h: 6},
    style: {color: '#DE1D26'},
  },
  {
    label: '网易云评论',
    name: 'WangYiYun',
    grid: {x: 0, y: 0, w: 3, h: 6},
    style: {color: '#D70016'},
  },
  {
    label: '妹子图',
    name: 'MeiZi',
    description: '漂亮5张妹子图',
    grid: {x: 0, y: 0, w: 3, h: 6},
    style: {color: '#4F46E5'},
  },
  {
    label: '猫眼电影榜单',
    name: 'MaoYan',
    grid: {x: 0, y: 0, w: 3, h: 6},
    style: {color: '#F2303D'},
  },
  {
    label: 'Bilibili 7天最热番剧',
    name: 'BiliHotCarton',
    grid: {x: 0, y: 0, w: 3, h: 6},
    style: {color: '#FB7199'},
  },
  {
    label: 'Bilibili 最新番剧',
    name: 'BiliNewestCarton',
    grid: {x: 0, y: 0, w: 3, h: 6},
    style: {color: '#FB7199'},
  },
];
