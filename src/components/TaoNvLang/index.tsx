import {useEffect, useRef, useState} from "react";
import {getNvLangPicture} from "../../api/taonvlang";
import {NvLangData, NvLangItemData, StyleMenuParams, StylePageMenuParams} from "../../interface/nvlang.interface";
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import StyleMenu from "./styleMenu";
import StylePageMenu from "./stylePageMenu";
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Lazy, Manipulation } from "swiper";
import "swiper/css/lazy";

interface PersonInfo {
  city: string;
  height: number;
  realName: string;
  avatarUrl: string;
}

let showColIndex = -1

function Index(this: any) {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [page, setPage] = useState(1);
  const [nvLangData, setNvLangData] = useState<object | NvLangData | null>(null);
  const [showRowIndex, setShowRowIndex] = useState(0)
  const [showColData, setShowColData] = useState<NvLangItemData[] | null>(null)
  const [showRowData, setShowRowData] = useState<string[] | null>(null)
  const [personInfo, setPersonInfo] = useState<PersonInfo | null>(null)
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

    const contentlist = data.showapi_res_body.pagebean.contentlist

    setNvLangData({data, ...nvLangData})
    setShowColData(contentlist.filter((item: { imgList: string | any[]; }) => item.imgList.length !== 0))

    const curInfo = contentlist[showColIndex]

    setShowRowData(curInfo.imgList)
    setPersonInfo(getPersonInfo(curInfo))

    // 设置 page menu 子组件
    if (data.showapi_res_body) {
      (childPageMenuRef.current as any).handleSetPage(data.showapi_res_body.pagebean.allPages)
    }
  }

  const childSetStyle = (params: StyleMenuParams) => {
    setStyle(params.style)
  }

  const childSetPage = (params: StylePageMenuParams) => {
    setPage(params.page)
  }

  /**
   * swiper 抵达末尾
   */
  const onSwiperReachEnd = () => {
    showColIndex += 1
    showColData && setShowRowData( [...showColData[showColIndex].imgList])
  }

  /**
   * swiper 抵达开始
   */
  const onSwiperReachBeginning = () => {
    if (showColIndex !== 0) {
      showColIndex -= 1
      showColData && setShowRowData( [...showColData[showColIndex].imgList])
    }
  }

  useEffect(() => {
    swiperRef && swiperRef.removeAllSlides()
    showColData && setPersonInfo(getPersonInfo(showColData[showColIndex]))
    showRowData && handleAppendSlide(showRowData)
  }, [showRowData])

  const handleAppendSlide = (value: string[]) => {
    const slide = value.map((url: string) => `
      <SwiperSlide>
        <img
          src=${url}
          class="swiper-lazy object-contain"
          alt='error'
        />
      </SwiperSlide>
    `)

    // slide.unshift(`<SwiperSlide>prev</SwiperSlide>`)
    // slide.push(`<SwiperSlide>finish</SwiperSlide>`)

    swiperRef && swiperRef.addSlide(0, slide);

    console.log(showRowIndex)
  }

  const getPersonInfo = (value: PersonInfo) => {
    return {
      height: value.height,
      realName: value.realName,
      city: value.city,
      avatarUrl: value.avatarUrl
    }
  }

  /**
   * swiper 改变时
   * @param e
   */
  const swiperSlideChange = (e: any) => {
    setShowRowIndex(e.activeIndex)
  }

  return (
    <div className="relative rounded-md bg-black overflow-hidden ml-0 mt-5 lg:mt-0 lg:ml-5 lg:float-left lg:w-7/12">
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
          <Swiper
            onSwiper={setSwiperRef}
            direction={"vertical"}
            spaceBetween={20}
            mousewheel={true}
            lazy={true}
            initialSlide={0}
            modules={[Lazy, Mousewheel, Manipulation]}
            onSlideChange={(e) => swiperSlideChange(e)}
            onReachEnd={() => onSwiperReachEnd()}
            onReachBeginning={() => onSwiperReachBeginning()}
          >

          </Swiper>

        {/*<SwiperSlide>*/}
        {/*  prev*/}
        {/*</SwiperSlide>*/}
        {/*{*/}
        {/*  showRowData !== null &&*/}
        {/*  showRowData.map((url, index) => (*/}
        {/*    <SwiperSlide key={index}>*/}
        {/*      <img*/}
        {/*        src={url}*/}
        {/*        className="swiper-lazy object-contain"*/}
        {/*        alt={'error'}*/}
        {/*      />*/}
        {/*      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"/>*/}
        {/*    </SwiperSlide>*/}
        {/*  ))*/}
        {/*}*/}
        {/*<SwiperSlide>*/}
        {/*  next*/}
        {/*</SwiperSlide>*/}

        {
          personInfo !== null &&
          <div className="
        absolute flex align-center z-20
        justify-center bottom-2 right-2 font-bold text-sm text-black rounded-md
        bg-opacity-75 bg-white px-4 py-2">
            <div className="mr-5">{personInfo.realName}</div>
            {
              personInfo.city &&
              <div className="mr-5"><LocationCityIcon fontSize="small" />{personInfo.city}</div>
            }
            <AccessibilityIcon fontSize="small" /> {personInfo.height} cm
          </div>
        }

        {
          showRowData &&
          <div className="
            absolute flex align-center z-20
            justify-center bottom-2 left-2 font-bold text-sm text-black rounded-md
            bg-opacity-75 bg-white px-4 py-2"
          >
            {showRowIndex + 1} / {showRowData.length+2}
          </div>
        }
      </div>
    </div>
  )
}

export default Index
