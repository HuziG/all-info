import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel, Manipulation, Lazy} from 'swiper';
import './swiper.css';
import 'swiper/css/lazy';
import useResizeObserver from "use-resize-observer";
import {INFO_CARD_STYLE} from "../../style";
import {getMeiZi} from "../../api/meizi";
import LoadingMask from "../Loading";

function Index() {
  const [loading, setLoading] = useState(true);
  const {ref, height: scrollHeight} = useResizeObserver<HTMLDivElement>();
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
    <div
      ref={ref}
      className={`bg-black border-8 border-indigo-600 ${INFO_CARD_STYLE}`}
    >
      {
        loading ?
          <LoadingMask getData={handleInitData}/> :
          <div
            className="flex flex-col align-center justify-center bg-black"
            style={{
              height: scrollHeight
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
                        height: '100%'
                      }}
                      data-example="https://swiperjs.com/demos/images/nature-1.jpg"
                      alt={'error'}
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"/>
                  </SwiperSlide>
                ))}
              {/* { */}
              {/*  [{ */}
              {/*    imgurl: 'http://img5.adesk.com/61f4d29ae7bce777a19326a8?sign=06c4eab24980bfe6eaf7609934cbc0a7&t=621b19af', */}
              {/*  }, */}
              {/*    { */}
              {/*      imgurl: 'http://img5.adesk.com/620093e3e7bce777b68489d5?sign=25a619c97bcc80986296a32889d5079c&t=621b19af', */}
              {/*    }, */}
              {/*    { */}
              {/*      imgurl: 'http://img5.adesk.com/615524b4e7bce730af642cc2?sign=465730e28a95cc5e5be15abb7a83d34b&t=621b19af', */}
              {/*    }, */}
              {/*    { */}
              {/*      imgurl: 'http://img5.adesk.com/615524b4e7bce7306e879ef1?sign=df450ac8640c718f5c777947405cf816&t=621b19af', */}
              {/*    }].map((item) => ( */}
              {/*    <SwiperSlide> */}
              {/*      <img */}
              {/*        src={item.imgurl} */}
              {/*        className="swiper-lazy" */}
              {/*        style={{ */}
              {/*          height: '100%', */}
              {/*        }} */}
              {/*        alt={'error'} */}
              {/*      /> */}
              {/*      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"/> */}
              {/*    </SwiperSlide> */}
              {/*  )) */}
              {/* } */}
            </Swiper>
          </div>
      }
    </div>
  );
}

export default Index;
