import React from 'react';

const SkeletionLoader = ({count =6}) => {
    return (
        <div className=' grid mx-20  items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-8 '>
            {Array.from({ length :count}).map(( i =>(
                  <div key={i} className="flex my-12 flex-col gap-4">
  <div className="skeleton h-68 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
            )))}
        </div>
    );
};

export default SkeletionLoader;