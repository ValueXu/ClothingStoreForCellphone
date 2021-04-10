import React, { Component } from "react";
import { connect } from "react-redux";

import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
} from "react-virtualized";
import ImageMeasurer from "react-virtualized-image-measurer";

import "./ShowResults.less";

class ShowResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fontSize = parseInt(
    window.getComputedStyle(document.body).fontSize.match(/[0-9]+/g)[0]
  );

  vw = parseInt(
    window.getComputedStyle(document.body).width.match(/[0-9]+/g)[0]
  );

  columWidth = this.vw / 2 - 2 * this.fontSize;

  defaultHeight = 250;

  defaultWidth = this.columWidth;

  renderResults = () => {
    return;
  };

  cache = new CellMeasurerCache({
    defaultHeight: this.defaultHeight,
    defaultWidth: this.defaultWidth,
    fixedWidth: true,
  });

  cellPositioner = createMasonryCellPositioner({
    cellMeasurerCache: this.cache,
    columnCount: 2,
    columnWidth: this.columWidth,
    spacer: this.fontSize,
  });
  itemsWithSizes = [];
  cellRenderer = ({ index, key, parent, style }) => {
    const { item, size } = this.itemsWithSizes[index];
    const height = parseInt(
      this.columWidth * (size.height / size.width) || this.defaultHeight
    );
    return (
      <CellMeasurer cache={this.cache} index={index} key={key} parent={parent}>
        <div className="product-wrapper" style={style}>
          <img
            src={item.image}
            alt={item.title}
            style={{ height: height, width: this.columnWidth }}
          />
          <div className="product-title">{item.title}</div>
          <div className="product-prices">
            <span className="product-price">${item.price}</span>
            <span className="product-beforeprice">${item.beforePrice}</span>
          </div>
        </div>
      </CellMeasurer>
    );
  };
  renderMasonry = (itemsWithSizes) => {
    this.itemsWithSizes = itemsWithSizes;
    return (
      <Masonry
      className='masonry'
        cellCount={itemsWithSizes.length}
        cellMeasurerCache={this.cache}
        cellPositioner={this.cellPositioner}
        cellRenderer={this.cellRenderer}
        height={510}
        width={document.body.clientWidth}
        style={{ width: "100%"}}
      />
    );
  };

  render() {
    const noCacheList = this.props.results.map((item) => ({
      ...item,
      image: item.imgSrc,
      imgSrc: undefined,
    }));
    return (
      <div className="showresults">
        <ImageMeasurer
          items={noCacheList}
          image={(item) => item.image}
          defaultHeight={this.defaultHeight}
          defaultWidth={this.defaultWidth}
        >
          {({ itemsWithSizes }) => this.renderMasonry(itemsWithSizes)}
        </ImageMeasurer>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return { results: state.results };
};

export default connect(stateToProps)(ShowResults);
