import React from 'react';
import { Link} from 'react-router';
import Product from './Product';
import useProducts from '../Hooks/useProducts';
import SkeletionLoader from '../Components/SkeletionLoader';

const Products = () => {
    // const data = useLoaderData();
    const {loading,product} =useProducts();

    const featuredProduct =product.slice(0, 6)
    // console.log(data)
    return (
        <div >
            <div className='flex justify-between items-center mx-20 mt-8'>
                <h2 className='text-3xl font-bold text-center'>Featured Product</h2>
            <Link className='btn  btn-outline' to='/AllProducts'>See all Product</Link>
            </div>
            {
                loading ? <SkeletionLoader count={6}/> :
                <div className='grid mx-20  items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    featuredProduct.map(singledata => (<Product key={singledata.productId} singledata={singledata}></Product>))
                }
            </div>
            }
        </div>
    );
};

export default Products;