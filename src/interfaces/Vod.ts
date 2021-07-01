export enum VodType {
  FILM = 'FILM',
  SERIES = 'SERIES',
}

export enum PlaySourceType {
  TRAILER = 'TRAILER',
  POSITIVE = 'POSITIVE',
}

export enum ImgType {
  OTT = 'OTT',
  WEB = 'WEB',
  MAIN = 'MAIN',
  PLAYER = 'PLAYER',
  DETAIL = 'DETAIL',
  BACKGROUND = 'BACKGROUND',
}

export interface Vod {
  id?: string
  updatedAt?: Date
  createdAt?: Date
  title?: string | null
  subtitle?: string | null
  originTitle?: string | null
  introduce?: string
  year?: string | null
  rating?: string | null
  type?: VodType
  imdbId?: string
  tmdbId?: number
  episodeCount?: number
  seasonCount?: number
  images?: Image[]
  countries?: Country[]
  castStaffs?: CastStaff[]
  genres?: Genre[]
  playSources?: PlaySource[]
  seasons?: Season[]
}

export type Country = {
  id?: string
  updatedAt?: Date
  createdAt?: Date
  name?: string | null
  countryKey?: string | null
}

export type Genre = {
  id?: number
  updatedAt?: Date
  createdAt?: Date
  tmdbId?: number
  name?: string | null
}

export type Image = {
  id?: string
  updatedAt?: Date
  createdAt?: Date
  type?: ImgType | null
  href?: string | null
}

export type Episode = {
  id?: string
  updatedAt?: Date
  createdAt?: Date
  title?: string | null
  introduce?: string
  episodeNumber?: number
  seasonId?: string | null
  images?: Image[]
  playSources?: PlaySource[]
}

export type PlaySource = {
  id?: string
  updatedAt?: Date
  createdAt?: Date
  title?: string | null
  type?: PlaySourceType | null
  duration?: number
  url?: string | null
  quality?: number
  vodId?: string | null
  episodeId?: string | null
}

export interface Season {
  id?: string
  updatedAt?: Date
  createdAt?: Date
  title?: string | null
  episodes?: Episode[]
}

export type Character = {
  id?: string
  updatedAt?: Date
  createdAt?: Date
  name?: string | null
  sourceId?: string | null
  castId?: string | null
}

export type CastStaff = {
  id?: string
  updatedAt?: Date
  createdAt?: Date
  name?: string | null
  introduce?: string
  imdbId?: string
  tmdbId?: number
  placeOfBirth?: string
  birthday?: string
  deathday?: string
  images?: Image[]
  order?: number
  characters?: Character[]
}
