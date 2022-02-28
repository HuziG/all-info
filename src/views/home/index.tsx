import Drawer from '@material-ui/core/Drawer';
import React, {useEffect, useState} from 'react';
// @ts-ignore
import GridLayout from "react-grid-layout";
import AsyncComponent from '../../components/import';
import DrawerSelect from './components/DrawerSelect';
import {HomeDrawerComponent} from '../../interface/home.component.interface';
import {COMPONENT_DATA_KEY} from "../../utils/env";
import {components} from "./static/componentsList";
import {useDispatch, useSelector} from "react-redux";
// import {saveLocalComponent} from "../../utils/utils";
import OperateButton from "./components/OperateButton";
import ResizeTag from "./components/ResizeTag";
import DragTag from "./components/DragTag";
import DeleteTag from "./components/DeleteTag";

/**
 * 代码获取，格式化完整数组
 */
let LocalStorageComponentData: any = localStorage.getItem(COMPONENT_DATA_KEY) || '[]'
LocalStorageComponentData = JSON.parse(LocalStorageComponentData)
console.log('LocalStorageComponentData', LocalStorageComponentData)
LocalStorageComponentData = LocalStorageComponentData.map((item: { label: string; }) =>
  components.find(cmp => cmp.label === item.label)
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

  // useEffect(() => {
  //   !drawer && saveLocalComponent(componentsList)
  // }, [componentsList, drawer])

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
        resizeHandle={<ResizeTag editMode={editMode}/>}
        onLayoutChange={onLayoutChange}
      >
        {
          componentsList.length > 0 && componentsList.map((item: HomeDrawerComponent) => (
            <div
              key={item.key || item.name}
              data-grid={item.grid}
              className={`overflow-hidden`}>

              <DragTag editMode={editMode}/>
              <DeleteTag editMode={editMode} cmpName={item.key || item.name} cmpList={componentsList}/>
              <AsyncComponent name={item.name} data={item}/>
            </div>
          ))
        }
      </GridLayout>
    </div>
  );
}

export default Home;
