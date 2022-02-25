import React, {useEffect, useState} from "react";
import LoadingMask from "../Loading";

function BlockTest() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return <div className={'h-full bg-gray-500'}>
    <div
      className={'pt-5 pb-4 px-5 text-xl bg-red-500 text-white font-bold w-full'}
    >
      BlockTest
    </div>

    {
      loading ? <LoadingMask getData={() => {
      }}/> : <div>BlockTest</div>
    }
  </div>
}

export default BlockTest
