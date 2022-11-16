import { FC, useMemo } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHeadCell,
  TableHead,
  TableRow,
  TablePaginationControl,
} from '../table';
import { Shareholder } from '../../types/Shareholder';
import { formatNumber } from '../../utils/formatNumber';
import { NameEmailCell } from './name-email-cell';
import { useShareholders } from '../../hooks/useShareholders';
import { usePaginationSearch } from '../../hooks/usePaginationSearch';
import { SearchBar } from '../search/search';
import { Spinner } from '../spinner/spinner';
import { MobileRow } from './mobile-row';

export const ShareholderTable: FC = () => {
  const { state, searchDispatch } = usePaginationSearch();
  const {
    page,
    pageSize,
    orderBy,
    searchTerm,
    orderDirection,
    cursor,
    totalCount,
  } = state;

  const { data, isFetching } = useShareholders({
    page,
    pageSize,
    orderBy,
    searchTerm,
    orderDirection,
    cursor,
    searchDispatch,
    totalCount,
  });

  const defaultData = useMemo(() => [], []);

  const memoizedColumns = useMemo<ColumnDef<Shareholder, any>[]>(
    () => [
      {
        accessorKey: 'firstName',
        meta: {
          className:
            'text-left px-6 font-normal text-typography-main font-normal text-sm',
          align: 'left',
        },
        header: () => <span className="text-xs font-semibold">Name</span>,
        cell: ({ row }) => {
          const { email, firstName, lastName } = row?.original;
          const nameInitials = `${firstName?.charAt(0)?.toUpperCase() ?? ''}${
            lastName?.charAt(0)?.toUpperCase() ?? ''
          }`;
          const fullName = `${firstName ?? ''} ${lastName ?? ''}`;
          return (
            <NameEmailCell
              email={email}
              fullName={fullName}
              nameInitials={nameInitials}
            />
          );
        },
      },
      {
        accessorKey: 'postalCode',
        meta: {
          className: 'text-left px-6 text-typography-main font-normal text-sm',
          align: 'left',
        },
        header: () => <p className="text-xs font-semibold">Postal Code</p>,
        cell: (info) => <p>{info?.getValue() ?? 'N/A'}</p>,
      },
      {
        accessorKey: 'shareCount',
        meta: {
          className: 'text-right px-6 text-typography-main font-normal text-sm',
          align: 'right',
        },
        header: () => <p className="text-xs font-semibold">Current Holding</p>,
        cell: (info) => <p>{formatNumber(info.getValue())}</p>,
      },
      {
        accessorKey: 'heldSince',
        meta: {
          className: 'text-right px-6 text-typography-main font-normal text-sm',
          align: 'right',
        },
        header: () => <p className="text-xs font-semibold">Held Since</p>,
        cell: (info) => (
          <p>
            {new Date(info.getValue()).toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })}
          </p>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: data?.shareholders ?? defaultData,
    columns: memoizedColumns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  });

  return (
    <>
      <div className="flex flex-row items-end justify-center w-full">
        <SearchBar
          onChange={(e) =>
            searchDispatch({
              type: 'SET_SEARCH_TERM',
              searchTerm: e.target.value,
            })
          }
        />
        {isFetching ? (
          <div className="fixed top-1/2 md:static ">
            <Spinner />
          </div>
        ) : null}
      </div>
      {table?.getRowModel()?.rows?.map((row) => {
        return (
          <div className="flex justify-center w-full " key={row?.id}>
            <MobileRow row={row} />
          </div>
        );
      })}
      <div className="hidden w-full my-6 border rounded-lg border-secondary-grey-light md:block">
        <Table>
          <TableHead>
            {table?.getHeaderGroups()?.map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeadCell
                    key={header.id}
                    className={header?.column?.columnDef?.meta?.className}
                    sortingColumn={header?.id === state.orderBy}
                    alignColumn={header?.column?.columnDef?.meta?.align}
                    orderDirection={state.orderDirection}
                    onClick={() =>
                      searchDispatch({
                        type: 'SET_ORDER_BY',
                        orderBy: header.id,
                      })
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHeadCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table?.getRowModel()?.rows?.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  className="border-y border-secondary-grey-light last-of-type:border-b-0"
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell
                        key={cell.id}
                        className={cell?.column?.columnDef?.meta?.className}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePaginationControl
        dataLength={data?.shareholders?.length ?? 0}
        page={page}
        totalCount={totalCount}
        pageSize={pageSize}
        searchDispatch={searchDispatch}
      />
    </>
  );
};
