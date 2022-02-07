import {useEffect, useRef, useState} from "react";
import {getNvLangPicture} from "../../api/taonvlang";
import {NvLangData, NvLangItemData, StyleMenuParams, StylePageMenuParams} from "../../interface/nvlang.interface";
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import StyleMenu from "./styleMenu";
import StylePageMenu from "./stylePageMenu";
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Manipulation, Lazy } from "swiper";
import "swiper/css/lazy";
import {debug} from "util";

function Index(this: any) {
  const [page, setPage] = useState(1)
  const [peopleIndex, setPeopleIndex] = useState(0)
  const [peoplePicIndex, setPeoplePicIndex] = useState(0)
  const [peopleData, setPeopleData] = useState<NvLangItemData[] | null>(null)
  const [peoplePicData, setPeoplePicData] = useState<string[] | null>(null)
  const [style, setStyle] = useState('日系');

  const childPageMenuRef = useRef(null);

  useEffect(() => {
    (async function anyNameFunction() {
      await handleGetNvLangPicture()
    })();
  }, [style])

  /**
   * 获取数据，设置
   */
  const handleGetNvLangPicture = async () => {
    const data = await getNvLangPicture(style, page)

    setPeopleData(data.showapi_res_body.pagebean.contentlist.filter(
      (item: { imgList: string | any[]; }) => item.imgList.length !== 0)
    )

    // setPeoplePicData(curInfo.imgList)

    // 设置 page menu 子组件
    if (data.showapi_res_body) {
      (childPageMenuRef.current as any).handleSetPage(data.showapi_res_body.pagebean.allPages)
    }
  }


  useEffect(() => {
    // 设置人物图片
    peopleData && setPeoplePicData(peopleData[peopleIndex].imgList)
  }, [peopleData])

  const childSetStyle = (params: StyleMenuParams) => {
    setStyle(params.style)
  }

  const childSetPage = (params: StylePageMenuParams) => {
    setPage(params.page)
  }

  // const swiperSlideChange = (e: any) => {
  //   setPeoplePicIndex(e.activeIndex)
  // }

  return (
    <div className="relative rounded-md bg-black overflow-hidden ml-0 mt-5 lg:mt-0 lg:ml-5 lg:float-left lg:w-6/12">
      <div
        className="absolute w-full font-bold bg-red-600 text-white top-0 z-10 left-0 py-5 px-5"
        style={{
          backgroundColor: '#FE682F'
        }}
      >
        <div className="inline-block mt-2">
          淘女郎
        </div>

        <div className="float-right">
          <StyleMenu childSetStyle={childSetStyle} />
        </div>

        <div className="float-right mr-5">
          <StylePageMenu ref={childPageMenuRef} childSetPage={childSetPage} />
        </div>
      </div>

      <div className="relative flex align-center justify-center mt-16 h-90vh">
        {/*<Swiper*/}
        {/*  direction={"vertical"}*/}
        {/*  slidesPerView={1}*/}
        {/*  spaceBetween={20}*/}
        {/*  mousewheel={true}*/}
        {/*  lazy={true}*/}
        {/*  pagination={{*/}
        {/*    clickable: true,*/}
        {/*  }}*/}
        {/*  navigation={true}*/}
        {/*  modules={[Lazy, Mousewheel, Manipulation]}*/}
        {/*  className="mySwiper"*/}
        {/*  onSlideChange={(e) => swiperSlideChange(e)}*/}
        {/*  onReachEnd={() => onSwiperReachEnd()}*/}
        {/*>*/}
        {/*  {*/}
        {/*    peoplePicData !== null &&*/}
        {/*    peoplePicData.map((url, index) => (*/}
        {/*      <SwiperSlide key={index}>*/}
        {/*        <img*/}
        {/*          src={url}*/}
        {/*          className="swiper-lazy"*/}
        {/*          alt={'error'}*/}
        {/*        />*/}
        {/*        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"/>*/}
        {/*      </SwiperSlide>*/}
        {/*    ))*/}
        {/*  }*/}
        {/*  <SwiperSlide>finish</SwiperSlide>*/}
        {/*</Swiper>*/}

        {
          peoplePicData &&
          <div className="
            absolute flex align-center z-20
            justify-center bottom-2 left-2 font-bold text-sm text-black rounded-md
            bg-opacity-75 bg-white px-4 py-2"
          >
            {peoplePicIndex + 1} / {peoplePicData.length}
          </div>
        }
      </div>
    </div>
  )
}

export default Index
