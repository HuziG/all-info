import {useMappedState} from "redux-react-hook";

function DragTag() {
  const show = useMappedState(state => state.showDragTag);

  return (
    <div>
      {
        show ?
          <div>Show DragTag</div> : <div>Close DragTag</div>
      }
    </div>
  )
}

export default DragTag
