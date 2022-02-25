import React, {useEffect, useState} from 'react';
import {getWeek} from '../../api/bilibiliCarton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

interface carton {
  pic: string;
  title: string;
  play: number;
  create: string;
  redirect_url: string;
}

function BilibiliCarton() {
  dayjs.extend(relativeTime);

  const [weekCarton, setWeekCarton] = useState<carton[] | null>(null);
  const cardStyle = 'w-full rounded-md bg-white overflow-hidden lg:mt-0';

  const cartonTemplate = (item: carton, index: number) => {
    return (
      <a href={item.redirect_url} target="_blank" rel="noreferrer">
        <div className={'relative mb-16 cursor-pointer bilibili-carton transition-all'}>
          {index < 3 && (
            <div
              className={
                'flex items-center absolute text-2xl justify-center rounded-full' +
                ' w-14 h-14 -top-6 -left-6 text-white'
              }
              style={{backgroundColor: '#FB7199'}}
            >
              {`${index + 1}st`}
            </div>
          )}

          <img src={item.pic} referrerPolicy="no-referrer" alt={'error'} className={'rounded-xl'}/>
          <div className={'text-lg pt-1 title'}>{item.title}</div>
          <div className={'text-md py-1'}>
            播放量：
            {(() => {
              return (`${item.play / 10000}`).slice(0, 6);
            })()}{' '}
            万
          </div>
          <div className={'text-sm text-gray-500'}>
            最近更新：
            {(() => {
              const b = dayjs(item.create);
              return b.fromNow();
            })()}
          </div>
        </div>
      </a>
    );
  };

  useEffect(() => {
    getWeek().then((res) => {
      setWeekCarton([...res[0].dataJsonString[0].data]);
    });
  }, []);

  return (
    <div className={cardStyle}>
      <div
        className={'py-5 px-3 text-white text-xl font-bold'}
        style={{backgroundColor: '#FB7199'}}
      >
        <span className={'handle'}>Bilibili 番剧7天最热</span>
      </div>
      <div
        className={'overflow-y-auto pt-10 px-16 scroll-hidden'}
        style={{
          height: '50rem'
        }}
      >
        {weekCarton && weekCarton.map((item, index) => cartonTemplate(item, index))}
      </div>
    </div>
  );
}

export default BilibiliCarton;
