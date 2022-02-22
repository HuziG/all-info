import {useEffect, useState} from 'react';
import {getNewest, getWeek} from '../../api/bilibiliCarton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'; // import plugin

interface carton {
  pic: string;
  title: string;
  play: number;
  create: string;
  redirect_url: string;
}

interface newestCarton {
  cover: string;
  title: string;
  lastupdate_at: string;
  square_cover: string;
}

function BilibiliCarton() {
  dayjs.extend(relativeTime);

  const [weekCarton, setWeekCarton] = useState<carton[] | null>(null);
  const [newestCarton, setNewestCarton] = useState<newestCarton[] | null>(null);

  const cardStyle = 'w-full rounded-md bg-white overflow-hidden lg:mt-0';

  const titleHeader = (title: string) => {
    return (
      <div
        className={'py-5 px-3 text-white text-xl font-bold'}
        style={{backgroundColor: '#FB7199'}}
      >
        {title}
      </div>
    );
  };

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
              {`${index + 1  }st`}
            </div>
          )}

          <img src={item.pic} alt={'error'} className={'rounded-xl'}/>
          <div className={'text-lg pt-1 title'}>{item.title}</div>
          <div className={'text-md py-1'}>
            播放量：
            {(() => {
              return (`${item.play / 10000  }`).slice(0, 6);
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

  const newestCartonTemplate = (item: newestCarton) => {
    return (
      <div className={'relative mb-16 cursor-pointer bilibili-carton transition-all sm:w-5/12'}>
        <img className={'rounded-md w-full'} src={item.cover} alt={'error'}/>
        <div className={'text-lg pt-1 title'}>{item.title}</div>
        <div className={'text-sm text-gray-500'}>{item.lastupdate_at} 更新</div>
      </div>
    );
  };

  useEffect(() => {
    getWeek().then((res) => {
      setWeekCarton([...res[0].dataJsonString[0].data]);
    });

    getNewest().then((res) => {
      setNewestCarton([...res]);
    });
  }, []);

  return (
    <div>
      <div className={'py-5 px-3 text-3xl font-bold'} style={{color: '#FB7199'}}>
        Bilibili 番剧
      </div>

      <div className={'flex flex-col lg:flex-row items-center justify-between'}>
        <div className={cardStyle}>
          {titleHeader('7天最热')}
          <div className={'overflow-y-auto h-96 pt-10 px-16'}>
            {weekCarton && weekCarton.map((item, index) => cartonTemplate(item, index))}
          </div>
        </div>

        <div className={'inline-block w-5'}/>

        <div className={`${cardStyle  } mt-5`}>
          {titleHeader('最新上映')}

          <div className={'flex flex-wrap justify-between overflow-y-auto h-96 pt-10 px-10'}>
            {newestCarton && newestCarton.map((item) => newestCartonTemplate(item))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BilibiliCarton;
