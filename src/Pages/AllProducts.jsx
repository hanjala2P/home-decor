import React from 'react';
import useProducts from '../Hooks/useProducts';
import Products from './Products';
import Product from './Product';

const AllProducts = () => {
    const{ product} = useProducts()
    console.log(product)
    return (
        <div className='mx-20 mt-12 mb-16'>
            <h2 className='text-2xl font-bold'>
            Products : {product.length}
                </h2>
                 <div >
            <div className='flex justify-between items-center mx-20 mt-8'>
                <h2 className='text-3xl font-bold text-center'>Featured Product</h2>
            <button className='btn  btn-outline' to=''>Search</button>
            </div>
            <div className='grid mx-auto  items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    product.map(singledata => (<Product key={singledata.productId} singledata={singledata}></Product>))
                }
            </div>
        </div>
        </div>
    );
};

export default AllProducts;