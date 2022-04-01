import { Fab, IconButton, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearGridData, saveGridData } from '../../../utils/utils';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { HomeComponent, LocalComponent } from '../../../interface/home.component.interface';

const isEmpty = require('lodash.isempty');

function OperateButton(props: any) {
  const [showOperateBut, setShowOperateBut] = useState(false);
  const [editState, setEditState] = useState(false);
  const componentsList = useSelector((state: any) => state.componentReducer.components);

  const dispatch = useDispatch();

  const operateIconStyle = 'mb-3 bg-white dark:bg-dark-card-bg text-black dark:text-main-title'

  const handleOpenEdit = () => {
    setEditState(true);
    dispatch({
      type: 'edit_mode_open',
    });
  };

  const handleSave = () => {
    // 处理手机端无gridData的情况
    const saveData: LocalComponent[] = isEmpty(props.gridData) ? componentsList.map((item: HomeComponent) => ({
      i: item.name,
      w: 1, h: 1, x: 1, y: 1
    })) : props.gridData

    saveGridData(saveData).then(() => {
      toast.success('😘 保存成功!', {
        position: 'bottom-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setEditState(false);

      dispatch({
        type: 'edit_mode_close',
      });
    });
  };

  useEffect(() => {
    if (!showOperateBut) {
      dispatch({
        type: 'edit_mode_close',
      });
      setEditState(false);
    }
  }, [showOperateBut]);

  return (
    <div className={'fixed right-10 bottom-5 z-20'}>
      {showOperateBut && (
        <div className={'flex flex-col items-center justify-center mb-12 ml-20 lg:mb-0 lg:ml-0'}>
          {editState ? (
            <Tooltip title="保存">
              <IconButton
                aria-label="delete"
                className={operateIconStyle}
                onClick={() => {
                  handleSave();
                }}
              >
                <SaveIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="编辑布局">
              <IconButton
                aria-label="delete"
                className={operateIconStyle}
                onClick={() => {
                  handleOpenEdit();
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          )}

          <Tooltip title="添加组件">
            <IconButton
              aria-label="delete"
              className={operateIconStyle}
              onClick={() => {
                setEditState(true);
                dispatch({
                  type: 'edit_mode_open',
                });
                props.openDrawer();
              }}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>

          {componentsList.length !== 0 && (
            <Tooltip title="清除组件">
              <IconButton
                aria-label="delete"
                className={operateIconStyle}
                onClick={() => {
                  clearGridData();
                  dispatch({
                    type: 'component_set_data',
                    payloads: [],
                  });
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      )}

      <div className={`hidden lg:inline-block relative transition-all ${showOperateBut ? 'rotate-45' : ''}`}>
        <Fab color="secondary" aria-label="edit" onClick={() => setShowOperateBut(!showOperateBut)}>
          <AddIcon style={{ fontSize: '2rem' }} />
        </Fab>
      </div>

      <div className={'lg:hidden absolute bottom-2 right-2 w-10'}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setShowOperateBut(!showOperateBut)}
        >
          编辑
        </Button>
      </div>
    </div>
  );
}

export default OperateButton;
