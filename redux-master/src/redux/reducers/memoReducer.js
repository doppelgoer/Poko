
export const ADD_MEMO = 'memo/ADD_MEMO';
export const UPDATE_MEMO = 'memo/UPDATE_MEMO';

export const addMemo = () => ({
  type: ADD_MEMO
});
export const updateMemo = () => ({
  type: UPDATE_MEMO
});
const memoState = [{
                    idx : 'state.length',
                    title : 'action.title',
                    content : 'action.content'
                  }];
export const memoReducer = (state = memoState, action) => {

    if(action.type===ADD_MEMO){
        return [...state,{
          idx : state.length,
          title : action.payload.title,
          content : action.payload.content
        }]
    }
    else if(action.type===UPDATE_MEMO){
      let updateMemoState = [...state];
      updateMemoState[action.payload.idx] = {...state[action.payload.idx],
        idx : action.payload.idx,
        title : action.payload.title,
        content : action.payload.content
      }
        return updateMemoState
    }
    // else if(action.type===MINUS_NUM){
    //     return {...state, num: num--};
    // }
    // else if(action.type===SET_NUM_TEXT){
    //     return {...state, text: action.text};
    // }
    else return state;
}