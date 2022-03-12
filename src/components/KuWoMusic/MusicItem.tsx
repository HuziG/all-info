import {Music} from "../../interface/music.interface";
import MovieIcon from '@material-ui/icons/Movie';

const ALBUM_HOST = 'https://www.kuwo.cn/search/album?key='
const ARTICLE_HOST = 'https://www.kuwo.cn/search/singers?key='
const SONG_HOST = 'https://www.kuwo.cn/play_detail/'
const MV_HOST = 'https://www.kuwo.cn/mvplay/'

function MusicItem({item, index}: {
  item: Music, index: number
}) {
  return (
    <div
      className={'px-1 py-2 rounded-md flex items-center hover:bg-gray-700'}
      style={{
        backgroundColor: index % 2 === 0 ? '#232423' : '',
      }}
    >
      <span
        className={`${index > 2 ? 'text-gray-500' : 'text-red-700'}
        font-bold inline-block w-10 h-10 text-center leading-10`}>
        {index + 1}
      </span>

      <img className={'w-10 h-10 rounded-md ml-2'} style={{
        paddingRight: 0
      }} src={item.pic}/>

      <span className={'text-sm inline-block w-2/4 px-2 ml-2 flex items-center'}>
        <a className={'cursor-pointer hover:underline'} href={`${SONG_HOST}${item.id}`} target="_blank"
           rel="noreferrer">
          {item.name}
        </a>

        {
          item.mv_status === 1 &&
          <a title={'播放MV'} className={'ml-3'} href={`${MV_HOST}${item.id}`} target={'_blank'} rel="noreferrer">
            <MovieIcon style={{fontSize: '1rem'}}/>
          </a>
        }
      </span>

      <span
        className={'text-sm w-1/4 text-gray-400 cursor-pointer hover:underline'}
      >
        <a href={`${ALBUM_HOST}${item.album_name}`} target="_blank" rel="noreferrer">
        《{item.album_name}》
        </a>
      </span>

      <span
        className={'text-sm w-1/4 text-gray-400 text-center cursor-pointer  hover:underline'}
      >
        <a href={`${ARTICLE_HOST}${item.artist_name}`} target="_blank" rel="noreferrer">
          {item.artist_name}
        </a>
      </span>
    </div>
  )
}

export default MusicItem
