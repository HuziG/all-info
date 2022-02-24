const initialState = {showEditTag: false};

export default function reducer(state: any = initialState, action: { type: any; }) {
  switch (action.type) {
    case "drag_tag_open":
      return {showEditTag: true};
    case "drag_tag_close":
      return {showEditTag: false};
    default:
      return state;
  }
}

