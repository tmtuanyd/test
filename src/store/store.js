var redux = require('redux')
const initialState ={
    data:null,
    dataType:"",
    login:[],
}
const allReducer = (state=initialState,action)=>{
    switch(action.type){
        case "GET_DATA":
            return {...state,data:action.data}
        case "GET_TYPE":
            return {...state,dataType:action.datatype}
        case "LOGIN":
            return {...state,login:action.login}
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(()=> {
    console.log(JSON.stringify(store.getState()))
})
export default store