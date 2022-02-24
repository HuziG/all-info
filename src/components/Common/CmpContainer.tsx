import React, {ReactChild, ReactFragment, ReactPortal, useState} from "react"
import ResizeTag from "./ResizeTag";
import DragTag from "./DragTag";
import DeleteTag from "./DeleteTag";
import {Resizable} from "re-resizable";

function CmpContainer(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(400);

  return (
    <Resizable
      className={'scroll-hidden'}
      size={{width, height}}
      onResizeStop={(e, direction, ref, d) => {
        setWidth(width + d.width);
        setHeight(height + d.height);
      }}
      handleComponent={{
        bottomRight: <ResizeTag/>,
      }}
    >
      <DragTag/>
      <DeleteTag/>
      
      <div>
        {props.children}
      </div>
    </Resizable>
  )
}

export default CmpContainer
