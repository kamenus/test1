import React from 'react'
import { IHeaderMenuProps } from './HeaderMenu.types'
import { HeaderMenuMain } from './HeaderMenu.styles'
import { HeaderMenuItem } from './HeaderMenuItem'

function HeaderMenu (props: IHeaderMenuProps) {
  const { menuItems } = props

  return (
    <HeaderMenuMain>
      {
        menuItems.map(menuItem => (
          <HeaderMenuItem
            key={ menuItem.id }
            menuItem={ menuItem }
          />
        ))
      }
    </HeaderMenuMain>
  )
}

export default HeaderMenu
