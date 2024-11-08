import styled from '@emotion/styled';
import { colors } from '@styles/colors';

export const Hr = styled.hr<{ colorCode?: string; margin?: string }>`
  border: none;
  background-color: ${({ colorCode }) => colorCode ?? colors.Gray100};
  height: 1px;
  width: 100%;
  margin: ${({ margin }) => margin ?? 0};
`;
