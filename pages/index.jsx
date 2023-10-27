import StationSelector from '@/components/StationSelector';
import Default from '@/components/Stations/Default';
import Synthwave from '@/components/Stations/Synthwave';
import Serenity from '@/components/Stations/Serenity';
import Dreamscape from '@/components/Stations/Dreamscape';
import Ethernal from '@/components/Stations/Nocturne';
import Nocturne from '@/components/Stations/Ethernal';
import Bliss from '@/components/Stations/Bliss';
import Radiant from '@/components/Stations/Radiant';
import { useState } from 'react';

export default function Home() {
  const [currentStation, setCurrentStation] = useState('Default');

  const renderComponent = (stationName) => {
    switch (stationName) {
      case 'Default':
        return <Default />;
      case 'Synthwave':
        return <Synthwave />;
      case 'Serenity':
        return <Serenity />;
      case 'Dreamscape':
        return <Dreamscape />;
      case 'Ethernal':
        return <Ethernal />;
      case 'Nocturne':
        return <Nocturne />;
      case 'Bliss':
        return <Bliss />;
      case 'Radiant':
        return <Radiant />;
      default:
        return <Default />;
    }
  };

  return (
    <main className='h-full w-full flex justify-center items-center select-none'>
      <StationSelector onStationChange={setCurrentStation} />
      {currentStation && renderComponent(currentStation)}
    </main>
  );
}
