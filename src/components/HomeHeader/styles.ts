import styled, { css } from 'styled-components/native'
import { Button } from '@/components/Button'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  flex: 1;
  margin: 0 10px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.M}px;
    color: ${theme.COLORS.BASE.GRAY_1};
  `}
`

export const UserName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.M}px;
    color: ${theme.COLORS.BASE.GRAY_1};
  `}
`

export const StyledButton = styled(Button)`
  max-width: 139px;
`
