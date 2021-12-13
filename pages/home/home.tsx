import type { NextPage } from "next";
import * as S from "./styles";
import * as C from "components";
import * as Hooks from "hooks";
import * as Images from "assets/images";

const Home: NextPage = () => {
  const { cryptocurrencies } = Hooks.useCryptocurrenciesContext();

  return (
    <S.Container>
      <S.Content>
        <S.Title>Now you can track all your cryptos here!</S.Title>

        <S.SubTitle>
          Just enter the cryptocurrency code on the form to the right
        </S.SubTitle>

        <C.CryptocurrenciesList cryptocurrencies={cryptocurrencies} />
      </S.Content>

      <S.LeprechaunImage
        src={Images.figure}
        alt="home image"
        width={500}
        height={700}
      />

      <C.CryptocurrencySearch />
    </S.Container>
  );
};

export default Home;
