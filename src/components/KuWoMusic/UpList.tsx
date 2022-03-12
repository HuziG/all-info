import React, {useEffect, useState} from 'react';
import {INFO_CARD_HEADER_STYLE, INFO_CARD_STYLE} from "../../style";
import useResizeObserver from 'use-resize-observer';
import {Music} from "../../interface/music.interface";
import {getUpMusic} from "../../api/music";
import MusicItem from "./MusicItem";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

// https://www.kuwo.cn/play_detail/198554068

function HotList() {
  const {ref, height: scrollHeight} = useResizeObserver<HTMLDivElement>();
  const [musicList, setMusicList] = useState<Music[] | null>(null);

  useEffect(() => {
    getUpMusic().then(({data}) => {
      setMusicList(data.list);
    });
  }, []);

  return (
    <div ref={ref} className={INFO_CARD_STYLE}>
      <div
        className={INFO_CARD_HEADER_STYLE}
        style={{backgroundColor: '#3D90BB'}}
      >
        飙升榜 <ThumbUpIcon style={{marginLeft: '.5rem'}}/>
      </div>

      <div className={'overflow-y-auto text-white p-2'}
           style={{height: scrollHeight, backgroundColor: '#20221F'}}>
        {musicList && musicList.map((item: Music, index: number) =>
          <MusicItem key={item.id} item={item} index={index}/>)}

        <div className={'h-14'}/>
      </div>
    </div>
  )
}

export default HotList
