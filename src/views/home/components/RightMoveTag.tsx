import { useDispatch } from 'react-redux';
import { HomeComponent } from '../../../interface/home.component.interface';
import Fade from '@material-ui/core/Fade';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { toast } from 'react-toastify';

function DeleteTag(props: { editmode: any; cmpName: string; cmpList: HomeComponent[] }) {
  const dispatch = useDispatch();

  const handleMove = () => {
    const _cmpList = JSON.parse(JSON.stringify(props.cmpList));

    const moveIndex = _cmpList.findIndex((item: { name: string }) => item.name === props.cmpName);
    const movedCmp = _cmpList[moveIndex + 1]
    const moveCmp = _cmpList[moveIndex]

    if (moveIndex === _cmpList.length - 1) {
      toast.warning('😅 到头了！', {
        position: 'bottom-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false
    }

    _cmpList.splice(moveIndex, 1, movedCmp);
    _cmpList.splice(moveIndex + 1, 1, moveCmp);
    
    dispatch({
      type: 'component_set_data',
      payloads: [..._cmpList],
    });
  };

  return (
    <div>
      <Fade in={Boolean(props.editmode)}>
        <div
          className={
            'lg:hidden text-white p-2 lg:rounded-tr rounded lg:rounded-bl ' +
            'absolute bottom-1/2 -translate-y-1/2 right-5 ' + 
            'z-50 flex cursor-pointer'
          }
          style={{
            background: '#1876D2',
          }}
          onClick={() => handleMove()}
        >
          <ArrowRightIcon />
        </div>
      </Fade>
    </div>
  );
}

export default DeleteTag;
