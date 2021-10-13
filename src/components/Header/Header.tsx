import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Title>
          <span>Learn to code by</span> <span>watching others</span>
        </S.Title>
        <S.Text>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </S.Text>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
