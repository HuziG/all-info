import Drawer from '@material-ui/core/Drawer';
import React, {useEffect, useState} from 'react';
import Draggable from 'react-draggable';
import AsyncComponent from '../../components/import';
import DrawerSelect from './components/DrawerSelect';
import {HomeDrawerComponent} from '../../interface/home.component.interface';
import {COMPONENT_DATA_KEY} from "../../utils/env";
import AddIcon from '@material-ui/icons/Add';
import {components} from "./static/componentsList";

/**
 * 代码获取，格式化完整数组
 */
let LocalStorageComponentData: any = localStorage.getItem(COMPONENT_DATA_KEY) || '[]'
LocalStorageComponentData = JSON.parse(LocalStorageComponentData)
LocalStorageComponentData = LocalStorageComponentData.map((item: { label: string; }) =>
  components.find(cmp => cmp.label === item.label)
)

function Home() {
  const [drawer, setDrawer] = useState(false);
  const [componentsList, setComponentsList] = useState<HomeDrawerComponent[] | []>(LocalStorageComponentData);

  const handleSelect = (cmp: HomeDrawerComponent) => {
    console.log(cmp);
    setComponentsList([...componentsList, cmp])
  };

  useEffect(() => {
    const _componentsList = JSON.parse(JSON.stringify(componentsList)).map((item: HomeDrawerComponent) => ({label: item.label}))
    !drawer && localStorage.setItem(COMPONENT_DATA_KEY, JSON.stringify(_componentsList))
  }, [componentsList, drawer])

  return (
    <div>
      <div
        className={
          'fixed right-10 bottom-5 z-20 w-12 h-12 ' +
          'flex items-center justify-center rounded-2xl cursor-pointer ' +
          'bg-indigo-700 hover:bg-indigo-500 transition-all cursor-pointer'
        }
        onClick={() => setDrawer(true)}
      >
        <AddIcon style={{color: '#ffffff', fontSize: '2rem'}}/>
      </div>

      <Drawer anchor={'right'} open={drawer} onClose={() => setDrawer(false)}>
        <DrawerSelect handleSelect={handleSelect}/>
      </Drawer>

      {
        componentsList.length > 0 && componentsList.map((item: HomeDrawerComponent) => (
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: item.params.x, y: item.params.y}}
            grid={[25, 25]}
            scale={1}
            key={item.label}
          >
            <div>
              <AsyncComponent name={item.name} data={item}/>
            </div>
          </Draggable>
        ))
      }
    </div>
  );
}

export default Home;
