import Drawer from '@material-ui/core/Drawer';
import React, {useState, Suspense, useEffect} from 'react';
import Draggable from 'react-draggable';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import HotNews from '../../components/HotNews';
import {IconButton} from "@material-ui/core";
import {parse} from "querystring";
import {Settings} from "@material-ui/icons";

function Home() {
  const [drawer, setDrawer] = useState(false)
  const OtherComponent = React.lazy(() => import('../../components/HotNews'));
  const [cmps, setCmps] = useState<any[] | null>(null)

  console.log('load Home')

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

      {
        [{x: 25, y: 25}, {x: 50, y: 50}].map((item, index) => {
          return (
            <Draggable
              axis="both"
              handle=".handle"
              defaultPosition={{x: item.x, y: item.y}}
              grid={[25, 25]}
              scale={1}
              key={index}
            >
              <div>
                <Suspense fallback={<div>Loading...</div>}>
                  <OtherComponent />
                </Suspense>
              </div>
            </Draggable>
          )
        })
      }

      {/*<div><HotNews /></div>*/}
    </div>
  )
}

export default Home
