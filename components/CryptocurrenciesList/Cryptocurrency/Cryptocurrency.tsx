import * as S from "./styles";
import * as Images from "assets/images";
import * as Types from "entities/types";
import * as UTIL from "utils";
import * as Hooks from "hooks";

type Props = {
  cryptocurrency: Types.CryptocurrencyT;
};

const Cryptocurrency: React.FC<Props> = ({ cryptocurrency }) => {
  const { removeCryptocurrency } = Hooks.useCryptocurrenciesContext();

  const handleClick = (event: any) => {
    event.preventDefault();
    removeCryptocurrency(cryptocurrency);
  };

  return (
    <S.Container>
      <S.Content>
        <S.TrophyIcon src={Images.icon} alt="cryptocurrency icon" />

        <S.Info>
          <S.BaseSymbol>{cryptocurrency?.baseSymbol}</S.BaseSymbol>
          <S.LastPrice>
            {UTIL.Common.formatCurrency({
              value: cryptocurrency?.lastPrice,
              languageCode: "en-US",
              currencyCode: "EUR",
              maximumFractionDigits: 2,
            })}
          </S.LastPrice>
        </S.Info>

        <S.CloseIcon onClick={handleClick}>X</S.CloseIcon>
      </S.Content>

      <S.BorderBottom />
    </S.Container>
  );
};

export default Cryptocurrency;
