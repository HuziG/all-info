import { LocalComponent } from '../interface/home.component.interface';
import { COMPONENT_DATA_KEY } from './env';

export const mapComponents = (cmp: any[]) => {
  return cmp.reduce((total, item) => [...item.children, ...total], []);
};

export const saveGridData = (gridData: any) => {
  return new Promise((resolve) => {
    const saveData: LocalComponent[] = [];
    gridData.forEach((item: { i: any; x: any; y: any; w: any; h: any }) => {
      saveData.push({
        name: item.i,
        grid: { x: item.x, y: item.y, w: item.w, h: item.h },
      });
    });
    localStorage.setItem(COMPONENT_DATA_KEY, JSON.stringify(saveData));
    resolve(true);
  });
};

export const clearGridData = () => {
  localStorage.setItem(COMPONENT_DATA_KEY, '');
};
