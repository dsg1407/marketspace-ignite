import styled, { css } from 'styled-components/native'
import { Eye, EyeClosed, MagnifyingGlass, Sliders } from 'phosphor-react-native'
import { ViewProps, View } from 'react-native'

type ContainerProps = ViewProps & {
  isFocused: boolean
}

export const Container = styled(View)<ContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 6px;

  ${({ theme, isFocused }) => css`
    background-color: ${theme.COLORS.BASE.GRAY_7};
    border: ${isFocused && '1px'};
    border-color: ${isFocused
      ? theme.COLORS.BASE.GRAY_3
      : theme.COLORS.BASE.GRAY_7};
  `}
`

export const InputText = styled.TextInput`
  flex: 1;
  min-height: 21px;
  max-height: 21px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_2};
  `}
`

export const Currency = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_1};
  `}
`
export const Divider = styled.View`
  width: 1px;
  height: 100%;
  margin: 0 2px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.BASE.GRAY_4};
  `}
`

export const PasswordIconHide = styled(EyeClosed).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.BASE.GRAY_3,
}))``

export const PasswordIconShow = styled(Eye).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.BASE.GRAY_3,
}))``

export const SearchIcon = styled(MagnifyingGlass).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.BASE.GRAY_2,
}))``

export const FilterIcon = styled(Sliders).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.BASE.GRAY_2,
}))``
