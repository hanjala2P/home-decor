import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import Product from './Product';

const AllProducts = () => {
    const{ product} = useProducts()
    const [search,setSearch]=useState('')

    const term = search?.trim()?.toLocaleLowerCase()

    const searchProducts = term? 
    product.filter(Product=>
    Product.productName.toLocaleLowerCase().includes(term))
    :product
    // console.log(searchProducts)
    return (
        <div className='mx-20 mt-12 mb-16 '>
            <h2 className='text-2xl font-bold'>
            Products : {product.length}
                </h2>
                 <div >
            <div className='flex flex-col border-b-2 pb-4 border-neutral-200 gap-4 my-8 justify-between items-center mx-20  md:flex-row'>
                <h2 className='text-3xl font-bold '>Featured Products <span className='text-sm text-neutral-500 font-normal'>( {product.length}) product found</span></h2>
            <label>
                <input
                value={search}
                 onChange={e=>{setSearch(e.target.value)}}
                  placeholder='Search' className=" input"></input>
            </label>
            </div>
            <div className='grid mx-auto  items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    searchProducts.map(singledata => (<Product key={singledata.productId} singledata={singledata}></Product>))
                }
            </div>
        </div>
        </div>
    );
};

export default AllProducts;