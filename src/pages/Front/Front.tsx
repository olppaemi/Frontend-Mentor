import Form from "../../components/Form";
import Header from "../../components/Header";
import SalesStatement from "../../components/SalesStatement";
import * as S from "./styles";

const Front = () => {
  return (
    <S.Page>
      <S.Container>
        <S.Front>
          <Header />
          <S.Right>
            <SalesStatement />
            <Form />
          </S.Right>
        </S.Front>
      </S.Container>
    </S.Page>
  );
};

export default Front;
