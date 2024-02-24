import { Card, Typography } from "antd";
import React from "react";
import { StatCard } from "../ItemsData";

const { Text, Title } = Typography;

function StatisticsSection() {
  return (
    <div className="statistics_section">
      <h2>statistics</h2>
      <div className="top_stat">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {StatCard.map(
            ({ task_status, stat_fig, stat_card_border, border_radius }) => {
              console.log("stat_card_border", stat_card_border);
              return (
                <div
                  style={{
                    border: stat_card_border,
                    borderRadius: border_radius,
                  }}
                >
                  <Card className="stat_card">
                    <Text
                      style={{
                        color: "purple",
                        fontSize: "20px",
                        fontWeight: 800,
                      
                      }}
                    >
                      {stat_fig}
                    </Text>
                    <br />
                    <Text type="secondary">{task_status}</Text>
                  </Card>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="bottom_stat">
        <div>
          <Title level={3} style={{ fontWeight: 700 }}>
            $ 9.99 <span style={{ fontSize: "15px" }}>p/m</span>
          </Title>
          <Title level={4}>Pro Plan</Title>
          <Text>More Productivity with Premium !</Text>
        </div>
      </div>
    </div>
  );
}

export default StatisticsSection;
