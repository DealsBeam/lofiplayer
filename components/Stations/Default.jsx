import React from 'react';
import Background from '@/components/Bg';
import Player from '@/components/Player';

export default function Default() {
  const currentHour = new Date().getHours();
  const currentMonth = new Date().getMonth();

  const getBgClass = () => {
    // Check for winter months (December, January, February) and nighttime (between 6 PM and 6 AM)
    if ((currentMonth >= 11 || currentMonth <= 1) && (currentHour >= 18 || currentHour < 6)) {
      return 'bg-winter-night';
    } else if (currentMonth >= 11 || currentMonth <= 1) {
      return 'bg-winter-day';
    } else if (currentHour >= 6 && currentHour < 18) {
      return 'bg-lofi-day';
    } else {
      return 'bg-lofi-night';
    }
  };

  const getBannerClass = () => {
    if (currentHour >= 6 && currentHour < 18) {
      // Daytime
      return 'default';
    } else {
      // Nighttime
      return 'default-night';
    }
  };

  return (
    <>
      <Background bgClass={getBgClass()} />
      <div className='absolute'>
        <Player bannerPath={getBannerClass()} source={'https://usa9.fastcast4u.com/proxy/jamz?mp=/1'}/>
      </div>
    </>
  );
}
