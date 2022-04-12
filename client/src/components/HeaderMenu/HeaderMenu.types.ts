export interface IHeaderMenuItem {
  id: number
  title: string
  link?: string
  onClick?: (id: number) => void
}

export interface IHeaderMenuProps {
  menuItems: IHeaderMenuItem[]
}
