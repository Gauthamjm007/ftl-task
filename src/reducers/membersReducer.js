import memberData from "./sampledata.json";

const initState = memberData.members;

export default function memberReducer(state = initState, action) {
  switch (action.type) {
    case "SET_MEMBER":
      return [state, ...initState];
    case "REMOVE_MEMBER":
      return state.filter((ele) => ele.id !== action.payload);
    default:
      return [...state];
  }
}
