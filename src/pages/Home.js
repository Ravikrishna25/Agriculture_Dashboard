
import { useState } from "react";

import {
  Card,
  Col,
  Row,
  Typography,
  Tooltip,
  Progress,
  Upload,
  message,
  Button,
  Timeline,
  Radio,
} from "antd";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  RightOutlined,
} from "@ant-design/icons";
import img from "../assets/images/map1.jpg"
import Paragraph from "antd/lib/typography/Paragraph";

import Echart from "../components/chart/EChart";
import LineChart from "../components/chart/LineChart";

import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava4 from "../assets/images/logo-spotify.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
import card from "../assets/images/info-card-1.jpg";

function Home() {
  const { Title, Text } = Typography;

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  const [reverse, setReverse] = useState(false);

  const temperature = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M10 2C9.44772 2 9 2.44772 9 3V12.5C8.059 13.2436 7.5 14.3284 7.5 15.5C7.5 17.433 9.067 19 11 19C12.933 19 14.5 17.433 14.5 15.5C14.5 14.3284 13.941 13.2436 13 12.5V3C13 2.44772 12.5523 2 12 2H10Z"
        fill="#fff"
      />
      <circle
        cx="11"
        cy="15.5"
        r="1.5"
        fill="#fff"
      />
    </svg>,
  ];
  

  
  const droplet = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M10 2C10 2 5 8 5 12C5 14.7614 7.23858 17 10 17C12.7614 17 15 14.7614 15 12C15 8 10 2 10 2ZM10 15C8.34315 15 7 13.6569 7 12C7 9.84315 10 4.94427 10 4.94427C10 4.94427 13 9.84315 13 12C13 13.6569 11.6569 15 10 15Z"
        fill="#fff"
      />
    </svg>,
  ];
  
  const waterDroplets = [
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      {/* First droplet */}
      <path
        d="M12 2C12 2 10 5 10 7C10 8.10457 10.8954 9 12 9C13.1046 9 14 8.10457 14 7C14 5 12 2 12 2Z"
        fill="#fff"
      />
      {/* Second droplet */}
      <path
        d="M7 9C7 9 6 11 6 12C6 12.5523 6.44772 13 7 13C7.55228 13 8 12.5523 8 12C8 11 7 9 7 9Z"
        fill="#fff"
      />
      {/* Third droplet */}
      <path
        d="M17 9C17 9 16 11 16 12C16 12.5523 16.4477 13 17 13C17.5523 13 18 12.5523 18 12C18 11 17 9 17 9Z"
        fill="#fff"
      />
      {/* Fourth droplet */}
      <path
        d="M10 15C10 15 9 17 9 18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18C11 17 10 15 10 15Z"
        fill="#fff"
      />
      {/* Fifth droplet */}
      <path
        d="M14 15C14 15 13 17 13 18C13 18.5523 13.4477 19 14 19C14.5523 19 15 18.5523 15 18C15 17 14 15 14 15Z"
        fill="#fff"
      />
    </svg>,
  ];
  
  const soil = [
    <svg
      width="44"
      height="24"
      viewBox="0 0 44 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      {/* First wave (top layer) */}
      <path
        d="M0 12C4 8 8 10 12 10C16 10 20 8 24 10C28 12 32 8 36 10C40 12 44 10 44 10V24H0V12Z"
        fill="#fff"
      />
      {/* Second wave (bottom layer) */}
      <path
        d="M0 20C4 18 8 22 12 20C16 18 20 22 24 20C28 18 32 22 36 20C40 18 44 22 44 22V24H0V20Z"
        fill="#fff"
      />
    </svg>,
  ];
  
  const count = [
    {
      today: "Temperature",
      title: "32ºC",
      persent: "+30%",
      icon: temperature,
      bnb: "bnb2",
    },
    {
      today: "Humidity",
      title: "300",
      persent: "-10%",
      icon: droplet,
      bnb: "redtext",
    },
    {
      today: "Rainfall Level",
      title: "200",
      persent: "-10%",
      icon: waterDroplets,
      bnb: "redtext",
    },
    {
      today: "Soil Ph",
      title: "6.5",
      persent: "-20%",
      icon: soil,
      bnb: "redtext",
    },
  ];

  const list = [
    {
      img: ava1,
      Title: "Soft UI Shopify Version",
      bud: "$14,000",
      progress: <Progress percent={60} size="small" />,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Alexander Smith">
            <img className="tootip-img" src={team3} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Jessica Doe">
            <img className="tootip-img" src={team4} alt="" />
          </Tooltip>
        </div>
      ),
    },
    {
      img: ava2,
      Title: "Progress Track",
      bud: "$3,000",
      progress: <Progress percent={10} size="small" />,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
        </div>
      ),
    },
    {
      img: ava3,
      Title: "Fix Platform Errors",
      bud: "Not Set",
      progress: <Progress percent={100} size="small" status="active" />,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Alexander Smith">
            <img className="tootip-img" src={team3} alt="" />
          </Tooltip>
        </div>
      ),
    },
    {
      img: ava4,
      Title: "Launch new Mobile App",
      bud: "$20,600",
      progress: <Progress percent={100} size="small" status="active" />,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
        </div>
      ),
    },
    {
      img: ava5,
      Title: "Add the New Landing Page",
      bud: "$4,000",
      progress: <Progress percent={80} size="small" />,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Alexander Smith">
            <img className="tootip-img" src={team3} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Jessica Doe">
            <img className="tootip-img" src={team4} alt="" />
          </Tooltip>
        </div>
      ),
    },

    {
      img: ava6,
      Title: "Redesign Online Store",
      bud: "$2,000",
      progress: (
        <Progress
          percent={100}
          size="small"
          status="exception"
          format={() => "Cancel"}
        />
      ),
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
        </div>
      ),
    },
  ];

  const timelineList = [
    {
      title: "Plowing and tiling",
      time: "09 JUN 7:20 PM",
      color: "green",
    },
    {
      title: "Seed Selection",
      time: "08 JUN 12:20 PM",
      color: "green",
    },
    {
      title: "Sugarcane Sowing",
      time: "04 JUN 3:10 PM",
    },
    {
      title: "Corn Sowing",
      time: "02 JUN 2:45 PM",
    },
    {
      title: "Irrigation",
      time: "18 MAY 1:30 PM",
    },
    {
      title: "Harvesting",
      time: "14 MAY 3:30 PM",
      color: "gray",
    },
  ];

  const uploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className="mb-24"
            >
              <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={18}>
                      <span>{c.today}</span>
                      <Title level={3}>
                        {c.title} <small className={c.bnb}>{c.persent}</small>
                      </Title>
                    </Col>
                    <Col xs={6}>
                      <div className="icon-box">{c.icon}</div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={10} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <Echart />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <LineChart />
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={16} className="mb-24">
            <Card bordered={false} className="criclebox cardbody h-full">
              <div className="project-ant">
                <div>
                  <Title level={5}>Projects</Title>
                  <Paragraph className="lastweek">
                    done this month<span className="blue">40%</span>
                  </Paragraph>
                </div>
                <div className="ant-filtertabs">
                  <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                    <Radio.Group onChange={onChange} defaultValue="a">
                      <Radio.Button value="a">ALL</Radio.Button>
                      <Radio.Button value="b">ONLINE</Radio.Button>
                      <Radio.Button value="c">STORES</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
              </div>
              <div className="ant-list-box table-responsive">
                {/* <table className="width-100">
                  <thead>
                    <tr>
                      <th>COMPANIES</th>
                      <th>MEMBERS</th>
                      <th>BUDGET</th>
                      <th>COMPLETION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((d, index) => (
                      <tr key={index}>
                        <td>
                          <h6>
                            <img
                              src={d.img}
                              alt=""
                              className="avatar-sm mr-10"
                            />{" "}
                            {d.Title}
                          </h6>
                        </td>
                        <td>{d.member}</td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            {d.bud}{" "}
                          </span>
                        </td>
                        <td>
                          <div className="percent-progress">{d.progress}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}
                {/* <MapComponent */}
                <svg width="800" height="600"  xmlns="http://www.w3.org/2000/svg" style={{}}>
  <image href={img} x="0" y="0" width="100%" height="100%" />
  
  <circle cx="200" cy="360" r="10" fill="red" stroke="black" stroke-width="2" />
  <text x="200" y="340" font-size="12" text-anchor="middle" fill="black">Sensor 1: 45%</text>
  
  <circle cx="350" cy="330" r="10" fill="blue" stroke="black" stroke-width="2" />
  <text x="350" y="310" font-size="12" text-anchor="middle" fill="black">Sensor 2: 50%</text>
  
  <circle cx="550" cy="330" r="10" fill="green" stroke="black" stroke-width="2" />
  <text x="550" y="350" font-size="12" text-anchor="middle" fill="black">Sensor 3: 55%</text>
  
  <circle cx="450" cy="380" r="10" fill="purple" stroke="black" stroke-width="2" />
  <text x="510" y="380" font-size="12" text-anchor="middle" fill="black">Sensor 4: 60%</text>
</svg>


              </div>
              <div className="uploadfile shadow-none">
                <Upload {...uploadProps}>
                  <Button
                    type="dashed"
                    className="ant-full-box"
                    icon={<ToTopOutlined />}
                  >
                    <span className="click">Click to Upload</span>
                  </Button>
                </Upload>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <div className="timeline-box">
                <Title level={5}>TimeLine</Title>
                <Paragraph className="lastweek" style={{ marginBottom: 24 }}>
                  this month <span className="bnb2">20%</span>
                </Paragraph>

                <Timeline
                  pending="Recording..."
                  className="timelinelist"
                  reverse={reverse}
                >
                  {timelineList.map((t, index) => (
                    <Timeline.Item color={t.color} key={index}>
                      <Title level={5}>{t.title}</Title>
                      <Text>{t.time}</Text>
                    </Timeline.Item>
                  ))}
                </Timeline>
                <Button
                  type="primary"
                  className="width-100"
                  onClick={() => setReverse(!reverse)}
                >
                  {<MenuUnfoldOutlined />} REVERSE
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

        {/* <Row gutter={[24, 0]}>
          <Col xs={24} md={12} sm={24} lg={12} xl={14} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <Row gutter>
                <Col
                  xs={24}
                  md={12}
                  sm={24}
                  lg={12}
                  xl={14}
                  className="mobile-24"
                >
                  <div className="h-full col-content p-20">
                    <div className="ant-muse">
                      <Text>Built by developers</Text>
                      <Title level={5}>Muse Dashboard for Ant Design</Title>
                      <Paragraph className="lastweek mb-36">
                        From colors, cards, typography to complex elements, you
                        will find the full documentation.
                      </Paragraph>
                    </div>
                    <div className="card-footer">
                      <a className="icon-move-right" href="#pablo">
                        Read More
                        {<RightOutlined />}
                      </a>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={24}
                  md={12}
                  sm={24}
                  lg={12}
                  xl={10}
                  className="col-img"
                >
                  <div className="ant-cret text-right">
                    <img src={card} alt="" className="border10" />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col xs={24} md={12} sm={24} lg={12} xl={10} className="mb-24">
            <Card bordered={false} className="criclebox card-info-2 h-full">
              <div className="gradent h-full col-content">
                <div className="card-content">
                  <Title level={5}>Work with the best</Title>
                  <p>
                    Wealth creation is an evolutionarily recent positive-sum
                    game. It is all about who take the opportunity first.
                  </p>
                </div>
                <div className="card-footer">
                  <a className="icon-move-right" href="#pablo">
                    Read More
                    <RightOutlined />
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row> */}
      </div>
    </>
  );
}

export default Home;
