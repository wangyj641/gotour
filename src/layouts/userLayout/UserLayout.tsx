import React, { ReactNode } from 'react';
import styles from "./UserLayout.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Button } from "antd";
import { useTranslation } from "react-i18next";

const { Header, Footer, Content } = Layout;

interface UserLayoutProps {
  children: ReactNode;
}

export const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  const { t } = useTranslation();

  const menu = (
    <Menu>
      <Menu.Item>English</Menu.Item>
      <Menu.Item>中文</Menu.Item>
    </Menu>
  );

  return (
    <Layout className={styles["user-layout-container"]}>
      <Header className={styles["header"]}>
        <div className={styles["lang"]}>
          <Dropdown overlay={menu}>
            <Button>
              {" "}
              Select language <CaretDownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Header>
      <Content className={styles["content"]}>
        <div className={styles["top"]}>
          <div className={styles["content-header"]}>
            <Link to="/">
              <img alt="logo" className={styles["logo"]} src={logo} />
              <span className={styles["title"]}>Xiecheng</span>
            </Link>
          </div>
          <div className={styles["desc"]}>
            {t("header.slogan")}
          </div>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>{t("footer.detail")}</Footer>
    </Layout>
  );
};
