import LoadingMask from '../Loading';
import {useEffect, useState} from 'react';
import {getWangYiYunComment} from '../../api/wangyiyun';
import moment from 'moment';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import {Resizable} from 're-resizable';
import {HomeDrawerComponent} from "../../interface/home.component.interface";

interface Comment {
  avatar: string;
  nickname: string;
  content: string;
  time: string;
  songName: string;
  songAutho: string;
  songPic: string;
}

function WangYiYun(props: HomeDrawerComponent) {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[] | null>([]);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

  useEffect(() => {
    handleInitData()
  }, []);

  const handleInitData = () => {
    (async function anyNameFunction() {
      const data = await getWangYiYunComment();
      setComments([
        ...data[0].dataJsonString.map((item: any) => (item.code === 200 ? item.data : undefined)),
      ]);
      setLoading(false);
    })();
  }

  const commentTemplate = (item: Comment) => {
    return (
      <div>
        {item && (
          <div className={'py-1 px-3'} key={item.time}>
            <div
              className={`relative w-10/12 ml rounded-xl text-sm pr-5 pt-3 pb-3 pl-16 mt-8 mb-8`}
              style={{
                backgroundColor: '#2A2A2A',
                marginLeft: (() => {
                  return `${10 + Math.ceil(Math.random() * 4) * 10}px`;
                })(),
              }}
            >
              <img
                className={'absolute w-16 h-16 rounded-full bg-gray-300 -top-4 -left-5'}
                src={item.avatar}
                alt={'error'}
              />

              <div className={'border-b-2 border-gray-400 pb-2'}>
                <div style={{color: '#85B9E6'}}>{item.nickname}</div>

                <div className={'my-2 text-white tracking-wide'}>{item.content}</div>

                <div className={'mt-3 text-right text-xs'} style={{color: '#cccccc'}}>
                  {moment(Number(item.time)).format('YYYY年MM月DD日 hh:mm')}
                </div>
              </div>

              <div className={'mt-3 flex'}>
                <div className={'relative  rounded-md overflow-hidden'}>
                  <div
                    className={
                      'absolute cursor-pointer z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    }
                  >
                    <a
                      href={`https://music.163.com/#/search/m/?s=${item.songName}&type=1`}
                      target="_blank" rel="noreferrer"
                    >
                      <PlayCircleOutlineIcon
                        style={{
                          color: '#DD001B',
                        }}
                      />
                    </a>
                  </div>
                  <div
                    className={'absolute w-full h-full bg-black bg-opacity-20 top-0 left-0'}
                  />
                  <img src={item.songPic} className={'w-12 h-12 bg-gray-300'} alt={'error'}/>
                </div>

                <div className={'ml-4 text-xs'}>
                  <div className={'my-1'} style={{color: '#eeeeee'}}>
                    {item.songName}
                  </div>
                  <div style={{color: '#cccccc'}}>{item.songAutho}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!item && <div>error</div>}
      </div>
    );
  };

  return (
    <Resizable
      className={'scroll-hidden'}
      size={{width, height}}
      onResizeStop={(e, direction, ref, d) => {
        setWidth(width + d.width);
        setHeight(height + d.height);
      }}
    >
      <div
        id={`ALLINFO_${props.name}`}
        className="relative bg-white rounded-md overflow-hidden w-full h-full"
        style={{
          backgroundColor: '#333333',
        }}
      >
        {loading && <LoadingMask getData={handleInitData}/>}


        <div
          className="w-full font-bold text-white top-0 z-10 left-0 h-16 leading-16 px-5"
          style={{
            backgroundColor: '#DD001B',
          }}
        >
          <div className="inline-block flex align-center justify-between handle">
            网易云热评
            <button>刷新</button>
          </div>
        </div>

        <div
          className={'overflow-y-auto h-full p-3 w-full pb-20'}
          style={{
            backgroundColor: '#333333',
          }}
        >
          {comments !== null && comments.map((item) => commentTemplate(item))}
        </div>
      </div>
    </Resizable>
  );
}

export default WangYiYun;
