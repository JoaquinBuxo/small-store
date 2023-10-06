import React from 'react';
import Image from 'next/image';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import Button from './Button';

const ItemCard = ({ item, addItem, removeItem }) => {
  return (
    <div className='product-card group relative bg-gray-100 rounded-lg shadow-md p-4 border border-gray-200'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75'>
        <Image
          src={`/img/${item.img}.jpg`}
          alt={item.img}
          width={400}
          height={400}
          loading='lazy'
          className='h-full w-full  object-center lg:h-full lg:w-full'
        />
      </div>
      <div className='p-4 flex justify-between'>
        <div className='w-full'>
          <h5 className='mt-1 text-lg font-semibold uppercase'>{item.img}</h5>
          <p className='text-gray-600'>{item.price.toFixed(2)} €</p>
          <div className='flex justify-between items-center mt-4'>
            <Button onClick={() => removeItem(item)} Icon={MinusIcon} />
            <p>{item.qtty}</p>
            <Button onClick={() => addItem(item)} Icon={PlusIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
