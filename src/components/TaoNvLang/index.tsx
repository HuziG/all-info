import {useEffect, useRef, useState} from 'react';
import {getNvLangPicture} from '../../api/taonvlang';
import {
  NvLangItemData,
  StyleMenuParams,
  StylePageMenuParams,
} from '../../interface/nvlang.interface';
import StyleMenu from './styleMenu';
import StylePageMenu from './stylePageMenu';
import './swiper.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel, Manipulation, Lazy, FreeMode} from 'swiper';
import 'swiper/css/lazy';
import {Button} from '@material-ui/core';
import LoadingMask from '../Loading';
import {HomeDrawerComponent} from "../../interface/home.component.interface";

function Index(props: HomeDrawerComponent) {
  const [loading, setLoading] = useState(true);
  const [photoSwiperRef, setPhotoSwiperRef] = useState<any>(null);
  const [avatarSwiperRef, setAvatarSwiperRef] = useState<any>(null);
  const [page, setPage] = useState(1);
  const [peopleIndex, setPeopleIndex] = useState(0);
  const [peoplePicIndex, setPeoplePicIndex] = useState(0);
  const [peopleData, setPeopleData] = useState<NvLangItemData[] | null>(null);
  const [peoplePicData, setPeoplePicData] = useState<string[] | null>(null);
  const [style, setStyle] = useState('日系');

  const childPageMenuRef = useRef(null);

  useEffect(() => {
    (async function anyNameFunction() {
      console.log('get data');
      await handleGetNvLangPicture();
    })();
  }, [style, page]);

  /**
   * 获取数据，设置
   */
  const handleGetNvLangPicture = async () => {
    const data = await getNvLangPicture(style, page);

    setPeopleData(
      data.showapi_res_body.pagebean.contentlist.filter(
        (item: { imgList: string | any[] }) => item.imgList.length !== 0,
      ),
    );

    setLoading(false);

    // 设置 page menu 子组件
    if (data.showapi_res_body) {
      (childPageMenuRef.current as any).handleSetPage(data.showapi_res_body.pagebean.allPages);
    }
  };

  /**
   * 设置人物图片
   */
  useEffect(() => {
    peopleData && setPeoplePicData(peopleData[peopleIndex].imgList);
    setPeoplePicIndex(0);
  }, [peopleData, peopleIndex]);

  useEffect(() => {
    avatarSwiperRef && avatarSwiperRef.slideTo(0);
    setPeopleIndex(0);
  }, [style]);

  /**
   * 滚动至前
   */
  useEffect(() => {
    if (peoplePicData) {
      setTimeout(() => {
        photoSwiperRef.slideTo(0);
      }, 200);
    }
  }, [peoplePicData]);

  const childSetStyle = (params: StyleMenuParams) => {
    setStyle(params.style);
  };

  const childSetPage = (params: StylePageMenuParams) => {
    setPage(params.page);
  };

  return (
    <div id={`ALLINFO_${props.name}`} className="mt-10 lg:mt-0 relative rounded-md bg-black overflow-hidden ml-0">
      {loading && <LoadingMask/>}

      <div
        className="absolute w-full font-bold text-white top-0 z-10 left-0 h-16 leading-16 px-5"
        style={{
          backgroundColor: '#FE682F',
        }}
      >
        <div className="inline-block">tao nv lang</div>

        <div className="float-right">
          <StyleMenu childSetStyle={childSetStyle}/>
        </div>

        <div className="float-right mr-5">
          <StylePageMenu ref={childPageMenuRef} childSetPage={childSetPage}/>
        </div>
      </div>

      <div className="relative mt-16 bg-white">
        <div className="py-3 px-2">
          {/* 头像 swiper */}
          <Swiper
            onSwiper={setAvatarSwiperRef}
            slidesPerView={5}
            spaceBetween={30}
            freeMode
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
            className="mySwiper"
          >
            {peopleData !== null &&
              peopleData.map((item, index) => (
                <SwiperSlide key={item.avatarUrl}>
                  <div className="cursor-pointer" onClick={() => setPeopleIndex(index)}>
                    <img
                      className={`w-10 h-10 rounded-full object-cover box-border ${
                        index === peopleIndex ? 'border-2' : ''
                      }
                      sm:w-14 sm:h-14
                      lg:w-16 lg:h-16
                      `}
                      style={{
                        borderColor: '#FE682F',
                      }}
                      src={item.avatarUrl}
                      alt={'error'}
                    />
                    <div className="text-xs text-center pt-1 text-gray-800">{item.realName}</div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        {/* 图片 swiper */}
        <div
          id="NvLangImgSwiper"
          className="flex flex-col align-center justify-center h-60vh lg:h-70vh bg-black"
        >
          <Swiper
            onSwiper={setPhotoSwiperRef}
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={20}
            mousewheel
            lazy
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Lazy, Mousewheel, Manipulation]}
            className="mySwiper"
            onSlideChange={(e) => setPeoplePicIndex(e.activeIndex)}
          >
            {peoplePicData !== null &&
              peoplePicData.map((url, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={url}
                    className="swiper-lazy"
                    data-example="https://swiperjs.com/demos/images/nature-1.jpg"
                    alt={'error'}
                    style={{
                      width: 'auto',
                    }}
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"/>
                </SwiperSlide>
              ))}

            {peoplePicData !== null && (
              <SwiperSlide>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setPeopleIndex(peopleIndex + 1)}
                >
                  下一位
                </Button>
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        {/* 图片进度 */}
        {peoplePicData && (
          <div
            className="
            absolute flex align-center z-20
            justify-center bottom-2 left-2 font-bold text-sm text-black rounded-md
            bg-opacity-75 bg-white px-4 py-2"
          >
            {peoplePicIndex + 1} / {peoplePicData.length + 1}
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
