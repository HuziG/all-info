import {useMappedState} from "redux-react-hook";
import ControlCameraIcon from '@material-ui/icons/ControlCamera';

function DragTag() {
  const show = useMappedState(state => state.showDragTag);

  return (
    <div>
      {
        show &&
        <div
          className={
            'absolute -top-5 -left-5 w-10 h-10 flex items-center justify-center inline-block bg-gray-400 hover:bg-gray-300 ' +
            'rounded-xl transition-all cursor-pointer absolute z-20 handle shadow'}>
          <ControlCameraIcon style={{fontSize: '1.5rem'}}/>
        </div>
      }
    </div>
  )
}

export default DragTag
