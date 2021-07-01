import { Image } from '@/interfaces'
import { ImgType } from '../interfaces/Vod'

export const getImageUrl = (images: Image[] = [], imgType: ImgType): string => {
  const image = images.find((img) => img.type === imgType)
  return image ? `https://image.tmdb.org/t/p/w780${image.href}` : ''
}

export const isEmpty = (val) => val == null || !(Object.keys(val) || val).length
