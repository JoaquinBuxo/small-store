'use client';
import Render_list_of_items from '@/components/Render_list_of_items';
import { data } from '@/data';
import { useState } from 'react';

export default function Home() {
  const [items, setItems] = useState(data);

  const addItem = (item) => {
    setItems(
      items.map((i) => (i.img === item.img ? { ...i, qtty: i.qtty + 1 } : i))
    );
  };

  const removeItem = (item) => {
    setItems(
      items.map((i) =>
        i.img === item.img && i.qtty > 0 ? { ...i, qtty: i.qtty - 1 } : i
      )
    );
  };

  const totalItems = items.reduce((total, item) => total + item.qtty, 0);
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.qtty, 0)
    .toFixed(2);

  return (
    <main className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <div className='flex justify-between items-center mb-4'>
        <p>Total items: {totalItems}</p>
        <p>Total price: {totalPrice} €</p>
      </div>
      <section className='product-list mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-'>
        <Render_list_of_items
          items={items}
          addItem={addItem}
          removeItem={removeItem}
        />
      </section>
    </main>
  );
}
