import RcSelect, { SelectProps } from 'rc-select'
import React from 'react'
import { Icon } from '..'
import 'twin.macro'

interface SelectBaseComponent extends React.FC<SelectProps> {
  Option: typeof RcSelect.Option
}

const Select: SelectBaseComponent = ({ ...rest }) => {
  return (
    <RcSelect
      transitionName="rc-select-dropdown-slide-up"
      {...rest}
      tw="h-8 text-base inline-flex items-center max-w-7xl relative cursor-pointer"
      inputIcon={<Icon name="arrow-down-s" tw="text-xl" type="fill" />}
    />
  )
}
Select.Option = RcSelect.Option

export default Select
