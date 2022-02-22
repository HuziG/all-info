import Drawer from '@material-ui/core/Drawer';
import React, {useState} from 'react';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import Draggable from 'react-draggable';

import AsyncComponent from '../../components/import';
import DrawerSelect from './components/DrawerSelect';
import {HomeDrawerComponent} from '../../interface/home.component.interface';

const GetComponents = () => {
  return [
    {
      name: 'HotNews',
      params: {
        width: 500,
        height: 300,
        x: 50,
        y: 50,
      },
    },
  ].map((item) => (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{x: item.params.x, y: item.params.y}}
      grid={[25, 25]}
      scale={1}
      key={item.name}
    >
      <div>
        <AsyncComponent name={item.name} params={item.params}/>
      </div>
    </Draggable>
  ));
};

function Home() {
  const [drawer, setDrawer] = useState(false);

  const handleSelect = (e: HomeDrawerComponent) => {
    console.log(e);
  };

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

      {GetComponents()}
    </div>
  );
}

// @ts-ignore
export default Home;
