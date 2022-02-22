import {HomeDrawerComponent} from "../../interface/home.component.interface";
import React, {useEffect, useState} from "react";
import {Resizable} from "re-resizable";
import LoadingMask from "../Loading";


function YiWeiReBang(props: HomeDrawerComponent) {
  const id = `ALLINFO_${props.name}`
  const [width, setWidth] = useState(props.params.width);
  const [height, setHeight] = useState(props.params.height);

  useEffect(() => {
    const myScript = document.createElement('script');
    myScript.src = `${props.params.yiweiUrl}${id}`;
    myScript.async = false;
    document.body.appendChild(myScript);

    return () => {
      document.body.removeChild(myScript);
    };
  }, [])

  return (
    <Resizable
      className={'scroll-hidden rounded-md overflow-hidden '}
      size={{width, height}}
      onResizeStop={(e, direction, ref, d) => {
        setWidth(width + d.width);
        setHeight(height + d.height);
      }}
    >
      <div id={id} className={'bg-white'}>
        <LoadingMask/>
      </div>
    </Resizable>
  )
}

export default YiWeiReBang
