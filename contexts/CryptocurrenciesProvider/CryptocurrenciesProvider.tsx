import { useCallback, useState } from "react";
import { createContext } from "use-context-selector";
import * as Types from "entities/types";

type CryptocurrenciesContextType = {
  cryptocurrencies: Types.CryptocurrencyT[];
  addCryptocurrency: (newCryptocurrency: Types.CryptocurrencyT) => boolean;
  removeCryptocurrency: (newCryptocurrency: Types.CryptocurrencyT) => void;
};

type Props = {
  children: React.ReactNode;
};

export const CryptocurrenciesContext = createContext(
  {} as CryptocurrenciesContextType
);

const CryptocurrenciesProvider: React.FC<Props> = ({ children }) => {
  const [cryptocurrencies, setCryptocurrencies] = useState<Array<any>>([]);

  const addCryptocurrency = useCallback(
    (newCryptocurrency: Types.CryptocurrencyT) => {
      const hasCryptocurrency = cryptocurrencies.find(
        (cryptocurrency) =>
          cryptocurrency?.baseSymbol === newCryptocurrency?.baseSymbol
      );

      if (!hasCryptocurrency) {
        setCryptocurrencies((prev) => [...prev, newCryptocurrency]);
        return true;
      }

      return false;
    },

    [cryptocurrencies]
  );

  const removeCryptocurrency = useCallback(
    (cryptocurrencyToRemove: Types.CryptocurrencyT) => {
      setCryptocurrencies((cryptocurrencies) =>
        cryptocurrencies?.filter(
          (cryptocurrency) =>
            cryptocurrency?.baseSymbol !== cryptocurrencyToRemove?.baseSymbol
        )
      );
    },

    []
  );

  return (
    <CryptocurrenciesContext.Provider
      value={{
        cryptocurrencies,
        addCryptocurrency,
        removeCryptocurrency,
      }}
    >
      {children}
    </CryptocurrenciesContext.Provider>
  );
};

export default CryptocurrenciesProvider;
