export const components = [
  {
    label: '热门榜单',
    key: 'remenbangdan',
    icon: '<ClearAllIcon />',
    children: [
      {
        label: '百度实时热点排行榜',
        name: 'YiWeiReBang-baidushishi',
        key: 'baidushishi',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100000&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#1822DD'},
      },
      {
        label: '36氪人气榜',
        name: 'YiWeiReBang-kerenqibang',
        key: 'kerenqibang',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100001&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#4385F4'},
      },
      {
        label: '吾爱破解热度排行榜',
        name: 'YiWeiReBang-wuaipojie',
        key: 'wuaipojie',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100002&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#E22520'},
      },
      {
        label: '哔哩哔哩全站排行榜',
        name: 'YiWeiReBang-biliquanzhanpaihang',
        key: 'biliquanzhanpaihang',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100003&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#10A4D9'},
      },
      {
        label: '豆瓣小组',
        name: 'YiWeiReBang-doubanxiaozu',
        key: 'doubanxiaozu',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100004&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#047610'},
      },
      {
        label: '历史上的今天',
        name: 'YiWeiReBang-lishishangdejintian',
        key: 'lishishangdejintian',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100005&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#B28723'},
      },
      {
        label: '少数派热门文章',
        name: 'YiWeiReBang-shaoshupai',
        key: 'shaoshupai',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100006&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#D9292A'},
      },
      {
        label: '微博热搜榜',
        name: 'YiWeiReBang-weiboresou',
        key: 'weiboresou',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100007&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#E72527'},
      },
      {
        label: '微信搞笑',
        name: 'YiWeiReBang-weixingaoxiao',
        key: 'weixingaoxiao',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100008&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#08C160'},
      },
      {
        label: '微信财经迷',
        name: 'YiWeiReBang-weixincaijing',
        key: 'weixincaijing',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100009&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#08C160'},
      },
      {
        label: '微信八卦精',
        name: 'YiWeiReBang-weixinbagua',
        key: 'weixinbagua',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100010&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#08C160'},
      },
      {
        label: '微信热搜词',
        name: 'YiWeiReBang-weixinresouci',
        key: 'weixinresouci',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100011&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#08C160'},
      },
      {
        label: '微信热门',
        name: 'YiWeiReBang-weixinremen',
        key: 'weixinremen',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100012&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#08C160'},
      },
      {
        label: '微信读书新书榜',
        name: 'YiWeiReBang-weixindushuxinshu',
        key: 'weixindushuxinshu',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100013&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#27A1FF'},
      },
      {
        label: '微信读书更新榜',
        name: 'YiWeiReBang-weixindushugengxin',
        key: 'weixindushugengxin',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100014&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#27A1FF'},
      },
      {
        label: '知乎热度',
        name: 'YiWeiReBang-zhihuredu',
        key: 'zhihuredu',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100015&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '电商报7X24h快讯',
        name: 'YiWeiReBang-dianshangbao',
        key: 'dianshangbao',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100016&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
      },
      {
        label: '什么值得买',
        name: 'YiWeiReBang-shenmzhidemai',
        key: 'shenmzhidemai',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100017&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#CE2B3D'},
      },
      {
        label: '豆瓣电影排行榜',
        name: 'YiWeiReBang-doubandianying',
        key: 'doubandianying',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100018&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#047610'},
      },
      {
        label: '亿邦动力快讯',
        name: 'YiWeiReBang-yibangdongli',
        key: 'yibangdongli',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100019&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '抖音热点榜',
        name: 'YiWeiReBang-douyinredian',
        key: 'douyinredian',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100020&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#FF2C55'},
      },
      {
        label: '派代干货',
        name: 'YiWeiReBang-paidaiganhuo',
        key: 'paidaiganhuo',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100021&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '知无不言头条',
        name: 'YiWeiReBang-zhiwubuyan',
        key: 'zhiwubuyan',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100022&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '哔哩哔哩每周必看',
        name: 'YiWeiReBang-bilimeizhou',
        key: 'bilimeizhou',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100023&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#10A4D9'},
      },
      {
        label: '卖家之家头条',
        name: 'YiWeiReBang-maijiazhijia',
        key: 'maijiazhijia',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100025&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '派代最新热帖',
        name: 'YiWeiReBang-paidazuixin',
        key: 'paidazuixin',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100026&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: 'IT之家资讯热榜',
        name: 'YiWeiReBang-itzhijiarebang',
        key: 'itzhijiarebang',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100027&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: 'IT之家最新资讯',
        name: 'YiWeiReBang-itzhijiazuixin',
        key: 'itzhijiazuixin',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100028&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '百度贴吧热议榜',
        name: 'YiWeiReBang-baidutieba',
        key: 'baidutieba',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100029&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#1822DD'},
      },
      {
        label: '虎扑步行街热帖',
        name: 'YiWeiReBang-hupu',
        key: 'hupu',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100030&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#C60400'},
      },
      {
        label: '百度热门小说',
        name: 'YiWeiReBang-baiduremenxiaoshuo',
        key: 'baiduremenxiaoshuo',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100033&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#1822DD'},
      },
      {
        label: '看帮网 男频热门',
        name: 'YiWeiReBang-kanbangwang',
        key: 'kanbangwang',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100034&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '知轩藏书',
        name: 'YiWeiReBang-zhixuan',
        key: 'zhixuan',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100035&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '哔哩哔哩综合热门',
        name: 'YiWeiReBang-bilizonghe',
        key: 'bilizonghe',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100036&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#10A4D9'},
      },
      {
        label: '哔哩哔哩入站必刷',
        name: 'YiWeiReBang-biliruzhan',
        key: 'biliruzhan',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100037&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#10A4D9'},
      },
      {
        label: '抖音今日热门视频',
        name: 'YiWeiReBang-douyinjinriremen',
        key: 'douyinjinriremen',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100038&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#FF2C55'},
      },
      {
        label: '红餐网-餐饮行业资讯',
        name: 'YiWeiReBang-hongcanwang',
        key: 'hongcanwang',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100039&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#D30400'},
      },
      {
        label: '餐饮杰-餐饮行业资讯',
        name: 'YiWeiReBang-canyinjie',
        key: 'canyinjie',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100040&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '美食天下-餐饮行业资讯',
        name: 'YiWeiReBang-meishitianxia',
        key: 'meishitianxia',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100041&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '赢商网-餐饮行业资讯',
        name: 'YiWeiReBang-yingshangwang',
        key: 'yingshangwang',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100042&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '中国产业信息网',
        name: 'YiWeiReBang-zhongguochanyexinxi',
        key: 'zhongguochanyexinxi',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100043&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '勺子课堂-餐饮行业资讯',
        name: 'YiWeiReBang-shaoziketang',
        key: 'shaoziketang',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100044&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '小红书社区精选',
        name: 'YiWeiReBang-xiaohongshushequ',
        key: 'xiaohongshushequ',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100045&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#D30400'},
      },
      {
        label: '金色财经大事件',
        name: 'YiWeiReBang-jinsecaijing',
        key: 'jinsecaijing',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100048&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#F8B312'},
      },
      {
        label: 'Gamefi最新资讯',
        name: 'YiWeiReBang-gamefizuixin',
        key: 'gamefizuixin',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100051&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '律动快讯',
        name: 'YiWeiReBang-lvdongkuaixun',
        key: 'lvdongkuaixun',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100052&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '亿恩网最新资讯',
        name: 'YiWeiReBang-yienwang',
        key: 'yienwang',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100054&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '派代最受关注主题',
        name: 'YiWeiReBang-paidai',
        key: 'paidai',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100055&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '优设网最新文章',
        name: 'YiWeiReBang-youshewangzuixin',
        key: 'youshewangzuixin',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100056&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#FF6000'},
      },
      {
        label: '优设网电商设计',
        name: 'YiWeiReBang-youshewangdianshang',
        key: 'youshewangdianshang',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100057&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#FF6000'},
      },
      {
        label: '致设计经验教程',
        name: 'YiWeiReBang-zhishejijingyan',
        key: 'zhishejijingyan',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100058&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#FF6000'},
      },
      {
        label: '致设计电商设计教程',
        name: 'YiWeiReBang-zhishejidianshang',
        key: 'zhishejidianshang',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100059&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#FF6000'},
      },
      {
        label: '设计达人最新文章',
        name: 'YiWeiReBang-shejidaren',
        key: 'shejidaren',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100060&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#FF6000'},
      },
      {
        label: 'UI中国经验观点',
        name: 'YiWeiReBang-uizhongguo',
        key: 'uizhongguo',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100061&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#3E7DFF'},
      },
      {
        label: '荷塘月色最新精华',
        name: 'YiWeiReBang-hetangyuese',
        key: 'hetangyuese',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100062&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '真刷最新热门',
        name: 'YiWeiReBang-zhenhua',
        key: 'zhenhua',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100063&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '电商运营问答',
        name: 'YiWeiReBang-dianshangyunyingwenda',
        key: 'dianshangyunyingwenda',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100064&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: 'COONAV白鲸出海资讯',
        name: 'YiWeiReBang-baijingchuhai',
        key: 'baijingchuhai',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100065&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: 'COONAV亿欧最新资讯',
        name: 'YiWeiReBang-yiouzuixin',
        key: 'yiouzuixin',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100066&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#0086F0'},
      },
      {
        label: 'COONAV跨境眼热点资讯',
        name: 'YiWeiReBang-kuajingyanredian',
        key: 'kuajingyanredian',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100067&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: 'COONAV创蓝论坛最新热门',
        name: 'YiWeiReBang-chuanglanluntan',
        key: 'chuanglanluntan',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100068&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '百度电影榜',
        name: 'YiWeiReBang-baidudanyingbang',
        key: 'baidudanyingbang',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100069&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#1822DD'},
      },
      {
        label: 'IMDB爱影库',
        name: 'YiWeiReBang-aiyingku',
        key: 'aiyingku',
        params: {
          yiweiUrl: 'https://ionews.top/hot.php?key=ZxUfvKLKuDdSJAl1TKP2EWtlIBzG8T&id=100070&select='
        },
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
      {
        label: '砖块',
        name: 'BlockTest',
        params: {},
        grid: {x: 0, y: 0, w: 3, h: 6},
        style: {color: '#333333'},
      },
    ]
  },
  {
    label: '图片与壁纸',
    key: 'tupianbizhi',
    icon: '<ImageIcon />',
    children: [
      // {
      //   label: '妹子图',
      //   name: 'MeiZi',
      //   grid: {x: 0, y: 0, w: 3, h: 6},
      //   style: {color: '#4F46E5'},
      // },
      {
        label: '必应壁纸',
        name: 'Bing',
        grid: {x: 0, y: 0, w: 6, h: 4},
        style: {color: '#3578EE'},
      },
    ]
  },
];
