import React from 'react';

const MenuCategory = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-around  mt-10'>
      <button className={'rounded-3xl px-6 py-2 bg-secondary text-white mb-4 md:mb-0'}>All</button>
      <button className={'rounded-2xl p-4 w-full'}>Burger</button>
      <button className={'rounded-2xl p-4 w-full'}>Pizza</button>
      <button className={'rounded-2xl p-4 w-full'}>Pasta</button>
      <button className={'rounded-2xl p-4 w-full'}>Fries</button>
    </div>
  );
};

export default MenuCategory;
