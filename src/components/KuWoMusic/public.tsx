import {Music} from "../../interface/music.interface";
// @ts-ignore
import styled from "styled-components";

export const ScrollContainer = styled.div`
  #scroll-container::-webkit-scrollbar{
    width:10px;
    padding: 0 5px;
    background-color:#ccc;
  }

  #scroll-container::-webkit-scrollbar-thumb{
    background-color: #666;
    border-radius: 10px;
  }

  #scroll-container::-webkit-scrollbar-track {
      background-color:#20221F;
  }
`

export const MusicListTemplate = (item: Music, index: number) => {
  return <div
    className={'px-1 py-2 rounded-md flex items-center hover:bg-gray-700'}
    style={{
      backgroundColor: index % 2 === 0 ? '#232423' : '',
    }} key={item.id}>
      <span
        className={`${index > 2 ? 'text-gray-500' : 'text-red-700'}
        font-bold inline-block w-10 h-10 text-center leading-10`}>
        {index + 1}
      </span>

    <img className={'w-10 h-10 rounded-md ml-2'} src={item.pic}/>

    <span className={'text-sm inline-block w-2/4 px-2 ml-2 cursor-pointer hover:underline'}>
        <a href={`https://www.kuwo.cn/play_detail/${item.id}`} target="_blank" rel="noreferrer">{item.name}</a>
      </span>

    <span
      className={'text-sm w-1/4 text-gray-400 cursor-pointer hover:underline'}>《{item.album_name}》</span>
    <span
      className={'text-sm w-1/4 text-gray-400 text-center cursor-pointer  hover:underline'}>{item.artist_name}</span>
  </div>
}
