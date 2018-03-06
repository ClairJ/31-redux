export default (state=[], action) => {
  let {type, payload} = action;

  switch (type) {
  case 'CATEGORY_CREATE': return [...state, payload];
  case 'CATEGORY_UPDATE': return state.map(cat => cat._id === payload._id ? payload : cat);
  case 'CATEGORY_DELETE': {
   state.filter(cat => {
     console.log(cat._id);
     console.log(payload);
     console.log(payload._id);
   })
 }
  case 'CATEGORY_RESET': return [];
  default: return state;
  }
};
