import React from 'react';
import { HomeDrawerComponent } from '../../../interface/home.component.interface';
import { components } from '../static/componentsList';

const ComponentsMenu: HomeDrawerComponent[] = components;

function DrawerSelect(props: { handleSelect: (arg0: HomeDrawerComponent) => void }) {
  return (
    <div>
      <div className={'w-96 p-5 text-xl font-bold border-b-2 border-gray-200'}>
        选择喜欢的内容 🙂
      </div>

      {ComponentsMenu.map((item) => (
        <div
          onClick={() => props.handleSelect(item)}
          className={'cursor-pointer text-xl font-bold my-10'}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default DrawerSelect;
