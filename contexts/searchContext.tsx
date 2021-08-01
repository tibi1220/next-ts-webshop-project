import { createContext } from 'react';

interface ContextProps {
  input?: any;
  setInput?: any;
}

const SearchContext = createContext<Partial<ContextProps>>({});

export default SearchContext;
