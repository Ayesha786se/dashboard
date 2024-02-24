import { Layout } from "antd";
import React from "react";

import UiContentSec from "../Components/UiContentSec";
import CalendarBox from "../Components/CalendarBox";

function DashBoard() {
  return (
    <div>
      <Layout className="content_layout">
        <UiContentSec />
        <CalendarBox />
      </Layout>
    </div>
  );
}

export default DashBoard;
