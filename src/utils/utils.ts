import {HomeDrawerComponent} from "../interface/home.component.interface";
import {COMPONENT_DATA_KEY} from "./env";

export const saveLocalComponent = (componentsList: any) => {
  const _componentsList = JSON.parse(JSON.stringify(componentsList)).map((item: HomeDrawerComponent) => ({label: item.label}))
  localStorage.setItem(COMPONENT_DATA_KEY, JSON.stringify(_componentsList))
}
