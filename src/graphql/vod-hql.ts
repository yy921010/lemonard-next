import { gql } from '@apollo/client'

export const QUERY_VOD_DETAIL = gql`
  query getVodById($id: String!) {
    vod(id: $id) {
      id
      year
      title
      originTitle
      type
      introduce
      genres {
        name
        id
      }
      countries {
        name
        id
      }
      rating
      images {
        type
        href
      }
      playSources {
        id
        url
        quality
        type
        duration
      }
      castStaffs {
        name
        id
        introduce
        images {
          id
          href
          type
        }
      }
      seasons {
        id
        name
        introduce
        episodes {
          id
          title
          episodeNumber
          introduce
          images {
            id
            href
            type
          }
          playSources {
            id
            url
            quality
            type
            duration
          }
        }
      }
    }
  }
`

export const QUERY_VODS = gql`
  query getVods($offset: Int, $limit: Int) {
    vods(offset: $offset, limit: $limit) {
      total
      data {
        id
        title
        subtitle
        images {
          href
          type
        }
        genres {
          name
          id
        }
      }
    }
  }
`
