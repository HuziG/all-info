import { useEffect, useState } from "react"
import { getMiYouPic } from "../../api/picture"
import { INFO_CARD_STYLE } from "../../style"
import useResizeObserver from 'use-resize-observer';
import Button from '@material-ui/core/Button';
import LoadingMask from "../Loading";

const cloneDeep = require('lodash.clonedeep')

function MiYouPic() {
  const { ref, height: scrollHeight } = useResizeObserver<HTMLDivElement>();
  const [picData, setPicData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getInitData()
  }, [])

  const getInitData = async () => {
    setPicData(null)
    setLoading(true)

    const { data } = await getMiYouPic();
    const saveData = data.dataJsonString[0]
    saveData.content = JSON.parse(saveData.content)

    setPicData({ ...saveData })
    setLoading(false)
  }

  return <div
    ref={ref}
    className={`bg-white border-8 px-3 py-2 ${INFO_CARD_STYLE}`}
    style={{
      borderColor: '#77E2FF'
    }}
  >
    {loading && <LoadingMask getData={getInitData} />}

    {
      picData &&

      <div
        className={'overflow-y-auto scroll-hidden'}
        style={{ height: scrollHeight }}
      >

        <div className={'text-xl font-bold py-5'}>{picData.title}</div>

        {picData.img.map((url: string) => (
          <img src={url} alt='error' className={'bg-gray-300'} />
        ))}

        <div className={'py-2 text-lg'}>
          {typeof picData.content === 'object' && picData.content.map((item: any, index: number) => (
            <div className={'text-gray-700 text-base'} key={index}>{
              typeof item.insert === 'string' ? item.insert : ''
            }</div>
          ))}

          {
            typeof picData.content === 'string' && picData.content
          }
        </div>

        <div className={'flex justify-center'}>
          <Button className={'dark:text-main-title'} onClick={() => getInitData()}>下一个</Button>
        </div>
      </div>
    }
  </div>
}

export default MiYouPic
