import { Spin } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  bestMatch,
  newest,
  priceLowToHigh,
  priceHighToLow,
} from "../../../../redux/action/spliterActions";

import "./DrawerSelections.less";

class DrawerSelections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinning: false,
    };
  }

  onClick = (e) => {
    const { dispatch } = this.props;
    const type = e.target.id;
    let needCLoseDraw=true;
    switch (type) {
      case "best-match": {
        dispatch(bestMatch());
        break;
      }
      case "newest": {
        dispatch(newest());
        break;
      }
      case "price-low-to-high": {
        dispatch(priceLowToHigh());
        break;
      }
      case "price-high-to-low": {
        dispatch(priceHighToLow());
        break;
      }
      default: {
        needCLoseDraw=false;
        break;
      }
    }
    if(needCLoseDraw){
      this.props.closeDrawer();
    }
  };

  render() {
    return (
      <div className="drawer-selections">
        <Spin
          spinning={this.state.spinning}
          onClick={this.onClick}
          className="drawer-spinner"
        >
          <div className="drawer-item-container">
            <div id="best-match">Best Match</div>
          </div>
          <div className="drawer-item-container">
            <div id="newest">Newest</div>
          </div>
          <div className="drawer-item-container">
            <div id="price-low-to-high">Price - Low To High</div>
          </div>
          <div className="drawer-item-container">
            <div id="price-high-to-low">Price - High To Low</div>
          </div>
        </Spin>
      </div>
    );
  }
}
export default connect()(DrawerSelections);
