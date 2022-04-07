import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import useResizeObserver from 'use-resize-observer';
import { getJdJingXuan } from '../../api/shopping';
import { JdJingXuanItem, QiangGouComponentProps } from '../../interface/taoqianggou.inerface';
import { INFO_CARD_HEADER_STYLE, INFO_CARD_STYLE } from '../../style';
import ProductItem from './ProductItem';
// @ts-ignore
import styled from 'styled-components';
import LoadingMask from '../Loading';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { localCmpParams } from '../../utils/utils';
import { Menu, MenuItem } from "@material-ui/core";

function TaoQiangGou({ params, name }: any) {
  const { ref, height: scrollHeight } = useResizeObserver<HTMLDivElement>();
  const [productList, setProductList] = useState<JdJingXuanItem[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [classList, setClassList] = useState([
    { label: '精选卖场', value: 2 },
    { label: '9.9包邮', value: 10 },
    { label: '实时热销榜', value: 22 },
    { label: '今日必推', value: 31 },
    { label: '京东好物', value: 32 },
    { label: '京东秒杀', value: 33 },
    { label: '新品首发', value: 109 },
    { label: '历史最低价', value: 153 },
    { label: '京喜秒杀', value: 249 },
    { label: '3C新品', value: 341 },
  ])
  const [selectClassId, setSelectClassId] = useState(params.selectClassId || classList[0].value)
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const scrollArrowStyle = `hidden sm:flex bg-gray-700 bg-opacity-90 hover:bg-opacity-100 cursor-pointer flex items-center justify-center absolute top-2 w-8 h-8`

  const ColumnLayout = styled.div`
    column-count: 3;
    column-gap: 10px;

    @media (max-width: 500px) {
      column-count: 2;
    }

    .product-desc{
      overflow:hidden;
      white-space:nowrap;
    }

    .product-title{
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  `

  useEffect(() => {
    handleGetData();

    localCmpParams([
      { name, params: { selectClassId } }
    ])
  }, [currentPage, selectClassId]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleGetData = () => {
    setProductList(null)

    getJdJingXuan({
      pageIndex: currentPage,
      eliteId: selectClassId
    }).then(({ data }) => {
      setProductList([...data.data.list]);
      setLoading(false)
    });
  };

  return (
    <div ref={ref} className={INFO_CARD_STYLE}>
      <div className={`${INFO_CARD_HEADER_STYLE} flex items-center justify-between`} style={{ backgroundColor: params.titleBgColor }}>
        京东精选

        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          variant="outlined"
          onClick={handleClick}
          style={{
            color: '#ffffff',
            borderColor: '#ffffff',
          }}
        >
          {(() => {
            return (classList.find(item => item.value === selectClassId) as any).label
          })()}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          {
            classList !== null && classList.map((item, index) => (
              <MenuItem onClick={() => {
                setSelectClassId(item.value)
                setCurrentPage(1)
                setAnchorEl(null)
              }} key={index}>
                <span>{item.label}</span>
              </MenuItem>
            ))
          }
        </Menu>
      </div>

      {/* <div className={'relative overflow-y-auto whitespace-nowrap my-1 px-1 scroll-hidden'}>
        <div className={`${scrollArrowStyle} left-0 rounded-r-md`}>
          <ChevronLeftIcon style={{
            color: '#fff'
          }} />
        </div>

        {classList.map(item =>
          <div
            className={`w-32 inline-block text-center py-1 my-1 rounded-md text-sm cursor-pointer ${selectClassId === item.value ? 'bg-red-500 text-white' : ''}`}
            style={{
              color: params.titleBgColor,
            }}
            onClick={() => {
              setSelectClassId(item.value)
            }}
          >
            {item.label}
          </div>)}

        <div className={`${scrollArrowStyle} right-0 rounded-l-md`}>
          <ChevronRightIcon style={{
            color: '#fff'
          }} />
        </div>
      </div> */}

      <div
        id={'scroll-container'}
        className={'overflow-y-auto p-2'}
        style={{ height: scrollHeight }}
      >
        {loading && <LoadingMask getData={handleGetData} />}

        <ColumnLayout>
          {productList && productList.map((item: JdJingXuanItem) => (
            <ProductItem key={item.skuId} item={item} titleBgColor={params.titleBgColor} />
          ))}
        </ColumnLayout>

        {productList && (
          <div className="flex items-center justify-center my-5">
            {currentPage === 1 || (
              <Button
                className={'dark:text-main-title'}
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
              >
                上一页
              </Button>
            )}
            <Button
              className={'dark:text-main-title'}
              onClick={() => setCurrentPage(currentPage + 1)}>
              下一页
            </Button>
          </div>
        )}

        <div className={'h-24'} />
      </div>


    </div>
  );
}

export default TaoQiangGou;
