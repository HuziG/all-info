import {Fab, IconButton, Tooltip} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

function OperateButton(props: any) {
  const [showOperateBut, setShowOperateBut] = useState(false);
  const dispatch = useDispatch()

  const handleOpenEdit = () => {
    dispatch({
      type: 'edit_mode_open'
    })
  }

  const handleSave = () => {
    console.log(props.gridData)
    setShowOperateBut(false)
  }

  useEffect(() => {
    if (!showOperateBut) {
      dispatch({
        type: 'edit_mode_close'
      })
    }
  }, [showOperateBut])

  return <div
    className={'fixed right-10 bottom-5 z-20'}
  >
    {
      showOperateBut &&
      <div className={'flex flex-col items-center justify-center'}>
        <Tooltip title="添加组件">
          <IconButton aria-label="delete" className={'mb-3'} onClick={() => {
            props.openDrawer()
          }}>
            <AddIcon/>
          </IconButton>
        </Tooltip>

        <Tooltip title="编辑布局">
          <IconButton aria-label="delete" className={'mb-3'} onClick={() => {
            handleOpenEdit()
          }}>
            <EditIcon/>
          </IconButton>
        </Tooltip>

        <Tooltip title="保存">
          <IconButton aria-label="delete" className={'mb-3'} onClick={() => {
            handleSave()
          }}>
            <SaveIcon/>
          </IconButton>
        </Tooltip>
      </div>
    }

    <div className={`relative transition-all ${showOperateBut ? 'rotate-45' : ''}`}>
      <Fab color="secondary" aria-label="edit" onClick={() => setShowOperateBut(!showOperateBut)}>
        <AddIcon style={{fontSize: '2rem'}}/>
      </Fab>
    </div>
  </div>
}

export default OperateButton
