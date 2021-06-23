import { actionType } from "../constant/Actions_Types";

export const setProduct = (products) => {
    return {
        type: actionType.SET_PRODUCT,
        payload: products
    }
}
export const viewProduct = (product) =>{
    return {
        type:actionType.VIEW_PRODUCT,
        payload:product
    }
}