import React from 'react';

const Header = ({ items }) => {
  const totalItems = items.reduce((total, item) => total + item.qtty, 0);
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.qtty, 0)
    .toFixed(2);

  return (
    <div className='flex justify-between items-center mb-4'>
      <p>Total items: {totalItems}</p>
      <p>Total price: {totalPrice} €</p>
    </div>
  );
};

export default Header;
