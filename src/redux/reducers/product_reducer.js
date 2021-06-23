import { actionType } from '../constant/Actions_Types'

const initialState ={
    products :[]
}
export const productReducer = (state = initialState, {type , payload}) =>{
    switch (type) {
        case actionType.SET_PRODUCT:

            return {...state , products:payload}
    
        default:
            return state
    }

}

export const viewProductReducer = (state = {}, {type , payload}) =>{
    switch (type) {
        case actionType.VIEW_PRODUCT:
            return {...state, ...payload}
        default:
            return state;
    }
}