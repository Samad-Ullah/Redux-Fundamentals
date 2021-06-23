import React,{ useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {viewProduct} from '../redux/actions/Product_Action'

function Product_Detail() {
    const product = useSelector((state) => state.product)
    console.log(product)
   const { productId } = useParams();
   const dispatch = useDispatch();


   const getFetchDetails = async() =>{
       const getDetails = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
           console.log("ERR",err)
       })
       dispatch(viewProduct(getDetails.data))
   }

   useEffect(() => {
       if(productId && productId !== "") getFetchDetails();
   }, [productId])
    return (
        <div>
            <h3>product detail</h3>
        </div>
    )
}

export default Product_Detail
