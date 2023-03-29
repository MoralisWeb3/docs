import React from "react";
import { Container, GridColumns, Row } from "../Grid";
import { CardGridItem, CardGridItemProps } from "./CardGridItem";

export interface CardGridProps {
  items: CardGridItemProps[];
  // Specify whether to display the icons inline or stacked, choose "stacked" if you need more room for icons or larger title
  inlineIcons?: boolean;
  columns?: GridColumns;
}
export const CardGrid = ({
  items,
  inlineIcons = true,
  columns = 3,
}: CardGridProps): JSX.Element => {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <CardGridItem
            {...item}
            inlineIcons={inlineIcons}
            columns={columns}
            key={item.title}
          />
        ))}
      </Row>
    </Container>
  );
};
