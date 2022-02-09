import LoadingMask from "../Loading";
import {useEffect, useState} from "react";
import {getWangYiYunComment} from "../../api/wangyiyun";
import moment from "moment";

interface Comment {
  avatar: string;
  nickname: string;
  content: string;
  time: string;
  songName: string;
  songAutho: string;
  songPic: string;
}

function WangYiYun() {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[] | null>([]);

  useEffect(() => {
    (async function anyNameFunction() {
      const data = await getWangYiYunComment()
      const value = []
      value.push(data.data)
      setComments([...value])
      setLoading(false)
    })();
  }, [])

  const commentTemplate = (item: Comment) => {
    return (
      <div className={'py-1 px-3'}>
        <div className={`relative w-8/12 rounded-xl text-sm pr-5 pt-3 pb-3 pl-16 mt-8 mb-8 ml-12`} style={{
          backgroundColor: '#2A2A2A'
        }}>
          <img
            className={'absolute w-16 h-16 rounded-full bg-gray-300 -top-4 -left-5'}
            src={item.avatar}
            alt={'error'}
          />

          <div className={'border-b-2 border-gray-400 pb-2'}>
            <div style={{ color: '#85B9E6' }}>
              {item.nickname}
            </div>

            <div className={'my-2 text-white tracking-wide'}>
              {item.content}
            </div>

            <div className={'mt-3 text-right text-xs'} style={{color: '#cccccc'}}>
              {moment(Number(item.time)).format('YYYY年MM月DD hh:mm')}
            </div>
          </div>

          <div className={'mt-3 flex'}>
            <img
              src={item.songPic}
              className={'w-12 h-12 rounded-md bg-gray-300'}
              alt={'error'}
            />

            <div className={'ml-4 text-xs'}>
              <div className={'my-1'} style={{color: '#eeeeee'}}>{item.songName}</div>
              <div style={{color: '#cccccc'}}>{item.songAutho}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={'mt-5 relative rounded-md overflow-hidden ml-0'}
      style={{
        backgroundColor: '#333333'
      }}
    >
      { loading && <LoadingMask /> }

      <div
        className="w-full font-bold text-white top-0 z-10 left-0 h-16 leading-16 px-5"
        style={{
          backgroundColor: '#DD001B'
        }}
      >
        <div className="inline-block flex align-center justify-between">
          网易云热评

          <button>刷新</button>
        </div>
      </div>

      {
        comments !== null &&
        comments.map(item => commentTemplate(item))
      }
    </div>
  )
}

export default WangYiYun
