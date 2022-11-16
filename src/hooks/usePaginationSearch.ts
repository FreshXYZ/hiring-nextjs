import { useMemo } from 'react';
import { useImmerReducer } from 'use-immer';
import { getPaginationItems } from '../utils/getPaginationItems';

export type SearchAction =
  | { type: 'SET_PAGE'; page: number }
  | { type: 'SET_PAGE_SIZE'; pageSize: number }
  | { type: 'SET_ORDER_BY'; orderBy: string }
  | { type: 'SET_SEARCH_TERM'; searchTerm: string }
  | { type: 'SET_ORDER_DIRECTION'; orderDirection: 'asc' | 'desc' }
  | { type: 'SET_CURSOR'; cursor: string }
  | {
      type: 'SET_NEW_SEARCH_RESPONSE';
      payload: { cursor: string; totalCount: number };
    };

export type SearchState = {
  page: number;
  pageSize: number;
  orderBy: string | undefined;
  searchTerm: string | undefined;
  orderDirection: string | undefined;
  cursor: string | undefined;
  totalCount: number | undefined;
};

export const initialState = {
  page: 0,
  pageSize: 10,
  orderBy: 'firstName',
  searchTerm: undefined,
  orderDirection: 'asc',
  cursor: undefined,
  totalCount: undefined,
};

export const searchReducer = (state: SearchState, action: SearchAction) => {
  switch (action.type) {
    case 'SET_PAGE':
      state.page = action?.page ?? undefined;
      return;
    case 'SET_PAGE_SIZE':
      state.pageSize = action?.pageSize ?? 10;
      return;
    case 'SET_ORDER_BY':
      if (state.orderBy === action.orderBy) {
        state.orderBy = action?.orderBy ?? undefined;
        state.orderDirection = state.orderDirection === 'asc' ? 'desc' : 'asc';
      } else {
        state.orderBy = action?.orderBy ?? undefined;
        state.orderDirection = 'desc';
      }
      state.page = 0;
      state.cursor = undefined;
      return;
    case 'SET_SEARCH_TERM':
      state.searchTerm = action?.searchTerm ?? undefined;
      state.page = 0;
      state.cursor = undefined;
      return;
    case 'SET_CURSOR':
      state.cursor = action?.cursor ?? undefined;
      return;
    case 'SET_NEW_SEARCH_RESPONSE':
      state.cursor = action?.payload?.cursor ?? undefined;
      state.totalCount = action?.payload?.totalCount ?? undefined;
      return;
    case 'SET_ORDER_DIRECTION':
      state.orderDirection = action?.orderDirection ?? undefined;
      return;
    default:
      return initialState;
  }
};

export const usePaginationSearch = () => {
  const [state, searchDispatch] = useImmerReducer(searchReducer, initialState);
  return {
    state,
    searchDispatch,
  };
};
