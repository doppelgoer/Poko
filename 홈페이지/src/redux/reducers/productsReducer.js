export const SET_PRODUCTS = 'products/SET_PRODUCTS';

export const setProducts = () => ({
  type: SET_PRODUCTS,
});
const productsState = [];
export const productsReducer = (state = productsState, action) => {
  if (action.type === SET_PRODUCTS) {
    //데이터가 증가하는게 아니라 처음에 갖고온 데이터만.
    // ...state,
    return action.payload;
  }
  // else if(action.type===MINUS_NUM){
  //     return {...state, num: num--};
  // }
  // else if(action.type===SET_NUM_TEXT){
  //     return {...state, text: action.text};
  // }
  else return state;
};
