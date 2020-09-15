import React, { Component } from "react";
import ShopData from "./ShopData";
import { CollectionPreview } from "../../collection-preview/collection-preview.comp";
export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collection) => (
          <CollectionPreview
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}
