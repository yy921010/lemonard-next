import { Image } from '@/interfaces'

export const getImageUrl = (images: Image[] = [], imgType: number): string => {
  const image = images.find((img) => img.type === imgType)
  return image ? image.href : ''
}

export const isEmpty = (val) => val == null || !(Object.keys(val) || val).length
