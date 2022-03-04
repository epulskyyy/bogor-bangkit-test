import { REHYDRATE } from "redux-persist";


const initialState = {
  persistedState: null,
};
export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case REHYDRATE:
      return { ...state, persistedState: action.payload };
    default:
      return state;
  }
}
