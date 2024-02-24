import { Layout } from "antd";
import UiSideBar from "./UiSideBar";
import { Outlet } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import CalenderBox from "./CalendarBox";
function UiLayout() {
  //   return (
  //     <div style={{ padding: 20 }}>
  //       <Layout style={{ height: "100vh" }}>
  //         <UiSideBar />
  //         <Layout className="content_layout">
  //           <UiContentSec>
  //             <Outlet />
  //           </UiContentSec>
  //           {/* <UiCalender /> */}
  //           <CalendarBox />
  //         </Layout>
  //       </Layout>
  //     </div>
  //   );
  // }
  return (
    <>
      <Layout style={{ padding: 30 }}>
        <Layout>
          <UiSideBar />
          <Content className="content_layout">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default UiLayout;
