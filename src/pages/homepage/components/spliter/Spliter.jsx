import { DownOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import { connect } from "react-redux";

import "./Spliter.less";

class Spliter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="spliter">
        <div className="sorter" onClick={this.props.openDrawer.bind(this)}>
          {this.props.sorter}&nbsp;&nbsp;
          <DownOutlined style={{ color: "rgba(0,0,0,0.25)" }} />
        </div>
        <div className="counts">{this.props.counts} results</div>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return { sorter: state.spliter, counts: state.results.length };
};

export default connect(stateToProps)(Spliter);
