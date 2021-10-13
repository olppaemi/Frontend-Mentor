import styled, { css } from "styled-components";
import { Field } from "formik";
import { rem } from "../../styles/utils";
import ErrorIcon from "../../assets/images/icon-error.svg";
import { media } from "../../styles/media";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  border-radius: ${rem(10)};
  padding: ${rem(40)};
  box-shadow: 0 ${rem(8)} hsla(0, 0%, 0%, 0.1469);

  @media (max-width: ${media.lg}) {
    padding: ${rem(24)};
  }
`;

export const Input = styled(Field)<{ $error: boolean }>`
  width: 100%;
  height: ${rem(56)};
  border-radius: ${rem(5)};
  border: 1px solid #dedede;
  padding: ${rem(15)} ${rem(32)};
  outline: none;
  margin-bottom: ${rem(20)};

  font-size: ${rem(14)};
  font-weight: 600;
  letter-spacing: ${rem(0.25)};
  color: ${({ theme }) => theme.palette.darkBlue};

  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.blue};
  }

  ${({ $error }) =>
    $error &&
    css`
      color: ${({ theme }) => theme.palette.red};
      padding-right: ${rem(52)};
      background: center right ${rem(16)} / ${rem(24)} no-repeat
        url(${ErrorIcon});
      margin-bottom: 0;
    `}
`;

export const Error = styled.div`
  font-size: ${rem(11)};
  font-weight: 500;
  font-style: italic;
  text-align: right;
  color: ${({ theme }) => theme.palette.red};
  margin-top: ${rem(6)};
  margin-bottom: ${rem(19)};
`;

export const Button = styled.button`
  width: 100%;
  height: ${rem(56)};
  border: none;
  border-radius: ${rem(5)};
  background-color: ${({ theme }) => theme.palette.green};
  box-shadow: inset 0 -${rem(4)} hsla(0, 0%, 0%, 0.0909);

  font-family: inherit;
  font-size: ${rem(15)};
  font-weight: 600;
  letter-spacing: ${rem(1)};
  color: white;

  &:hover {
    background-color: hsl(154, 65%, 68%);
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-size: ${rem(11)};
  font-weight: 500;
  margin-top: ${rem(8)};
  color: ${({ theme }) => theme.palette.grayishBlue};
  text-align: center;

  a {
    text-decoration: none;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.red};
  }

  @media (max-width: ${media.lg}) {
    line-height: ${rem(21)};
  }
`;
