import styled, { css } from 'styled-components/native'
import LogoSvg from '@/assets/logo.svg'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding: 20px 48px;

  ${({ theme }) =>
    css`
      background-color: ${theme.COLORS.BASE.GRAY_6};
    `}
`

export const Logo = styled(LogoSvg)`
  margin-bottom: 12px;
`

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.L}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.GRAY_1};
  `}
  margin-bottom: 8px;
`

export const Label = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_2};
  `}
`

export const ScrollView = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  width: 100%;
`

export const FormGroup = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;

  margin-top: 32px;
  margin-bottom: 24px;
`

export const LoginGroup = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding: 48px 0;
`
