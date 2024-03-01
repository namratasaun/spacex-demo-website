import Image from 'next/image';

const SpaceShipInfo = ({ ship }) => {
  return (
    <div>
      {/* <Image src={ship.image} alt={ship.name} width={100} height={200} /> */}
      <p>name: {ship.name}</p>
      <p>Class: {ship.class}</p>
      <p>Active: {ship.active}</p>
      <p>Class: {ship.class}</p>
    </div>
  );
};

export default SpaceShipInfo;
