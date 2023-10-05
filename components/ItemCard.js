import React from 'react';
import Image from 'next/image';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import Button from './Button';

const ItemCard = ({ item, addItem, removeItem }) => {
  return (
    <div key={item.img}>
      <Image
        src={`/img/${item.img}.jpg`}
        alt={item.img}
        width={400}
        height={400}
        loading='lazy'
      />
      <div className='p-4'>
        <h5 className='text-lg font-semibold uppercase'>{item.img}</h5>
        <p className='text-gray-600'>{item.price.toFixed(2)} €</p>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <Button onClick={() => removeItem(item)} Icon={MinusIcon} />
        <p>{item.qtty}</p>
        <Button onClick={() => addItem(item)} Icon={PlusIcon} />
      </div>
    </div>
  );
};

export default ItemCard;
