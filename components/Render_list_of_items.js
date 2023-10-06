import React from 'react';
import ItemCard from './ItemCard';

const Render_list_of_items = ({ items, addItem, removeItem }) => {
  return (
    <>
      {items?.map((item) => (
        <ItemCard
          key={item.img}
          item={item}
          addItem={addItem}
          removeItem={removeItem}
        />
      ))}
    </>
  );
};

export default Render_list_of_items;
