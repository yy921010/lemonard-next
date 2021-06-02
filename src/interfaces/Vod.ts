export enum ImageTypes {
  MAIN = 14,
  CAST = 10,
}
export interface Image {
  href: string
  type: number
  id: string
  guid: string
}

export interface Genre {
  id?: string
  name?: string
  guid: string
}

export interface Vod {
  id: string
  title: string
  type: number
  subtitle: string
  originTitle: string
  year: string
  rating: string
  introduce: string
  images: Image[]
  genres: Genre[]
  castStaffs: CastStaff[]
  seasons: Season[]
  playSources: PlaySources[]
  countries: Country[]
  guid: string
}

export interface PlaySources {
  id: string
  type: number
  duration: number
  url: string
  quality: number
  guid: string
}

export interface Country {
  id: string
  name: string
  guid: string
}

export interface CastStaff {
  id: string
  name: string
  introduce: string
  images: Image[]
  guid: string
}

export interface Season {
  id: string
  name: string
  introduce: string
  episodes: Episode[]
  guid: string
}

export interface Episode {
  id: string
  title: string
  introduce: string
  episodeNumber: number
  images: Image[]
  playSources: PlaySources[]
  guid: string
}
