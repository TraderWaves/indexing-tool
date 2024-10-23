'use client';

import { useRouter } from 'next/navigation'; // Use for updating query params
import React, { useState } from 'react';

import { Card } from './Card';
import { FilterButton } from './FilterButton';
import { Button } from './ui/button';

// Define the formItems object
const formItems = {
  assets: ['Forex', 'Futures', 'Stocks', 'Crypto', 'Indices', 'Commodities'],
  accountSizes: ['5K', '10K', '25K', '50K', '100K', '200K', '300K', '400K', '500K'],
  steps: ['Instant', '1 Step', '2 Steps', '3 Steps'],
};

export const FormFilter = () => {
  const router = useRouter(); // Next.js router for updating URL

  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);
  const [selectedAccountSizes, setSelectedAccountSizes] = useState<string[]>([]);
  const [selectedSteps, setSelectedSteps] = useState<string | null>(null);

  const handleAssetClick = (assetType: string) => {
    setSelectedAssets(prevSelected =>
      prevSelected.includes(assetType)
        ? prevSelected.filter(item => item !== assetType)
        : [...prevSelected, assetType],
    );
  };

  const handleAccountSizeClick = (size: string) => {
    setSelectedAccountSizes(prevSelected =>
      prevSelected.includes(size)
        ? prevSelected.filter(item => item !== size)
        : [...prevSelected, size],
    );
  };

  const handleStepClick = (step: string) => {
    setSelectedSteps(step === selectedSteps ? null : step);
  };

  // Sync form selections to URL query parameters when form is submitted
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (selectedAssets.length > 0) {
      params.set('assets', selectedAssets.join(','));
    }
    if (selectedAccountSizes.length > 0) {
      params.set('accountSizes', selectedAccountSizes.join(','));
    }
    if (selectedSteps) {
      params.set('steps', selectedSteps);
    }

    // Push updated query params to the URL
    router.push(`?${params.toString()}`);

    // Scroll down to the table after form submission
    setTimeout(() => {
      const tableElement = document.getElementById('data-table');
      if (tableElement) {
        tableElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay to allow DOM rendering
  };

  return (
    <div className="mx-auto max-w-screen-md">
      <Card>
        <form className="flex flex-col gap-6 p-4" onSubmit={handleSubmit}>
          <h1 className="text-center text-2xl font-bold">What plan do you want to compare?</h1>

          <h2>Select Asset Type</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {formItems.assets.map(asset => (
              <FilterButton
                key={asset}
                label={asset}
                isSelected={selectedAssets.includes(asset)}
                onClick={() => handleAssetClick(asset)}
              />
            ))}
          </div>

          <h2>Select Account Size</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {formItems.accountSizes.map(size => (
              <FilterButton
                key={size}
                label={size}
                isSelected={selectedAccountSizes.includes(size)}
                onClick={() => handleAccountSizeClick(size)}
              />
            ))}
          </div>

          <h2>Number of Steps</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {formItems.steps.map(step => (
              <FilterButton
                key={step}
                label={step}
                isSelected={selectedSteps === step}
                onClick={() => handleStepClick(step)}
              />
            ))}
          </div>

          <Button
            type="submit"
            className={`
              h-[60px] w-full rounded-full bg-gradient-to-r from-blue-700 to-indigo-500
              text-lg font-semibold text-white transition-all duration-300 ease-in-out
              hover:bg-blue-600 hover:text-white/80
            `}
          >
            Search Now
          </Button>
        </form>
      </Card>
    </div>
  );
};
