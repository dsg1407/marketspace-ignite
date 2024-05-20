import styled, { css } from 'styled-components/native'
import LogoGroupSvg from '@/assets/logoGroup.svg'
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
  ${({ theme }) =>
    css`
      background-color: ${theme.COLORS.BASE.GRAY_7};
    `}
`
export const Background = styled.View`
  align-items: center;

  ${({ theme }) =>
    css`
      background-color: ${theme.COLORS.BASE.GRAY_6};
      padding: ${Platform.OS === 'ios' ? '109px 48px 68px' : '68px 48px'};
    `};
  border-radius: 0px 0px 24px 24px;
`

export const LogoGroup = styled(LogoGroupSvg)`
  margin-bottom: 77px;
`

export const FormGroup = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;

  margin-bottom: 32px;
`

export const Label = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_2};
  `}
`

export const NewAccountGroup = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding: 0 48px;
  margin-bottom: 46px;
`
