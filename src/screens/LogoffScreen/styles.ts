import styled, { css } from 'styled-components/native'
import { Button } from '@/components/Button'

export const Container = styled.View`
  flex: 1;
  padding: 48px;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.BASE.GRAY_3};
  `};
`

export const Frame = styled.View`
  width: 90%;
  align-items: center;
  min-height: 25%;
  border-radius: 16px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
`

export const ButtonFrame = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 15px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.GRAY_1};
  `}
  margin-bottom: 15px;
`

export const Description = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_2};
  `}
`
export const StyledButton = styled(Button)`
  width: 50%;
`
