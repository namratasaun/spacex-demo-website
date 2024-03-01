import { useState } from "react";
import Spaceship, { Ship } from "./Spaceship";

type Missions = {
  flight: string;
  name: string;
}[];

function CardGrid({ ships }: { ships: Ship[] }) {
  const [modalData, setModalData] = useState<Missions | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleCardClick = (data: Missions) => {
    setModalOpen(true);
    setModalData(data);
  };
  const handleModalClose = () => {
    setModalOpen(false);
    setModalData(null);
  };
  return (
    <div>
      {isModalOpen && modalData && (
        <div className="bg-white fixed h-screen w-screen top-0 left-0 bg-opacity-40 flex justify-center items-center">
          <div className="w-[800px] bg-black h-[80%] rounded-xl p-16">
            <div className="flex justify-end">
              <button onClick={handleModalClose}>close</button>
            </div>
            <p className="text-4xl font-bold">Missions</p>
            {modalData.map((mission, index) => (
              <div key={mission.flight} className="text-xl w-96 flex py-4">
                <p>{index + 1}.</p>
                <div className="pl-4">
                  <p>Flight - {mission.flight}</p>
                  <p>Name - {mission.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-12 gap-4">
        {ships.map((ship) => (
          <Spaceship
            key={ship.name}
            ship={ship}
            handleClick={() => handleCardClick(ship.Missions)}
          />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
