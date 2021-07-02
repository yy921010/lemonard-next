import { Image } from '@/interfaces'
import { ImgType } from '../interfaces/Vod'

const imageBaseUrl = 'https://image.tmdb.org/t/p/'

export enum BackdropSizes {
  W300 = 'w300',
  W780 = 'w780',
  W1280 = 'w1280',
  ORIGINAL = 'original',
}

export enum LogoSizes {
  W45 = 'w45',
  W92 = 'w92',
  W154 = 'w154',
  W185 = 'w185',
  W300 = 'w300',
  W500 = 'w500',
  ORIGINAL = 'original',
}

export enum PosterSizes {
  W92 = 'w92',
  W154 = 'w154',
  W185 = 'w185',
  W300 = 'w300',
  W500 = 'w500',
  W780 = 'w780',
  ORIGINAL = 'original',
}

export enum ProfileSizes {
  W45 = 'w45',
  W185 = 'w185',
  W632 = 'w632',
  ORIGINAL = 'original',
}

export enum StillSizes {
  W92 = 'w92',
  W185 = 'w185',
  W300 = 'w300',
  ORIGINAL = 'original',
}

export const getImageUrl = (
  images: Image[] = [],
  imgType: ImgType,
  size: StillSizes | ProfileSizes | PosterSizes | BackdropSizes | LogoSizes
): string => {
  const image = images.find((img) => img.type === imgType)

  return image ? `${imageBaseUrl}/${size}/${image.href}` : ''
}

export const isEmpty = (val) => val == null || !(Object.keys(val) || val).length
