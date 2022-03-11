import React, {useEffect, useState} from 'react';
import {INFO_CARD_HEADER_STYLE, INFO_CARD_STYLE} from "../../style";
import useResizeObserver from 'use-resize-observer';
import {Music} from "../../interface/music.interface";
import {getHotMusic} from "../../api/music";
import {MusicListTemplate, ScrollContainer} from "./public";


function HotList() {
  const {ref, height: scrollHeight} = useResizeObserver<HTMLDivElement>();
  const [musicList, setMusicList] = useState<Music[] | null>(null);

  useEffect(() => {
    getHotMusic().then(({data}) => {
      setMusicList(data.list);
    });
  }, []);

  return (
    <div ref={ref} className={INFO_CARD_STYLE}>
      <div
        className={INFO_CARD_HEADER_STYLE}
        style={{backgroundColor: '#DD001B'}}
      >
        热歌榜
      </div>

      <ScrollContainer>
        <div id={'scroll-container'} className={'overflow-y-auto text-white p-2'}
             style={{height: scrollHeight, backgroundColor: '#20221F'}}>
          {musicList && musicList.map((item: Music, index: number) => MusicListTemplate(item, index))}

          <div className={'h-14'}/>
        </div>
      </ScrollContainer>
    </div>
  )
}

export default HotList
