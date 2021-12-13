import * as S from "./styles";
import * as Images from "assets/images";

type Props = {
  content?: any;
};

const Navbar: React.FC<Props> = ({ content }) => {
  return (
    <S.Container>
      <S.Logo src={Images.logo} alt="logo" />
    </S.Container>
  );
};

export default Navbar;
