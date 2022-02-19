import Drawer from '@material-ui/core/Drawer';
import { useState } from 'react';
import Draggable from 'react-draggable';
import HotNews from '../../components/HotNews';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import {IconButton} from "@material-ui/core";

function Home() {
  const [drawer, setDrawer] = useState(false)

  return (
    <div>
      <div
        className={'fixed right-10 bottom-5 z-20 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer'}
        style={{
          backgroundColor: '#3F51B5'
        }}
        onClick={() => setDrawer(true)}
      >
        <SettingsApplicationsIcon style={{ color: '#ffffff' }} />
      </div>

      <Drawer anchor={'right'} open={drawer} onClose={() => setDrawer(false)}>
        <div className={'w-96 p-5 text-xl font-bold border-b-2 border-gray-200'}>
          选择喜欢的内容 🙂
        </div>
      </Drawer>

      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 25, y: 25}}
        grid={[25, 25]}
        scale={1}
      >
        <div><HotNews /></div>
      </Draggable>
    </div>
  )
}

export default Home
