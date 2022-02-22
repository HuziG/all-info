import {HomeDrawerComponent} from '../interface/home.component.interface';

function GetComponent(props: { name: any; data: HomeDrawerComponent; }) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const components = require(`./${props.name}/index`).default;
  return components(props.data);
}

export default GetComponent;
