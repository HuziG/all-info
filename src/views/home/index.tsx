import Drawer from '@material-ui/core/Drawer';
import React, {useEffect, useState} from 'react';
import Draggable from 'react-draggable';
import AsyncComponent from '../../components/import';
import DrawerSelect from './components/DrawerSelect';
import {HomeDrawerComponent} from '../../interface/home.component.interface';
import {COMPONENT_DATA_KEY} from "../../utils/env";
import AddIcon from '@material-ui/icons/Add';
import {components} from "./static/componentsList";
import Switch from "../Switch";
import {useDispatch, useMappedState} from "redux-react-hook";

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
  const resizeSwitch = useMappedState(state => state.resizeSwitch);
  const dispatch = useDispatch();

  const handleSelect = (cmp: HomeDrawerComponent) => {
    setComponentsList([...componentsList, cmp])
  };

  useEffect(() => {
    const _componentsList = JSON.parse(JSON.stringify(componentsList)).map((item: HomeDrawerComponent) => ({label: item.label}))
    !drawer && localStorage.setItem(COMPONENT_DATA_KEY, JSON.stringify(_componentsList))
  }, [componentsList, drawer])

  return (
    <div>
      {
        !resizeSwitch ?
          'resizeSwitch false' : 'resizeSwitch true'
      }

      <div>
        <button onClick={() => dispatch({
          type: 'drag_tag_open'
        })}>
          Open
        </button>

        <button onClick={() => dispatch({
          type: 'drag_tag_close'
        })}>
          Close
        </button>
      </div>

      <hr/>

      <Switch/>

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
            // defaultPosition={{x: item.params.x, y: item.params.y}}
            defaultPosition={{x: 0, y: 0}}
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
