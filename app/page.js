'use client';
import CartList from '@/components/CartList';
import Header from '@/components/Header';
import Render_list_of_items from '@/components/Render_list_of_items';
import { data } from '@/data';
import { useState } from 'react';

export default function Home() {
  const [items, setItems] = useState(data);
  const [openCart, setOpenCart] = useState(false);

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

  return (
    <main className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <Header items={items} openCart={openCart} setOpenCart={setOpenCart} />
      <section className='product-list mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-'>
        <Render_list_of_items
          items={items}
          addItem={addItem}
          removeItem={removeItem}
        />
      </section>
      <CartList items={items} openCart={openCart} setOpenCart={setOpenCart} />
    </main>
  );
}
