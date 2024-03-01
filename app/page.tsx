'use client';

import apiCalls from '@/graphql';
import { ShipsQuery } from '@/util/types/graphql';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import Spaceship from './components/Spaceship';

export default function Home() {
  const { data } = useQuery<ShipsQuery>(apiCalls.queries.ships, {
    fetchPolicy: 'cache-and-network',
  });

  return (
    <main className='flex justify-center min-h-screen p-14'>
      <div className='w-full max-w-7xl justify-between flex flex-col gap-2'>
        {data?.ships?.map((ship, index) => {
          return <Spaceship ship={ship} />;
        })}
      </div>
    </main>
  );
}
