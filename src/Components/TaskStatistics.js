import { Card, Typography } from "antd";
import React from "react";
import { TaskCard } from "../ItemsData";
import StatisticsSection from "./StatisticsSection";
const { Text } = Typography;

function TaskStatistics() {
  return (
    <>
      <div className="TaskStatistics_main_container">
        <div className="task_section">
          <h2>Tasks for Today</h2>
          {TaskCard.map(
            ({ task_name, task_desciption, task_icon, border_color }) => {
              console.log("border_color", border_color);
              return (
                <Card
                  className="task_card"
                  style={{
                    borderLeft: border_color,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Text strong>{task_name} </Text>
                      <br />
                      <Text type="secondary">{task_desciption}</Text>
                    </div>
                    <div>{task_icon}</div>
                  </div>
                </Card>
              );
            }
          )}
        </div>
        <div className="statistics_section">
          <StatisticsSection />
        </div>
      </div>
    </>
  );
}

export default TaskStatistics;
