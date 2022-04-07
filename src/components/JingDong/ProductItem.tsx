import { JdJingXuanItem } from '../../interface/taoqianggou.inerface';

function ProductItem(
  { item, titleBgColor }:
    { item: JdJingXuanItem, titleBgColor: string }) {

  console.log(item)

  const handleClickCard = () => {
    window.open(`https://${item.materialUrl}`)
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
      src={item.imageInfo.imageList[0].url}
      alt='error'
    />
    <div className={'py-1'}>
      <span className={'product-title text-sm dark:text-main-title'}>{item.skuName}</span>
      {
        item.skuName &&
        <div className={'product-desc text-xs text-gray-500 py-2 dark:text-vice-title'}>{item.skuName}</div>
      }

      <div>
        <div className={'inline-block'} style={{
          color: '#E2251B'
        }}>
          <span className={'text-xs'}>￥</span>
          <span className={'font-bold text-lg mr-1'}>{item.priceInfo.lowestPrice}</span>
          <span className={'text-xs mr-1'}>京东价</span>
        </div>
        <span className={'text-xs text-gray-500 dark:text-vice-title'}>
          {item.goodCommentsShare}% 好评
        </span>
      </div>
    </div>
  </div>;
}

export default ProductItem;
