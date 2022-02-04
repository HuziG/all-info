import {useEffect, useRef, useState} from "react";
import {getNvLangPicture} from "../../api/taonvlang";
import {NvLangData, NvLangItemData, StyleMenuParams, StylePageMenuParams} from "../../interface/nvlang.interface";
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import StyleMenu from "./styleMenu";
import StylePageMenu from "./stylePageMenu";
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Lazy } from "swiper";
import "swiper/css/lazy";

interface CurShowInfo {
  city: string;
  height: number;
  realName: string;
  avatarUrl: string;
}

function Index(this: any) {
  const [page, setPage] = useState(1);
  const [nvLangData, setNvLangData] = useState<object | NvLangData | null>(null);
  const [showRowIndex, setShowRowIndex] = useState(0)
  const [showColIndex, setShowColIndex] = useState(0)
  const [showColData, setShowColData] = useState<NvLangItemData | null>(null)
  const [showRowData, setShowRowData] = useState<string[] | null>(null)
  const [curShowInfo, setCurShowInfo] = useState<CurShowInfo | null>(null)
  const [style, setStyle] = useState('日系');

  const childPageMenuRef = useRef(null);

  useEffect(() => {
    (async function anyNameFunction() {
      console.log('useEffect')
      await handleGetNvLangPicture()
    })();
  }, [style])

  /**
   * 获取数据，设置
   */
  const handleGetNvLangPicture = async () => {
    const data = await getNvLangPicture(style, page)

    const curInfo = data.showapi_res_body.pagebean.contentlist[showColIndex]

    setNvLangData({data, ...nvLangData})
    setShowColData(data.showapi_res_body.pagebean.contentlist)
    setShowRowData(curInfo.imgList)
    setCurShowInfo({
      height: curInfo.height,
      realName: curInfo.realName,
      city: curInfo.city,
      avatarUrl: curInfo.avatarUrl
    })
    setShowRowIndex(0)
    setShowColIndex(0)

    console.log('showRowData', showRowData)

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
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={20}
            mousewheel={true}
            lazy={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Lazy, Mousewheel, Navigation]}
            className="mySwiper"
          >
            {
              showRowData !== null &&
              showRowData.map(url => (
                <SwiperSlide key={url}>
                  <img
                    src={url}
                    className="swiper-lazy"
                    alt={'error'}
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"/>
                </SwiperSlide>
              ))
            }
          </Swiper>

        {/*<img*/}
        {/*  className="object-cover"*/}
        {/*  alt="error"*/}
        {/*  src={showRowData ? showRowData[showRowIndex] : ''}*/}
        {/*/>*/}

        {
          curShowInfo !== null &&
          <div className="
        absolute flex align-center z-20
        justify-center bottom-2 right-2 font-bold text-sm text-black rounded-md
        bg-opacity-75 bg-white px-4 py-2">
            <div className="mr-5">{curShowInfo.realName}</div>
            {
              curShowInfo.city &&
              <div className="mr-5"><LocationCityIcon fontSize="small" />{curShowInfo.city}</div>
            }
            <AccessibilityIcon fontSize="small" /> {curShowInfo.height} cm
          </div>
        }
      </div>
    </div>
  )
}

export default Index
