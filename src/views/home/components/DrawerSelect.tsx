import React, {useState} from 'react';
import {HomeComponent, HomeDrawerComponent} from '../../../interface/home.component.interface';
// import {useSelector} from "react-redux";
import {components} from "../static/componentsList";

function DrawerSelect(props: { handleSelect: (arg0: HomeComponent) => void }) {
  const [showIndex, setShowIndex] = useState(0)
  const classWidth = 'w-40'
  // const componentsList = useSelector((state: any) => state.componentReducer.components);

  return (
    <div className={'scroll-hidden overflow-y-hidden'}>
      <div className={'p-5 text-xl font-bold border-b-2 border-gray-200'}>
        添加内容 🏓
      </div>

      <div className={'flex relative'}>
        <div className={`${classWidth} bg-gray-100 py-1 text-md px-4 absolute left-0 h-screen`}>
          {components.map((item: HomeDrawerComponent, index) => (
            <div
              className={'w-20 text-gray-900 my-4 opacity-70 hover:opacity-100 font-bold cursor-pointer'}
              onClick={() => setShowIndex(index)}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className={`${classWidth}`}/>
        <div className={'w-80 h-screen overflow-y-auto px-2 pt-2'}>
          {
            components[showIndex].children.map((cmp: HomeComponent) => (
              <div
                key={cmp.name}
                onClick={() => props.handleSelect(cmp)}
                className={'items-center justify-between cursor-pointer text-xl font-bold ' +
                  'px-5 py-3 hover:bg-gray-200 transition-all rounded-md'
                }
                style={{
                  color: cmp.style ? cmp.style.color : '#000000'
                }}
              >
                {cmp.label}
                {/* {mouseOverIndex && mouseOverIndex === index + 1 && <AddIcon/>} */}
              </div>
            ))
          }
          <div className={'h-28'}/>
        </div>
      </div>
    </div>
  );
}

export default DrawerSelect;
