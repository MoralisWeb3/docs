import React from "react"
import { CardGridItem, CardGridItemProps } from "./CardGridItem"

export interface CardGridProps {
  items: CardGridItemProps[],
  // Specify whether to display the icons inline or stacked, choose "stacked" if you need more room for icons or larger title
  inlineIcons?: boolean
}
export const CardGrid = ({ items, inlineIcons = true }: CardGridProps): JSX.Element => {
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <CardGridItem {...item} inlineIcons={inlineIcons} key={item.title} />
        ))}
      </div>
    </div>
  )
}
