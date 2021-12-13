import { useContextSelector } from "use-context-selector";
import { CryptocurrenciesContext } from "contexts";

const useCryptocurrenciesContext = () => {
  const cryptocurrencies = useContextSelector(
    CryptocurrenciesContext,
    ({ cryptocurrencies }) => cryptocurrencies
  );

  const addCryptocurrency = useContextSelector(
    CryptocurrenciesContext,
    ({ addCryptocurrency }) => addCryptocurrency
  );

  const removeCryptocurrency = useContextSelector(
    CryptocurrenciesContext,
    ({ removeCryptocurrency }) => removeCryptocurrency
  );

  return { cryptocurrencies, addCryptocurrency, removeCryptocurrency };
};

export default useCryptocurrenciesContext;
