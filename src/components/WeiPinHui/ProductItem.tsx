import { JdJingXuanItem, WphJingXuanItem } from '../../interface/taoqianggou.inerface';

function ProductItem(
  { item, titleBgColor }:
    { item: WphJingXuanItem, titleBgColor: string }) {

  const handleClickCard = () => {
    window.open(item.destUrl)
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
      src={item.goodsMainPicture}
      alt='error'
    />
    <div className={'py-1'}>
      <span className={'product-title text-sm dark:text-main-title'}>{item.goodsName}</span>
      {
        item.goodsName &&
        <div className={'product-desc text-xs text-gray-500 py-2 dark:text-vice-title'}>{item.goodsName}</div>
      }

      <div>
        <div className={'inline-block'} style={{
          color: '#E2251B'
        }}>
          <span className={'text-xs'}>￥</span>
          <span className={'font-bold text-lg mr-1'}>{item.vipPrice}</span>
          <span className={'text-xs mr-1'}>优惠价</span>
        </div>
        <span className={'text-xs text-gray-500 dark:text-vice-title'}>
          {Math.ceil(Number(item.discount) * 10)} 折
        </span>
      </div>
    </div>
  </div>;
}

export default ProductItem;
