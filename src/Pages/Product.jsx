import React from 'react';
// import { useLoaderData } from 'react-router';

const Product = ({singledata}) => {
  // console.log('data',singledata)
  // const data = useLoaderData([])
  // console.log('fff',data)
  const {productName,category,image,review,tags}=singledata
    return (
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
      {
        tags.map(tag=> (<button className="badge badge-outline">{tag}</button>))
      },
    </div>
  </div>
</div>
{/* <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div> */}
        </div>
    );
};

export default Product;