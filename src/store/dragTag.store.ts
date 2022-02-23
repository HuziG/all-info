const initialState = {showDragTag: false};

export default function reducer(state: any = initialState, action: { type: any; }) {
  switch (action.type) {
    case "drag_tag_open":
      return {showDragTag: true};
    case "drag_tag_close":
      return {showDragTag: false};
    default:
      return state;
  }
}

