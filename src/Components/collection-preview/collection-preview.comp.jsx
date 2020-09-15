import React from "react";
import "./collection-preview.styles.scss";
import { CollectionItem } from "../collection-item/collection-item.component";
export const CollectionPreview = ({ title, items }) => {
  return (
    <div className="preview-collection">
      <h1 className="heading">{title}</h1>
      <div className="preview">
        {items
          .filter((item) => item.id < 5)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};
