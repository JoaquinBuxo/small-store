import React from 'react';
import { data } from '@/data';
import Image from 'next/image';

const Render_list_of_items = () => {
  return (
    <div>
      {data?.map((item) => (
        <div key={item.img}>
          <Image
            src={`/img/${item.img}.jpg`}
            alt={item.img}
            width={400}
            height={400}
          />
          <div className='p-4'>
            <h5 className='text-lg font-semibold'>{item.name}</h5>
            <p className='text-gray-600'>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Render_list_of_items;
