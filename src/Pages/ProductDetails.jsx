import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';


const ProductDetails = () => {
    const {id} =useParams();
    const {product,loading}=useProducts()
    const produc =product.find(p=>p.id=== Number(id))
    // console.log(produc)
    
    if(loading)return <p>Loading...</p>
      const {productName,category,image,review,}=produc || {}

      const handleWishlist = ()=>{

        const existingList =JSON.parse(localStorage.getItem('wishlist'))
            let updatedList =[]

            if(existingList){
              const isDuplicate = existingList.some(p=> p.id === produc.id)
              if(isDuplicate)return alert('data already in wishlist ')
              updatedList =[...existingList,produc]
            }

            else{
              updatedList.push(produc)
            }

               localStorage.setItem('wishlist',JSON.stringify(updatedList))
      }


    return (
        <div>
            <h3>Product Deatails</h3>
                    <div>
           <div className="card bg-base-100 px-4 mx-20 mt-6 shadow-sm">
  <figure>
    <img 
    className='h-68 w-full'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {productName}
      <div className="badge badge-secondary">{category}</div>
    </h2>
    <p>{review}</p>
    <div className="card-actions justify-end">
     <button onClick={handleWishlist} className='btn btn-outline'>Add to Wishlist</button>
    </div>

  </div>
</div>
        </div>
        </div>
    );
};

export default ProductDetails;