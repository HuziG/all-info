import {HomeDrawerComponent} from "../../interface/home.component.interface";
import React from "react";
import useScript from "../../hook/useScript";

function YiWeiReBang(props: HomeDrawerComponent) {
  const id = `ALLINFO_${props.name.split('-')[1]}`

  useScript(`${props.params && props.params.yiweiUrl}${id}`)

  return (
    <div id={id} className={'bg-white shadow h-full'}>
      <div className={'flex items-center justify-center text-center'}>加载中</div>
    </div>
  )
}

export default YiWeiReBang
