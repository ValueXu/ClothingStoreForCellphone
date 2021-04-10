import { Drawer } from "antd";
import React, { Component } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import DrawerSelections from "./components/drawerSelections/DrawerSelections";
import SearchTitle from "./components/searchTitle/SearchTitle";
import ShowResults from "./components/showResults/ShowResults";
import Spliter from "./components/spliter/Spliter";

import "./Homepage.less";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerVisible: false,
    };
  }

  openDrawer = () => {
    this.setState({
      isDrawerVisible: true,
    });
  };

  closeDrawer = () => {
    this.setState({
      isDrawerVisible: false,
    });
  };

  render() {
    return (
      <div className="homepage">
        <div className="header-wrapper">
          <Header />
        </div>
        <div className="content-wrapper">
          <div className="content">
            <SearchTitle />
            <Spliter openDrawer={this.openDrawer} />
            <ShowResults />
          </div>
          <div className="footer-wrapper">
            <Footer />
          </div>
          <Drawer
            title="Sort"
            visible={this.state.isDrawerVisible}
            placement="bottom"
            onClose={this.closeDrawer}
            height={"50vh"}
            key="drawer"
            bodyStyle={{ padding: 0 }}
          >
            <DrawerSelections closeDrawer={this.closeDrawer} />
          </Drawer>
        </div>
      </div>
    );
  }
}

export default Homepage;
