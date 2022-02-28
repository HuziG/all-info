const initialState = {editMode: false};

export default function reducer(state: any = initialState, action: { type: any; }) {
  switch (action.type) {
    case "edit_mode_open":
      return {editMode: true};
    case "edit_mode_close":
      return {editMode: false};
    default:
      return state;
  }
}

