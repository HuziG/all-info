import {HomeDrawerComponent} from "../../interface/home.component.interface";
import React, {useEffect, useState} from "react";
import {Resizable} from "re-resizable";

const YIWEI = '_YIWEI'

function YiWeiReBang(props: HomeDrawerComponent) {
  const id = `ALLINFO_${props.name}`
  const [width, setWidth] = useState(props.params.width);
  const [height, setHeight] = useState(props.params.height);

  useEffect(() => {
    // 组件挂载时，创建script标签
    const myScript = document.createElement('script');
    // 设置标签的src属性
    myScript.src = props.params.yiweiUrl + id + YIWEI;
    // 明确设置为同步加载
    myScript.async = false;
    // 追加到body标签的最下面
    document.body.appendChild(myScript);

    return () => {
      // 组件即将卸载时，移除标签
      document.body.removeChild(myScript);
    };
  }, [])

  return (
    <Resizable
      className={'scroll-hidden'}
      size={{width, height}}
      onResizeStop={(e, direction, ref, d) => {
        setWidth(width + d.width);
        setHeight(height + d.height);
      }}
    >
      <div id={id}>
        <div className={'pt-5 pb-4 px-5 text-xl text-white font-bold handle'} style={{
          backgroundColor: props.style ? props.style.color : '#0366FE'
        }}>
          {props.name}
        </div>

        <div id={id + YIWEI}/>
      </div>
    </Resizable>
  )
}

export default YiWeiReBang
