import React, {ReactChild, ReactFragment, ReactPortal, useState} from "react"
import DragTag from "./DragTag";
import DeleteTag from "./DeleteTag";
import {Resizable} from "re-resizable";
import ResizeTag from "./ResizeTag";

function CmpContainer(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(400);

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
        <DeleteTag/>

        {props.children}
      </Resizable>
    </div>
  )
}

export default CmpContainer
