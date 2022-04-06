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

export const setDarkCss = (dark: boolean) => {
  let backgroundColor = ''

  if (dark) {
    backgroundColor = '#121212'
  } else {
    backgroundColor = '#eeeeee'
  }

  document.getElementsByTagName('html')[0].className = dark ? 'dark' : ''
  document.getElementsByTagName('body')[0].style.backgroundColor = backgroundColor
}

export const clearNullCmp = (clearIndexArray: number[]) => {
  if (clearIndexArray.length > 0) {
    let localData: any = localStorage.getItem(COMPONENT_DATA_KEY)
    if (localData) {
      localData = JSON.parse(localData)
      clearIndexArray.forEach(index => {
        localData.splice(index, 1)
      })
      localStorage.setItem(COMPONENT_DATA_KEY, JSON.stringify(localData))
    } 
  }
}

export const localCmpParams = (otherParams: Array<{
  name: string,
  params: any
}>) => {
  let localData = localStorage[COMPONENT_DATA_KEY]

  if (localData) {
    localData = JSON.parse(localStorage[COMPONENT_DATA_KEY])

    localData.forEach((item: LocalComponent) => {
      const findResult = otherParams.find(
        (cmp: {name:string}) => cmp.name === item.name
      )

      if (findResult) {
        item.params = findResult.params
      }
    })    

    localStorage[COMPONENT_DATA_KEY] = JSON.stringify(localData)
  }
}
