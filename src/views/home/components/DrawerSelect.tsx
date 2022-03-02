import React, {useState} from 'react';
import {HomeDrawerComponent} from '../../../interface/home.component.interface';
import {components} from '../static/componentsList';
import AddIcon from '@material-ui/icons/Add';
import {useSelector} from "react-redux";

function DrawerSelect(props: { handleSelect: (arg0: HomeDrawerComponent) => void }) {
  const [mouseOverIndex, setMouseOverIndex] = useState<number | null>(null)
  const componentsList = useSelector((state: any) => state.componentReducer.components);

  return (
    <div className={'p-3'}>
      <div className={'w-96 p-5 text-xl font-bold border-b-2 border-gray-200'}>
        选择喜欢的内容 🙂
      </div>

      {components.map((item, index) => (
        <div
          key={item.name}
          onClick={() => props.handleSelect(item)}
          onMouseOver={() => setMouseOverIndex(index + 1)}
          onMouseLeave={() => setMouseOverIndex(null)}
          className={'items-center justify-between cursor-pointer text-xl font-bold ' +
            'my-2 px-5 hover:bg-gray-300 transition-all py-2 rounded-md'
          }
          style={{
            color: item.style ? item.style.color : '#000000',
            display: componentsList.find((cmp: HomeDrawerComponent) => cmp.name === item.name) ? 'none' : 'flex'
          }}
        >
          {item.label}
          {mouseOverIndex && mouseOverIndex === index + 1 && <AddIcon/>}
        </div>
      ))}
    </div>
  );
}

export default DrawerSelect;
