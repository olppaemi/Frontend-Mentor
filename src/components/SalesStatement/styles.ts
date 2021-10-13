import styled from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const Container = styled.div`
  width: 100%;
  min-height: ${rem(56)};
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.palette.blue};
  border-radius: ${rem(5)};
  box-shadow: 0 ${rem(8)} hsla(0, 0%, 0%, 0.1469);

  @media (max-width: ${media.sm}) {
    min-height: ${rem(88)};
    span {
      display: block;
    }
  }
`;

export const Text = styled.p`
  color: white;
  font-size: ${rem(15)};
  font-weight: 400;
  line-height: ${rem(26)};
  letter-spacing: ${rem(0.27)};
  text-align: center;

  strong {
    display: inline-block;
  }

  @media (max-width: ${media.sm}) {
    span {
      display: block;
    }
  }
`;
