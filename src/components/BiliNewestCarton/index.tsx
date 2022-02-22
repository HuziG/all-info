import {useEffect, useState} from 'react';
import {getNewest} from '../../api/bilibiliCarton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {HomeDrawerComponent} from "../../interface/home.component.interface";

interface newestCarton {
  cover: string;
  title: string;
  lastupdate_at: string;
  square_cover: string;
}

function BilibiliCarton(props: HomeDrawerComponent) {
  dayjs.extend(relativeTime);

  const [newestCarton, setNewestCarton] = useState<newestCarton[] | null>(null);
  const cardStyle = 'w-full rounded-md bg-white overflow-hidden lg:mt-0';
  const newestCartonTemplate = (item: newestCarton) => {
    return (
      <div className={'relative mb-16 cursor-pointer bilibili-carton transition-all sm:w-5/12'}>
        <img className={'rounded-md w-full'} referrerPolicy="no-referrer" src={item.cover} alt={'error'}/>
        <div className={'text-lg pt-1 title'}>{item.title}</div>
        <div className={'text-sm text-gray-500'}>{item.lastupdate_at} 更新</div>
      </div>
    );
  };

  useEffect(() => {
    getNewest().then((res) => {
      setNewestCarton([...res]);
    });
  }, []);

  return (
    <div id={`ALLINFO_${props.name}`}>
      <div className={'flex flex-col lg:flex-row items-center justify-between'}>
        <div className={`${cardStyle} mt-5`}>
          <div
            className={'py-5 px-3 text-white text-xl font-bold'}
            style={{backgroundColor: '#FB7199'}}
          >
            Bilibili 番剧最新上映
          </div>
          <div className={'flex flex-wrap justify-between overflow-y-auto h-96 pt-10 px-10'}>
            {newestCarton && newestCarton.map((item) => newestCartonTemplate(item))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BilibiliCarton;
