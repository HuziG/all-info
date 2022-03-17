import { useEffect, useState } from "react";
import { INFO_CARD_STYLE } from "../../style";
import LoadingMask from "../Loading";
import SkipNextIcon from '@material-ui/icons/SkipNext';

function PictureRandom({ params }: {
  params: { picUrl: string }
}) {
  const [loading, setLoading] = useState(true);
  const [picUrl, setPicUrl] = useState('')

  useEffect(() => {
    handleReload()
  }, [])

  useEffect(() => {
    if (picUrl === '') {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [picUrl])

  const handleReload = () => {
    setPicUrl('')
    setTimeout(() => {
      setPicUrl(`${params.picUrl  }?${  Math.random() * 1000}`)
    }, 1000)
  }

  return <div className={`relative bg-black border-8 border-indigo-600 ${INFO_CARD_STYLE}`}>
    {
      !loading &&
      <div className={'h-full w-full'}>
        <img
          className={'object-cover'}
          src={picUrl}
          style={{ width: '100%', height: '100%' }}
          alt={'error'}
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
      loading && 
      <LoadingMask getData={handleReload} />
    }
  </div>
}

export default PictureRandom
