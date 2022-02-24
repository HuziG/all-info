import {useMappedState} from "redux-react-hook";

function DragTag() {
  const show = useMappedState(state => state.showDragTag);

  return (
    <div>
      {
        show &&
        <div
          className={
            'absolute -bottom-3 -right-3 p-3 inline-block bg-gray-400 hover:bg-gray-300 ' +
            'rounded-xl transition-all cursor-pointer absolute z-60 shadow'}>
          <div className={'border-r-2 border-b-2 border-gray-900 w-3 h-3'}/>
        </div>
      }
    </div>
  )
}

export default DragTag
