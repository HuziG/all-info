import { useEffect, useState } from "react"
import { INFO_CARD_STYLE } from "../../style"
import useResizeObserver from 'use-resize-observer';
import LoadingMask from "../Loading";
import { getActivity } from "../../api/miyou";
import ActivityItem from './Item'

function MiYouPic() {
  const { ref, height: scrollHeight } = useResizeObserver<HTMLDivElement>();
  const [activityList, setActivityList] = useState<any>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getInitData()
  }, [])

  const getInitData = async () => {
    setLoading(true)

    const { data }: any = await getActivity();

    setActivityList(data.data.list)
    setLoading(false)
  }

  const handleOpenDetail = (id: string) => {
    window.open(`https://bbs.mihoyo.com/ys/article/${id}`);
  }

  return <div
    ref={ref}
    className={`border-8 px-3 py-2 ${INFO_CARD_STYLE}`}
    style={{
      borderColor: '#77E2FF',
    }}
  >
    {loading && <LoadingMask getData={getInitData} />}

    <div
      className={'overflow-y-auto scroll-hidden dark:bg-dark-card-bg'}
      style={{
        height: scrollHeight,
      }}
    >
      {
        activityList.map((item: any, index: number) =>
          <div key={item.post.post_id} onClick={() => handleOpenDetail(item.post.post_id)}>
            <ActivityItem item={item}>
              {activityList[index + 1] &&
                <div
                  className={'border-2 border-dashed my-5'}
                  style={{ borderColor: '#77E2FF' }}
                />
              }
            </ActivityItem>
          </div>
        )
      }
    </div>
  </div>
}

export default MiYouPic
