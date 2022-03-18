import { useEffect, useState } from "react";
import { INFO_CARD_STYLE } from "../../style";
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LottieAnimation from "../Common/LottieAnimation";
import * as animationData from '../../assets/lottie/image-load.json'
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
      setPicUrl(`${params.picUrl  }?${  Math.random() * 1000}`)
    }, 1000)
  }

  const loadFinishImage = () => {
    console.log('loadFinishImage')
    setImgLoading(false)
  }

  return <div 
      className={`relative bg-black border-8 ${INFO_CARD_STYLE}`}
      style={{
        borderColor: '#FFCC2A'
      }}
    >
    {
      !loading &&
      <div className={'h-full w-full'}>
        <img
          className={`object-cover ${imgLoading ? 'opacity-0' : ''} `}
          src={picUrl}
          style={{ width: '100%', height: '100%' }}
          alt={'error'}
          onLoad={() => loadFinishImage()}
        />

        <div 
          className={'absolute right-3 bottom-3 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-opacity-50 bg-black bg-opacity-70'}
          onClick={handleReload}  
        >
          <SkipNextIcon style={{ color: '#fff' }} />
        </div>
      </div>
    }

    {
      imgLoading &&
      <LoadingWrapper>
        <LottieAnimation width={130} height={130} animationData={animationData} />
      </LoadingWrapper>
    }
  </div>
}

export default PictureRandom
