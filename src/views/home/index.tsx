import Drawer from '@material-ui/core/Drawer';
import React, {useEffect, useState} from 'react';
// @ts-ignore
import GridLayout from "react-grid-layout";
import AsyncComponent from '../../components/import';
import DrawerSelect from './components/DrawerSelect';
import {HomeDrawerComponent, LocalComponent} from '../../interface/home.component.interface';
import {COMPONENT_DATA_KEY} from "../../utils/env";
import {components} from "./static/componentsList";
import {useDispatch, useSelector} from "react-redux";
import OperateButton from "./components/OperateButton";
import ResizeTag from "./components/ResizeTag";
import DragTag from "./components/DragTag";
import DeleteTag from "./components/DeleteTag";

/**
 * 代码获取，格式化完整数组
 */
let LocalStorageComponentData: any = localStorage.getItem(COMPONENT_DATA_KEY) || '[]'
LocalStorageComponentData = JSON.parse(LocalStorageComponentData)
LocalStorageComponentData = LocalStorageComponentData.map((item: LocalComponent) =>
  ({...components.find(cmp => cmp.name === item.name), ...item})
)

function Home() {
  const [drawer, setDrawer] = useState(false);
  const componentsList = useSelector((state: any) => state.componentReducer.components);
  const editMode = useSelector((state: any) => state.appReducer.editMode);
  const [gridData, setGridData] = useState({});
  const [width] = useState(document.documentElement.clientWidth)
  const dispatch = useDispatch()

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

  const onLayoutChange = (layout: any) => {
    console.log("layout", layout);
    setGridData(layout)
  };

  return (
    <div>
      <OperateButton openDrawer={() => setDrawer(true)} gridData={gridData}/>

      <Drawer anchor={'right'} open={drawer} onClose={() => setDrawer(false)}>
        <DrawerSelect handleSelect={handleSelect}/>
      </Drawer>

      <GridLayout
        className={'relative'}
        rowHeight={30}
        width={width}
        isDraggable={editMode}
        isResizable={editMode}
        draggableHandle={'.ComponentDrag'}
        resizeHandles={["se"]}
        resizeHandle={<ResizeTag editmode={editMode ? 1 : 0}/>}
        onLayoutChange={onLayoutChange}
      >
        {
          componentsList.length > 0 && componentsList.map((item: HomeDrawerComponent) => (
            <div
              key={item.name}
              data-grid={item.grid}
              className={`overflow-hidden`}>

              <DragTag editmode={editMode ? 1 : 0}/>
              <DeleteTag editmode={editMode ? 1 : 0} cmpName={item.name} cmpList={componentsList}/>
              <AsyncComponent name={item.name} data={item}/>
            </div>
          ))
        }
      </GridLayout>
    </div>
  );
}

export default Home;
