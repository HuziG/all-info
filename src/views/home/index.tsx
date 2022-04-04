import Drawer from '@material-ui/core/Drawer';
import { useEffect, useState } from 'react';
// @ts-ignore
import GridLayout from 'react-grid-layout';
import AsyncComponent from '../../components/import';
import DrawerSelect from './components/DrawerSelect';
import MobileLayout from './components/MobileLayout'
import { HomeComponent, LocalComponent } from '../../interface/home.component.interface';
import Header from '../../components/Header';
import { clearNullCmp, mapComponents, saveGridData } from '../../utils/utils';
import { COMPONENT_DATA_KEY } from '../../utils/env';
import { components } from './static/componentsList';
import { useDispatch, useSelector } from 'react-redux';
import OperateButton from './components/OperateButton';
import ResizeTag from './components/ResizeTag';
import DragTag from './components/DragTag';
import LeftMoveTag from './components/LeftMoveTag';
import RightMoveTag from './components/RightMoveTag';
import DeleteTag from './components/DeleteTag';
import { toast } from 'react-toastify';
import NullBlock from './components/NullBlock';
import { SwiperSlide } from "swiper/react";
import useMedia from 'use-media';

const isEmpty = require('lodash.isempty');
const _Compact = require('lodash.compact');

const hasMapComponents = mapComponents(components);

const clearIndexArray: number[] = []

/**
 * 代码获取，格式化完整数组
 */
let LocalStorageComponentData: any = localStorage.getItem(COMPONENT_DATA_KEY) || '[]';
LocalStorageComponentData = JSON.parse(LocalStorageComponentData).map((item: LocalComponent, index: number) => {
  const findResult = hasMapComponents.find((cmp: HomeComponent) => cmp.name === item.name)
  if (findResult) {
    return ({
      ...findResult,
      ...item,
    })
  } else {
    clearIndexArray.push(index)
    return null
  }
});

LocalStorageComponentData = _Compact(LocalStorageComponentData)

clearNullCmp(clearIndexArray)

function Home() {
  const [drawer, setDrawer] = useState(false);
  const componentsList = useSelector((state: any) => state.componentReducer.components);
  const editMode = useSelector((state: any) => state.appReducer.editMode);
  const [gridData, setGridData] = useState({});
  const [width] = useState(document.documentElement.clientWidth);
  const dispatch = useDispatch();
  const isMobile = useMedia({ maxWidth: '1024px' });

  useEffect(() => {
    dispatch({
      type: 'component_set_data',
      payloads: LocalStorageComponentData,
    });
  }, []);

  const handleSelect = (cmp: HomeComponent) => {
    if (componentsList.find((item: HomeComponent) => item.name === cmp.name)) {
      toast.warning('😅 组件不可重复添加!', {
        position: 'bottom-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      return false;
    }

    dispatch({
      type: 'component_set_data',
      payloads: [...componentsList, cmp],
    });

    toast.success('😘 添加成功!', {
      position: 'bottom-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const onLayoutChange = (layout: any) => {
    setGridData(layout);
  };

  const handleLocalComponent = async () => {
    setDrawer(false);

    // 处理手机端无gridData的情况
    const saveData: LocalComponent[] = isEmpty(gridData) ? componentsList.map((item: HomeComponent) => ({
      i: item.name,
      w: 1, h: 1, x: 1, y: 1
    })) : gridData

    await saveGridData(saveData);
  };

  return (
    <div>
      <OperateButton openDrawer={() => setDrawer(true)} gridData={gridData} />

      <Drawer anchor={'right'} open={drawer} onClose={() => handleLocalComponent()}>
        <DrawerSelect handleSelect={handleSelect} handleHide={handleLocalComponent} />
      </Drawer>

      <Header />

      {componentsList.length === 0 && <NullBlock setDrawer={setDrawer} />}

      {/* 移动端布局 */}
      {
        isMobile && <MobileLayout>
          {componentsList.length > 0 &&
            componentsList.map((item: HomeComponent) => (
              <SwiperSlide key={item.name} className={`overflow-hidden`}>
                <LeftMoveTag editmode={editMode ? 1 : 0} cmpName={item.name} cmpList={componentsList} />
                <RightMoveTag editmode={editMode ? 1 : 0} cmpName={item.name} cmpList={componentsList} />
                <DeleteTag editmode={editMode ? 1 : 0} cmpName={item.name} cmpList={componentsList} />
                <AsyncComponent name={item.name} data={item} />
              </SwiperSlide>
            ))}
        </MobileLayout>
      }

      {/* pc布局 */}
      {
        !isMobile && <GridLayout
          className={'hidden lg:inline-block relative'}
          rowHeight={30}
          width={width}
          isDraggable={editMode}
          isResizable={editMode}
          draggableHandle={'.ComponentDrag'}
          resizeHandles={['se']}
          resizeHandle={<ResizeTag editmode={editMode ? 1 : 0} />}
          onLayoutChange={onLayoutChange}
        >
          {componentsList.length > 0 &&
            componentsList.map((item: HomeComponent) => (
              <div key={item.name} data-grid={item.grid} className={`overflow-hidden`}>
                <DragTag editmode={editMode ? 1 : 0} />
                <DeleteTag editmode={editMode ? 1 : 0} cmpName={item.name} cmpList={componentsList} />
                <AsyncComponent name={item.name} data={item} />
              </div>
            ))}
        </GridLayout>
      }
    </div>
  );
}

export default Home;
