import { EllipsisOutlined, LineOutlined } from "@ant-design/icons";
import { Avatar, Card, Tooltip, Typography } from "antd";
import { ReviewCardData } from "../ItemsData";
const { Text } = Typography;

function UiReviewCards() {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        {ReviewCardData.map(
          ({ title, task, percentage, textColor, bg, percentage_bar }) => {
            return (
              <Card
                style={{
                  flex: 2,
                  background: bg,
                  fontSize: 16,
                  borderRadius: "20px",
                  marginLeft: "20px",
                  marginRight: "px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Avatar.Group
                    className="mask"
                    maxCount={2}
                    maxPopoverTrigger="click"
                    size="small"
                    maxStyle={{
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                      cursor: "pointer",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <Avatar src="https://media.istockphoto.com/id/1487080799/photo/woman-at-home-reading-a-letter-in-the-mail.webp?s=1024x1024&w=is&k=20&c=Izs93GVv-LRKLCS0zLA16JNElqWvWHrdxO_q90t4Kn0=">
                      {" "}
                      K{" "}
                    </Avatar>

                    <Tooltip title="Ant User" placement="top">
                      <Avatar src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </Tooltip>
                    <Tooltip title="Ant User" placement="top">
                      <Avatar src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </Tooltip>
                    <Avatar src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <Avatar src="https://i.pravatar.cc/150?img=5" />
                    <Avatar src="https://i.pravatar.cc/150?img=5" />
                  </Avatar.Group>
                  <div>
                    <EllipsisOutlined
                      rotate={90}
                      style={{ color: "white", fontSize: "20px" }}
                    />
                  </div>
                </div>

                <br />

                <Typography.Text
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: 0.7,
                    color: textColor,
                  }}
                >
                  {title}
                </Typography.Text>

                <br />
                <div className="bar">
                  <Text>
                    {task} <LineOutlined rotate={90} /> {""}
                    {percentage}
                  </Text>

                  {percentage_bar}
                </div>
              </Card>
            );
          }
        )}
      </div>
    </>
  );
}

export default UiReviewCards;
