import { BellFilled } from "@ant-design/icons";
import { Space, Typography, Dropdown } from "antd";
import { CalenderData } from "../ItemsData";
const { Text } = Typography;
const items = [
  {
    label: "Submit and continue",
    key: "1",
  },
];
function CalendarBox() {
  return (
    <>
      <div
        style={{
          // background: "#FAF5EE",
          marginLeft: "50px",
          // background: "white",
        }}
      >
        <Space className="calender_top">
          <Typography
            style={{ color: "purple", fontWeight: 800, fontSize: "15px" }}
          >
            Calender
          </Typography>
          <BellFilled
            className=".bell_icon"
            style={{
              padding: "10px",
              background: "white",
              borderRadius: "10px",
            }}
          />
        </Space>{" "}
        {/* calander data maping */}
        {CalenderData.map(
          ({
            cal_date,
            cal_time1,
            cal_time2,
            cal_time3,
            cal_name1,
            cal_name2,
            cal_name3,
            cal_description1,
            cal_description2,
            cal_description3,
            purple_pipe,
            orange_pipe,
            skyblue_pipe,
          }) => {
            return (
              <>
                <Space className="date_dropdown">
                  <Text type="secondary"> {cal_date}</Text>

                  <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                    <span style={{ fontSize: "25px" }}>...</span>
                  </Dropdown>
                </Space>
                <br />
                <br />
                <Space className="time_content">
                  <Typography>{cal_time1}</Typography>
                  <span
                    style={{ background: purple_pipe }}
                    className="calender_time_pipe"
                  ></span>
                  <Typography>
                    {cal_name1} <br />
                    <span style={{ color: "purple", fontWeight: "700" }}>
                      {cal_description1}{" "}
                    </span>
                  </Typography>
                </Space>
                <br />
                <br />
                <Space className="time_content">
                  <Typography>{cal_time2}</Typography>
                  <span
                    className="calender_time_pipe"
                    style={{ background: orange_pipe }}
                  ></span>
                  <Typography>
                    {cal_name2} <br />
                    <span style={{ color: "purple", fontWeight: "700" }}>
                      {cal_description2}{" "}
                    </span>
                  </Typography>
                </Space>
                <br />
                <br />
                <Space className="time_content">
                  <Typography>{cal_time3}</Typography>
                  <span
                    className="calender_time_pipe"
                    style={{ background: skyblue_pipe }}
                  ></span>
                  <Typography>
                    {cal_name3} <br />
                    <span style={{ color: "purple", fontWeight: "700" }}>
                      {cal_description3}{" "}
                    </span>
                  </Typography>
                </Space>
                <br />
                <br />
              </>
            );
          }
        )}
      </div>
      <br />
    </>
  );
}

export default CalendarBox;
