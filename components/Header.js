import React from 'react';
import Button from './Button';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Header = ({ items, openCart, setOpenCart }) => {
  const totalItems = items.reduce((total, item) => total + item.qtty, 0);
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.qtty, 0)
    .toFixed(2);

  return (
    <div className='flex justify-between items-center mb-4'>
      <p className='text-lg font-semibold'>Total items: {totalItems}</p>
      <p className='text-lg font-semibold'>Total price: {totalPrice} €</p>
      <Button onClick={() => setOpenCart(!openCart)} Icon={ShoppingCartIcon} />
    </div>
  );
};

export default Header;
