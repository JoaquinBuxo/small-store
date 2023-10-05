import React from 'react';
import ItemCard from './ItemCard';

const Render_list_of_items = ({ items, addItem, removeItem }) => {
  return (
    <div>
      {items?.map((item) => (
        <ItemCard
          key={item.img}
          item={item}
          addItem={addItem}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};

export default Render_list_of_items;
