import React from 'react'
import { IHeaderMenuItem } from '../HeaderMenu.types'
import { HeaderMenuItemMain } from './HeaderMenuItem.styles'
import { useHistory } from 'react-router-dom'

interface IHeaderMenuItemProps {
  menuItem: IHeaderMenuItem
}

function HeaderMenuItem (props: IHeaderMenuItemProps) {
  const { id, title, link, onClick } = props.menuItem
  const histroy = useHistory()

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (onClick) {
      onClick(id)
    }

    if (link) {
      histroy.push(link)
    }
  }

  return (
    <HeaderMenuItemMain onClick={ handleClick }>
      {title}
    </HeaderMenuItemMain>
  )
}

export default React.memo(HeaderMenuItem)
