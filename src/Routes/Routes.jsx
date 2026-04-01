
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import About from '../Pages/About';
import Product from '../Pages/Product';
import Hero from '../Components/Hero';
import Layout from '../Layout/Layout';
import ErrorPage from '../Pages/ErrorPage';
import AllProducts from '../Pages/AllProducts';
import ProductDetails from '../Pages/ProductDetails';
import Wishlist from '../Pages/Wishlist';



const router =createBrowserRouter([
    
    {
        path:'/',
      element:<Layout></Layout>,
       errorElement:ErrorPage,
       hydrateFallbackElement:<h2>Loading...</h2>,
       children:[
        {
        index:true,
        path:'/products',
        loader:()=>fetch('/Data.json'),
        Component:Products,
        
      },
        {  
          path:'/allProducts',
          Component:AllProducts
        },
           {
        path:'/about',
        Component:About
        
      },
           {
        path:'/wishlist',
        Component:Wishlist
        
      },
        {
        path:'/about',
        Component:Product
        
      },   
      {
        path:'/productDetails/:id',
        Component:ProductDetails
      }  
       ]
        
    },
  {
   path:'*',
   Component:ErrorPage
  },
  
])
export default router;