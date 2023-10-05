import React from 'react';
import { data } from '@/data';
import ItemCard from './ItemCard';

const Render_list_of_items = () => {
  return (
    <div>
      {data?.map((item) => (
        <ItemCard key={item.img} item={item} />
      ))}
    </div>
  );
};

export default Render_list_of_items;
