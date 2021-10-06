import {
  AppstoreOutlined,
  LogoutOutlined,
  MailFilled,
  MenuUnfoldOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Button, Col, Drawer, Dropdown, Menu, Row, Select } from "antd";
import React, { useState } from "react";
import { AuthUser } from "../models/AuthUser";

const { Option } = Select;
type Props = {
  authedData?: AuthUser;
  logout: any;
};

const HeaderDrawer: React.FC<Props> = ({ authedData, logout }) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  function onChange(value: any) {
    console.log(`selected ${value}`);
  }
  const userMenu = (
    <Menu>
      <Menu.Item>
        <Button icon={<ProfileOutlined />} type="link">
          Profil
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button icon={<AppstoreOutlined />} type="link">
          Dasbor
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button icon={<LogoutOutlined />} type="link" onClick={logout}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Button
        type="primary"
        shape="circle"
        onClick={showDrawer}
        icon={<MenuUnfoldOutlined />}
      />
      <Drawer placement="right" onClose={onClose} visible={visible}>
        <Row gutter={[16,16]}>
          <Col xs={24}>
            <Dropdown.Button
              className="pt-4"
              style={{ width: "100%" }}
              overlay={userMenu}
            >
              {authedData?.username}
            </Dropdown.Button>
          </Col>
          <Col xs={24}>
            <Select
              showSearch
              placeholder="Kategori"
              style={{ width: "100%" }}
              onChange={onChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Col>
          <Col xs={24}>
            <Button
              type="primary"
              icon={<MailFilled />}
              style={{ width: "100%" }}
              size="small"
            >
              Pesan
            </Button>
          </Col>
        </Row>
      </Drawer>
      ,
    </>
  );
};
export default HeaderDrawer;
