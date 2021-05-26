import tw, { styled, css } from 'twin.macro'
import React from 'react'
import Icon from '../Icon'

export interface PosterProp {
  className?: string
  aspectRatio: number
  src?: string
  onClick?: React.MouseEventHandler<HTMLElement>
  onMouseMove?: React.MouseEventHandler<HTMLElement>
}

const PosterWrap = styled.div(({ aspectRatio = 1 / 1 }: PosterProp) => {
  return [
    tw`bg-no-repeat bg-center flex-shrink-0 bg-cover relative bg-black rounded-md overflow-hidden shadow-xl`,
    css`
      aspect-ratio: ${aspectRatio};
      &:before {
        content: '';
        display: block;
        width: 100%;
        padding-top: ${(1 / aspectRatio) * 100}%;
      }
    `,
  ]
})

interface PosterImageProp {
  imgUrl?: string
}

const PosterImg = styled.div(({ imgUrl }: PosterImageProp) => [
  tw`z-10 top-0 w-full h-full left-0 absolute`,
  css`
    background-image: url(${imgUrl});
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
  `,
])

const Poster: React.FC<PosterProp> = ({
  className,
  aspectRatio = 1 / 1,
  onClick,
  src = '',
  children,
  onMouseMove,
}) => {
  return (
    <PosterWrap
      className={className}
      aspectRatio={aspectRatio}
      onClick={onClick}
      onMouseMove={onMouseMove}
    >
      <Icon
        name="film"
        tw="text-2xl md:text-3xl lg:text-4xl text-white text-opacity-25 absolute left-1/2 top-1/2  transform(-translate-x-1/2 -translate-y-1/2)"
      />
      <PosterImg imgUrl={src} />
      {children}
    </PosterWrap>
  )
}

export default Poster
