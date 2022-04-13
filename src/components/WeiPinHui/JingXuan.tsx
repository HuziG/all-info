import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import useResizeObserver from 'use-resize-observer';
import { getWeiPinHui } from '../../api/shopping';
import { WphJingXuanItem } from '../../interface/taoqianggou.inerface';
import { INFO_CARD_HEADER_STYLE, INFO_CARD_STYLE } from '../../style';
import ProductItem from './ProductItem';
// @ts-ignore
import styled from 'styled-components';
import LoadingMask from '../Loading';

function TaoQiangGou({ params, name }: any) {
  const { ref, height: scrollHeight } = useResizeObserver<HTMLDivElement>();
  const [productList, setProductList] = useState<WphJingXuanItem[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showNextPage, setShowNextPage] = useState(true)

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
  }, [currentPage]);

  const handleGetData = () => {
    setProductList(null)
    setLoading(true)

    getWeiPinHui({
      page: currentPage,
      channelType: 1
    }).then(({ data }) => {
      if (data.data.list.length >= data.data.total) {
        setShowNextPage(false)
      }

      setProductList([...data.data.list]);
      setLoading(false)
    });
  };

  return (
    <div ref={ref} className={INFO_CARD_STYLE}>
      <div className={`${INFO_CARD_HEADER_STYLE} flex items-center justify-between`} style={{ backgroundColor: params.titleBgColor }}>
        唯品会精选
      </div>

      <div
        id={'scroll-container'}
        className={'overflow-y-auto p-2'}
        style={{ height: scrollHeight }}
      >
        {loading && <LoadingMask getData={handleGetData} />}

        <ColumnLayout>
          {productList && productList.map((item) => (
            <ProductItem key={item.goodsId} item={item} titleBgColor={params.titleBgColor} />
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
            {
              showNextPage &&
              <Button
                className={'dark:text-main-title'}
                onClick={() => setCurrentPage(currentPage + 1)}>
                下一页
              </Button>
            }
          </div>
        )}

        <div className={'h-24'} />
      </div>


    </div>
  );
}

export default TaoQiangGou;
