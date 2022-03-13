import { HomeComponent } from '../interface/home.component.interface';
import React from 'react';

function GetComponent(props: { name: any; data: HomeComponent }) {
  const components = require(`./${props.name.split('-')[0]}/${
    props.data.childPath ? props.data.childPath : 'index'
  }`).default;
  return components(props.data);
}

export default React.memo(GetComponent);
