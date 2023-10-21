import StationSelector from '@/components/StationSelector';
import Default from '@/components/Stations/Default';
import Synthwave from '@/components/Stations/Synthwave';
import Serenity from '@/components/Stations/Serenity';
import Dreamscape from '@/components/Stations/Dreamscape';
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
      default:
        return <Default />;
    }
  };

  return (
    <main className='h-full w-full flex justify-center items-center'>
      <StationSelector onStationChange={setCurrentStation} />
      {currentStation && renderComponent(currentStation)}
    </main>
  );
}
