import {HomeDrawerComponent} from '../interface/home.component.interface';
import React from "react";

function GetComponent(props: { name: any; data: HomeDrawerComponent; }) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const components = require(`./${props.name.split('-')[0]}/index`).default;
  return components(props.data);
}

export default React.memo(GetComponent);
