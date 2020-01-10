
export interface stateRules{
    count: number;
}
const initialState:stateRules={
    count:0,
}
function handleReducer(state=initialState,action:any):typeof state{
   switch(action.type){
       case 'add':
            return{
                ...state,
                count: state.count++,
            }
        
       case 'remove':
        return{
            ...state,
            count: state.count--,
        }
         default:
             return initialState;
   }
}
export default handleReducer;