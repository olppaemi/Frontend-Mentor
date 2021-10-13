import styled from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  & > * + * {
    margin-top: ${rem(32)};
  }

  @media (max-width: ${media.lg}) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: clamp(${rem(28)}, ${rem(16)} + 3.3vw, ${rem(50)});
  line-height: clamp(${rem(36)}, ${rem(32)} + 2vw, ${rem(55)});

  @media (max-width: ${media.lg}) {
    span {
      display: block;
    }
  }
`;

export const Text = styled.p`
  color: white;
  font-size: ${rem(16)};
  line-height: ${rem(26)};
`;
