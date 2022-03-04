import React, {useEffect, useState} from 'react';
import useResizeObserver from "use-resize-observer";
import {INFO_CARD_STYLE} from "../../style";
import LoadingMask from "../Loading";
import {getBingPic} from "../../api/picture";

function Bing() {
  const [loading, setLoading] = useState(true);
  const {ref, height: scrollHeight} = useResizeObserver<HTMLDivElement>();
  const [pic, setPic] = useState<any[] | null>(null);

  useEffect(() => {
    handleInitData();
  }, []);

  const handleInitData = () => {
    (async function anyNameFunction() {
      await handleGetNvLangPicture();
    })();
  }

  /**
   * 获取数据，设置
   */
  const handleGetNvLangPicture = async () => {
    const data = await getBingPic();
    console.log(data)
    setPic([...data.data]);
    setLoading(false);
  };

  return (
    <div
      ref={ref}
      className={`bg-black border-8 border-blue-600 ${INFO_CARD_STYLE}`}
    >
      {
        loading ?
          <LoadingMask getData={handleInitData}/> :
          <div
            className="flex flex-col align-center justify-center bg-black"
            style={{
              height: scrollHeight
            }}
          >
            {pic}
          </div>
      }
    </div>
  );
}

export default Bing;
