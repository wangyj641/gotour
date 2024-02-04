import React from "react";
import styles from "./BusinessPartners.module.css";
import { Row, Col, Typography, Divider } from "antd";
import facebook from '../../assets/images/facebook-807588_640.png';
import microsoft from '../../assets/images/microsoft-80658_640.png';
import youtube from '../../assets/images/icon-720944_640.png';
import instant from '../../assets/images/follow-826033_640.png';

const companies = [
  { src: microsoft, title: "Microsoft" },
  { src: youtube, title: "Youtube" },
  { src: instant, title: "Ins" },
  { src: facebook, title: "Facebook" }
]

export const BusinessPartners: React.FC = () => {
  return (
    <div className={styles.content}>
      <Divider orientation="left">
        <Typography.Title level={2}>
          Business Partner
        </Typography.Title>
      </Divider>
      <Row>
        {
          companies.map((company, index) => (
            <Col span={6} key={index}>
              <img src={company.src}
                style={{
                  width: "80%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                alt="" />
            </Col>
          ))
        }
      </Row>
    </div>
  );
}