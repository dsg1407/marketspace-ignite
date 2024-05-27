import styled, { css } from 'styled-components/native'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowRight, Tag } from 'phosphor-react-native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 20px 24px;
`

export const Label = styled.Text`
  margin-top: 32px;
  margin-bottom: 12px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.BASE.GRAY_3};
  `}
`

export const Frame = styled.TouchableOpacity`
  width: 100%;
  min-height: 66px;
  max-height: 66px;
  justify-content: center;
`

export const FrameBackground = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.PRODUCT.BLUE_LIGHT};
  opacity: 0.1;
  border-radius: 6px;
`

export const FrameView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 12px 20px 12px 16px;
`

export const FrameText = styled(Text)<{ bold?: boolean }>`
  ${({ theme, bold }) => css`
    font-size: ${bold ? theme.FONT_SIZE.L : theme.FONT_SIZE.S}px;
    font-family: ${bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_2};
  `}
  flex: 1;
`
export const SignText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.PRODUCT.BLUE};
  `}
`

export const ArrowIcon = styled(ArrowRight).attrs(({ theme }) => ({
  color: theme.COLORS.PRODUCT.BLUE,
  size: 16,
}))`
  margin-left: 8px;
`

export const TagIcon = styled(Tag).attrs(({ theme }) => ({
  color: theme.COLORS.PRODUCT.BLUE,
  size: 22,
}))`
  margin-right: 16px;
`
