import Image from 'next/image';
import React from 'react';

const ItemCard = ({ item }) => {
  return (
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
  );
};

export default ItemCard;
