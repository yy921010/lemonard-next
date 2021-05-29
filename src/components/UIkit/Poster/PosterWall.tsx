import React from 'react'
import tw from 'twin.macro'
import { Vod, Genre } from '@/interfaces/Vod'
import { getImageUrl } from '@/utils'
import Poster from './index'

export interface PosterWallProps {
  vods?: Vod[]
  onMoreInfo: (id: string) => void
}

const PosterWallMain = tw.div`grid
 grid-cols-3
 gap-y-16
 md:(px-6 grid-cols-4)
 lg:(grid-cols-5 px-10)
 xl:(grid-cols-5 px-14)`

const PosterWall: React.FC<PosterWallProps> = ({ vods, onMoreInfo }) => {
  const getSubtitle = (subtitles: Genre[]) => {
    return subtitles.map((subtitle) => subtitle.name).toString()
  }
  return (
    <PosterWallMain>
      {Array.isArray(vods) &&
        vods.map((vod) => {
          return (
            <div
              aria-hidden
              key={vod.id}
              tw="cursor-pointer"
              onClick={() => {
                onMoreInfo(vod.id)
              }}
            >
              <Poster
                src={getImageUrl(vod.images, 10)}
                aspectRatio={16 / 9}
                tw="mx-0.5 sm:mx-1 md:mx-1.5 mb-2"
              />
              <h4
                tw="text-sm md:text-base px-2 text-c31 overflow-ellipsis overflow-hidden white-space[nowrap]"
                title={vod.title}
              >
                {vod.title}
              </h4>
              <h5
                tw="text-xs md:text-sm px-2 text-c35 text-overflow[ellipsis]"
                title={getSubtitle(vod.genres)}
              >
                {getSubtitle(vod.genres)}
              </h5>
            </div>
          )
        })}
    </PosterWallMain>
  )
}

export default PosterWall
