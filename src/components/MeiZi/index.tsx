import {useEffect, useState} from "react";
import "./swiper.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Manipulation, Lazy} from "swiper";
import "swiper/css/lazy";
import LoadingMask from "../Loading";
import {getMeiZi} from "../../api/meizi";

function Index(this: any) {
  const [loading, setLoading] = useState(true);
  const [peopleData, setPeopleData] = useState<any[] | null>(null)

  useEffect(() => {
    (async function anyNameFunction() {
      await handleGetNvLangPicture()
    })();
  }, [])

  /**
   * 获取数据，设置
   */
  const handleGetNvLangPicture = async () => {
    const data = await getMeiZi()
    setPeopleData([...data.data])
    setLoading(false)
  }

  return (
    <div className="mt-10 lg:mt-0 relative rounded-md bg-black overflow-hidden ml-0">
      { loading && <LoadingMask /> }

      <div className="relative bg-white">
        <div className="border-8 border-indigo-600">
        {/* 图片 swiper */}
        <div id="NvLangImgSwiper" className="flex flex-col align-center justify-center h-60vh lg:h-50vh bg-black">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            mousewheel={true}
            lazy={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Lazy, Mousewheel, Manipulation]}
            className="mySwiper"
          >
            {
              peopleData !== null &&
              peopleData.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item.imgurl}
                    className="swiper-lazy"
                    data-example="https://swiperjs.com/demos/images/nature-1.jpg"
                    alt={'error'}
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"/>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Index