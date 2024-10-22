'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { matchSorter } from 'match-sorter';
import React, { useMemo, useState } from 'react';
import { mockData } from 'tests/mockup';

import { debounce } from '@/lib/utils';

import { Card } from './Card';
import AlphaCapitalGroup from './icons/company/AlphaCapitalGroup';
import ApexTraderFunding from './icons/company/ApexTraderFunding';
import AquaFunded from './icons/company/AquaFunded';
import AudacityCapital from './icons/company/AudacityCapital';
import BlueberryFunded from './icons/company/BlueberryFunded';
import Breakout from './icons/company/Breakout';
import CFTLogo from './icons/company/CFT';
import CityTradersImperium from './icons/company/CityTradersImperium';
import E8Markets from './icons/company/E8Markets';
import Earn2Trade from './icons/company/Earn2Trade';
import FinotiveFunding from './icons/company/FinotiveFunding';
import FinTokei from './icons/company/FinTokei';
import ForTraders from './icons/company/ForTraders';
import FTM from './icons/company/FTM';
import FundedNext from './icons/company/FundedNext';
import FundedTradingPlus from './icons/company/FundedTradingPlus';
import FundingPips from './icons/company/FundingPips';
import FundingTraders from './icons/company/FundingTraders';
import Fxify from './icons/company/Fxify';
import GoatFundedTrader from './icons/company/GoatFundedTrader';
import InstantFunding from './icons/company/InstantFunding';
import LarkFunding from './icons/company/LarkFunding';
import MentFunding from './icons/company/MentFunding';
import MyFundedFX from './icons/company/MyFundedFX';
import QuantTekel from './icons/company/QuantTekel';
import The5Percenters from './icons/company/The5Percenters';
import TheTradingPit from './icons/company/TheTradingPit';
import Topstep from './icons/company/Topstep';
import TradeDay from './icons/company/TradeDay';
import TradeThePool from './icons/company/TradeThePool';
import DollarSquare from './icons/DollarSquare';

const columns: ColumnDef<typeof mockData[0]>[] = [
  { accessorKey: 'firm', header: 'Firm', size: 150 },
  { accessorKey: 'price', header: 'Price', size: 150 },
  { accessorKey: 'accountSize', header: 'Account Size', size: 150 },
  { accessorKey: 'profitSplit', header: 'Profit Split', size: 150 },
  { accessorKey: 'profitTarget', header: 'Profit Target', size: 150 },
  { accessorKey: 'maxDailyLoss', header: 'Max Daily Loss', size: 150 },
  { accessorKey: 'maxTotalDrawdown', header: 'Max Total Drawdown', size: 150 },
  { accessorKey: 'dailyDrawdownResetType', header: 'Daily Drawdown Reset Type', size: 150 },
  { accessorKey: 'commissionPerRoundLot', header: 'Commission Per Round Lot (Forex)', size: 150 },
  { accessorKey: 'profitToTargetDrawdownRatio', header: 'Profit to Target Drawdown Ratio', size: 150 },
  { accessorKey: 'payoutFrequency', header: 'Payout Frequency', size: 150 },
  { accessorKey: 'trustPilotRating', header: 'TrustPilot Rating', size: 150 },
  { accessorKey: 'link', header: 'Link', size: 150 }, // This will be empty for effect
];

export const DataTable = () => {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounced search handler
  const handleSearch = useMemo(
    () => debounce((value: string) => setDebouncedSearch(value), 300),
    [],
  );

  // Filtered data using matchSorter, but limited to fewer columns
  const filteredData = useMemo(() => {
    return debouncedSearch
      ? matchSorter(mockData, debouncedSearch, {
        keys: ['firm', 'price', 'accountSize', 'profitSplit', 'payoutFrequency'],
      })
      : mockData;
  }, [debouncedSearch]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Search..."
        className="mb-4 max-w-52 rounded-md border border-gray-600 bg-transparent p-2 text-white focus:outline-none"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value); // Use debounced search
        }}
      />
      <div className="relative">
        <div className="flex flex-wrap gap-2">

          <FTM height={50} width={50} fill="white" />
          <GoatFundedTrader height={50} width={50} fill="white" />
          <MyFundedFX height={50} width={50} fill="white" />
          <AlphaCapitalGroup height={50} width={50} fill="white" />
          <BlueberryFunded height={50} width={50} fill="white" />
          <TheTradingPit height={50} width={50} fill="white" />
          <TradeDay height={50} width={50} fill="white" />
          <FundedNext height={50} width={50} fill="white" />
          <AquaFunded height={50} width={50} fill="white" />
          <FundingPips height={50} width={50} fill="white" />
          <Topstep height={50} width={50} fill="white" />
          <MentFunding height={50} width={50} fill="white" />
          <QuantTekel height={50} width={50} fill="white" />
          <FundingTraders height={50} width={50} fill="white" />
          <TradeThePool height={50} width={50} fill="white" />
          <FinotiveFunding height={50} width={50} fill="white" />
          <FinTokei height={50} width={50} fill="purple" />
          <E8Markets height={50} width={50} />
          <ApexTraderFunding height={50} width={50} />
          <Breakout height={50} width={50} />
          <AudacityCapital height={50} width={50} />
          <LarkFunding height={50} width={50} />
          <ForTraders height={50} width={50} />
          <FundedTradingPlus height={50} width={50} />
          <Earn2Trade height={50} width={50} />
          <InstantFunding height={50} width={50} />
          <CityTradersImperium height={50} width={50} />
          <CFTLogo height={50} width={50} />
          <The5Percenters height={50} width={50} />
          <Fxify height={50} width={50} />

        </div>
        <Card>
          <div className="relative max-w-full overflow-x-auto">
            <table className="min-w-full table-fixed border-gray-600 bg-transparent">
              <thead className="bg-transparent">
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id} className="h-16 border-b border-gray-600">
                    {headerGroup.headers.map((header, index) => (
                      <th
                        key={header.id}
                        className={`bg-transparent px-4 py-2 text-left text-xs font-medium text-white 
                          ${index === 0 ? 'border-l-0 border-r border-gray-300' : ''} 
                          ${
                      index === headerGroup.headers.length - 1
                        ? 'border-l border-r-0 border-gray-600'
                        : 'border-x border-gray-600'
                      }
                      `}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="relative bg-transparent">
                {table.getRowModel().rows.map(row => (
                  <tr key={row.id} className="relative mb-2 h-16 rounded-lg hover:bg-gray-700">
                    {row.getVisibleCells().map((cell, index) => (
                      <td
                        key={cell.id}
                        className={`relative whitespace-nowrap px-4 py-2 text-sm text-white
                          ${index === 0 ? 'border-b border-r border-gray-600' : ''}  
                          ${
                      index === row.getVisibleCells().length - 1
                        ? 'border-b border-l border-gray-600'
                        : ''
                      } 
                          ${
                      index !== 0 && index !== row.getVisibleCells().length - 1
                        ? 'border border-gray-600'
                        : ''
                      }`}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-y-0 right-1 w-20 bg-gradient-to-l from-blue-800 via-indigo-800 to-transparent opacity-60"></div>
        {/* Icons overlay */}
        <div className="absolute inset-y-0 right-0 z-10 flex flex-col">
          {/* Spacer for header */}
          <div className="mt-24 flex flex-col gap-4 lg:mt-24 xl:mt-20">
            {table.getRowModel().rows.map(row => (
              <div key={row.id} className="mr-3 flex cursor-pointer items-center justify-center">
                <DollarSquare width={48} height={48} fill="blue" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
