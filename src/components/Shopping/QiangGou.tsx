import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import useResizeObserver from 'use-resize-observer';
import { getTaoQiangGou } from '../../api/shopping';
import { QiangGouComponentProps, TaoQiangGouItem } from '../../interface/taoqianggou.inerface';
import { INFO_CARD_HEADER_STYLE, INFO_CARD_STYLE } from '../../style';
import ProductItem from './ProductItem';
// @ts-ignore
import styled from 'styled-components';
import LoadingMask from '../Loading';

function TaoQiangGou({ params }: QiangGouComponentProps) {
  const { ref, height: scrollHeight } = useResizeObserver<HTMLDivElement>();
  const [productList, setProductList] = useState<TaoQiangGouItem[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

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

    getTaoQiangGou({
      page: currentPage,
      materialid: params.materialid
    }).then(({ data }) => {
      try {
        setProductList([...data.data]);
        setLoading(false)
      } catch(e) {
        console.log(data)
      }
    });
  };

  return (
    <div ref={ref} className={INFO_CARD_STYLE}>
      <div className={INFO_CARD_HEADER_STYLE} style={{ backgroundColor: params.titleBgColor }}>
        <span style={{
          color: params.titleTextColor || ''
        }}>
        {params.titleText}
        </span>
      </div>

      <div
        id={'scroll-container'}
        className={'overflow-y-auto p-2'}
        style={{ height: scrollHeight }}
      >
       { loading && <LoadingMask getData={handleGetData} /> }

        <ColumnLayout>
          {productList &&
            productList.map((item: TaoQiangGouItem) => (
              <ProductItem key={item.item_id} item={item} titleBgColor={params.titleBgColor} hideVolume={params.hideVolume} />
            ))}
        </ColumnLayout>

        {productList && (
          <div className="flex items-center justify-center my-5">
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
