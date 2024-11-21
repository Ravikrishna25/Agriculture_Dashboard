// import { useState } from "react";
// import {
//   Row,
//   Col,
//   Card,
//   Button,
//   Descriptions,
//   Avatar,
//   Upload,
//   message,
// } from "antd";
// import {
//   VerticalAlignTopOutlined,
// } from "@ant-design/icons";
// import temperatur from "../assets/images/temperatur.jpeg";
// import humidity from "../assets/images/humidity.jpeg";
// import soil from "../assets/images/soil.jpeg";
// import rain from "../assets/images/rain.jpeg";
// import ph from "../assets/images/ph.jpeg";
// import wind from "../assets/images/wind.jpeg";

// function Sensor() {
//   const [imageURL, setImageURL] = useState(false);
//   const [, setLoading] = useState(false);

//   const beforeUpload = (file) => {
//     const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//     if (!isJpgOrPng) {
//       message.error("You can only upload JPG/PNG file!");
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//       message.error("Image must be smaller than 2MB!");
//     }
//     return isJpgOrPng && isLt2M;
//   };

//   const handleChange = (info) => {
//     if (info.file.status === "uploading") {
//       setLoading(true);
//       return;
//     }
//     if (info.file.status === "done") {
//       const reader = new FileReader();
//       reader.addEventListener("load", () => {
//         setImageURL(reader.result);
//         setLoading(false);
//       });
//       reader.readAsDataURL(info.file.originFileObj);
//     }
//   };

//   const uploadButton = (
//     <div className="ant-upload-text font-semibold text-dark">
//       <VerticalAlignTopOutlined style={{ width: 20, color: "#000" }} />
//       <div>Upload New Project</div>
//     </div>
//   );

//   const sensors = [
//     {
//       id: "S001",
//       name: "Temperature Sensor",
//       description: "Measures and monitors the temperature levels in the environment.",
//       zone: "Zone A",
//       status: "Active",
//       lastUpdate: "2024-11-19",
//       img: temperatur,
//     },
//     {
//       id: "S002",
//       name: "Humidity Sensor",
//       description: "Tracks and measures the humidity levels in the environment.",
//       zone: "Zone B",
//       status: "Inactive",
//       lastUpdate: "2024-11-18",
//       img: humidity,
//     },
//     {
//       id: "S003",
//       name: "Soil Moisture Sensor",
//       description: "Monitors the moisture content in the soil for optimal growth.",
//       zone: "Zone C",
//       status: "Active",
//       lastUpdate: "2024-11-20",
//       img: soil,
//     },
//     {
//       id: "S004",
//       name: "PH Sensor",
//       description: "Monitors and measures the pH level of the soil or water.",
//       zone: "Zone A",
//       status: "Active",
//       lastUpdate: "2024-11-20",
//       img: ph,
//     },
//     {
//       id: "S005",
//       name: "Rainfall Sensor",
//       description: "Detects and measures the amount of rainfall in the area.",
//       zone: "Zone B",
//       status: "Inactive",
//       lastUpdate: "2024-11-18",
//       img: rain,
//     },
//     {
//       id: "S006",
//       name: "Wind Speed Sensor",
//       description: "Tracks and measures the wind speed levels in the environment.",
//       zone: "Zone C",
//       status: "Active",
//       lastUpdate: "2024-11-19",
//       img: wind,
//     },
//   ];

//   return (
//     <>
//       <Row gutter={[24, 0]}>
//         {sensors.map((sensor, index) => (
//           <Col span={24} md={8} key={index} className="mb-24">
//             <Card
//               bordered={false}
//               className="header-solid h-full"
//               title={<h6 className="font-semibold m-0">{sensor.name}</h6>}
//             >
//               <ul className="list settings-list">
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   <img src={sensor.img} alt={`${sensor.name}`} />
//                 </div>
//                 <li>
//                   <h6 className="list-header text-sm text-muted m-0">{sensor.name}</h6>
//                 </li>
//                 <p className="text-dark">
//               {" "}
//               Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer
//               is no. If two equally difficult paths, choose the one more painful
//               in the short term (pain avoidance is creating an illusion of
//               equality).{" "}
//             </p>
//             <hr className="my-25" />
//                 <Descriptions>
//                   <Descriptions.Item label="Sensor ID" span={3}>
//                     {sensor.id}
//                   </Descriptions.Item>
//                   <Descriptions.Item label="Name" span={3}>
//                     {sensor.name}
//                   </Descriptions.Item>
//                   <Descriptions.Item label="Zone" span={3}>
//                     {sensor.zone}
//                   </Descriptions.Item>
//                   <Descriptions.Item label="Status" span={3}>
//                     <p className={sensor.status === "Active" ? "bnb2" : "red-text"}>
//                       {sensor.status}
//                     </p>
//                   </Descriptions.Item>
//                   <Descriptions.Item label="Last Update" span={3}>
//                     {sensor.lastUpdate}
//                   </Descriptions.Item>
//                   <Descriptions.Item label="Actions" span={3}>
//                     <Button type="link">Edit</Button>
//                     <Button type="link" danger>
//                       Delete
//                     </Button>
//                     <Button type="link">View Details</Button>
//                   </Descriptions.Item>
//                 </Descriptions>
//               </ul>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       <Card
//         bordered={false}
//         className="header-solid mb-24"
//         title={
//           <>
//             <h6 className="font-semibold">Projects</h6>
//             <p>Manage your sensor data projects</p>
//           </>
//         }
//       >
//         <Row gutter={[24, 24]}>
//           <Col span={24} md={12} xl={6}>
//             <Upload
//               name="avatar"
//               listType="picture-card"
//               className="avatar-uploader projects-uploader"
//               showUploadList={false}
//               action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//               beforeUpload={beforeUpload}
//               onChange={handleChange}
//             >
//               {imageURL ? (
//                 <img src={imageURL} alt="avatar" style={{ width: "100%" }} />
//               ) : (
//                 uploadButton
//               )}
//             </Upload>
//           </Col>
//         </Row>
//       </Card>
//     </>
//   );
// }

// export default Sensor;
import { useState } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Descriptions,
  Avatar,
  Upload,
  message,
  Modal,
  Carousel,
} from "antd";
import { useRef } from "react";

import {
  VerticalAlignTopOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import temperatur from "../assets/images/temperatur.jpeg";
import humidity from "../assets/images/humidity.jpeg";
import soil from "../assets/images/soil.jpeg";
import rain from "../assets/images/rain.jpeg";
import ph from "../assets/images/ph.jpeg";
import wind from "../assets/images/wind.jpeg";
import Agri1 from "../assets/images/Agri1.jpg";
import Agri2 from "../assets/images/Agri2.jpg";
import Agri3 from "../assets/images/Agri3.jpg";
import next from "../assets/images/next.png";
import left from "../assets/images/left.png";

function Sensor() {
  const carouselRef = useRef(null);
  const [imageURL, setImageURL] = useState(false);
  const [, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSensor, setSelectedSensor] = useState(null);

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must be smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageURL(reader.result);
        setLoading(false);
      });
      reader.readAsDataURL(info.file.originFileObj);
    }
  };

  const uploadButton = (
    <div className="ant-upload-text font-semibold text-dark">
      <VerticalAlignTopOutlined style={{ width: 20, color: "#000" }} />
      <div>Upload New Project</div>
    </div>
  );

  const sensors = [
    {
      id: "S001",
      name: "Temperature Sensor",
      description:
        "Measures and monitors the temperature levels in the environment.",
      zone: "Zone A",
      status: "Active",
      lastUpdate: "2024-11-19",
      img: temperatur,
    },
    {
      id: "S002",
      name: "Humidity Sensor",
      description:
        "Tracks and measures the humidity levels in the environment.",
      zone: "Zone B",
      status: "Inactive",
      lastUpdate: "2024-11-18",
      img: humidity,
    },
    {
      id: "S003",
      name: "Soil Moisture Sensor",
      description:
        "Monitors the moisture content in the soil for optimal growth.",
      zone: "Zone C",
      status: "Active",
      lastUpdate: "2024-11-20",
      img: soil,
    },
    {
      id: "S004",
      name: "PH Sensor",
      description: "Monitors and measures the pH level of the soil or water.",
      zone: "Zone A",
      status: "Active",
      lastUpdate: "2024-11-20",
      img: ph,
    },
    {
      id: "S005",
      name: "Rainfall Sensor",
      description: "Detects and measures the amount of rainfall in the area.",
      zone: "Zone B",
      status: "Inactive",
      lastUpdate: "2024-11-18",
      img: rain,
    },
    {
      id: "S006",
      name: "Wind Speed Sensor",
      description:
        "Tracks and measures the wind speed levels in the environment.",
      zone: "Zone C",
      status: "Active",
      lastUpdate: "2024-11-19",
      img: wind,
    },
  ];

  const images = [Agri1, Agri2, Agri3];

  const showModal = (sensor) => {
    setSelectedSensor(sensor);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedSensor(null);
  };

  return (
    <>
      <Row gutter={[24, 0]}>
        {sensors.map((sensor, index) => (
          <Col span={24} md={8} key={index} className="mb-24">
            <Card
              bordered={false}
              className="header-solid h-full"
              title={<h6 className="font-semibold m-0">{sensor.name}</h6>}
            >
              <ul className="list settings-list">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={sensor.img} alt={`${sensor.name}`} />
                </div>
                <li>
                  <h6 className="list-header text-sm text-muted m-0">
                    {sensor.name}
                  </h6>
                </li>
                <p className="text-dark">{sensor.description}</p>
                <hr className="my-25" />
                <Descriptions>
                  <Descriptions.Item label="Sensor ID" span={3}>
                    {sensor.id}
                  </Descriptions.Item>
                  <Descriptions.Item label="Name" span={3}>
                    {sensor.name}
                  </Descriptions.Item>
                  <Descriptions.Item label="Zone" span={3}>
                    {sensor.zone}
                  </Descriptions.Item>
                  <Descriptions.Item label="Status" span={3}>
                    <p
                      className={
                        sensor.status === "Active" ? "bnb2" : "red-text"
                      }
                    >
                      {sensor.status}
                    </p>
                  </Descriptions.Item>
                  <Descriptions.Item label="Last Update" span={3}>
                    {sensor.lastUpdate}
                  </Descriptions.Item>
                  <Descriptions.Item label="Actions" span={3}>
                    <Button type="link">Edit</Button>
                    <Button type="link" danger>
                      Delete
                    </Button>
                    <Button type="link" onClick={() => showModal(sensor)}>
                      View Details
                    </Button>
                  </Descriptions.Item>
                </Descriptions>
              </ul>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title={selectedSensor?.name}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {/* <Carousel autoplay>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`carousel-image-${index}`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Carousel> */}
        <Carousel
          ref={carouselRef}
          dots={false}
          autoplay
          arrows
          prevArrow={
            // <Button
            //   shape="circle"
            //   icon={<LeftOutlined />}
            //   // className="custom-carousel-arrow left-arrow"
            // />
            <img src = {left} />
          }
          nextArrow={
            <img src = {next} />
          }
        >
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Carousel Image ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Carousel>

        <p style={{ marginTop: "16px" }}>{selectedSensor?.description}</p>
      </Modal>
    </>
  );
}

export default Sensor;
