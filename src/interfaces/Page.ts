import { Vod } from './Vod'

export interface Edge {
  cursor?: string
  node?: Vod
}

export interface CursorResult {
  edges?: Edge[]
  pageInfo?: PageInfo
}

export interface PageInfo {
  hasPreviousPage?: boolean
  hasNextPage?: boolean
  startCursor?: string
  endCursor?: string
}
