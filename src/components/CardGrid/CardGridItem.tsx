import React from "react"
import Link from '@docusaurus/Link';
import { Col, columnsToColspan, GridColumns } from "../Grid"

type Icon = { src: string; alt: string }

export interface CardGridItemProps {
  title: string
  to: string
  inlineIcons: boolean
  columns: GridColumns
  description?: string
  icons?: Icon[]
}

export const CardGridItem = ({
  title,
  description,
  icons,
  inlineIcons,
  to,
  columns,
}: CardGridItemProps): JSX.Element => {
  const iconImages = icons && icons.length > 0 && (
    <>
      {icons.map((icon) => (
        <React.Fragment key={icon.src}>
          <img src={icon.src} width="36px" alt={icon.alt} />
          &nbsp;&nbsp;
        </React.Fragment>
      ))}
      </>
  )

  return (
    <Col span={columnsToColspan[columns]}>
      <div className="col-demo margin-bottom--lg">
        <Link className="card padding--lg card--homepage" to={to}>
          {inlineIcons ? (
            <h3>
              {iconImages}
              {title}
            </h3>
          ) : (
            <>
              {iconImages}
              <h3>{title}</h3>
            </>
          )}
          {description && <p>{description}</p>}
        </Link>
      </div>
    </Col>
  )
}
