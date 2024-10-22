'use client';

import type {
  ColumnDef,
} from '@tanstack/react-table';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

// Define the type of data your table will use
type Person = {
  name: string;
  age: number;
};

// Table Component
const MyTable = () => {
  // Sample data
  const data: Person[] = [
    { name: 'Jane Doe', age: 29 },
    { name: 'John Smith', age: 34 },
  ];

  // Define columns with types
  const columns: ColumnDef<Person>[] = [
    {
      header: 'Name',
      accessorKey: 'name', // Use accessorKey for direct property access
    },
    {
      header: 'Age',
      accessorKey: 'age',
    },
  ];

  // Use TanStack Table's useReactTable hook
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
