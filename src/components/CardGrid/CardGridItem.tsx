import React from "react"

type Icon = { src: string; alt: string }
export interface CardGridItemProps {
  title: string
  href: string
  description?: string
  icons?: Icon[]
  inlineIcons?: boolean
}

export const CardGridItem = ({
  title,
  description,
  icons,
  inlineIcons,
  href,
}: CardGridItemProps): JSX.Element => {
  const iconImages = icons && icons.length > 0 && (
    <span>
      {icons.map((icon) => (
        <>
          <img src={icon.src} width="36px" alt={icon.alt} />
          &nbsp;&nbsp;
        </>
      ))}
    </span>
  )

  return (
    <div className="col col--4">
      <div className="col-demo margin-bottom--lg">
        <a className="card padding--lg card--homepage" href={href}>
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
        </a>
      </div>
    </div>
  )
}
