import React, {useEffect, useState} from 'react';
import './swiper.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel, Manipulation, Lazy} from 'swiper';
import 'swiper/css/lazy';
import LoadingMask from '../Loading';
import {getMeiZi} from '../../api/meizi';
import {HomeDrawerComponent} from "../../interface/home.component.interface";

function Index(props: HomeDrawerComponent) {
  const [loading, setLoading] = useState(true);
  const [peopleData, setPeopleData] = useState<any[] | null>(null);

  useEffect(() => {
    handleInitData();
  }, []);

  const handleInitData = () => {
    (async function anyNameFunction() {
      await handleGetNvLangPicture();
    })();
  }

  /**
   * 获取数据，设置
   */
  const handleGetNvLangPicture = async () => {
    const data = await getMeiZi();
    setPeopleData([...data.data]);
    setLoading(false);
  };

  return (
    <div id={`ALLINFO_${props.name}`} className="mt-10 lg:mt-0 relative rounded-md bg-black overflow-hidden ml-0">
      {loading && <LoadingMask getData={handleInitData}/>}

      <div className="relative bg-white">
        <div className="border-8 border-indigo-600">
          {/* 图片 swiper */}
          <div
            id="NvLangImgSwiper"
            className="flex flex-col align-center justify-center h-60vh lg:h-50vh bg-black"
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
              className="mySwiper"
            >
              {peopleData !== null &&
                peopleData.map((item) => (
                  <SwiperSlide>
                    <img
                      src={item.imgurl}
                      className="swiper-lazy"
                      data-example="https://swiperjs.com/demos/images/nature-1.jpg"
                      alt={'error'}
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"/>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
