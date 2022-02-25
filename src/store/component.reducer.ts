import {saveLocalComponent} from "../utils/utils";

const initialState = {components: []};

export default function reducer(state: any = initialState, action: {
  payloads: any;
  type: any;
}) {
  switch (action.type) {
    case "component_set_data":
      saveLocalComponent(action.payloads)
      return {components: action.payloads};
    default:
      return state;
  }
}

