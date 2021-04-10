import React, { Component } from "react";

import {
  MenuOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./Header.less";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <MenuOutlined className="header-icon" />
          <SearchOutlined className="header-icon" />
        </div>
        <div className="header-center">BELLERIS</div>
        <div className="header-right">
          <UserOutlined className="header-icon" />
          <ShoppingOutlined className="header-icon" />
        </div>
      </div>
    );
  }
}
