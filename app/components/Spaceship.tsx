"use client";

import Image from "next/image";

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

const Spaceship = ({
  ship,
  handleClick,
}: {
  ship: Ship;
  handleClick: () => void;
}) => {
  return (
    <div
      onClick={handleClick}
      className="col-span-3 h-96 p-4  rounded-xl bg-gradient-to-r from-slate-900 to-zinc-900 cursor-pointer border-2"
    >
      <Image
        width={500}
        height={500}
        src={ship.image || "/battleship.svg"}
        alt={ship.name}
        className="w-fyll h-72 object-cover rounded-xl"
      />
      <div className="pt-4">
        <p className="text-xl"> {ship.name}</p>
      </div>
    </div>
  );
};

export default Spaceship;
