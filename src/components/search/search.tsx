import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useSearchShortcut } from '../../hooks/useSearchShortcut';

type SearchBarProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const SearchBar: FC<SearchBarProps> = ({ onChange }) => {
  const { searchFocusRef } = useSearchShortcut();

  return (
    <div className="w-full max-w-[350px]">
      <label htmlFor="search" className="block text-sm font-bold text-gray-700">
        Quick search
      </label>
      <div className="relative flex items-center mt-1">
        <input
          type="text"
          name="search"
          autoComplete="off"
          id="search"
          ref={searchFocusRef}
          onChange={onChange}
          className="block w-full pr-12 border rounded-md border-secondary-grey-light focus:border-gray-200 focus:ring-gray-600 sm:text-sm"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center px-2 font-sans text-sm font-medium text-gray-400 border border-gray-200 rounded">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  );
};
