import {HomeDrawerComponent} from "../../interface/home.component.interface";
import React, {useState} from "react";
import {Resizable} from "re-resizable";
import LoadingMask from "../Loading";
import useScript from "../../hook/useScript";

function YiWeiReBang(props: HomeDrawerComponent) {
  const id = `ALLINFO_${props.name}`
  const [width, setWidth] = useState(props.params.width);
  const [height, setHeight] = useState(props.params.height);

  useScript(`${props.params.yiweiUrl}${id}`)

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
