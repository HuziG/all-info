import { useEffect, useState } from "react";
import { INFO_CARD_STYLE } from "../../style";
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LottieAnimation from "../Common/LottieAnimation";
import LoadingWrapper from "../Common/LoadingWrapper";

function PictureRandom({ params }: {
  params: { picUrl: string }
}) {
  const [loading, setLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(false);
  const [picUrl, setPicUrl] = useState('')

  useEffect(() => {
    handleReload()
  }, [])

  useEffect(() => {
    if (picUrl === '') {
      setLoading(true)
      setImgLoading(true)
    } else {
      setLoading(false)
    }
  }, [picUrl])

  const handleReload = () => {
    setImgLoading(true)
    setLoading(true)

    setPicUrl('')
    setTimeout(() => {
      setPicUrl(`${params.picUrl}${params.picUrl.indexOf('?') === -1 ? '?' : '&'}${Math.random() * 1000}`)
    }, 1000)
  }

  const loadFinishImage = () => {
    setImgLoading(false)
  }

  return <div 
      className={`relative border-8 bg-black border-pink-600 ${INFO_CARD_STYLE}`}
    >
    {
      !loading &&
      <div className={`h-full w-full bg-black ${imgLoading ? 'opacity-0' : ''}`}>
        <img
          className={`object-scale-down sm:object-cover`}
          src={picUrl}
          style={{ width: '100%', height: '100%' }}
          alt={'error'}
          onLoad={() => loadFinishImage()}
        />
      </div>
    }

    <div 
      className={'z-40 absolute right-3 bottom-3 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-pink-600 hover:bg-opacity-70'}
      onClick={handleReload}  
    >
      <SkipNextIcon style={{ color: '#fff' }} />
    </div>

    {
      imgLoading &&
      <LoadingWrapper>
        <LottieAnimation width={130} height={130} />
      </LoadingWrapper>
    }
  </div>
}

export default PictureRandom
