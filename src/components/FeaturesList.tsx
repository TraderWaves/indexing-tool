import React from 'react';
import { FaRegHandshake, FaRegMoneyBillAlt } from 'react-icons/fa';
import { GoChecklist, GoGitCompare } from 'react-icons/go';
import { IoPersonOutline } from 'react-icons/io5';
import { MdOutlineReviews } from 'react-icons/md';

import FeatureCard from './FeatureCard';

const features = [
  {
    icon: GoGitCompare,
    title: 'Exclusive Comparison',
    desc: 'Compare the biggest prop firms in one place - no need to scour the internet for bits and pieces of information.',
  },
  {
    icon: IoPersonOutline,
    title: 'Personalized Approach',
    desc: 'Find the prop firm that fits YOU. We help traders discover the right firm based on their unique preferences and trading style.',
  },
  {
    icon: MdOutlineReviews,
    title: 'Unbiased Reviews',
    desc: 'Trustworthy and impartial assessments to ensure you get the most accurate picture of each prop firm.',
  },
  {
    icon: FaRegMoneyBillAlt,
    title: 'Clear Pricing Comparison',
    desc: 'Transparent comparisons of pricing structures across various prop firms to help you choose the most cost-effective option.',
  },
  {
    icon: GoChecklist,
    title: 'Trading Rules',
    desc: 'Understand the unique rules and guidelines of each prop firm to find a perfect match for your trading strategy.',
  },
  {
    icon: FaRegHandshake,
    title: 'Your Trading Ally',
    desc: 'More than just a comparison site, we\'re a companion in your trading journey, aiming to help you succeed in the world of prop trading.',
  },
];

const FeaturesList = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <h1 className="text-center text-3xl font-semibold lg:text-5xl">Your Ultimate Resource for Prop Firm Information</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map(feature => (
          <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} desc={feature.desc} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesList;
