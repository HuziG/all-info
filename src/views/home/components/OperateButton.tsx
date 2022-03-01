import {Fab, IconButton, Tooltip} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {COMPONENT_DATA_KEY} from "../../../utils/env";
import {LocalComponent} from "../../../interface/home.component.interface";

function OperateButton(props: any) {
  const [showOperateBut, setShowOperateBut] = useState(false);
  const [editState, setEditState] = useState(false);
  const dispatch = useDispatch()

  const handleOpenEdit = () => {
    setEditState(true)
    dispatch({
      type: 'edit_mode_open'
    })
  }

  const handleSave = () => {
    const saveData: LocalComponent[] = []
    props.gridData.forEach((item: { i: any; x: any; y: any; w: any; h: any; }) => {
      saveData.push({
        name: item.i,
        grid: {x: item.x, y: item.y, w: item.w, h: item.h}
      })
    })
    localStorage.setItem(COMPONENT_DATA_KEY, JSON.stringify(saveData))
    setEditState(false)
    dispatch({
      type: 'edit_mode_close'
    })
    // setShowOperateBut(false)
  }

  useEffect(() => {
    if (!showOperateBut) {
      dispatch({
        type: 'edit_mode_close'
      })
      setEditState(false)
    }
  }, [showOperateBut])

  return <div
    className={'fixed right-10 bottom-5 z-20'}
  >
    {
      showOperateBut &&
      <div className={'flex flex-col items-center justify-center'}>
        {
          editState ?
            (
              <Tooltip title="保存">
                <IconButton aria-label="delete" className={'mb-3'} onClick={() => {
                  handleSave()
                }}>
                  <SaveIcon/>
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="编辑布局">
                <IconButton aria-label="delete" className={'mb-3'} onClick={() => {
                  handleOpenEdit()
                }}>
                  <EditIcon/>
                </IconButton>
              </Tooltip>
            )
        }

        <Tooltip title="添加组件">
          <IconButton aria-label="delete" className={'mb-3'} onClick={() => {
            setEditState(true)
            dispatch({
              type: 'edit_mode_open'
            })
            props.openDrawer()
          }}>
            <AddIcon/>
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
