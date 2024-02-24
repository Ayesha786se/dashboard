import {  Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

import UiReviewCards from "./UiReviewCards";

import { SearchOutlined } from "@ant-design/icons";
import TaskStatistics from "./TaskStatistics";

function UiContentSec() {
  return (
    <div>
      {/* <Layout style={{ background: "white" }}> */}
      <Content
        style={{
          background: "#fff",
          width: "800px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            background: "white",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "25px",
          }}
        >
          <div>
            {" "}
            <SearchOutlined style={{ marginRight: "20px", fontSize: 20 }} />
            <button
              type="text"
              style={{
                border: "none",
                borderRadius: "10px",
                padding: "13px",
                color: "white",
                background: "black",
                // marginRight: "60px",
              }}
            >
              Add New Project
            </button>
          </div>
          <div>
            <Typography.Text
              strong
              style={{
                color: "purple",

                fontSize: "20px",
                fontFamily: "sans-serif",
                fontWeight: 800,
              }}
            >
              Hello, Sara
            </Typography.Text>
            <Typography strong type="secondary">
              Today's Monday, 20 October 2021
            </Typography>
          </div>
        </div>{" "}
        <UiReviewCards />
        <TaskStatistics />
      </Content>
      {/* </Layout> */}
    </div>
  );
}

export default UiContentSec;
