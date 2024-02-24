import React from "react";
import Typography from "antd/es/typography/Typography";
const { Text } = Typography;

function UiLogo() {
  return (
    <div className="siteLogo">
      <span className="skyblue logo-bar"></span>
      <span className="orange logo-bar"></span>
      <span className="purple logo-bar"></span>
      <Text style={{ fontWeight: "800", fontSize: "15px" }}>Chaart</Text>
    </div>
  );
}

export default UiLogo;
