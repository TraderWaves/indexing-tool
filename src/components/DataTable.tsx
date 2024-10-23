'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { matchSorter } from 'match-sorter';
import { useSearchParams } from 'next/navigation';
import React, { useMemo, useState } from 'react';
import { mockData } from 'tests/mockup';

import { debounce, formatAccountSize } from '@/lib/utils';
import type { FirmName } from '@/types/firmTypes';

import { Card } from './Card';
import DollarSquare from './icons/DollarSquare';
import { LogoComponent } from './LogoComponent';
import { Button } from './ui/button';

const columns: ColumnDef<typeof mockData[0]>[] = [
  { accessorKey: 'firm', header: 'Firm', size: 150, cell: ({ row }) => (
    <div className="flex flex-col items-center">
      <LogoComponent firm={row.original.firm as FirmName} />
      <span>{row.original.firm}</span>
    </div>
  ) },
  { accessorKey: 'price', header: 'Price', size: 150 },
  { accessorKey: 'steps', header: 'Steps', size: 150 },
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
  { accessorKey: 'link', header: 'Link', size: 150, cell: () => null }, // This will be empty for effect
];

export const DataTable = () => {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const searchParams = useSearchParams(); // Get URL params

  // Debounced search handler
  const handleSearch = useMemo(
    () => debounce((value: string) => setDebouncedSearch(value), 300),
    [],
  );

  // Filtered data using matchSorter, but limited to fewer columns
  const filteredData = useMemo(() => {
    const selectedAssets = searchParams.get('assets')?.split(',') || [];
    const selectedAccountSizes = searchParams.get('accountSizes')?.split(',').map(size => formatAccountSize(size)) || [];
    const selectedSteps = searchParams.get('steps');

    // Filter mock data based on search input and URL params
    const filteredBySearch = debouncedSearch
      ? matchSorter(mockData, debouncedSearch, {
        keys: ['firm', 'price', 'accountSize', 'profitSplit', 'payoutFrequency'],
      })
      : mockData;

    // Filter by URL parameters (assets, accountSize, and steps)
    return filteredBySearch.filter((row) => {
      const assetMatch = selectedAssets.length ? selectedAssets.includes(row.assetType) : true;
      const accountSizeMatch = selectedAccountSizes.length ? selectedAccountSizes.includes(row.accountSize) : true;
      const stepMatch = selectedSteps ? row.steps === selectedSteps : true;

      return assetMatch && accountSizeMatch && stepMatch;
    });
  }, [debouncedSearch, searchParams]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(), // Enables pagination
    initialState: {
      pagination: {
        pageSize: 10, // Set the number of rows per page to 10
      },
    },
  });

  return (
    <div id="data-table" className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Enter Firm or Challenge"
        className="mb-4 max-w-80 rounded-lg border border-gray-600 bg-transparent p-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value); // Use debounced search
        }}
      />

      {/* Show result count at the top right */}
      <div className="mb-4 flex items-center justify-between">
        <div></div>
        {' '}
        {/* This can be used if you want something at the left */}
        <div className="text-white">
          Showing
          {' '}
          <span className="text-blue-500">{filteredData.length}</span>
          {' '}
          results
        </div>
      </div>

      <div className="relative">
        <div className="relative">
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
                    <tr key={row.id} className="relative mb-2 h-16 rounded-lg hover:bg-gray-700" onClick={() => window.open(row.original.link, '_blank')}>
                      {row.getVisibleCells().map((cell, index) => (
                        <td
                          key={cell.id}
                          className={`relative whitespace-nowrap px-4 py-2 text-center align-middle text-sm text-white
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
          <div className="pointer-events-none absolute inset-y-0 right-1 w-28 bg-gradient-to-l from-blue-800 via-indigo-800 to-transparent opacity-60"></div>
        </div>

        {/* Pagination Controls */}
        <div className="mt-4 flex items-center justify-between">
          <Button
            className="rounded bg-gray-600 p-2 text-white"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <span className="text-white">
            Page
            {' '}
            {table.getState().pagination.pageIndex + 1}
            {' '}
            of
            {' '}
            {table.getPageCount()}
          </span>
          <Button
            className="z-20 rounded bg-gray-600 p-2 text-white"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
        {/* Gradient overlay */}
        {/* Icons overlay */}
        <div className="absolute inset-y-0 right-0 z-10 flex flex-col">
          {/* Spacer for header */}
          <div className="mr-2 mt-28 flex flex-col gap-10 lg:mt-28 xl:mt-24">
            {table.getRowModel().rows.map(row => (
              <a key={row.original.firm} href={row.original.link} target="_blank" rel="noopener noreferrer">
                <DollarSquare width={48} height={48} fill="blue" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
