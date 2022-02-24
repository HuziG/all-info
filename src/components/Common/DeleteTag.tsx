import DeleteIcon from '@material-ui/icons/Delete';
import {useSelector} from "react-redux";

function DragTag() {
  const show = useSelector((state: any) => state.dragTagReducer.showEditTag);

  console.log('show', show);

  return (
    <div>
      {
        show &&
        <div
          className={
            'absolute -top-5 -right-5 w-10 h-10 flex items-center justify-center inline-block bg-red-600 hover:bg-gray-300 ' +
            'rounded-xl transition-all cursor-pointer absolute z-20 shadow'}>
          <DeleteIcon style={{fontSize: '1.5rem', color: '#fff'}}/>
        </div>
      }
    </div>
  )
}

export default DragTag
