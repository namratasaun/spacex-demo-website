'use client';

import Image from 'next/image';
import { useState } from 'react';

export type Ship = {
  id: string;
  class: string | null;
  image: string | null;
  active: boolean;
  name: string;
  __typename: string;
  Missions: {
    flight: string;
    name: string;
  }[];
};

const Spaceship = ({ ship, handleClick }: { ship: Ship; handleClick: () => void }) => {
  const [isActive, setActive] = useState(ship.active);

  const handleCheckboxChange = () => {
    setActive(!isActive);
  };
  return (
    <div className='col-span-3 h-96 p-4  rounded-xl bg-gradient-to-r from-slate-900 to-zinc-900  border-2 relative'>
      {isActive && (
        <div className='absolute right-2 top-2 bg-white text-black rounded-full text-sm px-2 py-1'>
          Active
        </div>
      )}
      <Image
        onClick={handleClick}
        width={500}
        height={500}
        src={ship.image || '/battleship.svg'}
        alt={ship.name}
        className='w-fyll h-64 object-cover rounded-xl cursor-pointer'
      />
      <div className='pt-4'>
        <div className='flex pb-2'>
          <input
            defaultChecked={isActive}
            onChange={handleCheckboxChange}
            type='checkbox'
            className='w-4 h-4'
          ></input>
        </div>
        <p className='text-xl'> {ship.name}</p>
        <p className='text-lg'> {ship.class}</p>
      </div>
    </div>
  );
};

export default Spaceship;
