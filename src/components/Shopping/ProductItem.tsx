import { TaoQiangGouItem } from '../../interface/taoqianggou.inerface';

function ProductItem(
  { item, titleBgColor, hideVolume }:
    { item: TaoQiangGouItem, titleBgColor: string, hideVolume: boolean }) {
  const handleClickCard = () => {
    window.open(`https:${item.click_url}`)
  }

  return <div
    className={'p-1 rounded-xl h-full overflow-auto cursor-pointer transition-all hover:border-4'}
    style={{
      borderColor: titleBgColor
    }}
    onClick={handleClickCard}
  >
    <img
      className={'rounded-xl bg-gray-400 overflow-hidden'}
      src={item.pict_url}
      alt='error'
    />
    <div className={'py-1'}>
      {/* <span 
        className={`text-white text-xs rounded-sm px-1 mr-1`}
        style={{
          backgroundColor: item.user_type === '1' ? '#FD0237' : '#FF5601'
        }}
      >
        {
          item.user_type === '1' ? '天猫' : '淘宝'
        }
      </span> */}
      <span className={'product-title text-sm dark:text-main-title'}>{item.title}</span>
      {
        item.item_description &&
        <div className={'product-desc text-xs text-gray-500 py-2 dark:text-vice-title'}>{item.item_description}</div>
      }

      <div>
        <div className={'inline-block'} style={{
          color: '#FF5601'
        }}>
          <span className={'text-xs'}>￥</span>
          <span className={'font-bold text-lg mr-1'}>{item.zk_final_price}</span>
          <span className={'text-xs mr-1'}>券后价</span>
        </div>
        {
          !hideVolume &&
          <span className={'text-xs text-gray-500 dark:text-vice-title'}>
            {String(item.volume).length >= 5 ? `${Number(item.volume) / 10000}万+ ` : item.volume} 付款
          </span>
        }
      </div>
    </div>
  </div>;
}

export default ProductItem;
