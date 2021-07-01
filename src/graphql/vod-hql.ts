import { gql } from '@apollo/client'

export const QUERY_VOD_DETAIL = gql`
  query getVodById($id: String!) {
    vod(id: $id) {
      id
      originTitle
      title
      subtitle
      introduce
      rating
      year
      images {
        id
        href
        type
      }
      countries {
        id
        name
        countryKey
      }
      genres {
        id
        name
      }
      playSources {
        duration
        url
      }
      seasons {
        id
        title
        episodes {
          id
          title
          episodeNumber
          introduce
          images {
            type
            href
          }
        }
      }
      castStaffs {
        id
        name
        order
        images {
          href
          type
        }
        characters {
          name
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

export const QUERY_VODS_BY_CURSOR = gql`
  query getVodByCursor($cursor: String) {
    vodCursor(first: 20, after: $cursor) {
      edges {
        node {
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
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`
