import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import useResizeObserver from 'use-resize-observer';
import { getTaoQiangGou } from '../../api/shopping';
import { TaoQiangGouItem } from '../../interface/taoqianggou.inerface';
import { INFO_CARD_HEADER_STYLE, INFO_CARD_STYLE } from '../../style';
import ProductItem from './ProductItem';
// @ts-ignore
import styled from 'styled-components';

function TaoQiangGou() {
  const { ref, height: scrollHeight } = useResizeObserver<HTMLDivElement>();
  const [productList, setProductList] = useState<TaoQiangGouItem[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const ColumnLayout = styled.div`
    column-count: 3;
    column-gap: 10px;

    .product-desc{
      overflow:hidden;
      white-space:nowrap;
    }

    .product-title{
      -webkit-line-clamp: 2;
      overflow:hidden;
      -webkit-box-orient: vertical;
    }
  `

  useEffect(() => {
    handleGetData();
  }, [currentPage]);

  const handleGetData = () => {
    setProductList(null)

    getTaoQiangGou({
      page: currentPage,
    }).then(({ data }) => {
      setProductList([...data.data.list]);
    });
  };

  return (
    <div ref={ref} className={INFO_CARD_STYLE}>
      <div className={INFO_CARD_HEADER_STYLE} style={{ backgroundColor: '#DD001B' }}>
        淘抢购 & 聚划算
      </div>

      <div
        id={'scroll-container'}
        className={'overflow-y-auto p-2'}
        style={{ height: scrollHeight }}
      >
        <ColumnLayout>
          {productList &&
            productList.map((item: TaoQiangGouItem) => (
              <ProductItem key={item.item_id} item={item} />
            ))}
        </ColumnLayout>

        {productList && (
          <div className="flex items-center justify-center">
            {currentPage === 1 || (
              <Button
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
              >
                上一页
              </Button>
            )}
            <Button onClick={() => setCurrentPage(currentPage + 1)}>下一页</Button>
          </div>
        )}

        <div className={'h-14'} />
      </div>
    </div>
  );
}

export default TaoQiangGou;
