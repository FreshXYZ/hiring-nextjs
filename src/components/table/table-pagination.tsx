import { Dispatch, FC, useMemo } from 'react';
import { SearchAction } from '../../hooks/usePaginationSearch';
import { getPaginationItems } from '../../utils/getPaginationItems';
import Image from 'next/image';
import { clsx } from 'clsx';

type TablePaginationControl = {
  page: number;
  totalCount: number | undefined;
  pageSize: number;
  searchDispatch: Dispatch<SearchAction>;
  dataLength: number;
};
export const TablePaginationControl: FC<TablePaginationControl> = ({
  page,
  totalCount,
  pageSize,
  searchDispatch,
  dataLength,
}) => {
  const lastPage = totalCount ? Math.ceil(totalCount / pageSize) : -1;

  const handlePageStartIndex = () => {
    if (page + 1 === 1) {
      return 1;
    }
    if (page + 1 === lastPage && totalCount) {
      return totalCount - dataLength;
    }
    return page + 1 <= 1 ? 1 : pageSize * page + 1;
  };

  const handlePageEndIndex = () => {
    if (page + 1 === lastPage) {
      return totalCount;
    }
    return page + 1 <= 1 ? pageSize : pageSize * (page + 1);
  };

  const goBackPage = () => {
    searchDispatch({ type: 'SET_PAGE', page: page - 1 });
  };

  const goForwardPage = () => {
    searchDispatch({ type: 'SET_PAGE', page: page + 1 });
  };

  const selectPage = (pageNum: number) => {
    searchDispatch({ type: 'SET_PAGE', page: pageNum - 1 });
  };

  const paginationRange = useMemo(() => {
    return getPaginationItems({
      currentPage: page,
      lastPage,
      maxLength: 7,
    });
  }, [page, lastPage]);

  return (
    <div className="flex flex-row items-center justify-between w-auto m-4 md:mx-0">
      <div>
        <p className="hidden text-sm text-typography-grey sm:block">
          Showing
          <span className="font-bold">{` ${handlePageStartIndex()} `}</span>
          to
          <span className="font-bold">{` ${handlePageEndIndex()} `}</span>
          of
          <span className="font-bold"> {totalCount} results</span>
        </p>
        <p className="text-sm text-typography-grey sm:hidden">
          {` ${handlePageStartIndex()}-${handlePageEndIndex()} of `}
          <span> {totalCount} results</span>
        </p>
      </div>

      <div>
        <button
          className="font-semibold border w-9 h-9"
          disabled={page === 0}
          onClick={goBackPage}
        >
          <Image
            className=" text-typography-grey"
            src="/icons/arrow-left.svg"
            alt="Mail Icon"
            width={10}
            height={10}
          />
        </button>
        {paginationRange.map((pageNum, idx) => (
          <button
            key={idx}
            className={clsx(
              'hidden border w-9 h-9 font-semibold sm:inline-block',
              {
                ['text-primary-dark-green bg-primary-green-dark-10 border border-primary-dark-green']:
                  pageNum === page + 1,
              }
            )}
            disabled={isNaN(pageNum)}
            onClick={() => selectPage(pageNum)}
          >
            {!isNaN(pageNum) ? pageNum : '...'}
          </button>
        ))}
        <button
          className="font-semibold border w-9 h-9"
          disabled={page + 1 === lastPage}
          onClick={goForwardPage}
        >
          <Image
            className=" text-typography-grey"
            src="/icons/arrow-right.svg"
            alt="Mail Icon"
            width={10}
            height={10}
          />
        </button>
      </div>
    </div>
  );
};
