import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useDispatch } from 'react-redux';
import { HomeComponent } from '../../../interface/home.component.interface';
import Fade from '@material-ui/core/Fade';

function DeleteTag(props: { editmode: any; cmpName: string; cmpList: HomeComponent[] }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const _cmpList = JSON.parse(JSON.stringify(props.cmpList));
    const deleteIndex = _cmpList.findIndex((item: { name: string }) => item.name === props.cmpName);
    _cmpList.splice(deleteIndex, 1);
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
            'text-white p-2 lg:rounded-tr rounded lg:rounded-bl ' +
            'absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:bottom-0 lg:left-0 lg:-translate-x-0 lg:-translate-y-0 ' + 
            'z-50 flex bg-red-600 cursor-pointer'
          }
          onClick={() => handleDelete()}
        >
          <DeleteIcon />
        </div>
      </Fade>
    </div>
  );
}

export default DeleteTag;
