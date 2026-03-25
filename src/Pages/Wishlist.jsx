import React, { useEffect, useState } from 'react';
//  wishlist
const Wishlist = () => {
    const [wishList,setWishList]=useState([])
    const [sortOrder,setSortOrder]=useState('none')
    useEffect(()=>{
        const savedList =JSON.parse(localStorage.getItem('wishlist'))
        if(savedList) setWishList(savedList)
    },[]
    )

    // sort data 

      const sortedItem = (() => {
        if(sortOrder === 'price-asc'){
            return [...wishList].sort((a,b)=> a.price - b.price)
        }
        else if(sortOrder === 'price-des'){
            return [...wishList].sort((a,b)=> b.price - a.price)
        }
        else{

            return  wishList
        }
    })()
    return (
        <div>
            <div className='flex flex-col border-b-2 pb-4 border-neutral-200 gap-4 my-8 justify-between items-center mx-20  md:flex-row'>
                <h2 className='text-3xl font-bold '>Featured Products <span className='text-sm text-neutral-500 font-normal'>( {wishList.length}) product found</span></h2>
        
       <label className='form-control'>
         <select className='select select-bordered' value={sortOrder} onChange={e=>setSortOrder(e.target.value)}>
            <option value="none">Sort by price</option>
            <option value="price-asc">Low to high</option>
            <option value="price-des">High to low</option>
        </select>
       </label>
            </div>
            <div className='space-y-3'>
                {sortedItem.map(p=>
                    <div className="">
  <div className="flex items-center justify-around gap-4 border p-8 ">
   <div className='flex flex-col gap-3'>
     <img
      src={p.image}
      className="h-44 w-68 rounded-lg shadow-2xl"
    />
    <h2 className='text-2xl font-bold'>{p.productName}</h2>
   </div>
    <div className='flex flex-col items-start gap-2'>
    <h1 className="text-2xl font-medium">{p.price}</h1>
   
      <button className="btn btn-primary mt-2">Get Started</button>
    </div>
  </div>
</div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;