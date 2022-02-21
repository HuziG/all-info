import {HomeComponent} from "../interface/home.component.interface";

interface LoadComponent {
  name: string;
  params: HomeComponent
}

function GetComponent(props: LoadComponent) {
  const components = require('./' + props.name + '/index').default
  return components(props.params);
}

export default GetComponent
