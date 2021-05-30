import React from 'react'
import { Poster } from '../UIkit'
import 'twin.macro'

export enum PosterAspectRatio {
  vertical = 16 / 9,
  square = 1,
}

interface MovieCardProp {
  id?: string
  src: string
  metaTitle?: string
  title?: string
  subtitle?: string
  className?: string
  aspectRatio?: PosterAspectRatio
  onClick?: (vodId: string) => void
}

const MovieCard: React.VFC<MovieCardProp> = ({
  id,
  src,
  title,
  subtitle,
  metaTitle,
  className,
  aspectRatio,
  onClick,
}) => {
  return (
    <div
      className={className}
      aria-hidden
      onClick={() => {
        if (onClick) {
          onClick(id)
        }
      }}
    >
      <Poster
        tw="mx-0.5 sm:mx-1 md:mx-1.5 mb-2"
        src={src}
        aspectRatio={aspectRatio}
      />
      {metaTitle ? <h4 tw="text-c32 px-2 text-xs">{metaTitle}</h4> : ''}
      {title ? (
        <h3
          tw="text-sm md:text-base px-2 text-c31 overflow-ellipsis overflow-hidden white-space[nowrap]"
          title={title}
        >
          {title}
        </h3>
      ) : (
        ''
      )}
      {subtitle ? (
        <h5
          tw="text-xs md:text-sm px-2 text-c35 text-overflow[ellipsis]"
          title={subtitle}
        >
          {subtitle}
        </h5>
      ) : (
        ''
      )}
    </div>
  )
}

MovieCard.defaultProps = {
  src: '',
  metaTitle: '',
  title: '',
  subtitle: '',
  aspectRatio: PosterAspectRatio.vertical,
}

export default MovieCard
