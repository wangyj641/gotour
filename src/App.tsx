import React from 'react';
import logo from './logo.svg';
import styles from "./App.module.css";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles["app-header"]}>
        {/* top-header */}
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Typography.Text>Travel Makes Happiness</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu>
                  <Menu.Item>English</Menu.Item>
                  <Menu.Item>中文</Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              Language
            </Dropdown.Button>
            <Button.Group className={styles["button-group"]}>
              <Button>Register</Button>
              <Button>Login</Button>
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles["main-header"]}>
          <img src={logo} alt="logo" className={styles["App-logo"]} />
          <Typography.Title level={3} className={styles.title}>
            XIECHENG TRAVEL
          </Typography.Title>
          <Input.Search
            placeholder={"Input destination, hotel, or attraction"}
            className={styles["search-input"]}
          />
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles["main-menu"]}>
          <Menu.Item key={1}>Home</Menu.Item>
          <Menu.Item key={2}>Weekend trip</Menu.Item>
          <Menu.Item key={3}>Group Trip</Menu.Item>
          <Menu.Item key="4">Solo Trip</Menu.Item>
          <Menu.Item key="5">Family Trip</Menu.Item>
          <Menu.Item key="6">Cruise</Menu.Item>
          <Menu.Item key="7">Hotel & Attraction</Menu.Item>
          <Menu.Item key="8">Local Trip</Menu.Item>
          <Menu.Item key="9"> 主题游 </Menu.Item>
          <Menu.Item key="10"> 定制游 </Menu.Item>
          <Menu.Item key="11"> 游学 </Menu.Item>
          <Menu.Item key="12"> 签证 </Menu.Item>
          <Menu.Item key="13"> 企业游 </Menu.Item>
          <Menu.Item key="14"> 高端游 </Menu.Item>
          <Menu.Item key="15"> 爱玩户外 </Menu.Item>
          <Menu.Item key="16"> 保险 </Menu.Item>
        </Menu>
      </div>
      <Layout.Footer>
        <Typography.Title level={3} style={{ textAlign: 'center' }}>
          版权所有 @ Xiecheng Travel
        </Typography.Title>
      </Layout.Footer>
    </div>
  );
}

export default App;
