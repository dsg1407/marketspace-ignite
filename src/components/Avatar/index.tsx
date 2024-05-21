import { useState } from 'react'
import { Container, AvatarImage, EditButton, PencilIcon } from './styles'
import * as ImagePicker from 'expo-image-picker'

import UserDefaultImage from '@/assets/userPhotoDefault.png'

type Props = {
  type: 'header' | 'signup'
}

export function Avatar({ type }: Props) {
  const [userProfileImage, setUserProfileImage] = useState<string>()

  async function handleEditPhoto() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      })

      if (photoSelected.canceled) {
        return
      }

      setUserProfileImage(photoSelected.assets[0].uri)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container type={type}>
      <AvatarImage
        source={userProfileImage ? { uri: userProfileImage } : UserDefaultImage}
        alt="User profile image."
        resizeMode="cover"
      />
      {type === 'signup' && (
        <EditButton onPress={handleEditPhoto}>
          <PencilIcon />
        </EditButton>
      )}
    </Container>
  )
}
