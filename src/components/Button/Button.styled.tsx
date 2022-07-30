import styled, { css } from "styled-components";
const getButtonVariant = (variant: string) => {
  switch (variant) {
    case "primary":
      return css`
        background-color: #5f2eea;
        color: #ffffff;

        &:not(:disabled):hover {
          background-color: #1d0071;
          color: #ffffff;
          border: 1px solid #1d0071;
        }
      `;
    case "secondary":
      return css`
        background-color: transparent;
        border: 1px solid #000000;
        color: #000000;

        &:not(:disabled):hover {
          background-color: transparent;
          border: 1px solid #000000;
          color: #000000;
        }
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
