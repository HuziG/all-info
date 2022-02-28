import PanToolIcon from "@material-ui/icons/PanTool";
import React from "react";
import Fade from '@material-ui/core/Fade';

function DragTag(props: { editMode: any; }) {
  return (
    <div>
      <Fade in={props.editMode}>
        <div
          className={'ComponentDrag bg-black text-white bg-opacity-70 p-5 rounded-xl ' +
            'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 flex items-center justify-center cursor-pointer'}>
          <PanToolIcon/>
        </div>
      </Fade>
    </div>
  )
}

export default DragTag
