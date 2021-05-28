import React from 'react'
import tw, { styled, css } from 'twin.macro'

interface ButtonProps {
  primary?: boolean
  ghost?: boolean
  info?: boolean
  link?: boolean
  circle?: boolean
  size?: 'large' | 'small' | 'mini'
  disable?: boolean
  icon?: React.ReactNode
}

const Button = styled.button(
  ({ primary, info, link, circle, size, disable, ghost }: ButtonProps) => [
    tw`inline-flex justify-center items-center cursor-pointer leading-none appearance-none box-border outline-none m-0 rounded
    text-c31 px-4 bg-c03 active:(outline-none) focus:(outline-none) h-9 md:h-11`,
    ghost
      ? tw` bg-transparent border-c01 text-c31 hover:(border-c03 bg-c03 bg-opacity-10) active:(outline-none) focus:(outline-none)`
      : '',
    primary
      ? tw`bg-c04 text-gray-100 border-c04 hover:(bg-c05 text-gray-200 border-c05)`
      : '',
    info
      ? tw`bg-blue-500 text-gray-100 border-blue-500 hover:(bg-blue-400 text-gray-200 border-blue-400)`
      : '',
    link ? tw`bg-transparent text-gray-100 border-none` : '',
    circle
      ? tw`rounded-full w-8 h-8 p-0 md:(h-11 w-11) bg-white bg-opacity-10`
      : '',
    disable
      ? tw`text-gray-600 cursor-not-allowed border-none bg-gray-800 hover:(bg-gray-800)`
      : '',
    size === 'large'
      ? [
          tw`h-10`,
          css`
            min-width: 300px;
          `,
        ]
      : '',
    size === 'small' ? tw`h-10` : '',
    size === 'mini' ? tw`h-9` : '',
  ]
)

export default Button
