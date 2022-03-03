import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch, useSelector} from "react-redux";
import {HomeComponent} from "../../interface/home.component.interface";

function DragTag(props: { cmpKey: string; }) {
  const show = useSelector((state: any) => state.appReducer.editMode);
  const components = useSelector((state: any) => state.componentReducer.components);
  const dispatch = useDispatch()

  const handleDelete = () => {
    const _components = JSON.parse(JSON.stringify(components));
    const findIndex = _components.findIndex((item: HomeComponent) => item.key ? item.key === props.cmpKey : item.name === props.cmpKey)
    _components.splice(findIndex, 1)

    console.log('_data', _components)

    dispatch({
      type: 'component_set_data',
      payloads: [..._components]
    })
  }

  return (
    <div>
      {
        show &&
        <div
          className={
            'absolute -top-5 -right-5 w-10 h-10 flex items-center justify-center inline-block bg-red-600 hover:bg-gray-300 ' +
            'rounded-xl transition-all cursor-pointer absolute z-20 shadow'}
          onClick={handleDelete}
        >
          <DeleteIcon style={{fontSize: '1.5rem', color: '#fff'}}/>
        </div>
      }
    </div>
  )
}

export default DragTag
