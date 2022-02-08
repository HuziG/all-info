import React, {useEffect, useState} from "react";
import { getHotFilm, getComingFilm } from "../../api/maoyan";
import LoadingMask from "../Loading";

interface Film {
  cat: string;
  desc: string;
  img: string;
  nm: string;
  pubDesc: string;
  star: string;
  id: number;
  mk: number;
  showInfo: string;
}

function MaoYan() {
  const [loading, setLoading] = useState(true)
  const [hotFilms, setHotFilms] = useState<Film[] | null>(null)
  const [comingFilms, setComingFilms] = useState<Film[] | null>(null)
  const [listState, setListState] = useState('hot')

  useEffect( () => {
    (async function anyNameFunction() {
      const data = await getHotFilm()
      setHotFilms([...data.data.hot])

      const comingData = await getComingFilm()
      setComingFilms([...comingData.coming])

      setLoading(false)
    })();
  }, [])

  const getFilmTemplate = (item: Film, index: number) => {
    return (
      <a href={`https://www.maoyan.com/films/${item.id}`} target={'_target'}>
        <div
          className="
                flex flex-row p-2 cursor-pointer border-gray-300 mb-3
                hover:bg-gray-100 rounded-xl
              "
          key={index}
        >
          <img
            className={'rounded-xl'}
            src={item.img.replace('w.h', '140.150')}
            alt={'error'}
          />

          <div className="ml-5 flex flex-col">
            <div className={'font-bold text-xl text-black'}>{item.nm}</div>
            <div className={'text-sm mt-1 text-gray-800'}>{item.desc || '主演:' + item.star}</div>
            <div className={'text-sm mt-1 text-gray-800'}>{item.cat}</div>
            {
              item.mk &&
              <div className={'text-sm mt-1 text-xl font-bold text-yellow-500'}>评分: {item.mk}</div>
            }
            <div className={'text-sm mt-1 text-gray-800'}>{item.showInfo}</div>
          </div>
        </div>
      </a>
    )
  }

  return (
    <div className="mt-10 relative rounded-md overflow-x-hidden w-full">
      <div
        className="w-full flex flex-row align-center justify-between font-bold text-white py-5 px-5"
        style={{
          backgroundColor: '#EF4238'
        }}
      >
        <div>电影</div>

        <div>2022 年 02 月 08 日</div>
      </div>

      { loading && <LoadingMask /> }

      <div className="bg-white overflow-y-auto h-96 p-3 w-full">
        <div className={'flex flex-row items-center font-bold justify-around mb-3'}>
          <div
            className={`px-3 cursor-pointer ${listState === 'hot' ? 'border-b-2' : ''}`}
            style={{
              borderColor: '#EF4238'
            }}
            onClick={() => setListState('hot')}
          >正在热映</div>
          <div
            className={`px-3 cursor-pointer ${listState === 'coming' ? 'border-b-2' : ''}`}
            style={{ borderColor: '#EF4238' }}
            onClick={() => setListState('coming')}
          >即将上映</div>
        </div>

        <div style={{
          display: listState === 'hot' ? 'inline-block' : 'none'
        }}>
          {
            hotFilms !== null && hotFilms.map((item, index) => (
              getFilmTemplate(item, index)
            ))
          }
        </div>

        <div style={{
          display: listState === 'coming' ? 'inline-block' : 'none'
        }}>
          {
            comingFilms !== null && comingFilms.map((item, index) => (
              getFilmTemplate(item, index)
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MaoYan
