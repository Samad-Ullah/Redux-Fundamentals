import { combineReducers } from "redux";
import {productReducer ,viewProductReducer} from '../reducers/product_reducer';

export const Reducer = combineReducers({
    allproducts: productReducer,
    product: viewProductReducer
})