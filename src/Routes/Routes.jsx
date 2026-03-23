
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import About from '../Pages/About';
import Product from '../Pages/Product';
import Hero from '../Components/Hero';
import Layout from '../Layout/Layout';
import ErrorPage from '../Pages/ErrorPage';
import AllProducts from '../Pages/AllProducts';


const router =createBrowserRouter([
    
    {
        path:'/',
       Component:Layout,
       errorElement:ErrorPage,
       hydrateFallbackElement:<h2>Loading...</h2>,
       children:[
        {
         
          path:'/allProducts',
          Component:AllProducts
        },
        {
          index:true,
        path:'/products',
        loader:()=>fetch('/Data.json'),
        Component:Products,
        
      },
        {
        path:'/product/:id',
        loader:()=>fetch('/Data.json'),
        Component:Products,
        
      },
        {
        path:'/about',
        Component:About
        
      },
        {
        path:'/about',
        Component:Product
        
      },     
       ]
        
    },
  {
   path:'*',
   Component:ErrorPage
  },
  
])
export default router;