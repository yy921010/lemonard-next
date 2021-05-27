import React from 'react'

type IconProps = {
  name: string
  type?: 'fill' | 'line'
  className?: string
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Icon: React.VFC<IconProps> = ({ name, type, className, onClick }) => {
  return (
    <i
      className={
        className ? `ri-${name}-${type} ${className}` : `ri-${name}-${type}`
      }
      onClick={onClick}
      aria-hidden="true"
    />
  )
}

Icon.defaultProps = {
  className: '',
  type: 'fill',
}

export default Icon
