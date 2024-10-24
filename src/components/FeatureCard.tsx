import React from 'react';
import type { IconType } from 'react-icons/lib';

type FeatureCardProps = {
  icon: IconType;
  title: string;
  desc: string;
};

const FeatureCard = ({ icon: Icon, title, desc }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center gap-6 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-700 p-8 shadow-lg transition-shadow duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-800 to-indigo-800 shadow-md">
        <Icon style={{ width: '32px', height: '32px', color: 'white' }} />
      </div>
      <h1 className="text-xl font-bold text-white">{title}</h1>
      <p className="text-center text-gray-300">{desc}</p>
    </div>
  );
};

export default FeatureCard;
