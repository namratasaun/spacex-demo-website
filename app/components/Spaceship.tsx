'use client';

import { useState } from 'react';
import SpaceShipInfo from './SpaceshipInfo';

const Spaceship = ({ ship }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  return (
    <>
      <div onClick={openModal} className='flex px-4'>
        {ship?.name}
      </div>
      {modal && <SpaceShipInfo ship={ship} />}
    </>
  );
};

export default Spaceship;
