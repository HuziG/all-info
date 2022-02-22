import {HomeComponent} from '../interface/home.component.interface';

interface LoadComponent {
  name: string;
  params: HomeComponent;
}

function GetComponent(props: LoadComponent) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const components = require(`./${  props.name  }/index`).default;
  return components(props.params);
}

export default GetComponent;
