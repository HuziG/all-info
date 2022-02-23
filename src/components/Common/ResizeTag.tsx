import {useMappedState} from "redux-react-hook";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function DragTag() {
  const show = useMappedState(state => state.showDragTag);

  return (
    <div>
      {
        show &&
        <div
          className={
            'absolute -bottom-5 -right-5 w-10 h-10 inline-block bg-gray-400 hover:bg-gray-300 ' +
            'rounded-xl transition-all cursor-pointer absolute z-20'}>
          <div className={'-rotate-45'}>
            <KeyboardArrowDownIcon style={{fontSize: '2rem'}}/>
          </div>
        </div>
      }
    </div>
  )
}

export default DragTag
