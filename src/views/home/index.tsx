import Drawer from '@material-ui/core/Drawer';
import React, {useEffect, useState} from 'react';
// @ts-ignore
import GridLayout from "react-grid-layout";
import AsyncComponent from '../../components/import';
import DrawerSelect from './components/DrawerSelect';
import {HomeDrawerComponent} from '../../interface/home.component.interface';
import {COMPONENT_DATA_KEY} from "../../utils/env";
import EditIcon from '@material-ui/icons/Edit';
import {components} from "./static/componentsList";
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from '@material-ui/icons/Menu';
import {useDispatch, useSelector} from "react-redux";
import {saveLocalComponent} from "../../utils/utils";

/**
 * 代码获取，格式化完整数组
 */
let LocalStorageComponentData: any = localStorage.getItem(COMPONENT_DATA_KEY) || '[]'
LocalStorageComponentData = JSON.parse(LocalStorageComponentData)
LocalStorageComponentData = LocalStorageComponentData.map((item: { label: string; }) =>
  components.find(cmp => cmp.label === item.label)
)

let editType = 'drag_tag_close'

function Home() {
  const [drawer, setDrawer] = useState(false);
  const [showOperateBut, setShowOperateBut] = useState(false);
  const dispatch = useDispatch()
  const componentsList = useSelector((state: any) => state.componentReducer.components);

  useEffect(() => {
    dispatch({
      type: 'component_set_data',
      payloads: LocalStorageComponentData
    })
  }, []);

  const handleSelect = (cmp: HomeDrawerComponent) => {
    dispatch({
      type: 'component_set_data',
      payloads: [...componentsList, cmp]
    })
  };

  const handleOpenEdit = () => {
    const result = editType === 'drag_tag_open' ? 'drag_tag_close' : 'drag_tag_open'
    dispatch({
      type: result
    })
    editType = result
  }

  useEffect(() => {
    !drawer && saveLocalComponent(componentsList)
  }, [componentsList, drawer])

  const onLayoutChange = (layout: any) => {
    console.log("layout", layout);
  };

  return (
    <div>
      <div
        className={'fixed right-10 bottom-5 z-20'}
      >
        <div className={'relative'}>
          {
            showOperateBut &&
            <div>
              <div className={'absolute -top-16'}>
                <Fab size="medium" color="secondary" aria-label="edit" onClick={() => setDrawer(true)}>
                  <AddIcon/>
                </Fab>
              </div>
              <div className={'absolute -left-16'}>
                <Fab size="medium" color="secondary" aria-label="edit" onClick={() => handleOpenEdit()}>
                  <EditIcon/>
                </Fab>
              </div>
            </div>
          }
          <Fab color="secondary" aria-label="edit" onClick={() => setShowOperateBut(!showOperateBut)}>
            <MenuIcon/>
          </Fab>
        </div>
      </div>

      <Drawer anchor={'right'} open={drawer} onClose={() => setDrawer(false)}>
        <DrawerSelect handleSelect={handleSelect}/>
      </Drawer>

      <GridLayout
        rowHeight={30}
        width={1200}
        onLayoutChange={onLayoutChange}
      >
        {
          componentsList.length > 0 && componentsList.map((item: HomeDrawerComponent) => (
            <div key={item.key || item.name} data-grid={item.grid} className={'overflow-hidden'}>
              <AsyncComponent name={item.name} data={item}/>
            </div>
          ))
        }
      </GridLayout>
    </div>
  );
}

export default Home;
