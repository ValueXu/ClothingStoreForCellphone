import React, { Component } from "react";

import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export default class Nomatch extends Component {
  render() {
    return (
      <div className="nomatch">
        <Result
          status="404"
          title="404"
          subTitle="抱歉，您访问的页面不存在"
          extra={
            <Link to='/'>
              <Button type="primary">回到首页</Button>
            </Link>
          }
        />
      </div>
    );
  }
}
