import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Manipulation, Lazy } from 'swiper';
import './swiper.css';
import 'swiper/css/lazy';
import useResizeObserver from 'use-resize-observer';
import { INFO_CARD_STYLE } from '../../style';
import { getMeiZiList } from '../../api/meizi';
import LoadingMask from '../Loading';

function HdPic() {
  const [loading, setLoading] = useState(true);
  const { ref, height: scrollHeight } = useResizeObserver<HTMLDivElement>();
  const [peopleData, setPeopleData] = useState<any[] | null>(null);

  useEffect(() => {
    handleInitData();
  }, []);

  const handleInitData = () => {
    (async function anyNameFunction() {
      await handleGetNvLangPicture();
    })();
  };

  /**
   * 获取数据，设置
   */
  const handleGetNvLangPicture = async () => {
    const data = await getMeiZiList();

    setPeopleData([...data.data]);
    setLoading(false);
  };

  return (
    <div ref={ref} className={`bg-black border-8 border-indigo-600 ${INFO_CARD_STYLE}`}>
      {loading ? (
        <LoadingMask getData={handleInitData} />
      ) : (
        <div
          className="flex flex-col align-center justify-center bg-black"
          style={{
            height: scrollHeight,
          }}
        >
          <Swiper
            direction={'vertical'}
            slidesPerView={1}
            mousewheel
            lazy
            loop
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Lazy, Mousewheel, Manipulation]}
          >
            {peopleData !== null &&
              peopleData.map((item) => (
                <SwiperSlide>
                  <img
                    src={item.imgurl}
                    className="swiper-lazy"
                    style={{
                      height: '100%',
                    }}
                    data-example="https://swiperjs.com/demos/images/nature-1.jpg"
                    alt={'error'}
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default HdPic;
