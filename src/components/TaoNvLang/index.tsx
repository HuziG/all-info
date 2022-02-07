import {useEffect, useRef, useState} from "react";
import {getNvLangPicture} from "../../api/taonvlang";
import {NvLangItemData, StyleMenuParams, StylePageMenuParams} from "../../interface/nvlang.interface";
import StyleMenu from "./styleMenu";
import StylePageMenu from "./stylePageMenu";
import "./swiper.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Manipulation, Lazy, FreeMode} from "swiper";
import "swiper/css/lazy";
import {Button} from "@material-ui/core";

function Index(this: any) {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [page, setPage] = useState(1)
  const [peopleIndex, setPeopleIndex] = useState(0)
  const [peoplePicIndex, setPeoplePicIndex] = useState(0)
  const [peopleData, setPeopleData] = useState<NvLangItemData[] | null>(null)
  const [peoplePicData, setPeoplePicData] = useState<string[] | null>(null)
  const [style, setStyle] = useState('日系');

  const childPageMenuRef = useRef(null);

  useEffect(() => {
    (async function anyNameFunction() {
      console.log('get data')
      await handleGetNvLangPicture()
    })();
  }, [style, page])

  /**
   * 获取数据，设置
   */
  const handleGetNvLangPicture = async () => {
    const data = await getNvLangPicture(style, page)

    setPeopleData(data.showapi_res_body.pagebean.contentlist.filter(
      (item: { imgList: string | any[]; }) => item.imgList.length !== 0)
    )

    // 设置 page menu 子组件
    if (data.showapi_res_body) {
      (childPageMenuRef.current as any).handleSetPage(data.showapi_res_body.pagebean.allPages)
    }
  }

  /**
   * 设置人物图片
   */
  useEffect(() => {
    peopleData && setPeoplePicData(peopleData[peopleIndex].imgList)
    setPeoplePicIndex(0)
  }, [peopleData, peopleIndex])

  /**
   * 滚动至前
   */
  useEffect(() => {
    if (peoplePicData) {
      setTimeout(() => {
        swiperRef.slideTo(0)
      }, 200)
    }
  }, [peoplePicData])

  const childSetStyle = (params: StyleMenuParams) => {
    setStyle(params.style)
  }

  const childSetPage = (params: StylePageMenuParams) => {
    setPage(params.page)
  }

  return (
    <div className="relative rounded-md bg-black overflow-hidden ml-0 mt-5 lg:mt-0 lg:ml-5 lg:float-left lg:w-6/12">
      <div
        className="absolute w-full font-bold text-white top-0 z-10 left-0 h-16 leading-16 px-5"
        style={{
          backgroundColor: '#FE682F'
        }}
      >
        <div className="inline-block">
          tao nv lang
        </div>

        <div className="float-right">
          <StyleMenu childSetStyle={childSetStyle} />
        </div>

        <div className="float-right mr-5">
          <StylePageMenu ref={childPageMenuRef} childSetPage={childSetPage} />
        </div>
      </div>

      <div className="relative mt-16 bg-white">
        <div className="py-3 px-2">
          {/* 头像 swiper */}
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
            className="mySwiper"
          >
            {
              peopleData !== null &&
              peopleData.map((item, index) => (
                <SwiperSlide key={item.avatarUrl}>
                  <div className="cursor-pointer" onClick={() => setPeopleIndex(index)}>
                    <img
                      className={`w-10 h-10 rounded-full object-cover box-border ${index === peopleIndex ? 'border-2' : ''}
                      sm:w-14 sm:h-14
                      lg:w-16 lg:h-16
                      `}
                      style={{
                        borderColor: '#FE682F'
                      }}
                      src={item.avatarUrl}
                      alt={'error'}
                    />
                    <div className="text-xs text-center pt-1 text-gray-800">{item.realName}</div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>

        {/* 图片 swiper */}
        <div id="NvLangImgSwiper" className="flex flex-col align-center justify-center h-60vh lg:h-70vh bg-black">
          <Swiper
            onSwiper={setSwiperRef}
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={20}
            mousewheel={true}
            lazy={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Lazy, Mousewheel, Manipulation]}
            className="mySwiper"
            onSlideChange={(e) => setPeoplePicIndex(e.activeIndex)}
          >
            {
              peoplePicData !== null &&
              peoplePicData.map((url, index) => (
                <SwiperSlide key={index}>
                  <img
                    src='https://swiperjs.com/demos/images/nature-1.jpg'
                    className="swiper-lazy"
                    style={{
                      height: 'auto',
                    }}
                    alt={'error'}
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"/>
                </SwiperSlide>
              ))
            }

            {
              peoplePicData !== null &&
              <SwiperSlide>
                <Button variant="contained" color="primary" onClick={() => setPeopleIndex(peopleIndex + 1)}>
                  Next People
                </Button>
              </SwiperSlide>
            }
          </Swiper>
        </div>

        {/* 图片进度 */}
        {
          peoplePicData &&
          <div className="
            absolute flex align-center z-20
            justify-center bottom-2 left-2 font-bold text-sm text-black rounded-md
            bg-opacity-75 bg-white px-4 py-2"
          >
            {peoplePicIndex + 1} / {peoplePicData.length + 1}
          </div>
        }
      </div>
    </div>
  )
}

export default Index
