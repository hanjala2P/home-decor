import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Wishlist = () => {
    const [wishList,setWishList]=useState([])
    const [sortOrder,setSortOrder]=useState('none')
    useEffect(()=>{
        const savedList =JSON.parse(localStorage.getItem('wishlist'))
        if(savedList)setWishList(savedList)
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
       const handleRemove=(id)=>{
             const existingList =JSON.parse(localStorage.getItem('wishlist'))
            let updatedList =existingList.filter(p=> p.id !== id)
        // ui instantly update
            setWishList(prev => prev.filter (p=> p.id !== id))
               localStorage.setItem('wishlist',JSON.stringify(updatedList))
       }
    //    genarete chart data
    const totalsByCategory ={}
        wishList.forEach(product =>{
            const category = product.category
            totalsByCategory[category] = (totalsByCategory[category]|| 0) + product.price
        })

        const chartData = Object.keys(totalsByCategory).map(category => ({
            category,
            total : totalsByCategory[category],
        }))
        console.log(chartData)
    

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
   
      <button onClick={() => handleRemove(p.id)} className="btn btn-primary mt-2">Remove</button>
    </div>
  </div>
</div>
                )}
            </div>
            {/* chart */}
            <div className='space-y-3'>
                <h3 className='text-xl font-semibold'>Whislist Summery</h3>
                <div className='bg-base-100 border rounded-xl border-neutral-400 p-4 h-80'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart   
                     width={500}
                     height={300}
                     data={chartData}
                     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis />
                        <YAxis />
                        <Tooltip/>
                        <Legend></Legend>
                       
                       <Bar 
                       dataKey="total" 
                       fill="#8884d8" 
                       activeBar={<Rectangle fill='gold' stroke='purple'/>}
                       />
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;