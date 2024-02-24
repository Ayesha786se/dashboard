import { Card, Space, Typography, Dropdown } from "antd";
const { Title } = Typography;
const items = [
  {
    label: "Submit and continue",
    key: "1",
  },
];
function CalendarBox() {
  return (
    <div>
      <Card>
        <Title level={5} type="secondary">
          Oct 20,2021
        </Title>
        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
          <span>bottomLeft</span>
        </Dropdown>

        <Dropdown.Button type="primary" menu={{ items }}></Dropdown.Button>
        <Space className="time_content">
          <Typography>10:00</Typography>
          <span className="calender_time_pipe"></span>
          <Typography>
            Dribble shot <br />
            <span style={{ color: "purple", fontWeight: "700" }}>
              FaceBook Brand{" "}
            </span>
          </Typography>
        </Space>
        <br />
        <br />
        <Space className="time_content">
          <Typography>10:00</Typography>
          <span className="calender_time_pipe"></span>
          <Typography>
            Dribble shot <br />
            <span style={{ color: "purple", fontWeight: "700" }}>
              FaceBook Brand{" "}
            </span>
          </Typography>
        </Space>
      </Card>
    </div>
  );
}

export default CalendarBox;
