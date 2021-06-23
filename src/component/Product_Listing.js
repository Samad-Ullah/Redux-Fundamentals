import React,{useEffect} from 'react';
import {  useDispatch } from 'react-redux';
import { setProduct  } from '../redux/actions/Product_Action'
import ProductComponent from './Product_Component';
import  axios  from "axios";
 
function Product_Listing() {
    const dispatch = useDispatch()
    
    const fetchProducts = async() =>{
        const fetchData = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("err",err)
        })
        dispatch(setProduct(fetchData.data))
    }
    useEffect(() => {
       fetchProducts();
    }, [])


    return (
        <div className="ui grid container">
            <ProductComponent></ProductComponent>
        </div>
    )
}

export default Product_Listing
