import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import { PlusCircleFilled } from "@ant-design/icons";
import { Progress, Typography } from "antd";
const { Text } = Typography;

//review cards data
export const ReviewCardData = [
  {
    bg: "purple",
    textColor: "white",
    title: (
      <p style={{ marginTop: "-15px" }}>
        Web
        <br /> <br />
        Development
      </p>
    ),
    task: "10 Tasks",
    percentage: "90%",
    percentage_bar: (
      <Progress
        percent={90}
        type="line"
        strokeColor="white"
        trailColor="gray"
      />
    ),
  },

  {
    bg: "#95D0D4",
    textColor: "white",
    title: (
      <p style={{ marginTop: "-15px" }}>
        Mobile App
        <br /> <br />
        Design
      </p>
    ),
    task: "15 Tasks",
    percentage: "78%",
    percentage_bar: (
      <Progress
        percent={78}
        type="line"
        strokeColor="white"
        trailColor="gray"
      />
    ),
  },
  {
    bg: "#FE7E51",
    textColor: "white",
    title: (
      <p style={{ marginTop: "-15px" }}>
        FaceBook Brand
        <br /> <br />
        UI Kit
      </p>
    ),
    task: "8 Tasks",
    percentage: "45%",
    percentage_bar: (
      <Progress
        percent={45}
        type="line"
        strokeColor="white"
        trailColor="gray"
      />
    ),
  },
];

// Task Items card data

export const TaskCard = [
  {
    border_color: "5px solid orange",
    task_name: "Mobile App",
    task_desciption: "Prepare Figma file",
    task_icon: <IoMdRadioButtonOff />,
  },
  {
    border_color: "5px solid purple",
    task_name: "UX FireFrames ",
    task_desciption: "Design UX FireFrames ",
    task_icon: <IoMdRadioButtonOff />,
  },
  {
    border_color: "5px solid orange",
    task_name: "Mobile App",
    task_desciption: "Research",
    task_icon: <IoMdRadioButtonOn />,
  },
];

// stat card data

export const StatCard = [
  {
    stat_fig: "28h",
    task_status: "Tracked Time",
  },
  {
    stat_fig: "18",
    task_status: "Finished tasks ",
  },
  {
    stat_fig: (
      <PlusCircleFilled
        style={{
          color: "white",
          background: "black",
          borderRadius: "50%",
        }}
      />
    ),
    task_status: "New Widget",
    // stat_card_border: "2px dotted #ccc",
    border_radius: "10px",
  },
];

// calender data

export const CalenderData = [
  {
    cal_date: "Oct 20, 2021",
    cal_time1: "10:00",
    cal_time2: "13:20",
    cal_name1: "Dribble shot",
    cal_description1: "Facebook Brand",
    cal_name2: "Design",
    cal_description2: "Task Management",
    purple_pipe: "skyblue",
    orange_pipe: "orange",
  },

  {
    cal_date: "Oct 21, 2021",
    cal_time1: "10:00",
    cal_time2: "13:20",
    cal_time3: "10:00",
    cal_name1: "UX Research",
    cal_description1: "Sleep App",
    cal_name2: "Design",
    cal_description2: "Task Management",
    cal_name3: "Dribble shot",
    cal_description3: "Meet Up",
    purple_pipe: "purple",
    orange_pipe: "orange",
    skyblue_pipe: "skyblue",
  },
  {
    cal_date: "Oct 20, 2021",
    cal_time1: "10:00",
    cal_time2: "11:00",
    cal_name1: "Dribble shot",
    cal_description1: "Meet Up",
    cal_name2: "Design",
    cal_description2: "Mobile App",
    purple_pipe: "skyblue",
    orange_pipe: "orange",
  },
];

// advertisement card

export const AdData = [
  {
    Ad_name: "Sara Hidaya",
    Ad_title: "CLOUD DUSK",
    Ad_des:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus",
    ad_cover_image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b103e875-5453-43cc-ba6f-6b65268034cc/dfduqrb-f9d4f3e8-898c-4b99-a79d-ca8268e23a2f.png/v1/fill/w_1280,h_1871,q_80,strp/woman_in_neon_acrylic_paint_by_bkkillustrator_dfduqrb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxMDNlODc1LTU0NTMtNDNjYy1iYTZmLTZiNjUyNjgwMzRjY1wvZGZkdXFyYi1mOWQ0ZjNlOC04OThjLTRiOTktYTc5ZC1jYTgyNjhlMjNhMmYucG5nIiwiaGVpZ2h0IjoiPD0xODcxIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvYjEwM2U4NzUtNTQ1My00M2NjLWJhNmYtNmI2NTI2ODAzNGNjXC9ia2tpbGx1c3RyYXRvci00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.XgGva4iBw07sLmATxHjkBAqyNXMLp2dj4NItZlNmpmQ",
  },
  {
    Ad_name: "Emma Grout",
    Ad_title: "Pixey Hollow",
    Ad_des:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus",
    ad_cover_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7HdpDhPVFmsXAPB0sV9OxjFxpCSZA7nwDjGcXQGo5E-I2_NsW-y0Q0I74Oe4wfRGzN4&usqp=CAU",
  },
  {
    Ad_name: "Jennifer",
    Ad_title: "CLOUD DUSK",
    Ad_des:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus",
    ad_cover_image:
      "https://thumbs.dreamstime.com/z/abstrakte-neon-girl-line-art-generative-hilfe-hochqualit%C3%A4tsdarstellung-267787186.jpg",
  },
];
