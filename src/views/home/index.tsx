import Drawer from '@material-ui/core/Drawer';
import React, {useEffect, useState} from 'react';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import Draggable from 'react-draggable';
import AsyncComponent from '../../components/import';
import DrawerSelect from './components/DrawerSelect';
import {HomeDrawerComponent} from '../../interface/home.component.interface';
import {COMPONENT_DATA_KEY} from "../../utils/env";

const LocalStorageComponentData = localStorage.getItem(COMPONENT_DATA_KEY) || []

// const handleSaveToLocal = (data: HomeDrawerComponent[]) => {
//   localStorage.setItem(COMPONENT_DATA_KEY, JSON.stringify(data))
// }

function Home() {
  const [drawer, setDrawer] = useState(false);
  const [componentsList, setComponentsList] = useState<HomeDrawerComponent[] | []>(
    typeof LocalStorageComponentData === 'string' ? JSON.parse(LocalStorageComponentData) : []
  );

  const handleSelect = (cmp: HomeDrawerComponent) => {
    console.log(cmp);
    setComponentsList([...componentsList, cmp])
  };

  useEffect(() => {
    console.log(componentsList);
  }, [componentsList])

  return (
    <div>
      <div
        className={
          'fixed right-10 bottom-5 z-20 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer'
        }
        style={{
          backgroundColor: '#3F51B5',
        }}
        onClick={() => setDrawer(true)}
      >
        <SettingsApplicationsIcon style={{color: '#ffffff'}}/>
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
            key={item.name}
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
