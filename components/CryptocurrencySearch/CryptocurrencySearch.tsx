import { useState } from "react";
import { initializeApollo } from "lib/apollo";
import * as S from "./styles";
import * as Queries from "lib/queries";
import * as Hooks from "hooks";

const CryptocurrencySearch = () => {
  const apolloClient = initializeApollo();
  const [searchedCode, setSearchedCode] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { addCryptocurrency } = Hooks.useCryptocurrenciesContext();

  const fetchCryptocurrency = async () => {
    setIsSearching(true);

    try {
      const { data } = await apolloClient.query({
        query: Queries.getCryptocurrencyByCode,
        variables: { baseSymbol: searchedCode },
      });

      const firstResult = data?.markets?.[0]?.ticker;

      if (firstResult) {
        addCryptocurrency({
          baseSymbol: searchedCode,
          lastPrice: firstResult.lastPrice,
        });
      }
    } catch (err) {
      console.error(err);
    }

    setIsSearching(false);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    fetchCryptocurrency();
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          <S.Label>Cryptocurrency Code</S.Label>
          <S.Input onChange={(e) => setSearchedCode(e.target.value)} />
        </S.InputContainer>

        <S.Button type="submit" disabled={isSearching}>
          Add
        </S.Button>
      </S.Form>

      <S.Terms>Use of this service is subject to terms and conditions.</S.Terms>
    </S.Container>
  );
};

export default CryptocurrencySearch;
