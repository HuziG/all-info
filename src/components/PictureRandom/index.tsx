import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import { INFO_CARD_STYLE } from "../../style";
import LoadingMask from "../Loading";

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

        <div className={'absolute right-10 bottom-10'}>
          <Button color="primary" onClick={handleReload}>换张图片</Button>
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
