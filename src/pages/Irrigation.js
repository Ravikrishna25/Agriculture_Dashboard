
import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Radio,
  Upload,
  message,
  Button,
  Typography,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  TimePicker,
} from "antd";
import { ToTopOutlined, PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Option } = Select;

// File Upload Properties
const formProps = {
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

// Irrigation Table Columns
const irrigationColumns = [
  {
    title: "ZONE",
    dataIndex: "zone",
    key: "zone",
  },
  {
    title: "IRRIGATION DATE",
    dataIndex: "irrigationDate",
    key: "irrigationDate",
  },
  {
    title: "TIME",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "IRRIGATION RESULTS",
    children: [
      {
        title: "pH LEVEL",
        dataIndex: "phLevel",
        key: "phLevel",
      },
      {
        title: "TEMPERATURE (°C)",
        dataIndex: "temperature",
        key: "temperature",
      },
      {
        title: "HUMIDITY (%)",
        dataIndex: "humidity",
        key: "humidity",
      },
    ],
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
  },
];

// Sample Data for Irrigation Table
const initialIrrigationData = [
  {
    key: "1",
    zone: "A",
    irrigationDate: "2024-11-20",
    time: "09:00 AM",
    phLevel: "6.5",
    temperature: "25",
    humidity: "60",
    status: "Completed",
  },
  {
    key: "2",
    zone: "B",
    irrigationDate: "2024-11-21",
    time: "10:00 AM",
    phLevel: "6.8",
    temperature: "26",
    humidity: "55",
    status: "Pending",
  },
  {
    key: "3",
    zone: "C",
    irrigationDate: "2024-11-19",
    time: "08:00 AM",
    phLevel: "6.3",
    temperature: "24",
    humidity: "65",
    status: "Completed",
  },
  {
    key: "4",
    zone: "D",
    irrigationDate: "2024-11-22",
    time: "11:00 AM",
    phLevel: "6.7",
    temperature: "27",
    humidity: "50",
    status: "Pending",
  },
];
function Irrigation() {
  // State to manage selected status
  const [filterStatus, setFilterStatus] = useState("All");

  // State to manage table data
  const [irrigationData, setIrrigationData] = useState(initialIrrigationData);

  // Modal states
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Filtered data based on status
  const filteredData =
    filterStatus === "All"
      ? irrigationData
      : irrigationData.filter((item) => item.status === filterStatus);

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
  };

  // Show modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Handle modal submission
  const handleModalSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const newEntry = {
          key: `${irrigationData.length + 1}`,
          zone: values.zone,
          irrigationDate: values.date.format("YYYY-MM-DD"),
          time: values.time.format("hh:mm A"),
          phLevel: "-",
          temperature: "-",
          humidity: "-",
          status: "Pending", // Default status
        };

        setIrrigationData([...irrigationData, newEntry]);
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  // Close modal
  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Irrigation Details"
              extra={
                <>
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={showModal}
                    style={{ marginRight: "10px" }}
                  >
                    Add New
                  </Button>
                  <Radio.Group onChange={handleStatusChange} defaultValue="All">
                    <Radio.Button value="All">All</Radio.Button>
                    <Radio.Button value="Completed">Completed</Radio.Button>
                    <Radio.Button value="Pending">Pending</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={irrigationColumns}
                  dataSource={filteredData}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
             
            </Card>
          </Col>
        </Row>
      </div>

      {/* Modal for adding new entry */}
      <Modal
        title="Add New Irrigation Details"
        visible={isModalVisible}
        onOk={handleModalSubmit}
        onCancel={handleModalCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="zone"
            label="Zone"
            rules={[{ required: true, message: "Please select a zone!" }]}
          >
            <Select placeholder="Select a zone">
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="C">C</Option>
              <Option value="D">D</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please select a date!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="time"
            label="Time"
            rules={[{ required: true, message: "Please select a time!" }]}
          >
            <TimePicker style={{ width: "100%" }} use12Hours format="hh:mm A" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Irrigation;
