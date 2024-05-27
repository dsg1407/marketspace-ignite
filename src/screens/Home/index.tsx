import {
  ArrowIcon,
  Container,
  Frame,
  FrameBackground,
  FrameText,
  FrameView,
  Label,
  SignText,
  TagIcon,
} from './styles'
import { useNavigation } from '@react-navigation/native'

import { AppNavigatorRoutesProps } from '@/routes/app.routes'

import { HomeHeader } from '@/components/HomeHeader'
import { Input } from '@/components/Input'
import { Card } from '@/components/Card'

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleMyAds() {
    navigation.navigate('myAds')
  }

  function handleFilter() {
    console.log('filtro')
  }
  return (
    <Container>
      <HomeHeader />
      <Label>Seus produtos anunciados para venda</Label>
      <Frame onPress={handleMyAds}>
        <FrameBackground />
        <FrameView>
          <TagIcon />
          <FrameText bold>
            4 {'\n'}
            <FrameText>anúncios ativos</FrameText>
          </FrameText>
          <SignText>Meus anúncios</SignText>
          <ArrowIcon />
        </FrameView>
      </Frame>

      <Label>Compre produtos variados</Label>
      <Input
        type="search"
        placeholder="Buscar anúncio"
        showFilter={handleFilter}
      />
      <Card />
    </Container>
  )
}

//TODO - Componentes Cards
//TODO - Flatlist
//TODO - Filtro
