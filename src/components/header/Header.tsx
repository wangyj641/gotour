import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

export function Header() {
  return (
    <div className={styles["app-header"]}>
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
        <Menu.Item key={2}>Weekend Travel</Menu.Item>
        <Menu.Item key={3}>Group Travel</Menu.Item>
        <Menu.Item key="4">Solo Travel</Menu.Item>
        <Menu.Item key="5">Family Travel</Menu.Item>
        <Menu.Item key="6">Cruise</Menu.Item>
        <Menu.Item key="7">Hotel & Attraction</Menu.Item>
        <Menu.Item key="8">Local Travel</Menu.Item>
        <Menu.Item key="9">Theme Tour</Menu.Item>
        <Menu.Item key="10">Customized Tour</Menu.Item>
        <Menu.Item key="11">Study Tour</Menu.Item>
        <Menu.Item key="12">Visa</Menu.Item>
        <Menu.Item key="13">High-end Travel</Menu.Item>
      </Menu>
    </div>
  )
}