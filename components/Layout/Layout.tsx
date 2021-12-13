import { ReactElement } from "react";
import * as S from "./styles";
import * as C from "components";
import * as Images from "assets/images";

type Props = {
  children: ReactElement;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <S.Head>
        <C.Navbar />
      </S.Head>

      <S.Main>{children}</S.Main>

      <S.Footer>
        <C.Footer />
      </S.Footer>

      <S.BackgroundImageContainer>
        <S.BackgroundImage
          src={Images.bg}
          alt="background"
          layout="fill"
          objectFit="contain"
        />
      </S.BackgroundImageContainer>
    </>
  );
};

export default Layout;
