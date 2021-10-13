import styled from "styled-components";
import BgDesktop from "../../assets/images/bg-intro-desktop.png";
import { rem } from "../../styles/utils";
import { media } from "../../styles/media";

export const Page = styled.div`
  min-height: 100vh;
  background-image: url(${BgDesktop});
  background-color: ${({ theme }) => theme.palette.red};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: ${rem(1110)};
  width: ${(1110 / 1440) * 100}%;

  @media (max-width: ${media.lg}) {
    width: ${(327 / 375) * 100}%;
    padding-top: ${rem(88)};
    padding-bottom: ${rem(68)};
  }
`;

export const Front = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${rem(45)};

  @media (max-width: ${media.lg}) {
    grid-template-columns: 1fr;
    row-gap: ${rem(64)};
  }
`;

export const Right = styled.div`
  & > * + * {
    margin-top: ${rem(24)};
  }
`;
