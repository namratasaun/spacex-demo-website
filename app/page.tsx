'use client';

import apiCalls from '@/graphql';
import { ShipsQuery } from '@/util/types/graphql';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import CardGrid from './components/CardGrid';

export default function Home() {
  const { data } = useQuery<ShipsQuery>(apiCalls.queries.ships, {
    fetchPolicy: 'cache-and-network',
  });

  if (!data) return null;

  return (
    <main className='min-h-screen p-14'>
      <div className='flex gap-8 pb-6'>
        <Image width={50} height={50} src='/spaceShip.png' alt='space ship' />
        <p className='text-4xl'>Ships</p>
      </div>
      <CardGrid ships={data.ships} />
    </main>
  );
}
