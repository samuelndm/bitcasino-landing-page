import * as S from "./styles";
import * as Types from "entities/types";
import Cryptocurrency from "./Cryptocurrency";

type Props = {
  cryptocurrencies: Types.CryptocurrencyT[];
};

const CryptocurrenciesList: React.FC<Props> = ({ cryptocurrencies }) => {
  return (
    <S.Container>
      <S.List>
        {cryptocurrencies?.map((cryptocurrency) => (
          <Cryptocurrency
            cryptocurrency={cryptocurrency}
            key={cryptocurrency?.baseSymbol}
          />
        ))}
      </S.List>
    </S.Container>
  );
};

export default CryptocurrenciesList;
