/*
 src/reducers/simpleReducer.js
*/
export default (state = {test: 1}, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }