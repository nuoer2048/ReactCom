
const createStore =function(handleReducer:any){
    let curstate={
    };
    let getState=()=>{
        return curstate;
    }
    let setState=(arg:object)=>{
        this.curstate={...this.curstate,...arg};
    }
    let dispatch=(action:object)=>{
        curstate = handleReducer(curstate,action);
       
    }
    dispatch({
        type:'@@@type'
    })
    return{
        getState,
        setState,
        dispatch,
    }
}
export default createStore;