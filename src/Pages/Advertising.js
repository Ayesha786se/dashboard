import React from "react";
import { Card, Avatar, Typography, Button } from "antd";
import {
  AliwangwangFilled,
  GithubFilled,
  PinterestFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { AdData } from "../ItemsData";
const { Text, Title } = Typography;
// import "antd/dist/antd.css";
function Advertising() {
  return (
    <>
      <div
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: "20px" }}>
          <Title> CLOUD DUSK</Title>
          <Text style={{ marginBottom: "20px" }}>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            asperiores repudiandae dolorem. Aliquam perspiciatis laudantium non
            vel, dolorum sequi natus ipsa ducimus qui totam ipsum laboriosam,
            debitis possimus incidunt tenetur!
          </Text></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {AdData.map(({ Ad_name, Ad_title, Ad_des, ad_cover_image }) => {
            return (
              <Card
                style={{
                  width: 300,
                  textAlign: "center",
                  position: "relative",
                }}
                cover={<img className="ad_card_cover_img" src="" />}
              >
                <Avatar
                  size={64}
                  src="https://thumbs.dreamstime.com/z/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg"
                  style={{ position: "absolute", top: "120px", right: "106px" }}
                />
                <h3 style={{ marginTop: 10 }}>{Ad_name}</h3>
                <p>{Ad_title}</p>
                <p>{Ad_des} </p>
                <Button className="btn">Click Here</Button>
                <div>
                  <AliwangwangFilled
                    className="Ad_icon"
                    style={{ color: "blue" }}
                  />
                  &nbsp;
                  <PinterestFilled
                    className="Ad_icon"
                    style={{ color: "red" }}
                  />
                  &nbsp;
                  <TwitterCircleFilled
                    className="Ad_icon"
                    style={{ color: "skyblue" }}
                  />
                  &nbsp;
                  <GithubFilled
                    className="Ad_icon"
                    style={{ background: "white", color: "black" }}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Advertising;


/* callback function 

 when we to execute specific fnution after specic time we write it 
 setytime out call back 
 like
 function a(){
  setTimeout(function(){
    console.log(`this function a`)
    funb();
  },3000)
 }
 function funb(){
  iueyriqyui
 }
a();

uisng another function as an argumt is


*/
