import React, {ReactChild, ReactFragment, ReactPortal, useState} from "react"
import DragTag from "./DragTag";
import DeleteTag from "./DeleteTag";
import {Resizable} from "re-resizable";
import ResizeTag from "./ResizeTag";
import {HomeComponentParams} from "../../interface/home.component.interface";

function CmpContainer(props: {
  children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
  cmpKey: string,
  cmpParams: HomeComponentParams
}) {
  const [width, setWidth] = useState(props.cmpParams.width);
  const [height, setHeight] = useState(props.cmpParams.height);

  return (
    <div className={'relative'}>
      <Resizable
        size={{width, height}}
        onResizeStop={(e, direction, ref, d) => {
          setWidth(width + d.width);
          setHeight(height + d.height);
        }}
        handleComponent={{
          bottomRight: <ResizeTag/>
        }}
      >
        <DragTag/>
        <DeleteTag cmpKey={props.cmpKey}/>

        {props.children}
      </Resizable>
    </div>
  )
}

export default CmpContainer
