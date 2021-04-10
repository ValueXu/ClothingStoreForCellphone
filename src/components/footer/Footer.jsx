import React, { Component } from "react";

import "./Footer.less";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span className="name">BELLERIS在线服饰商店</span>
        <span className="supporter">
          技术支持&版权所有：<a href="https://github.com/ValueXu/">许X</a>
        </span>
      </div>
    );
  }
}
