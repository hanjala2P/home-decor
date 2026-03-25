import React, { useEffect, useState } from 'react';

const Wishlist = () => {
    const [wishList,setWishList]=useState([])
    useEffect(()=>{
        const savedList =JSON.parse(localStorage.getItem('wishlist'))
        if(savedList) setWishList(savedList)
    },[]
    )
    return (
        <div>
           <h2> this is Wishlist page : {wishList.length} </h2>
        </div>
    );
};

export default Wishlist;