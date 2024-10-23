import React from 'react';
import Marquee from 'react-fast-marquee';

import type { FirmName } from '@/types/firmTypes';

import firmLogos from './icons/company/firmLogos';

const featuredCompanies: FirmName[] = [
  'Alpha Capital Group',
  'Apex Trader Funding',
  'Aqua Funded',
  'Audacity Capital',
  'Blueberry Funded',
  'Breakout',
  'CFT',
  'City Traders Imperium',
  'E8Markets',
  'Earn2Trade',
];

const LogoCarousel = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-2xl font-semibold">Affliate Companies</h1>
      <div className="mx-auto w-4/5 overflow-hidden">
        <Marquee speed={50} pauseOnHover autoFill gradient gradientColor="#1f1f62" gradientWidth={30}>
          <div className="flex gap-4">
            {featuredCompanies.map(company => (
              <div key={company} style={{ margin: '0 20px' }}>
                {firmLogos[company]}
                {' '}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default LogoCarousel;
