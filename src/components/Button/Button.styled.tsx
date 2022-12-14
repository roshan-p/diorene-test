import styled, { css } from "styled-components";
import * as color from "../../common/color";
import CircularProgress from '@mui/material/CircularProgress';

const getButtonVariant = (variant: string) => {
  switch (variant) {
    case "primary":
      return css`
        background-color: ${color?.PRIMARY_PURPLE};
        color: ${color?.COMMON_WHITE};
        &:not(:disabled):hover {
          background-color: ${color?.PRIMARY_BLUE};
          color: ${color?.COMMON_WHITE};
          border: 1px solid ${color?.PRIMARY_BLUE};
        }
        &:disabled {
          border: 1px solid ${color?.DISABLE_PURPLE};
          background-color: ${color?.DISABLE_PURPLE};
          color: ${color?.COMMON_WHITE};
        }
      `;
    case "secondary":
      return css`
        background-color: transparent;
        border: 1px solid ${color?.COMMON_BLACK};
        color: ${color?.COMMON_BLACK};

        &:not(:disabled):hover {
          background-color: transparent;
          border: 1px solid ${color?.COMMON_BLACK};
          color: ${color?.COMMON_BLACK};
        }
        &:disabled {
          border: 1px solid ${color?.DISABLE_GREY};
          color: ${color?.DISABLE_GREY};
        }
      `;
  }
};
const LoaderVariant = (variant: string) => {
  switch (variant) {
    case "primary":
      return css`
        color: ${color?.COMMON_WHITE} !important;

      `;
    case "secondary":
      return css`
      color: ${color?.COMMON_BLACK} !important;
      `;
  }
};
const getButtonSize = (size: string) => {
  switch (size) {
    case "lg":
      return css`
        width: 195.66px;
        height: 56px;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;
      `;
    case "md":
      return css`
        width: 195.66px;
        height: 48px;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;

          }
        `;
    case "sm":
      return css`
        width: 117.4px;
        height: 40px;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;

              }
            `;
  }
};
export const Loader = styled(CircularProgress)<{
  buttonVariant: string;

}>`
${({ buttonVariant }) => LoaderVariant(buttonVariant)};
`


export const StyledButton = styled.button<{
  variant: string;
  size: string;
}>`
  ${({ size }) => getButtonSize(size)};
  border-radius: 16px;
  padding: 18px 32p 18px 32px;
  outline: none;
  cursor: pointer;
  ${({ variant }) => getButtonVariant(variant)};
`;

