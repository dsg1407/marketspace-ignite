import { Image, Text } from 'react-native'
import styled, { css } from 'styled-components/native'
import { Avatar } from '../Avatar'

export const Container = styled.TouchableOpacity`
  width: 153.5px;
  align-items: flex-start;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_2};
  `}
`

export const Price = styled(Text)<{ currency?: boolean }>`
  ${({ theme, currency }) => css`
    font-size: ${currency ? theme.FONT_SIZE.XS : theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.GRAY_1};
  `}
`

export const UsageTag = styled(Text)<{ isNew: boolean }>`
  ${({ theme }) => css`
    font-size: 10px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.GRAY_7};
  `}

  padding: 2px 8px;
  border-radius: 9999px;
  background-color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.PRODUCT.BLUE : theme.COLORS.BASE.GRAY_2};
`

export const StyledUserAvatar = styled(Avatar)`
  width: 24px;
  height: 24px;
  border-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
  border-width: 1px;

  position: absolute;
`

export const ProductImage = styled(Image).attrs(() => ({
  resizeMode: 'cover',
}))`
  width: 100%;
  height: 100%;
  max-height: 100px;
  border-radius: 6px;
  margin-bottom: 4px;
`
