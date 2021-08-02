import { createContext } from 'react';
import type {
  ValueType,
  HandlerFunction,
  SetterFunction,
} from '../hooks/useInput';

interface Context {
  searchQuery?: ValueType;
  handleSearchQueryChange?: HandlerFunction;
  setSearchQuery?: SetterFunction;
}

const SearchContext = createContext<Context>({});

export default SearchContext;
