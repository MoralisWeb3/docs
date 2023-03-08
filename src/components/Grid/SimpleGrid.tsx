// Implementation of https://infima.dev/docs/layout/grid
import React, { useMemo } from "react"
import { Col, GridColSpan } from "./Col"
import { Row } from "./Row"

interface GridProps {
  children: React.ReactNode
  columns?: GridColSpan
}

export const columnsToColspan = {
  1: 12,
  2: 6,
  3: 4,
  4: 3,
  6: 2,
  12: 1,
} as const 

export type GridColumns = keyof typeof columnsToColspan

/**
 * Simple Grid component that wraps the children in a Row and Columns
 * For more fine-grained solutions, use the Row and Col components directly
 *
 * If no `columns` is provided, this will automatically apply the correct col span to each child
 * Note: that the number of children must be of 1, 2, 3, 4, 6 or 12
 */
export const SimpleGrid = ({ children, columns }: GridProps) => {
  const colSpan = useMemo(() => {
    if(columns){
      return columnsToColspan[columns]
    }
    const childCount = React.Children.toArray(children).length
    if (![1, 2, 3, 4, 6, 12].includes(childCount)) {
      return 12
    }
    return (12 / childCount) as GridColSpan
  }, [])

  console.log({colSpan})

  return (
    <Row>
      {React.Children.map(children, (child, index) => {
        return <Col span={colSpan} key={index}>{child}</Col>
      })}
    </Row>
  )
}
