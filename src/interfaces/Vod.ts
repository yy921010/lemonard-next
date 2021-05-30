export enum ImageTypes {
  MAIN = 14,
  CAST = 10,
}
export interface Image {
  href: string
  type: number
  id: string
}

export interface Genre {
  id?: string
  name?: string
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
}

export interface PlaySources {
  id: string
  type: number
  duration: number
  url: string
  quality: number
}

export interface Country {
  id: string
  name: string
}

export interface CastStaff {
  id: string
  name: string
  introduce: string
  images: Image[]
}

export interface Season {
  id: string
  name: string
  introduce: string
  episodes: Episode[]
}

export interface Episode {
  id: string
  title: string
  introduce: string
  episodeNumber: number
  images: Image[]
  playSources: PlaySources[]
}
