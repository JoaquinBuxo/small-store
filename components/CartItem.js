import Image from 'next/image';
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <li className='favorite-product-card flex py-6'>
      <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
        <Image
          width='100'
          height='100'
          src={`/img/${item.img}.jpg`}
          alt={item.img}
          className='h-full w-full object-cover object-center'
          loading='lazy'
        />
      </div>

      <div className='ml-4 flex flex-1 flex-col'>
        <div className='flex justify-between flex-col text-base font-medium text-gray-900'>
          <h3 className='uppercase'>{item.img}</h3>
          <p className='mt-1'>Quantity: {item.qtty}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
