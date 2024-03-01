import React from 'react';
import { Missions } from './CardGrid';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  missions: Missions | null;
};

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, missions }) => {
  if (!isOpen || !missions) {
    return null;
  }

  return (
    <div className='bg-white fixed h-screen w-screen top-0 left-0 bg-opacity-40 flex justify-center items-center z-10'>
      <div className='w-[800px] bg-black h-[80%] rounded-xl p-16'>
        <div className='flex justify-end'>
          <button onClick={closeModal}>close</button>
        </div>
        <p className='text-4xl font-bold'>Missions</p>
        {missions.length ? (
          missions.map((mission, index) => (
            <div key={mission.flight} className='text-xl w-96 flex py-4'>
              <p>{index + 1}.</p>
              <div className='pl-4'>
                <p>Flight - {mission.flight}</p>
                <p>Name - {mission.name}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='my-8'>No missions</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
