import { SearchAction, SearchState } from './usePaginationSearch';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Dispatch, useState } from 'react';
import { useDebounce } from './useDebounce';

type SearchDispatch = {
  searchDispatch: Dispatch<SearchAction>;
};
type UseShareholderHookProps = SearchState & SearchDispatch;

export const useShareholders = ({
  page,
  pageSize,
  orderBy,
  searchTerm,
  orderDirection,
  cursor,
  searchDispatch,
}: UseShareholderHookProps) => {
  const debouncedSearchTerm = useDebounce({ value: searchTerm, delay: 500 });
  const debouncedPage = useDebounce({ value: page, delay: 500 });
  const { data, error, isFetching } = useQuery(
    [
      'shareholders',
      {
        page: debouncedPage,
        pageSize,
        orderBy,
        searchTerm: debouncedSearchTerm,
        orderDirection,
      },
    ],
    async () => {
      const res = await axios.get('/api/shareholders', {
        params: {
          page: debouncedPage,
          pageSize,
          orderBy,
          searchTerm: debouncedSearchTerm,
          orderDirection,
          cursor,
        },
      });
      searchDispatch({
        type: 'SET_NEW_SEARCH_RESPONSE',
        payload: { cursor: res.data.cursor, totalCount: res.data.totalCount },
      });
      return res.data;
    },
    {
      refetchIntervalInBackground: false,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      retry: false,
    }
  );

  return {
    data,
    isFetching,
  };
};
