import { createContext, useContext, useState } from 'react';

export const modeContext = createContext();

export function ContextProvider({children}) {
  const [mode, setMode] = useState('light');

  return (
    <modeContext.Provider value={{ mode  , setMode}}>
      {children}
    </modeContext.Provider>
  );
}