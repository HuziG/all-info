import React, {useEffect, useState} from 'react';
import {getWeek} from '../../api/bilibiliCarton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import useResizeObserver from 'use-resize-observer';
import {INFO_CARD_HEADER_STYLE, INFO_CARD_SCROLL_STYLE, INFO_CARD_STYLE} from "../../style";
import ScrollBottomBlock from "../Common/ScrollBottomBlock";

interface carton {
  pic: string;
  title: string;
  play: number;
  create: string;
  redirect_url: string;
}

function BilibiliCarton() {
  dayjs.extend(relativeTime);

  const {ref, height: scrollHeight} = useResizeObserver<HTMLDivElement>();
  const [weekCarton, setWeekCarton] = useState<carton[] | null>(null);

  const cartonTemplate = (item: carton, index: number) => {
    return (
      <a href={item.redirect_url} target="_blank" rel="noreferrer">
        <div className={'relative mb-10 cursor-pointer bilibili-carton transition-all'}>
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
    <div ref={ref} className={INFO_CARD_STYLE}>
      <div
        className={INFO_CARD_HEADER_STYLE}
        style={{backgroundColor: '#FB7199'}}
      >
        Bilibili 番剧7天最热
      </div>

      <div className={INFO_CARD_SCROLL_STYLE} style={{height: scrollHeight}}>
        {weekCarton && weekCarton.map((item, index) => cartonTemplate(item, index))}
        <ScrollBottomBlock/>
      </div>
    </div>
  );
}

export default BilibiliCarton;
