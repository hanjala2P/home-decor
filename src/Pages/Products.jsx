import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Product from './Product';
import useProducts from '../Hooks/useProducts';

const Products = () => {
    const data = useLoaderData([]);
    const {products,loading,err} =useProducts();
    console.log(products)
    const featuredProduct =data.slice(0, 6)
    // console.log(data)
    return (
        <div >
            <div className='flex justify-between items-center mx-20 mt-8'>
                <h2 className='text-3xl font-bold text-center'>Featured Product</h2>
            <Link className='btn  btn-outline' to='/AllProducts'>See all Product</Link>
            </div>
            <div className='grid mx-auto  items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    featuredProduct.map(singledata => (<Product key={singledata.productId} singledata={singledata}></Product>))
                }
            </div>
        </div>
    );
};

export default Products;