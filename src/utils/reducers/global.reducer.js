import { fromJS } from 'immutable';

const initialState = fromJS({
  runs:['run1','run2','run3']

})


const counter = (state=initialState, action)=>{
  switch (action.type){
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
};
export default counter;
